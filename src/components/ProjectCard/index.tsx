import { ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { type Project } from "../../data/projects";
import "./index.css";
export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const ctaLabel = project.ctaText && (
    <>
      {project.ctaText}
      <ArrowRight aria-hidden="true" />
    </>
  );
  const cardContent = (
    <>
      <div
        className="project-card__image"
        style={{ aspectRatio: project.imageRatio }}
      >
        <img
          src={project.image}
          alt={project.imageAlt}
          loading={index < 2 ? "eager" : "lazy"}
        />
      </div>
      <div className="project-card__copy">
        <p>{project.description}</p>
      </div>
      <div className="project-card__footer">
        <p className="project-card__meta">{project.meta}</p>
        <div className="project-card__actions">
          {project.ctaText && project.projectLink && (
            <a
              className="project-card__cta button button--secondary"
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={project.ctaText}
            >
              {ctaLabel}
            </a>
          )}
          {project.ctaText && !project.projectLink && (
            <Link
              className="project-card__cta button button--secondary"
              to={`/projects/${project.id}`}
              aria-label={project.ctaText}
            >
              {ctaLabel}
            </Link>
          )}
          {project.prototypeUrl && (
            <a
              className="project-card__prototype-link button"
              href={project.prototypeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Acorn prototype"
              onClick={(event) => event.stopPropagation()}
            >
              View prototype
              <ExternalLink aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </>
  );

  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "80px" }}
      transition={{ duration: 0.7, delay: Math.min(index * 0.06, 0.3) }}
    >
      <div className="project-card__link">
        {project.projectLink ? (
          <a
            className="project-card__hit-area"
            href={project.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View project"
          />
        ) : (
          <Link
            className="project-card__hit-area"
            to={`/projects/${project.id}`}
            aria-label="View project"
          />
        )}
        <div className="project-card__content">{cardContent}</div>
      </div>
    </motion.article>
  );
}
