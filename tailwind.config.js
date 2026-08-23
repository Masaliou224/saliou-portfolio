/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0c1210",       // fond principal
        surface: "#121917",   // panneaux / cartes
        surface2: "#19221f",  // panneaux imbriqués
        line: "#253430",      // bordures
        "line-soft": "#1c2622",
        mist: "#eceeeb",      // texte principal
        "mist-dim": "#93a19a",
        "mist-faint": "#5f6d67",
        accent: "#29d398",    // vert-teal (couleur de marque de Saliou)
        "accent-soft": "rgba(41,211,152,.12)",
        accent2: "#f2b44d",   // ambre (hard skills)
        accent3: "#6e9bff",   // bleu (soft skills)
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      borderRadius: {
        card: "10px",
      },
    },
  },
  plugins: [],
};