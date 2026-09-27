import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { getProjectTitle, projects } from "../../data/projects";
import NotFound from "../NotFound";
import "./index.css";

export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    return <NotFound />;
  }

  const title = getProjectTitle(project);

  return (
    <article className="project-detail container">
      <Link className="project-detail__back" to="/projects">
        <ArrowLeft aria-hidden="true" />
        Back to projects
      </Link>
      <header className="project-detail__heading">
        <p>{project.meta}</p>
        <h1 className="section-heading">{title}</h1>
        <span>Project</span>
      </header>
      <div
        className="project-detail__image"
        style={{ aspectRatio: project.imageRatio }}
      >
        <img src={project.image} alt={project.imageAlt} />
      </div>
      <section className="project-detail__overview" aria-label="Overview">
        <h2>Overview</h2>
        <p>{project.description}</p>
      </section>
    </article>
  );
}
