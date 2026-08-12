import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { getProjectBySlug } from "../data/projects.js";

export function ProjectPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = getProjectBySlug(slug);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const goBackToProjects = (event) => {
    event.preventDefault();
    navigate("/");
    window.setTimeout(() => {
      document.getElementById("projects")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  };

  return (
    <article className="content-section project-detail">
      <Link className="back-link" to="/" onClick={goBackToProjects}>
        Back to projects
      </Link>
      <header className="project-detail-header">
        <p className="eyebrow">{project.type}</p>
        <h1>{project.title}</h1>
        <p>{project.summary}</p>
      </header>

      <dl className="project-meta">
        <div>
          <dt>Role</dt>
          <dd>{project.role}</dd>
        </div>
        <div>
          <dt>Year</dt>
          <dd>{project.year}</dd>
        </div>
      </dl>

      <div className="case-study-grid">
        <section>
          <h2>Challenge</h2>
          <p>{project.challenge}</p>
        </section>
        <section>
          <h2>Solution</h2>
          <p>{project.solution}</p>
        </section>
        <section>
          <h2>Outcome</h2>
          <p>{project.outcome}</p>
        </section>
      </div>

      <ul className="tag-list" aria-label="Project tags">
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </article>
  );
}
