export function SimplePage({ eyebrow, title, text }) {
  return (
    <section className="content-section route-section">
      <div className="section-heading">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}
