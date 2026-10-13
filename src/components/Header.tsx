import { ArrowUpRight } from "lucide-react";
export function Header() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Kidrauhl home">
        <span>//</span>
        <b>AK</b>
      </a>
      <a className="header-contact" href="mailto:hello@kidrauhl.in">
        <span className="header-contact-inner">
          LET'S TALK
          <ArrowUpRight size={14} />
        </span>
      </a>
    </header>
  );
}
