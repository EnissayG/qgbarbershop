import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { SectionTopDiagonal } from "../components/SectionTopDiagonal";
import { shopSquireBrandId, shopSquireShopRoute } from "../config/shopInfo";
import { usePageSeo } from "../hooks/usePageSeo";

/**
 * Intégration Squire (widget.getsquire.com)
 *
 * Points documentés par analyse du loader public :
 * - `widget.js` lit `document.currentScript` : attributs **brand** et **shop** sur la balise `<script>` sont
 *   nécessaires (le seul `?brand=` dans l’URL ne remplit pas `getAttribute("brand")`).
 * - `frameLoader.js` expose `window.SquireWidget.open(config)` ; la config attend `{ brand, shop }` (UUID + slug boutique).
 * - Le snippet HTML « une ligne dans le head » fonctionne sur site multipages ; en **SPA React**, charger le script
 *   au montage de `/reserver` évite les courses avec un second injecteur et garantit un seul `currentScript`.
 * - Le widget crée une `iframe.squire_widget` sur `body` puis l’anime ; on la reparente dans `.reserve-squire-host`
 *   après ouverture pour l’affichage « intégré ».
 *
 * Réf. support client : coller le script dans `<head>` avec BRAND_ID — équivalent ici avec attributs complets.
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

const SQUIRE_OPEN_CONFIG = {
  brand: shopSquireBrandId,
  shop: shopSquireShopRoute,
} as const;

function injectSquireLoaderOnce(): Promise<void> {
  const existing = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
  if (
    existing?.dataset.qgInjected === "1" &&
    existing.getAttribute("brand") === shopSquireBrandId &&
    existing.getAttribute("shop") === shopSquireShopRoute
  ) {
    return Promise.resolve();
  }
  if (existing) existing.remove();

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.id = SCRIPT_ID;
    script.setAttribute("data-name", "squire-widget");
    script.src = WIDGET_SRC;
    script.setAttribute("brand", shopSquireBrandId);
    script.setAttribute("shop", shopSquireShopRoute);
    script.dataset.qgInjected = "1";
    script.addEventListener("load", () => resolve(), { once: true });
    script.addEventListener("error", () => reject(new Error("widget.js failed")), { once: true });
    document.head.appendChild(script);
  });
}

function waitForSquireWidgetApi(timeoutMs: number): Promise<void> {
  return new Promise((resolve, reject) => {
    const start = Date.now();
    const tick = () => {
      if (typeof window.SquireWidget !== "undefined" && typeof window.SquireWidget?.open === "function") {
        resolve();
        return;
      }
      if (Date.now() - start > timeoutMs) {
        reject(new Error("SquireWidget API timeout"));
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
    let cancelled = false;
    let observer: MutationObserver | null = null;
    let reparentInterval: ReturnType<typeof setInterval> | null = null;

    const clearReparentInterval = () => {
      if (reparentInterval) {
        clearInterval(reparentInterval);
        reparentInterval = null;
      }
    };

    const tryMoveIframe = () => {
      const host = hostRef.current;
      if (!host || cancelled) return;
      const iframe = document.querySelector<HTMLIFrameElement>("iframe.squire_widget");
      if (!iframe) return;
      if (iframe.parentElement !== host) {
        host.appendChild(iframe);
      }
    };

    const scheduleReparentBursts = () => {
      clearReparentInterval();
      tryMoveIframe();
      [100, 400, 900, 1600, 2800, 4500].forEach((ms) => {
        setTimeout(() => {
          if (!cancelled) tryMoveIframe();
        }, ms);
      });
      reparentInterval = setInterval(() => {
        if (!cancelled) tryMoveIframe();
      }, 350);
      setTimeout(() => clearReparentInterval(), 12000);
    };

    const onWidgetOpened = () => {
      if (cancelled) return;
      setTimeout(tryMoveIframe, 0);
      setTimeout(tryMoveIframe, 120);
      scheduleReparentBursts();
    };

    const tryOpen = () => {
      if (cancelled || !window.SquireWidget?.open) return;
      try {
        window.SquireWidget.open({
          brand: SQUIRE_OPEN_CONFIG.brand,
          shop: SQUIRE_OPEN_CONFIG.shop,
        });
      } catch {
        /* Squire peut refuser si déjà ouvert — les timeouts suivants réessaient si besoin */
      }
    };

    const run = async () => {
      try {
        await injectSquireLoaderOnce();
        await waitForSquireWidgetApi(45000);
        if (cancelled) return;

        window.addEventListener("squire_widget_opened", onWidgetOpened);

        observer = new MutationObserver(() => tryMoveIframe());
        observer.observe(document.body, { childList: true, subtree: true });

        /* Appels explicites brand + shop (le loader lit aussi _squireWidgetConfig depuis la balise script). */
        tryOpen();
        setTimeout(tryOpen, 300);
        setTimeout(tryOpen, 1200);
        setTimeout(tryOpen, 3500);

        scheduleReparentBursts();
      } catch {
        /* silence — cadre vide si réseau / blocage */
      }
    };

    void run();

    return () => {
      cancelled = true;
      window.removeEventListener("squire_widget_opened", onWidgetOpened);
      observer?.disconnect();
      clearReparentInterval();
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
              Le planning officiel s’affiche dans le cadre ci-dessous. Un bouton Squire peut aussi apparaître en bas à
              droite après chargement.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-diagonal-top relative bg-white pb-[max(6rem,calc(env(safe-area-inset-bottom,0px)+3rem))] lg:pb-24">
        <SectionTopDiagonal tone="light" variant="slash" />
        <div className="layout-gutter min-w-0">
          {/* Pas d’opacity:0 initial ici : évite tout effet de masquage sur l’iframe enfant */}
          <div className="mx-auto max-w-5xl">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-black/45">
              Planning en ligne — Quartier Général
            </p>
            <div className="overflow-hidden border-4 border-black shadow-[10px_10px_0_0_rgba(0,0,0,1)]">
              <div ref={hostRef} className="reserve-squire-host" aria-label="Réservation Squire" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
