import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-6 px-6 md:px-12 lg:px-[72px] border-t border-line-soft font-mono text-xs text-mist-faint">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-mist font-body text-sm font-medium">
          Mamadou Saliou Diallo
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/masaliou224/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://github.com/Masaliou224"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href="mailto:mamadousaliou.diallo.963434@gmail.com"
            className="hover:text-accent transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
      <div className="text-center mt-4">© {currentYear} Saliou. Tous droits réservés.</div>
    </footer>
  );
};

export default Footer;