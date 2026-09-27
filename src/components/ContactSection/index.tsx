import { useId } from "react";
import ContactForm from "../ContactForm";
import SocialLinks from "../SocialLinks";
import "./index.css";

export default function ContactSection() {
  const headingId = useId();
  return (
    <section className="contact-section container" aria-labelledby={headingId}>
      <div className="contact-section__frame">
        <div className="contact-section__grid">
          <div className="contact-section__copy">
            <h2 className="section-heading" id={headingId}>
              Reach Out!
            </h2>
            <p>I'm always open to a chat, coffee or a pastry!</p>
          </div>
          <div className="contact-section__form">
            <ContactForm />
          </div>
          <div className="contact-section__socials">
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
}
