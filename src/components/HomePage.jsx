import { ContactSection } from "./ContactSection.jsx";
import { ProjectGrid } from "./ProjectGrid.jsx";

export function HomePage() {
  return (
    <>
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">UI / UX designer</p>
          <h1 id="hero-title">Zoey Kourianos</h1>
          <p className="hero-lede">
            I bring creative solutions and a unique perspective to any problem.
          </p>
        </div>
      </section>

      <section
        className="content-section"
        id="projects"
        aria-labelledby="featured-projects"
      >
        <div className="section-heading">
          <h2 id="featured-projects">Projects</h2>
        </div>
        <ProjectGrid />
      </section>

      <ContactSection />
    </>
  );
}
