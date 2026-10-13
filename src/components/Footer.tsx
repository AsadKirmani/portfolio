import { Code2, Heart } from "lucide-react";
export function Footer() {
  return (
    <footer className="site-footer">
      <span>
        © {new Date().getFullYear()} Built with{" "}
        <Heart size={12} fill="currentColor" /> by Asad Kirmani
      </span>
      <a href="https://github.com/AsadKirmani" target="_blank" rel="noreferrer">
        MADE TO SHIP <Code2 size={13} />
      </a>
    </footer>
  );
}
