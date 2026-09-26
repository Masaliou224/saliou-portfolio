import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [isLight, setIsLight] = useState(
    () => typeof window !== "undefined" && localStorage.getItem("theme") === "light"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("light", isLight);
    localStorage.setItem("theme", isLight ? "light" : "dark");
  }, [isLight]);

  return (
    <button
      onClick={() => setIsLight((v) => !v)}
      aria-label={isLight ? "Passer en thème sombre" : "Passer en thème clair"}
      className="w-9 h-9 rounded-full flex items-center justify-center bg-surface2 border border-line text-mist-dim hover:text-accent hover:border-accent transition-colors flex-shrink-0"
    >
      {isLight ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  );
};

export default ThemeToggle;