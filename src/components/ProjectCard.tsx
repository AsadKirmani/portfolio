import { ExternalLink } from "lucide-react";
import StackIcon from "tech-stack-icons";
import type { Project } from "../data/projects";
export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-spotlight" aria-hidden="true" />
      <div className="project-heading">
        <span className={`project-mark ${project.tone}`}>{project.mark}</span>
        <h2>{project.name}</h2>
        <span className="project-status">
          <i />
          {project.status}
        </span>
      </div>
      <p className="project-description">{project.description}</p>
      <p className="project-stack">{project.stack}</p>
      <div className="project-links">
        <a href={project.live} target="_blank" rel="noreferrer">
          Live project <ExternalLink size={13} />
        </a>
        <a href={project.github} target="_blank" rel="noreferrer">
          Source <StackIcon name="github" className="tech-brand-icon" />
        </a>
      </div>
    </article>
  );
}
