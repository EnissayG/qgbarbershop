import { useEffect } from "react";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { SectionTopDiagonal } from "../components/SectionTopDiagonal";
import { shopBookingUrl, shopSquireBrandId, shopSquireShopRoute } from "../config/shopInfo";
import { usePageSeo } from "../hooks/usePageSeo";

/**
 * Intégration alignée sur le loader officiel `widget.getsquire.com/widget.js` :
 * - `document.currentScript` lit les attributs `brand`, `shop`, `barber`, `x-squire-inline-enabled`, `x-squire-show-btn`.
 * - Le paramètre `?brand=` dans l’URL ne remplace pas l’attribut `brand` (getAttribute resterait vide).
 * - `frameLoader.js` charge ensuite `SquireWidget` : il faut attendre avant d’appeler `open()`.
 *
 * @see https://widget.getsquire.com/widget.js (bootstrap public)
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

function scriptTagIsValid(el: HTMLElement | null): el is HTMLScriptElement {
  if (!el || el.id !== SCRIPT_ID) return false;
  return (
    el.getAttribute("brand") === shopSquireBrandId && el.getAttribute("shop") === shopSquireShopRoute
  );
}

/** Injecte ou réutilise le script avec les attributs requis ; attend le chargement de `widget.js`. */
function ensureOfficialSquireScript(): Promise<void> {
  if (scriptTagIsValid(document.getElementById(SCRIPT_ID))) {
    return Promise.resolve();
  }

  const old = document.getElementById(SCRIPT_ID);
  if (old) old.remove();

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.id = SCRIPT_ID;
    script.setAttribute("data-name", "squire-widget");
    script.src = WIDGET_SRC;
    script.setAttribute("brand", shopSquireBrandId);
    script.setAttribute("shop", shopSquireShopRoute);
    script.setAttribute("x-squire-inline-enabled", "true");
    script.addEventListener(
      "load",
      () => {
        script.dataset.qgLoaded = "1";
        resolve();
      },
      { once: true }
    );
    script.addEventListener(
      "error",
      () => reject(new Error("Échec du chargement du script Squire")),
      { once: true }
    );
    document.head.appendChild(script);
  });
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
        reject(new Error("SquireWidget indisponible (timeout)"));
        return;
      }
      requestAnimationFrame(tick);
    };
    tick();
  });
}

export function Reserve() {
  usePageSeo({ title: SEO_RESERVE_TITLE, description: SEO_RESERVE_DESCRIPTION });

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      try {
        await ensureOfficialSquireScript();
        await waitForSquireWidgetApi(25000);
        if (cancelled) return;
        const cfg = window._squireWidgetConfig?.setups?.default;
        if (cfg && window.SquireWidget) {
          window.SquireWidget.open(cfg);
        }
      } catch {
        /* Les liens vers shopBookingUrl restent utilisables (mode inline Squire + navigation directe). */
      }
    };

    void run();

    return () => {
      cancelled = true;
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
              Le panneau de réservation officiel s’ouvre sur cette page. Tu peux aussi réserver via le lien
              ci-dessous ou le bouton flottant Squire (bas à droite).
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
            className="mx-auto max-w-2xl text-center"
          >
            <p className="mb-6 text-sm font-bold uppercase tracking-widest text-black/45">
              Réservation sécurisée
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
              <a
                href={shopBookingUrl}
                className="inline-flex min-h-[3rem] items-center justify-center border-4 border-black bg-black px-8 py-3 text-xs font-black uppercase tracking-wider text-white transition hover:bg-white hover:text-black"
              >
                Ouvrir la réservation (Squire)
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
            <p className="mt-8 text-sm text-black/50">
              Rien ne s’ouvre ? Vérifie qu’aucun bloqueur de contenu ne bloque{" "}
              <span className="whitespace-nowrap">widget.getsquire.com</span>, ou passe par le lien direct
              ci-dessus.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
