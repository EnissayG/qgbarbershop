import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, RefreshCw } from "lucide-react";
import {
  shopBookingUrl,
  shopPhoneDisplay,
  shopPhoneTel,
  shopSquireBrandId,
  shopSquireShopRoute,
} from "../config/shopInfo";

const SCRIPT_ID = "squire-widget";
const WIDGET_SRC = `https://widget.getsquire.com/widget.js?brand=${encodeURIComponent(shopSquireBrandId)}`;

const API_WAIT_MS = 45_000;
const IFRAME_WAIT_MS = 10_000;
const IFRAME_RETRY_WAIT_MS = 6_000;
const BLANK_WATCHDOG_MS = 5_500;

const SQUIRE_OPEN_CONFIG = {
  brand: shopSquireBrandId,
  shop: shopSquireShopRoute,
} as const;

type EmbedStatus = "idle" | "loading" | "ready" | "error";

declare global {
  interface Window {
    SquireWidget?: {
      open: (config: { brand?: string | null; shop?: string | null; barber?: string | null }) => void;
      close: () => void;
    };
    _squireWidgetConfig?: {
      inline: boolean;
      showButton: boolean;
      setups: { default: { brand?: string | null; shop?: string | null; barber?: string | null } };
    };
  }
}

function logSquireIssue(message: string, cause?: unknown) {
  if (import.meta.env.DEV) {
    console.warn("[Squire embed]", message, cause ?? "");
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
    script.setAttribute("x-squire-show-btn", "false");
    script.dataset.qgInjected = "1";
    script.addEventListener("load", () => resolve(), { once: true });
    script.addEventListener("error", () => reject(new Error("widget.js")), { once: true });
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
        reject(new Error("api-timeout"));
        return;
      }
      requestAnimationFrame(tick);
    };
    tick();
  });
}

function waitForIframeInHost(host: HTMLElement, timeoutMs: number, cancelled: () => boolean): Promise<boolean> {
  return new Promise((resolve) => {
    const start = Date.now();
    const tick = () => {
      if (cancelled()) {
        resolve(false);
        return;
      }
      if (host.querySelector("iframe.squire_widget")) {
        resolve(true);
        return;
      }
      if (Date.now() - start > timeoutMs) {
        resolve(false);
        return;
      }
      requestAnimationFrame(tick);
    };
    tick();
  });
}

function removeSquireIframesOutsideHost(host: HTMLElement | null) {
  document.querySelectorAll<HTMLIFrameElement>("iframe.squire_widget").forEach((iframe) => {
    if (!host?.contains(iframe)) iframe.remove();
  });
}

function clearHostIframes(host: HTMLElement) {
  host.querySelectorAll("iframe.squire_widget").forEach((iframe) => iframe.remove());
}

export type SquireBookingEmbedVariant = "page" | "home";

type SquireBookingEmbedProps = {
  variant?: SquireBookingEmbedVariant;
  className?: string;
};

function errorMessageFromCode(code: string): string {
  switch (code) {
    case "widget.js":
      return "Le script de réservation est bloqué ou inaccessible (réseau, bloqueur de pub).";
    case "api-timeout":
      return "Le service de réservation met trop de temps à répondre.";
    case "no-host":
      return "Impossible d’afficher le cadre de réservation sur cette page.";
    case "iframe-missing":
      return "Le planning ne s’est pas affiché dans la page.";
    default:
      return "Le planning en ligne n’a pas pu se charger.";
  }
}

export function SquireBookingEmbed({ variant = "page", className }: SquireBookingEmbedProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<EmbedStatus>("idle");
  const [errorCode, setErrorCode] = useState<string | null>(null);
  const [attempt, setAttempt] = useState(0);

  const fail = useCallback((code: string, cause?: unknown) => {
    logSquireIssue(code, cause);
    setErrorCode(code);
    setStatus("error");
  }, []);

  const retry = useCallback(() => {
    window.SquireWidget?.close();
    const host = hostRef.current;
    if (host) clearHostIframes(host);
    removeSquireIframesOutsideHost(host);
    setErrorCode(null);
    setStatus("idle");
    setAttempt((n) => n + 1);
  }, []);

  useEffect(() => {
    let cancelled = false;
    let observer: MutationObserver | null = null;
    let reparentInterval: ReturnType<typeof setInterval> | null = null;
    let blankWatch: ReturnType<typeof setTimeout> | null = null;
    let intersectionObserver: IntersectionObserver | null = null;
    let bootStarted = false;

    const isCancelled = () => cancelled;

    const clearReparentInterval = () => {
      if (reparentInterval) {
        clearInterval(reparentInterval);
        reparentInterval = null;
      }
    };

    const tryMoveIframe = () => {
      const host = hostRef.current;
      if (!host || cancelled) return false;
      const iframe = document.querySelector<HTMLIFrameElement>("iframe.squire_widget");
      if (!iframe) return false;
      if (iframe.parentElement !== host) host.appendChild(iframe);
      return true;
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
      setTimeout(() => clearReparentInterval(), 12_000);
    };

    const onWidgetOpened = () => {
      if (cancelled) return;
      setTimeout(tryMoveIframe, 0);
      setTimeout(tryMoveIframe, 120);
      scheduleReparentBursts();
    };

    const tryOpen = (): boolean => {
      if (cancelled || !window.SquireWidget?.open) return false;
      try {
        window.SquireWidget.open({
          brand: SQUIRE_OPEN_CONFIG.brand,
          shop: SQUIRE_OPEN_CONFIG.shop,
        });
        return true;
      } catch (e) {
        logSquireIssue("open-refused", e);
        return false;
      }
    };

    const scheduleOpenBursts = () => {
      tryOpen();
      setTimeout(() => tryOpen(), 200);
      setTimeout(() => tryOpen(), 700);
      setTimeout(() => tryOpen(), 1800);
      setTimeout(() => tryOpen(), 3800);
    };

    const resetWidgetSurface = async (host: HTMLElement) => {
      window.SquireWidget?.close();
      await new Promise<void>((r) => setTimeout(r, 150));
      clearHostIframes(host);
      removeSquireIframesOutsideHost(host);
    };

    const confirmIframeOrFail = async (host: HTMLElement): Promise<boolean> => {
      let ok = await waitForIframeInHost(host, IFRAME_WAIT_MS, isCancelled);
      if (ok || cancelled) return ok;

      await resetWidgetSurface(host);
      if (cancelled) return false;

      scheduleOpenBursts();
      scheduleReparentBursts();
      ok = await waitForIframeInHost(host, IFRAME_RETRY_WAIT_MS, isCancelled);
      return ok;
    };

    const boot = async () => {
      if (bootStarted || cancelled) return;
      bootStarted = true;

      const host = hostRef.current;
      if (!host) {
        fail("no-host");
        return;
      }

      setErrorCode(null);
      setStatus("loading");

      try {
        await injectSquireLoaderOnce();
        await waitForSquireWidgetApi(API_WAIT_MS);
        if (cancelled) return;

        await resetWidgetSurface(host);
        if (cancelled) return;

        window.addEventListener("squire_widget_opened", onWidgetOpened);

        observer = new MutationObserver(() => {
          if (tryMoveIframe() && !cancelled) setStatus("ready");
        });
        observer.observe(document.body, { childList: true, subtree: true });

        scheduleOpenBursts();
        scheduleReparentBursts();

        const ready = await confirmIframeOrFail(host);
        if (cancelled) return;

        if (ready) {
          setStatus("ready");
        } else {
          fail("iframe-missing");
        }

        if (blankWatch) clearTimeout(blankWatch);
        blankWatch = setTimeout(() => {
          if (cancelled) return;
          const stillThere = host.querySelector("iframe.squire_widget");
          if (stillThere) return;
          logSquireIssue("blank-watchdog-retry");
          void (async () => {
            await resetWidgetSurface(host);
            if (cancelled) return;
            scheduleOpenBursts();
            scheduleReparentBursts();
            const recovered = await waitForIframeInHost(host, IFRAME_RETRY_WAIT_MS, isCancelled);
            if (cancelled) return;
            if (recovered) setStatus("ready");
            else fail("iframe-missing");
          })();
        }, BLANK_WATCHDOG_MS);
      } catch (e) {
        if (cancelled) return;
        const code = e instanceof Error ? e.message : "unknown";
        fail(code, e);
      }
    };

    const onPageShow = (e: PageTransitionEvent) => {
      if (!e.persisted || cancelled) return;
      const host = hostRef.current;
      if (!host) return;
      setStatus("loading");
      setErrorCode(null);
      void (async () => {
        await resetWidgetSurface(host);
        if (cancelled) return;
        scheduleOpenBursts();
        scheduleReparentBursts();
        const ok = await confirmIframeOrFail(host);
        if (cancelled) return;
        if (ok) setStatus("ready");
        else fail("iframe-missing");
      })();
    };

    const startBoot = () => {
      void boot();
    };

    if (variant === "home") {
      const host = hostRef.current;
      if (!host) return;

      intersectionObserver = new IntersectionObserver(
        (entries) => {
          if (!entries.some((e) => e.isIntersecting) || cancelled) return;
          intersectionObserver?.disconnect();
          intersectionObserver = null;
          startBoot();
        },
        { rootMargin: "120px 0px", threshold: 0.08 }
      );
      intersectionObserver.observe(host);

      const fallbackTimer = setTimeout(() => {
        if (!bootStarted && !cancelled) startBoot();
      }, 12_000);

      window.addEventListener("pageshow", onPageShow);

      return () => {
        cancelled = true;
        clearTimeout(fallbackTimer);
        intersectionObserver?.disconnect();
        window.removeEventListener("pageshow", onPageShow);
        window.removeEventListener("squire_widget_opened", onWidgetOpened);
        observer?.disconnect();
        clearReparentInterval();
        if (blankWatch) clearTimeout(blankWatch);
        window.SquireWidget?.close();
      };
    }

    startBoot();
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
  }, [attempt, variant, fail]);

  const hostClass =
    variant === "home"
      ? `reserve-squire-host home-squire-embed-host ${className ?? ""}`.trim()
      : `reserve-squire-host ${className ?? ""}`.trim();

  const showFallback = status === "error";
  const showLoading = status === "loading";

  const bookingCtaClass =
    "group inline-flex w-full max-w-md items-center justify-center gap-3 bg-black px-8 py-5 font-black uppercase tracking-wider text-white shadow-[6px_6px_0_0_rgba(0,0,0,0.15)] transition-all hover:bg-black/90 active:scale-[0.99]";

  return (
    <div ref={hostRef} className={`${hostClass} squire-embed-shell`} aria-label="Réservation en ligne">
      {showLoading && (
        <div className="squire-embed-overlay" role="status" aria-live="polite">
          <p className="squire-embed-overlay-title">Chargement du planning</p>
          <p className="squire-embed-overlay-hint">Quelques secondes…</p>
        </div>
      )}

      {showFallback && (
        <div className="squire-embed-fallback" role="alert">
          <p className="squire-embed-fallback-title">Planning indisponible ici</p>
          <p className="squire-embed-fallback-text">
            {errorCode ? errorMessageFromCode(errorCode) : errorMessageFromCode("unknown")} Tu peux réserver
            directement sur Squire ou nous appeler.
          </p>
          <div className="squire-embed-fallback-actions">
            <a
              href={shopBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={bookingCtaClass}
            >
              <span>Réserver sur la page Squire</span>
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" aria-hidden />
            </a>
            <button
              type="button"
              onClick={retry}
              className="inline-flex w-full max-w-md items-center justify-center gap-2 border-4 border-black bg-white px-8 py-4 font-black uppercase tracking-wider text-black transition-all hover:bg-black hover:text-white"
            >
              <RefreshCw size={18} aria-hidden />
              <span>Réessayer</span>
            </button>
            <a
              href={`tel:${shopPhoneTel}`}
              className="pt-1 text-sm font-bold uppercase tracking-wider text-black/50 underline decoration-black/25 underline-offset-4 hover:text-black"
            >
              {shopPhoneDisplay}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
