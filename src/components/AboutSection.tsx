import { ArrowUpRight } from "lucide-react";
import StackIcon from "tech-stack-icons";
export function AboutSection() {
  return (
    <section className="content-section" data-reveal>
      <p className="section-label">A LITTLE ABOUT ME</p>
      <p className="section-intro about-copy">
        I’m an MCA graduate who enjoys solving problems by building useful
        products. I care about clean interfaces, maintainable code, and learning
        by shipping real projects. These days, I’m also exploring Kotlin and
        native Android development.
      </p>
      <div className="social-list">
        <a
          href="https://github.com/AsadKirmani"
          target="_blank"
          rel="noreferrer"
        >
          <StackIcon name="github" className="tech-brand-icon" />
          GitHub <ArrowUpRight size={13} />
        </a>
        <a
          href="https://www.linkedin.com/in/asadkirmani/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn <ArrowUpRight size={13} />
        </a>
      </div>
    </section>
  );
}
