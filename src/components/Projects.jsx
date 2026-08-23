import React from "react";

const projects = [
  {
    title: "TJM Simulator",
    description: "A responsive TJM simulator for freelancers, with the possibility to use African currency.",
    href: "https://github.com/Masaliou224/TJM-NAWAARI",
    tags: ["React", "JS"],
  },
  {
    title: "MarketPlace",
    description: "An online marketplace for sellers and buyers.",
    href: "https://github.com/Masaliou224/loumo-place",
    tags: ["Node", "React"],
  },
  {
    title: "N'mafôkhai",
    description: "N'mafôkhai is a website for connecting homeowners and tenants.",
    href: "https://github.com/Masaliou224/N-maf-khai",
    tags: ["PHP", "JS"],
  },
  {
    title: "Audio Player",
    description: "Audio-Player app developed in React.js and Next.js.",
    href: "https://github.com/Masaliou224/Audio-Player",
    tags: ["React", "Next.js"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-6 md:px-12 lg:px-[72px] border-b border-line-soft scroll-mt-[52px]">
      <span className="font-mono text-[11px] uppercase tracking-wider text-accent mb-3.5 block">
        04 — Réalisations
      </span>
      <h2 className="font-display text-2xl md:text-3xl font-semibold mb-3.5">
        Mes projets
      </h2>
      <p className="text-mist-dim max-w-2xl text-[15px] mb-9">
        Quelques projets sur lesquels j'ai travaillé, code source disponible
        sur GitHub.
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
            <div className="h-[100px] flex items-center justify-center font-mono text-xs text-mist-faint bg-[repeating-linear-gradient(135deg,theme(colors.surface2)_0_10px,theme(colors.surface)_10px_20px)]">
              github.com/Masaliou224
            </div>
            <div className="p-4">
              <h3 className="font-display text-[14.5px] font-semibold mb-1.5">
                {project.title}
              </h3>
              <p className="text-xs text-mist-dim mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] text-mist-faint border border-line px-1.5 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;