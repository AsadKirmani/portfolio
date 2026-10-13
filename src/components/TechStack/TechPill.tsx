import StackIcon from "tech-stack-icons";
import type { Tech } from "../../data/techStack";

type Props = {
  tech: Tech;
  active: boolean;
  setRef: (node: HTMLButtonElement | null) => void;
  onMouseEnter: () => void;
  onFocus: () => void;
  onClick: () => void;
};

export function TechPill({
  tech,
  active,
  setRef,
  onMouseEnter,
  onFocus,
  onClick,
}: Props) {
  return (
    <button
      ref={setRef}
      type="button"
      className={`tech-pill ${active ? "tech-pill-active" : ""}`}
      onMouseEnter={onMouseEnter}
      onFocus={onFocus}
      onClick={onClick}
      aria-expanded={active}
    >
      <StackIcon name={tech.icon} variant="light" className="tech-brand-icon" />
      <span>{tech.name}</span>
    </button>
  );
}
