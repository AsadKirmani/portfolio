import type { Project } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
export function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <section className="content-section" data-reveal>
      <p className="section-label">PROJECTS</p>
      <p className="section-intro">
        A few things I’ve designed, built, and shipped:
      </p>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.name} />
        ))}
      </div>
    </section>
  );
}
