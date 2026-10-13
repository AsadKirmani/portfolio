import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Header } from "./components/Header";
import { IntroSection } from "./components/IntroSection";
import { TechStack } from "./components/TechStack/TechStack";
import { ProjectsSection } from "./components/ProjectsSection";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { techStack } from "./data/techStack";
import { projects } from "./data/projects";
import "./styles/index.css";

gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);

export default function App() {
  const pageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      const introTimeline = gsap.timeline();
      introTimeline.fromTo(
        ".intro-reveal:not(.intro-copy)",
        { y: 18, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.65,
          stagger: 0.09,
          ease: "power2.out",
          clearProps: "transform,opacity,visibility",
        },
      );
      introTimeline.to(
        ".name-highlight",
        { width: "105%", duration: 0.3, ease: "power2.out" },
        "+=0.1",
      );
      const copyElements = gsap.utils.toArray<HTMLElement>(".intro-copy");
      copyElements.forEach((element, index) => {
        const originalText = element.textContent?.trim() ?? "";
        gsap.fromTo(
          element,
          { autoAlpha: 0 },
          {
            autoAlpha: 1,
            duration: 0.2,
            delay: index * 0.25,
            onComplete: () => {
              gsap.to(element, {
                duration: index === 0 ? 1.5 : 2,
                scrambleText: {
                  text: originalText,
                  chars: "upperAndLowerCase",
                  speed: 0.5,
                  revealDelay: 0.15,
                },
                ease: "none",
              });
            },
          },
        );
      });
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.fromTo(
          element,
          { y: 18, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.55,
            ease: "power2.out",
            scrollTrigger: { trigger: element, start: "top 88%", once: true },
            clearProps: "transform,opacity,visibility",
          },
        );
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <main className="portfolio-page" ref={pageRef}>
      <div className="page-background" aria-hidden="true">
    <div className="purple-glow" />
    </div>
      <Header />
      <div className="content-column" id="top">
        <IntroSection />
        <section className="content-section" data-reveal>
          <p className="section-label">TECH STACK</p>
          <p className="section-intro">
            Tools I use to turn ideas into working products:
          </p>
          <TechStack techStack={techStack} />
        </section>
        <ProjectsSection projects={projects} />
        <AboutSection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
