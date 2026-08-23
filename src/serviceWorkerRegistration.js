// Enregistrement simple du service worker pour rendre le site installable (PWA).
// N'enregistre qu'en production et uniquement si le navigateur le supporte.

export function register() {
  if (process.env.NODE_ENV !== "production") return;
  if (!("serviceWorker" in navigator)) return;

  window.addEventListener("load", () => {
    const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

    navigator.serviceWorker
      .register(swUrl)
      .then((registration) => {
        registration.onupdatefound = () => {
          const installingWorker = registration.installing;
          if (!installingWorker) return;

          installingWorker.onstatechange = () => {
            if (
              installingWorker.state === "installed" &&
              navigator.serviceWorker.controller
            ) {
              // Une nouvelle version est prête ; elle prendra effet au prochain chargement.
              console.log("Nouvelle version du site disponible — elle sera active au prochain chargement.");
            }
          };
        };
      })
      .catch((error) => {
        console.error("Échec de l'enregistrement du service worker :", error);
      });
  });
}

export function unregister() {
  if (!("serviceWorker" in navigator)) return;
  navigator.serviceWorker.ready.then((registration) => {
    registration.unregister();
  });
}