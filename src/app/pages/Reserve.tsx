import { useEffect } from "react";

export function Reserve() {
  useEffect(() => {
    // Nettoyer l'ancien script s'il existe
    const existing = document.getElementById("squire-widget");
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.src = "https://widget.getsquire.com/widget.js?brand=d8e21510-540e-4dc9-923f-cc4e8b7b7496";
    script.id = "squire-widget";
    script.setAttribute("data-name", "squire-widget");
    document.head.appendChild(script);

    return () => {
      // Cleanup au démontage
      const s = document.getElementById("squire-widget");
      if (s) s.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-start pt-16 px-4">
      <h1 className="text-3xl font-bold mb-8">Réserver</h1>
      <p className="text-gray-400 mb-8 text-center">
        Prenez rendez-vous en ligne directement avec notre équipe.
      </p>
      {/* Le widget Squire s'injecte automatiquement dans la page */}
      <div id="squire-widget-container" className="w-full max-w-2xl" />
    </div>
  );
}
