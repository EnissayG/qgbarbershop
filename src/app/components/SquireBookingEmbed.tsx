import { useEffect, useId, useState } from "react";
import { useLocation } from "react-router";
import { ArrowRight } from "lucide-react";
import { shopBookingUrl, shopSquireEmbedUrl } from "../config/shopInfo";

export type SquireBookingEmbedVariant = "page" | "home";

type SquireBookingEmbedProps = {
  variant?: SquireBookingEmbedVariant;
  className?: string;
};

/**
 * Iframe directe Squire — nouvelle instance à chaque montage (navigation SPA fiable).
 */
export function SquireBookingEmbed({ variant = "page", className }: SquireBookingEmbedProps) {
  const location = useLocation();
  const reactId = useId();
  const [embedToken, setEmbedToken] = useState(() => Date.now());
  const [showContent, setShowContent] = useState(false);

  const visitKey = `${location.pathname}|${location.key}|${location.hash}`;

  useEffect(() => {
    setEmbedToken(Date.now());
    setShowContent(false);
  }, [visitKey]);

  useEffect(() => {
    return () => {
      setShowContent(false);
    };
  }, []);

  const embedSrc = `${shopSquireEmbedUrl}&_qg=${embedToken}`;

  const hostClass =
    variant === "home"
      ? `reserve-squire-host home-squire-embed-host ${className ?? ""}`.trim()
      : `reserve-squire-host ${className ?? ""}`.trim();

  const handleIframeLoad = () => {
    window.setTimeout(() => setShowContent(true), 1200);
  };

  return (
    <div className="flex w-full flex-col">
      <div className={`relative ${hostClass}`} aria-label="Réservation en ligne">
        {!showContent && (
          <div
            className="absolute inset-0 z-10 flex items-center justify-center bg-neutral-100 text-xs font-bold uppercase tracking-[0.2em] text-black/40"
            aria-live="polite"
          >
            Chargement de la réservation…
          </div>
        )}
        <iframe
          key={`${reactId}-${embedToken}`}
          src={embedSrc}
          title="Réservation Quartier Général"
          className="squire-booking-iframe"
          allow="geolocation; payment"
          onLoad={handleIframeLoad}
        />
      </div>
      <div className="border-t-2 border-black bg-neutral-50 px-4 py-3 sm:px-5 sm:py-4">
        <a
          href={shopBookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex w-full items-center justify-center gap-2 border-2 border-black bg-white px-4 py-3.5 text-center text-[0.65rem] font-black uppercase tracking-[0.14em] text-black transition-colors hover:bg-black hover:text-white sm:text-xs sm:tracking-wider"
        >
          <span>La réservation ne s&apos;affiche pas ? Réserver sur Squire</span>
          <ArrowRight
            size={16}
            className="shrink-0 transition-transform group-hover:translate-x-0.5"
            aria-hidden
          />
        </a>
      </div>
    </div>
  );
}
