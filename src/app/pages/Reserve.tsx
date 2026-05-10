import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { SectionTopDiagonal } from "../components/SectionTopDiagonal";
import { shopSquireBrandId, shopSquireShopRoute } from "../config/shopInfo";
import { usePageSeo } from "../hooks/usePageSeo";

/**
 * Widget Squire : script dans index.html (recommandation Squire).
 * Le runtime lit `getAttribute("brand")` / `shop` sur la balise — le seul `?brand=` dans l’URL ne suffit pas.
 * `x-squire-show-btn="false"` : pas de bouton flottant ; on ouvre le panneau via `SquireWidget.open()` et on
 * reparente l’iframe dans `.reserve-squire-host` pour l’affichage intégré au layout.
 */
const SCRIPT_ID = "squire-widget";
const WIDGET_SRC = `https://widget.getsquire.com/widget.js?brand=${encodeURIComponent(shopSquireBrandId)}`;

const SEO_RESERVE_TITLE = "Réserver | Quartier Général Barbershop Montréal";
const SEO_RESERVE_DESCRIPTION =
  "Réserve ta coupe au QG : choix du barbier, service et créneau en ligne via Squire. Barbier Montréal Est, Sherbrooke.";

declare global {
  interface Window {
    SquireWidget?: {
      open: (config: { brand?: string | null; shop?: string | null; barber?: string | null }) => void;
      close: () => void;
    };
    _squireWidgetConfig?: {
      setups: { default: { brand?: string | null; shop?: string | null; barber?: string | null } };
    };
  }
}

function ensureSquireScriptInHead(): void {
  let el = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
  if (
    el &&
    el.getAttribute("brand") === shopSquireBrandId &&
    el.getAttribute("shop") === shopSquireShopRoute
  ) {
    return;
  }
  if (el) el.remove();

  const script = document.createElement("script");
  script.type = "text/javascript";
  script.id = SCRIPT_ID;
  script.setAttribute("data-name", "squire-widget");
  script.src = WIDGET_SRC;
  script.setAttribute("brand", shopSquireBrandId);
  script.setAttribute("shop", shopSquireShopRoute);
  script.setAttribute("x-squire-show-btn", "false");
  document.head.appendChild(script);
}

function waitForSquireWidgetApi(timeoutMs: number): Promise<void> {
  return new Promise((resolve, reject) => {
    const start = Date.now();
    const tick = () => {
      if (typeof window.SquireWidget !== "undefined" && window.SquireWidget?.open) {
        resolve();
        return;
      }
      if (Date.now() - start > timeoutMs) {
        reject(new Error("SquireWidget timeout"));
        return;
      }
      requestAnimationFrame(tick);
    };
    tick();
  });
}

export function Reserve() {
  usePageSeo({ title: SEO_RESERVE_TITLE, description: SEO_RESERVE_DESCRIPTION });
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ensureSquireScriptInHead();

    let cancelled = false;
    let observer: MutationObserver | null = null;

    const tryMoveIframe = () => {
      const host = hostRef.current;
      if (!host || cancelled) return;
      const iframe = document.querySelector<HTMLIFrameElement>("iframe.squire_widget");
      if (!iframe) return;
      if (iframe.parentElement !== host) {
        host.appendChild(iframe);
      }
    };

    const run = async () => {
      try {
        await waitForSquireWidgetApi(30000);
        if (cancelled) return;
        await new Promise((r) => setTimeout(r, 150));
        if (cancelled) return;

        const cfg = window._squireWidgetConfig?.setups?.default;
        if (cfg && window.SquireWidget) {
          window.SquireWidget.open(cfg);
        }

        observer = new MutationObserver(() => tryMoveIframe());
        observer.observe(document.body, { childList: true, subtree: true });
        requestAnimationFrame(tryMoveIframe);
        [50, 200, 600, 1200].forEach((ms) => setTimeout(tryMoveIframe, ms));
      } catch {
        /* Échec silencieux : la zone réservée reste visible. */
      }
    };

    void run();

    return () => {
      cancelled = true;
      observer?.disconnect();
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
              Réservation · Squire
            </span>
            <h1 className="mb-6 text-6xl font-black uppercase leading-none tracking-tighter text-white lg:text-8xl">
              Réserver
              <br />
              <span className="text-white/35">au QG</span>
            </h1>
            <p className="max-w-xl text-xl leading-relaxed text-white/80">
              Le planning officiel du salon est affiché dans le cadre ci-dessous, sans quitter le site.
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
            <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-black/45">
              Planning en ligne — Quartier Général
            </p>
            <div className="overflow-hidden border-4 border-black shadow-[10px_10px_0_0_rgba(0,0,0,1)]">
              <div ref={hostRef} className="reserve-squire-host" aria-label="Réservation Squire" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
