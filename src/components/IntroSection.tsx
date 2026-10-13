import { ArrowUpRight, Mail } from "lucide-react";
export function IntroSection() {
  return (
    <section className="intro-section">
      <h1 className="intro-reveal">
        Hey, I’m{" "}
        <span className="name-highlight-wrap">
          <span className="title-name">Asad Kirmani.</span>
          <span className="name-highlight" aria-hidden="true" />
        </span>
      </h1>
      <p className="eyebrow intro-reveal">
        SOFTWARE DEVELOPER <span className="status-dot" /> OPEN TO OPPORTUNITIES
      </p>
      <p className="intro-copy intro-reveal">
        I build thoughtful web experiences and practical software products.
      </p>
      <p className="intro-copy intro-reveal">
        I work across frontend, backend, and databases to create scalable,
        user-focused applications.
      </p>
      <div className="intro-actions intro-reveal">
        <a className="button button-dark" href="mailto:hello@kidrauhl.in">
          <Mail size={15} /> Send an email
        </a>
        <a
          className="button button-light"
          href="https://www.linkedin.com/in/asadkirmani/"
          target="_blank"
          rel="noreferrer"
        >
          Connect on LinkedIn <ArrowUpRight size={13} />
        </a>
      </div>
      <p className="availability intro-reveal">
        <span className="availability-dot" /> Building, learning, and open to
        the right opportunity.
      </p>
    </section>
  );
}
