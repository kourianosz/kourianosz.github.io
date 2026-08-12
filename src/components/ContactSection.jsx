export function ContactSection() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section
      className="content-section contact-section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="contact-layout">
        <div className="section-heading contact-heading">
          <h2 id="contact-title">Get in touch</h2>
          <p>I'm always open to a chat, coffee or a pastry!</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            <span>Name</span>
            <input type="text" name="name" autoComplete="name" />
          </label>

          <label>
            <span>Email</span>
            <input type="email" name="email" autoComplete="email" />
          </label>

          <label>
            <span>Message</span>
            <textarea name="message" rows="6" />
          </label>

          <button type="submit">Send message</button>
        </form>
      </div>
    </section>
  );
}
