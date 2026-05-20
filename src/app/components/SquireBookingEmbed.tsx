import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { shopBookingUrl, shopSquireBrandId, shopSquireShopRoute } from "../config/shopInfo";

const SCRIPT_ID = "squire-widget";
const WIDGET_SRC = `https://widget.getsquire.com/widget.js?brand=${encodeURIComponent(shopSquireBrandId)}`;

const SQUIRE_OPEN_CONFIG = {
  brand: shopSquireBrandId,
  shop: shopSquireShopRoute,
} as const;

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

export type SquireBookingEmbedVariant = "page" | "home";

type SquireBookingEmbedProps = {
  variant?: SquireBookingEmbedVariant;
  className?: string;
};

/**
 * Charge widget.js, ouvre Squire et reparente l’iframe dans le conteneur.
 * Pas de panneau d’erreur : en cas d’échec le cadre reste vide (comportement d’origine).
 */
export function SquireBookingEmbed({ variant = "page", className }: SquireBookingEmbedProps) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    let observer: MutationObserver | null = null;
    let reparentInterval: ReturnType<typeof setInterval> | null = null;
    let blankWatch: ReturnType<typeof setTimeout> | null = null;

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
        /* Squire peut refuser si déjà ouvert */
      }
    };

    const scheduleBlankWatchdog = () => {
      if (blankWatch) clearTimeout(blankWatch);
      blankWatch = setTimeout(() => {
        if (cancelled) return;
        const host = hostRef.current;
        if (host?.querySelector("iframe.squire_widget")) return;
        tryOpen();
        setTimeout(tryOpen, 400);
        setTimeout(tryOpen, 1400);
        scheduleReparentBursts();
      }, 4500);
    };

    const run = async () => {
      try {
        await injectSquireLoaderOnce();
        await waitForSquireWidgetApi(45000);
        if (cancelled) return;

        window.addEventListener("squire_widget_opened", onWidgetOpened);

        observer = new MutationObserver(() => tryMoveIframe());
        observer.observe(document.body, { childList: true, subtree: true });

        tryOpen();
        setTimeout(tryOpen, 300);
        setTimeout(tryOpen, 1200);
        setTimeout(tryOpen, 3500);

        scheduleReparentBursts();
        scheduleBlankWatchdog();
      } catch {
        /* réseau / blocage */
      }
    };

    const onPageShow = (e: PageTransitionEvent) => {
      if (!e.persisted || cancelled) return;
      tryOpen();
      setTimeout(tryOpen, 300);
      scheduleReparentBursts();
      scheduleBlankWatchdog();
    };

    void run();
    window.addEventListener("pageshow", onPageShow);

    return () => {
      cancelled = true;
      window.removeEventListener("pageshow", onPageShow);
      window.removeEventListener("squire_widget_opened", onWidgetOpened);
      observer?.disconnect();
      clearReparentInterval();
      if (blankWatch) clearTimeout(blankWatch);
      window.SquireWidget?.close();
    };
  }, []);

  const hostClass =
    variant === "home"
      ? `reserve-squire-host home-squire-embed-host ${className ?? ""}`.trim()
      : `reserve-squire-host ${className ?? ""}`.trim();

  return (
    <div className="flex w-full flex-col">
      <div ref={hostRef} className={hostClass} aria-label="Réservation Squire" />
      <div className="border-t-2 border-black bg-neutral-50 px-4 py-3 sm:px-5 sm:py-4">
        <a
          href={shopBookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex w-full items-center justify-center gap-2 border-2 border-black bg-white px-4 py-3.5 text-center text-[0.65rem] font-black uppercase tracking-[0.14em] text-black transition-colors hover:bg-black hover:text-white sm:text-xs sm:tracking-wider"
        >
          <span>Le planning ne s&apos;affiche pas ? Réserver sur Squire</span>
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
