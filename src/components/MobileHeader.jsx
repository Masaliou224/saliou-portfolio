import React from "react";
import ThemeToggle from "./ThemeToggle";

const MobileHeader = () => {
  return (
    <header className="lg:hidden flex items-center justify-between gap-3 bg-surface border-b border-line px-5 py-3.5 sticky top-0 z-20">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full flex items-center justify-center font-display font-bold text-ink text-sm bg-gradient-to-br from-accent to-emerald-800 flex-shrink-0">
          MS
        </div>
        <div>
          <div className="font-display text-sm font-semibold leading-none">Saliou</div>
          <div className="font-mono text-[10px] text-mist-faint mt-1">
            Développeur Fullstack
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2.5 flex-shrink-0">
        <ThemeToggle />
        <a
          href="/cv-saliou.pdf"
          download
          className="font-mono text-[11px] bg-accent text-ink font-semibold rounded-full px-3.5 py-1.5"
        >
          CV ↓
        </a>
      </div>
    </header>
  );
};

export default MobileHeader;