import { Link } from "react-router-dom";
import { projects } from "../data/projects.js";

export function ProjectGrid() {
  return (
    <div className="project-grid">
      {projects.map((project) => (
        <Link
          className="project-card"
          to={`/projects/${project.slug}`}
          key={project.slug}
        >
          <span className="project-card-type">{project.type}</span>
          <h3>{project.title}</h3>
          <p>{project.summary}</p>
          <span className="project-card-link">Read case study</span>
        </Link>
      ))}
    </div>
  );
}
