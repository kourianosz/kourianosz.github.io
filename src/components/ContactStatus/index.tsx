import { useContactStore } from "../../stores/contact";
import "./index.css";
export default function ContactStatus() {
  const status = useContactStore((state) => state.status);
  return (
    <div className="contact-status" role="status" aria-live="polite">
      {status === "copied"
        ? "Email address copied to clipboard."
        : status === "error"
          ? "Could not copy the email address. Use the email link below the Contact button."
          : ""}
    </div>
  );
}
