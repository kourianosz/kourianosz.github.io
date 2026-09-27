import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { getProjectTitle, type Project } from "../../data/projects";
import "./index.css";
export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const title = getProjectTitle(project);
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
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
      <div className="project-card__footer">
        <p className="project-card__meta">{project.meta}</p>
        {project.ctaText && (
          <span className="project-card__cta button button--secondary">
            {project.ctaText}
            <ArrowRight aria-hidden="true" />
          </span>
        )}
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
      {project.projectLink ? (
        <a
          className="project-card__link"
          href={project.projectLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${title}`}
        >
          {cardContent}
        </a>
      ) : (
        <Link
          className="project-card__link"
          to={`/projects/${project.id}`}
          aria-label={`View ${title}`}
        >
          {cardContent}
        </Link>
      )}
    </motion.article>
  );
}
