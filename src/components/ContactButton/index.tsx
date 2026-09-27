import { Check, Copy, Mail } from "lucide-react";
import { useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { profile } from "../../data/profile";
import { useContactStore } from "../../stores/contact";
import "./index.css";
export default function ContactButton() {
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [widths, setWidths] = useState<number[]>();
  const measureRef = useRef<HTMLSpanElement>(null);
  const reducedMotion = useReducedMotion();
  const status = useContactStore((state) => state.status);
  const copyEmail = useContactStore((state) => state.copyEmail);
  const copied = status === "copied";
  const open = hovered || focused || copied;
  const label = copied ? "Email copied" : open ? profile.email : "Contact";
  const iconKey = copied ? "check" : open ? "copy" : "mail";
  const Icon = copied ? Check : open ? Copy : Mail;

  useLayoutEffect(() => {
    const labels = measureRef.current?.children;
    if (!labels) return;
    // Measure every label so font loading and custom email lengths stay accurate.
    const observer = new ResizeObserver(() => {
      setWidths(Array.from(labels, (label) => label.getBoundingClientRect().width));
    });
    Array.from(labels).forEach((label) => observer.observe(label));
    return () => observer.disconnect();
  }, []);

  const width = widths
    ? open
      ? Math.max(widths[1], widths[2])
      : widths[0]
    : undefined;

  return (
    <div className="contact-button-wrap">
      <span className="contact-button__measure" ref={measureRef} aria-hidden="true">
        <span>Contact</span>
        <span>{profile.email}</span>
        <span>Email copied</span>
      </span>
      <button
        type="button"
        className="button contact-button"
        onClick={copyEmail}
        onPointerEnter={(event) => {
          if (event.pointerType !== "touch") setHovered(true);
        }}
        onPointerLeave={() => setHovered(false)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        aria-label={`Copy email address ${profile.email}`}
      >
        <span className="contact-button__icon" aria-hidden="true">
          <AnimatePresence initial={false}>
            <motion.span
              key={iconKey}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.14 }}
            >
              <Icon />
            </motion.span>
          </AnimatePresence>
        </span>
        <motion.span
          className="contact-button__text"
          initial={false}
          animate={{ width }}
          transition={{
            duration: reducedMotion ? 0 : 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="contact-button__baseline" aria-hidden="true">Contact</span>
          <AnimatePresence initial={false}>
            <motion.span
              className="contact-button__label"
              key={label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.14 }}
              aria-hidden="true"
            >
              {label}
            </motion.span>
          </AnimatePresence>
        </motion.span>
      </button>
      {status === "error" && (
        <a
          className="contact-button__fallback"
          href={`mailto:${profile.email}`}
        >
          {profile.email}
        </a>
      )}
    </div>
  );
}
