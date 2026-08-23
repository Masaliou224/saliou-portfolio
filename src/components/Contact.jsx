import React, { useState } from "react";
import { send } from "emailjs-com";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
  });
  const [status, setStatus] = useState(null); // null | "sending" | "sent" | "error"

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    send("service_mh6t30b", "template_4xeh8pj", toSend, "Cnydribx9dFw6wvvC")
      .then(() => {
        setStatus("sent");
        setToSend({ from_name: "", to_name: "", message: "", reply_to: "" });
      })
      .catch(() => setStatus("error"));
  };

  return (
    <section id="contact" className="py-16 px-6 md:px-12 lg:px-[72px] scroll-mt-[52px]">
      <span className="font-mono text-[11px] uppercase tracking-wider text-accent mb-3.5 block">
        05 — Contact
      </span>
      <h2 className="font-display text-2xl md:text-3xl font-semibold mb-3.5">
        Parlons de votre projet
      </h2>
      <p className="text-mist-dim max-w-2xl text-[15px] mb-10">
        Une idée, une mission, une question ? Écrivez-moi.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-10">
        <div className="flex flex-col gap-5">
          <a
            href="mailto:mamadousaliou.diallo.963434@gmail.com"
            className="flex items-center gap-3.5 hover:text-accent transition-colors"
          >
            <span className="w-9 h-9 rounded-lg bg-surface2 border border-line flex items-center justify-center text-accent flex-shrink-0">
              <Mail size={16} />
            </span>
            <span className="text-sm">mamadousaliou.diallo.963434@gmail.com</span>
          </a>
          <a
            href="https://www.linkedin.com/in/masaliou224/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3.5 hover:text-accent transition-colors"
          >
            <span className="w-9 h-9 rounded-lg bg-surface2 border border-line flex items-center justify-center text-accent flex-shrink-0">
              <Linkedin size={16} />
            </span>
            <span className="text-sm">linkedin.com/in/masaliou224</span>
          </a>
          <a
            href="https://github.com/Masaliou224"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3.5 hover:text-accent transition-colors"
          >
            <span className="w-9 h-9 rounded-lg bg-surface2 border border-line flex items-center justify-center text-accent flex-shrink-0">
              <Github size={16} />
            </span>
            <span className="text-sm">github.com/Masaliou224</span>
          </a>
        </div>

        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <div>
            <label className="font-mono text-[11px] text-mist-faint block mb-1.5">
              Nom complet *
            </label>
            <input
              type="text"
              name="from_name"
              placeholder="Votre nom complet"
              value={toSend.from_name}
              onChange={handleChange}
              required
              className="w-full bg-surface border border-line rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <div>
            <label className="font-mono text-[11px] text-mist-faint block mb-1.5">
              Email *
            </label>
            <input
              type="email"
              name="reply_to"
              placeholder="votre@email.com"
              value={toSend.reply_to}
              onChange={handleChange}
              required
              className="w-full bg-surface border border-line rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <div>
            <label className="font-mono text-[11px] text-mist-faint block mb-1.5">
              Message *
            </label>
            <textarea
              name="message"
              placeholder="Décrivez votre besoin en quelques lignes"
              rows="5"
              value={toSend.message}
              onChange={handleChange}
              required
              className="w-full bg-surface border border-line rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent resize-y"
            />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="self-start bg-accent text-ink font-semibold text-sm rounded-card py-3 px-5 hover:bg-emerald-400 transition-colors disabled:opacity-60"
          >
            {status === "sending" && "Envoi en cours…"}
            {status === "sent" && "Message envoyé ✓"}
            {status === "error" && "Échec — réessayer"}
            {!status && "Envoyer le message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;