import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { SectionTopDiagonal } from "../components/SectionTopDiagonal";
import {
  shopBookingUrl,
  shopSquireBrandId,
  shopSquireShopRoute,
  shopSquireWidgetScriptUrl,
} from "../config/shopInfo";
import { usePageSeo } from "../hooks/usePageSeo";

const SQUIRE_SCRIPT_ID = "qg-squire-widget-script";
const EMBED_FALLBACK_MS = 12000;

const SEO_RESERVE_TITLE = "Réserver | Quartier Général Barbershop Montréal";
const SEO_RESERVE_DESCRIPTION =
  "Réserve ta coupe au QG : choix du barbier, service et créneau en ligne via Squire. Barbier Montréal Est, Sherbrooke.";

declare global {
  interface Window {
    SquireWidget?: {
      open: (config: { brand?: string; shop?: string; barber?: string }) => void;
      close: () => void;
    };
    _squireWidgetConfig?: {
      setups: { default: { brand?: string; shop?: string; barber?: string } };
    };
  }
}

function loadSquireScript(): Promise<void> {
  const existing = document.getElementById(SQUIRE_SCRIPT_ID) as HTMLScriptElement | null;
  if (existing) {
    return existing.dataset.loaded === "1"
      ? Promise.resolve()
      : new Promise((resolve) => {
          existing.addEventListener("load", () => resolve(), { once: true });
        });
  }
  return new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.id = SQUIRE_SCRIPT_ID;
    s.src = shopSquireWidgetScriptUrl;
    s.async = true;
    s.setAttribute("brand", shopSquireBrandId);
    s.setAttribute("shop", shopSquireShopRoute);
    s.setAttribute("x-squire-inline-enabled", "true");
    s.setAttribute("x-squire-show-btn", "false");
    s.addEventListener("load", () => {
      s.dataset.loaded = "1";
      resolve();
    });
    s.addEventListener("error", () => reject(new Error("Squire script failed to load")));
    document.body.appendChild(s);
  });
}

export function Reserve() {
  usePageSeo({ title: SEO_RESERVE_TITLE, description: SEO_RESERVE_DESCRIPTION });
  const hostRef = useRef<HTMLDivElement>(null);
  const readyRef = useRef(false);
  const fallbackTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [embedState, setEmbedState] = useState<"loading" | "ready" | "fallback">("loading");

  useEffect(() => {
    let cancelled = false;
    let observer: MutationObserver | null = null;

    const clearFallbackTimer = () => {
      if (fallbackTimerRef.current) {
        clearTimeout(fallbackTimerRef.current);
        fallbackTimerRef.current = null;
      }
    };

    const tryMoveIframeIntoHost = () => {
      const host = hostRef.current;
      if (!host || cancelled) return;
      const iframe = document.querySelector<HTMLIFrameElement>("iframe.squire_widget");
      if (!iframe) return;
      if (iframe.parentElement !== host) {
        host.appendChild(iframe);
      }
      readyRef.current = true;
      setEmbedState("ready");
      clearFallbackTimer();
    };

    const openAndObserve = () => {
      if (cancelled) return;
      const cfg = window._squireWidgetConfig?.setups?.default;
      if (cfg && window.SquireWidget) {
        window.SquireWidget.open(cfg);
      }
      observer = new MutationObserver(() => {
        tryMoveIframeIntoHost();
      });
      observer.observe(document.body, { childList: true, subtree: false });
      requestAnimationFrame(() => tryMoveIframeIntoHost());
      setTimeout(() => tryMoveIframeIntoHost(), 50);
      setTimeout(() => tryMoveIframeIntoHost(), 200);
      setTimeout(() => tryMoveIframeIntoHost(), 600);
    };

    fallbackTimerRef.current = setTimeout(() => {
      if (!cancelled && !readyRef.current) {
        setEmbedState("fallback");
      }
    }, EMBED_FALLBACK_MS);

    loadSquireScript()
      .then(() => {
        if (!cancelled) openAndObserve();
      })
      .catch(() => {
        if (!cancelled) {
          clearFallbackTimer();
          setEmbedState("fallback");
        }
      });

    return () => {
      cancelled = true;
      observer?.disconnect();
      clearFallbackTimer();
      readyRef.current = false;
      window.SquireWidget?.close();
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      <section className="page-hero-section relative bg-black">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 h-full w-1/3 translate-x-16 skew-x-12 bg-white/5 sm:translate-x-24 lg:translate-x-32" />
        </div>

        <div className="page-hero-inner">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="mb-6 block text-sm font-bold uppercase tracking-widest text-white/60">
              Squire · en ligne
            </span>
            <h1 className="mb-6 text-6xl font-black uppercase leading-none tracking-tighter text-white lg:text-8xl">
              Réserver
              <br />
              <span className="text-white/35">au QG</span>
            </h1>
            <p className="max-w-xl text-xl leading-relaxed text-white/80">
              Choisis ton barbier, ton service et ton créneau — le flux Squire est intégré dans le cadre
              ci-dessous sur cette page.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-diagonal-top relative bg-white pb-[max(6rem,calc(env(safe-area-inset-bottom,0px)+3rem))] lg:pb-24">
        <SectionTopDiagonal tone="light" variant="slash" />
        <div className="layout-gutter min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-5xl"
          >
            <div className="mb-4 flex flex-col gap-3 border-b-2 border-black pb-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-black/50">
                Réservation sécurisée · Squire
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <a
                  href={shopBookingUrl}
                  className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-black underline-offset-4 hover:underline"
                >
                  Continuer sur Squire (cet onglet)
                </a>
                <a
                  href={shopBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black/60 underline-offset-4 hover:text-black hover:underline"
                >
                  Nouvel onglet
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                </a>
              </div>
            </div>

            <div className="relative overflow-hidden border-4 border-black shadow-[10px_10px_0_0_rgba(0,0,0,1)]">
              <div ref={hostRef} className="reserve-squire-host" aria-live="polite">
                {embedState === "loading" && (
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-neutral-100 px-6 text-center">
                    <p className="text-sm font-bold text-black">Chargement de la réservation…</p>
                    <p className="max-w-sm text-xs text-black/50">
                      Le widget Squire s’affiche ici dans quelques secondes.
                    </p>
                  </div>
                )}
                {embedState === "fallback" && (
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-neutral-100 px-6 text-center">
                    <p className="max-w-md text-sm font-bold text-black">
                      Le widget n’a pas pu se charger dans la page (réseau ou bloqueur). Tu peux continuer
                      sur Squire directement.
                    </p>
                    <a
                      href={shopBookingUrl}
                      className="inline-flex min-h-[3rem] items-center justify-center border-4 border-black bg-black px-8 py-2 text-xs font-black uppercase tracking-wider text-white transition hover:bg-white hover:text-black"
                    >
                      Ouvrir la réservation
                    </a>
                  </div>
                )}
              </div>
            </div>

            <p className="mt-4 text-center text-sm text-black/50">
              Intégration via le script officiel Squire : le cadre ci-dessus reprend leur interface de
              réservation.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
