import React from "react";

const certifications = [
  { label: "Free Code Camp — Responsive Web Design", href: "#" },
  { label: "Free Code Camp — JS Algorithms", href: "#" },
  { label: "Simplon Guinée — Dév. Web", href: "#" },
];

const languages = [
  { label: "Français", level: 100 },
  { label: "Anglais", level: 55 },
  { label: "Arabe", level: 25 },
];

const Sidebar = () => {
  return (
    <aside className="hidden lg:flex lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto bg-surface border-r border-line px-7 py-8 flex-col gap-6">
      {/* Identité */}
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 rounded-full flex-shrink-0 flex items-center justify-center font-display font-bold text-ink text-xl bg-gradient-to-br from-accent to-emerald-800">
          MS
        </div>
        <div>
          <div className="font-mono text-xs text-accent tracking-wide">
            &lt;Hi, je suis /&gt;
          </div>
          <h1 className="font-display text-xl font-semibold leading-tight mt-0.5">
            Saliou
            <br />
            Développeur Fullstack
          </h1>
        </div>
      </div>

      <p className="text-sm text-mist-dim">
        Développeur Fullstack passionné par la création d'applications
        interactives et responsives. J'aime aussi partager ce que j'apprends
        avec la communauté dev.
      </p>

      <div>
        <div className="text-sm font-semibold">Mamadou Saliou Diallo</div>
        <div className="text-xs text-mist-faint mt-0.5">
          Développeur Fullstack — Conakry, Guinée
        </div>
      </div>

      {/* Certifications */}
      <div className="border-t border-line-soft pt-4">
        <div className="font-mono text-[10.5px] uppercase tracking-wider text-mist-faint mb-3 flex items-center gap-2">
          Certifications
          <span className="flex-1 h-px bg-line" />
        </div>
        <div className="flex flex-col gap-2.5">
          {certifications.map((cert) => (
            <div key={cert.label} className="flex items-center gap-2.5 text-xs">
              <div className="w-[22px] h-[22px] rounded-md bg-surface2 border border-line flex items-center justify-center text-accent flex-shrink-0">
                ✓
              </div>
              <span className="text-mist-dim">{cert.label}</span>
              <a
                href={cert.href}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto text-mist-faint hover:text-accent whitespace-nowrap"
              >
                voir ↗
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Langues */}
      <div className="border-t border-line-soft pt-4">
        <div className="font-mono text-[10.5px] uppercase tracking-wider text-mist-faint mb-3 flex items-center gap-2">
          Langues
          <span className="flex-1 h-px bg-line" />
        </div>
        <div className="flex flex-col gap-3">
          {languages.map((lang) => (
            <div key={lang.label} className="flex items-center justify-between text-xs">
              <span>{lang.label}</span>
              <div className="w-20 h-1.5 rounded bg-surface2 border border-line overflow-hidden">
                <span
                  className="block h-full bg-accent"
                  style={{ width: `${lang.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <a
        href="/cv-saliou.pdf"
        download
        className="mt-auto inline-flex items-center justify-center gap-2 bg-accent text-ink font-semibold text-sm rounded-card py-3 px-4 hover:bg-emerald-400 transition-colors"
      >
        ↓ Télécharger le CV
      </a>
    </aside>
  );
};

export default Sidebar;