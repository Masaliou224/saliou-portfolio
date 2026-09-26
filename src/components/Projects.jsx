import React, { useState } from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Olo suite",
    description: "Une plateforme SaaS d'intélligence augmentée.",
    href: "https://olosuite.com/",
    type: "live",
  },
  {
    title: "MarketPlace",
    description: "An online marketplace for sellers and buyers.",
    href: "https://github.com/Masaliou224/loumo-place",
    type: "code",
  },
  {
    title: "N'mafôkhai",
    description: "N'mafôkhai is a website for connecting homeowners and tenants.",
    href: "https://github.com/Masaliou224/N-maf-khai",
    type: "code",
  },
  {
    title: "Audio Player",
    description: "Audio-Player app developed in React.js and Next.js.",
    href: "https://github.com/Masaliou224/Audio-Player",
    type: "code",
  },
];

// Aperçu généré à la volée via Microlink (pas de backend/clé nécessaire).
const screenshotUrl = (url) =>
  `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`;

const ProjectThumb = ({ project }) => {
  const [failed, setFailed] = useState(false);

  if (project.type === "live" && !failed) {
    return (
      <div className="relative">
        {/* fausse barre de navigateur, pour bien lire "site en ligne" */}
        <div className="flex items-center gap-1.5 bg-surface2 border-b border-line px-3 py-2">
          <span className="w-2 h-2 rounded-full bg-mist-faint/40" />
          <span className="w-2 h-2 rounded-full bg-mist-faint/40" />
          <span className="w-2 h-2 rounded-full bg-mist-faint/40" />
          <span className="ml-2 font-mono text-[10px] text-mist-faint truncate">
            {project.href.replace(/^https?:\/\//, "")}
          </span>
        </div>
        <img
          src={screenshotUrl(project.href)}
          alt={`Aperçu du site ${project.title}`}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-[140px] w-full object-cover object-top bg-surface2"
        />
      </div>
    );
  }

  return (
    <div className="h-[140px] flex flex-col items-center justify-center gap-2 bg-[repeating-linear-gradient(135deg,theme(colors.surface2)_0_10px,theme(colors.surface)_10px_20px)] text-mist-faint">
      <Github size={22} />
      <span className="font-mono text-[11px]">Code source sur GitHub</span>
    </div>
  );
};
 
const Projects = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-[72px]">
      <span className="font-mono text-[11px] uppercase tracking-wider text-accent mb-3.5 block">
        04 — Réalisations
      </span>
      <h2 className="font-display text-2xl md:text-3xl font-semibold mb-3.5">
        Mes projets
      </h2>
      <p className="text-mist-dim max-w-2xl text-[15px] mb-9">
        Quelques projets sur lesquels j'ai travaillé — certains sont en
        ligne, d'autres consultables sur GitHub.
      </p>
 
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-surface border border-line rounded-card overflow-hidden hover:-translate-y-1 hover:border-accent transition-all"
          >
            <ProjectThumb project={project} />
            <div className="p-4">
              <div className="flex items-start justify-between gap-2 mb-1.5">
                <h3 className="font-display text-[14.5px] font-semibold">
                  {project.title}
                </h3>
                <span
                  className={`flex items-center gap-1 font-mono text-[9.5px] px-1.5 py-0.5 rounded flex-shrink-0 ${
                    project.type === "live"
                      ? "text-accent border border-accent/30 bg-accent/10"
                      : "text-mist-faint border border-line"
                  }`}
                >
                  {project.type === "live" ? (
                    <>
                      <ExternalLink size={10} /> En ligne
                    </>
                  ) : (
                    <>
                      <Github size={10} /> Code
                    </>
                  )}
                </span>
              </div>
              <p className="text-xs text-mist-dim mb-3">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;