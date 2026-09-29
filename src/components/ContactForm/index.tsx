import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { ArrowRight, Check, LoaderCircle } from "lucide-react";
import { CONTACT_ENDPOINT, submitContact } from "../../lib/submitContact";
import { profile } from "../../data/profile";
import "./index.css";

type SubmissionState =
  | { status: "idle" | "sending" | "success" }
  | { status: "error"; message: string };

export default function ContactForm() {
  const id = useId();
  const [submission, setSubmission] = useState<SubmissionState>({
    status: "idle",
  });
  const requestRef = useRef<AbortController | null>(null);
  const mountedRef = useRef(true);
  const feedbackRef = useRef<HTMLDivElement>(null);
  const sending = submission.status === "sending";

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      requestRef.current?.abort();
    };
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (requestRef.current) return;
    const form = event.currentTarget;
    const data = new FormData(form);

    for (const name of ["name", "email", "message"]) {
      const value = String(data.get(name) ?? "").trim();
      const field = form.elements.namedItem(name) as
        | HTMLInputElement
        | HTMLTextAreaElement;
      field.setCustomValidity(value ? "" : "Please fill out this field.");
      if (!value) {
        form.reportValidity();
        return;
      }
      data.set(name, value);
    }

    const controller = new AbortController();
    requestRef.current = controller;
    const timeout = window.setTimeout(() => controller.abort(), 20000);
    setSubmission({ status: "sending" });

    try {
      await submitContact(data, controller.signal);
      if (!mountedRef.current) return;
      form.reset();
      setSubmission({ status: "success" });
    } catch (error) {
      if (!mountedRef.current) return;
      setSubmission({
        status: "error",
        message: controller.signal.aborted
          ? "I couldn't confirm delivery. Please try again or email me directly."
          : error instanceof TypeError
            ? "Your message couldn't be sent. Check your connection and try again."
            : error instanceof Error
              ? error.message
              : "Your message couldn't be sent. Please try again.",
      });
    } finally {
      window.clearTimeout(timeout);
      requestRef.current = null;
      if (mountedRef.current)
        feedbackRef.current?.focus({ preventScroll: true });
    }
  };

  return (
    <div className="contact-form">
      <form
        action={CONTACT_ENDPOINT}
        method="POST"
        onSubmit={handleSubmit}
        aria-label="Send a message"
        aria-busy={sending}
      >
        <fieldset disabled={sending}>
          <legend className="sr-only">Your contact details and message</legend>
          <div className="contact-form__field">
            <label htmlFor={`${id}-name`}>Name</label>
            <input
              id={`${id}-name`}
              name="name"
              autoComplete="name"
              placeholder="What should I call you?"
              maxLength={100}
              required
              onInput={(event) => event.currentTarget.setCustomValidity("")}
            />
          </div>
          <div className="contact-form__field">
            <label htmlFor={`${id}-email`}>Email address</label>
            <input
              id={`${id}-email`}
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              maxLength={254}
              required
              onInput={(event) => event.currentTarget.setCustomValidity("")}
            />
          </div>
          <div className="contact-form__field">
            <label htmlFor={`${id}-message`}>Message</label>
            <textarea
              id={`${id}-message`}
              name="message"
              rows={5}
              placeholder="Tell me a little about it…"
              maxLength={5000}
              required
              onInput={(event) => event.currentTarget.setCustomValidity("")}
            />
          </div>
          <button type="submit" className="button contact-form__submit">
            <span>
              {sending
                ? "Sending…"
                : submission.status === "error"
                  ? "Try again"
                  : "Send message"}
            </span>
            {sending ? (
              <LoaderCircle
                className="contact-form__spinner"
                aria-hidden="true"
              />
            ) : (
              <ArrowRight aria-hidden="true" />
            )}
          </button>
        </fieldset>
      </form>
      <div
        className="contact-form__feedback"
        ref={feedbackRef}
        tabIndex={-1}
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {submission.status === "sending" && <p>Sending your message…</p>}
        {submission.status === "success" && (
          <p className="contact-form__success">
            <Check size={18} aria-hidden="true" />
            <span>Thanks! Your message is on its way.</span>
          </p>
        )}
        {submission.status === "error" && (
          <p>
            {submission.message}{" "}
            <a href={`mailto:${profile.email}`}>Email me directly</a>.
          </p>
        )}
      </div>
    </div>
  );
}
