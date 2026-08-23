import React from "react";

const techSkills = [
  "HTML", "CSS", "JavaScript", "PHP", "React.js",
  "Next.js", "Node.js", "Laravel", "WordPress",
];

const softSkills = [
  "Travail d'équipe", "Communication", "Autonomie",
  "Résolution de problèmes", "Rigueur", "Adaptabilité",
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-6 md:px-12 lg:px-[72px] border-b border-line-soft scroll-mt-[52px]">
      <span className="font-mono text-[11px] uppercase tracking-wider text-accent mb-3.5 block">
        02 — Compétences
      </span>
      <h2 className="font-display text-2xl md:text-3xl font-semibold mb-3.5">
        Mes compétences
      </h2>
      <p className="text-mist-dim max-w-2xl text-[15px] mb-9">
        Les technologies que j'utilise au quotidien pour construire des
        produits web robustes.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-surface border border-line rounded-card p-5">
          <h4 className="font-mono text-[11px] uppercase tracking-wide text-mist-faint mb-3.5">
            Stack technique
          </h4>
          <div className="flex flex-wrap gap-2">
            {techSkills.map((skill) => (
              <span
                key={skill}
                className="font-mono text-xs px-3 py-1.5 rounded-full border border-accent2/30 text-accent2 bg-surface2"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-surface border border-line rounded-card p-5">
          <h4 className="font-mono text-[11px] uppercase tracking-wide text-mist-faint mb-3.5">
            Soft skills
          </h4>
          <div className="flex flex-wrap gap-2">
            {softSkills.map((skill) => (
              <span
                key={skill}
                className="font-mono text-xs px-3 py-1.5 rounded-full border border-accent3/30 text-accent3 bg-surface2"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;