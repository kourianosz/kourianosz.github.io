import Projects from "../../components/Projects";
import ContactSection from "../../components/ContactSection";
import "./index.css";
export default function ProjectsPage() {
  return (
    <div className="projects-page">
      <header className="projects-page__heading container">
        <h1 className="section-heading">My Projects</h1>
        <p>
          Projects designed to make people feel confident, comfortable, and
          inspired.
        </p>
      </header>
      <Projects />
      <ContactSection />
    </div>
  );
}
