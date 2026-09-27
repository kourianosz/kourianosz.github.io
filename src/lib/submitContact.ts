export const CONTACT_ENDPOINT = "https://formspree.io/f/mgaelbjr";

const FALLBACK_ERROR =
  "Your message couldn't be sent. Please try again or email me directly.";

export async function submitContact(
  data: FormData,
  signal?: AbortSignal,
): Promise<void> {
  const response = await fetch(CONTACT_ENDPOINT, {
    method: "POST",
    body: data,
    headers: { Accept: "application/json" },
    signal,
  });

  if (response.ok) return;

  const payload: unknown = await response.json().catch(() => null);
  if (
    payload &&
    typeof payload === "object" &&
    "errors" in payload &&
    Array.isArray(payload.errors)
  ) {
    const messages = payload.errors.flatMap((error: unknown) =>
      error &&
      typeof error === "object" &&
      "message" in error &&
      typeof error.message === "string"
        ? [error.message]
        : [],
    );
    if (messages.length) throw new Error(messages.join(" "));
  }
  throw new Error(FALLBACK_ERROR);
}
