import { ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { projects } from "../../data/projects";
import ProjectCard from "../ProjectCard";
import "./index.css";
export default function Projects() {
  const featured = useLocation().pathname === "/";
  const items = featured ? projects.slice(0, 4) : projects;
  return (
    <section className="projects container" aria-label="Selected projects">
      {featured && (
        <div className="projects__heading">
          <h2 className="section-heading">My Projects</h2>
          <p>
            Projects designed to make people feel confident, comfortable, and
            inspired.
          </p>
        </div>
      )}
      <div className="projects__grid">
        {items.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
      {featured && (
        <div className="projects__more">
          <Link to="/projects" className="button button--secondary">
            View all projects
            <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      )}
    </section>
  );
}
