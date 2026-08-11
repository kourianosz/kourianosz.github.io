import { BlobBackground } from "./BlobBackground.jsx";
import { SiteHeader } from "./SiteHeader.jsx";

export function HomePage() {
  return (
    <main className="home-page">
      <BlobBackground />
      <SiteHeader />

      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">UI / UX designer</p>
          <h1 id="hero-title">Zoey Kourianos</h1>
          <p className="hero-lede">
            I bring creative solutions and a unique perspective to any problem.
          </p>
          <a
            className="hero-link"
            href="#projects"
            aria-label="View Zoey's projects"
          >
            <span className="hero-link-icon">&darr;</span>
            <span>View projects</span>
          </a>
        </div>
      </section>
    </main>
  );
}
