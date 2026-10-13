import type { RefObject } from "react";
import type { Tech } from "../../data/techStack";

type Props = {
  tech: Tech;
  cardRef: RefObject<HTMLDivElement | null>;
  position: { left: number; top: number };
  onClose: () => void;
};

export function TechInfoCard({ tech, cardRef, position, onClose }: Props) {
  return (
    <div
      ref={cardRef}
      className="tech-info-card"
      role="status"
      style={{ position: "fixed", left: position.left, top: position.top }}
    >
      <button
        type="button"
        className="tech-info-close"
        onClick={onClose}
        aria-label="Close technology details"
      >
        ×
      </button>
      <strong>{tech.name}</strong>
      {tech.projects.length > 0 ? (
        tech.projects.map((project) => (
          <div className="tech-project" key={project.name}>
            <b>{project.name}</b>
            <p>{project.description}</p>
          </div>
        ))
      ) : (
        <p>No project details added yet.</p>
      )}
    </div>
  );
}
