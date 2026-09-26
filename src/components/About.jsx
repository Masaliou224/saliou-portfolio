import React from "react";
import { motion } from "framer-motion";

const capabilities = [
  { icon: "◆", title: "Développement Web", text: "Front-end et back-end de sites et applications, du concept à la mise en prod." },
  { icon: "▣", title: "UX / UI Design", text: "Interfaces claires, pensées pour l'utilisateur final." },
  { icon: "⚙", title: "Automatisation", text: "Scripts et workflows qui suppriment les tâches répétitives." },
  { icon: "▲", title: "Contenu Dev", text: "Partage de connaissances avec la communauté dev sur LinkedIn et GitHub." },
  { icon: "◐", title: "Apprentissage continu", text: "Veille technologique et curiosité pour les nouvelles technos." },
  { icon: "◈", title: "Opportunités", text: "Ouvert aux opportunités où contribuer, apprendre et grandir." },
];

const About = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-[72px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <span className="font-mono text-[11px] uppercase tracking-wider text-accent mb-3.5 block">
          01 — À propos
        </span>
        <h2 className="font-display text-2xl md:text-3xl font-semibold mb-3.5">
          Get to know me!
        </h2>
        <p className="text-mist-dim max-w-2xl text-[15px] mb-10">
          Développeur Fullstack Focused, je construis et maintiens le
          Front-end et le Back-end de sites et d'applications web qui
          contribuent au succès du produit. Je partage aussi ce que
          j'apprends avec la communauté dev sur{" "}
          <a
            href="https://www.linkedin.com/in/masaliou224/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline hover:text-emerald-400"
          >
            LinkedIn
          </a>{" "}
          et{" "}
          <a
            href="https://github.com/Masaliou224"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline hover:text-emerald-400"
          >
            GitHub
          </a>
          .
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {capabilities.map((cap, i) => (
          <motion.div
            key={cap.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="bg-surface border border-line rounded-card p-5 hover:border-accent hover:-translate-y-0.5 transition-all"
          >
            <div className="w-8.5 h-[34px] rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-3.5">
              {cap.icon}
            </div>
            <h3 className="font-display text-[15px] font-semibold mb-1.5">
              {cap.title}
            </h3>
            <p className="text-[12.5px] text-mist-dim">{cap.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;