import { Mail } from "lucide-react";
import { profile } from "../../data/profile";
import "./index.css";
export default function SocialLinks() {
  return (
    <div className="social-links">
      <a href={`mailto:${profile.email}`} aria-label="Email">
        <Mail size={17} strokeWidth={2.5} aria-hidden="true" />
      </a>
      <a
        href={profile.linkedin}
        aria-label="LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/linkedin.svg" alt="" width={15} height={15} />
      </a>
      <a
        href={profile.behance}
        aria-label="Behance"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/behance.svg" alt="" width={18} height={18} />
      </a>
    </div>
  );
}
