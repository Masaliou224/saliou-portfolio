import React from "react";

// ⚠️ À personnaliser : dates, intitulés et liens réels.
const experiences = [
  {
    year: "2024 — Présent",
    title: "Software Engineer",
    role: "Entreprise · Conakry",
    text: "Conception et maintenance d'applications web internes, automatisation de processus métier et support technique aux équipes.",
  },
  {
    year: "2024",
    title: "Formateur en développement web",
    role: "Simplon Guinée",
    text: "Formation de nouveaux apprenants aux fondamentaux du développement web et mobile (HTML, CSS, JavaScript, React).",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 px-6 md:px-12 lg:px-[72px] border-b border-line-soft scroll-mt-[52px]">
      <span className="font-mono text-[11px] uppercase tracking-wider text-accent mb-3.5 block">
        03 — Parcours
      </span>
      <h2 className="font-display text-2xl md:text-3xl font-semibold mb-3.5">
        Expériences professionnelles
      </h2>
      <p className="text-mist-dim max-w-2xl text-[15px] mb-9">
        Un aperçu de mes rôles récents, entre développement, formation et
        mentorat.
      </p>

      <div className="flex flex-col">
        {experiences.map((exp, i) => (
          <div
            key={exp.title}
            className={`grid grid-cols-1 sm:grid-cols-[90px_1fr] gap-5 py-6 ${
              i !== 0 ? "border-t border-line-soft" : ""
            }`}
          >
            <div className="font-mono text-[13px] text-accent pt-0.5">{exp.year}</div>
            <div>
              <h3 className="font-display text-[17px] font-semibold mb-1">{exp.title}</h3>
              <div className="font-mono text-xs text-mist-faint mb-2.5">{exp.role}</div>
              <p className="text-sm text-mist-dim max-w-xl">{exp.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;