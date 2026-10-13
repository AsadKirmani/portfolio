import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import type { Tech } from "../../data/techStack";
import { TechPill } from "./TechPill";
import { TechInfoCard } from "./TechInfoCard";

type Props = { techStack: Tech[] };

export function TechStack({ techStack }: Props) {
  const [activeTech, setActiveTech] = useState<string | null>(null);
  const [cardPosition, setCardPosition] = useState({ left: 0, top: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const pillRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const selected = techStack.find((tech) => tech.name === activeTech);

  useLayoutEffect(() => {
    const card = cardRef.current;
    const pill = activeTech ? pillRefs.current.get(activeTech) : null;
    if (!activeTech || !card || !pill) return;

    const updatePosition = () => {
      const pillRect = pill.getBoundingClientRect();
      const cardWidth = card.offsetWidth;
      const cardHeight = card.offsetHeight;
      if (!cardWidth || !cardHeight) return;

      const left = Math.max(
        8,
        Math.min(
          pillRect.left + pillRect.width / 2 - cardWidth / 2,
          window.innerWidth - cardWidth - 8,
        ),
      );
      const top = Math.max(8, pillRect.top - cardHeight - 12);
      setCardPosition({ left, top });
    };

    updatePosition();
    const animation = gsap.fromTo(
      card,
      { autoAlpha: 0, y: 8, scale: 0.97 },
      { autoAlpha: 1, y: 0, scale: 1, duration: 0.22, ease: "power2.out" },
    );

    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);
    return () => {
      animation.kill();
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [activeTech]);

  return (
    <div className="tech-stack-wrap" onMouseLeave={() => setActiveTech(null)}>
      {selected && (
        <TechInfoCard
          tech={selected}
          cardRef={cardRef}
          position={cardPosition}
          onClose={() => setActiveTech(null)}
        />
      )}
      <div className="tech-list">
        {techStack.map((tech) => (
          <TechPill
            key={tech.name}
            tech={tech}
            active={activeTech === tech.name}
            setRef={(node) => {
              if (node) pillRefs.current.set(tech.name, node);
              else pillRefs.current.delete(tech.name);
            }}
            onMouseEnter={() => setActiveTech(tech.name)}
            onFocus={() => setActiveTech(tech.name)}
            onClick={() =>
              setActiveTech((current) =>
                current === tech.name ? null : tech.name,
              )
            }
          />
        ))}
      </div>
    </div>
  );
}
