import { Link, useLocation } from "react-router";

/**
 * Bouton flottant maison : remplace le bouton Squire (désactivé via x-squire-show-btn).
 * Mène toujours vers la section réservation sur l’accueil.
 */
export function ReserveNowButton() {
  const { pathname, hash } = useLocation();

  if (pathname === "/reserver" || (pathname === "/" && hash === "#reserver")) return null;

  return (
    <Link
      to="/#reserver"
      className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom,0px))] right-[max(1rem,env(safe-area-inset-right,0px))] z-[80] border-2 border-black bg-black px-4 py-3 text-[0.65rem] font-black uppercase tracking-[0.14em] text-white shadow-[4px_4px_0_0_rgba(0,0,0,0.25)] transition-colors hover:bg-white hover:text-black sm:px-5 sm:py-3.5 sm:text-xs sm:tracking-wider"
    >
      Réserver maintenant
    </Link>
  );
}
