import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { SectionTopDiagonal } from "../components/SectionTopDiagonal";
import { shopBookingUrl } from "../config/shopInfo";
import { usePageSeo } from "../hooks/usePageSeo";

function isLikelyLocalHostname(hostname: string) {
  return (
    hostname === "localhost" ||
    hostname === "127.0.0.1" ||
    hostname.endsWith(".local") ||
    hostname.startsWith("192.168.")
  );
}

const SEO_RESERVE_TITLE = "Réserver | Quartier Général Barbershop Montréal";
const SEO_RESERVE_DESCRIPTION =
  "Réserve ta coupe au QG : choix du barbier, service et créneau en ligne via Squire. Barbier Montréal Est, Sherbrooke.";

export function Reserve() {
  usePageSeo({ title: SEO_RESERVE_TITLE, description: SEO_RESERVE_DESCRIPTION });
  const [isLocalDev, setIsLocalDev] = useState(false);

  useEffect(() => {
    setIsLocalDev(isLikelyLocalHostname(window.location.hostname));
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
              Choisis ton barbier, ton service et ton créneau — le flux Squire est affiché dans le cadre
              ci-dessous. Sur le site en production (Netlify), il se charge en général correctement ; en
              local, Squire bloque souvent l&apos;iframe pour des raisons de sécurité.
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
            {isLocalDev && (
              <div
                className="mb-6 border-2 border-black bg-amber-100 px-4 py-3 text-sm font-bold text-black/90"
                role="status"
              >
                Mode local : le cadre Squire est souvent vide ici (en-têtes{' '}
                <span className="whitespace-nowrap">X-Frame-Options / CSP</span>). Teste après déploiement
                sur Netlify, ou utilise « Continuer sur Squire » ci-dessous.
              </div>
            )}

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

            <div className="overflow-hidden border-4 border-black bg-neutral-100 shadow-[10px_10px_0_0_rgba(0,0,0,1)]">
              <iframe
                title="Réservation en ligne — Quartier Général Barbershop (Squire)"
                src={shopBookingUrl}
                className="block min-h-[70vh] w-full bg-white lg:min-h-[78vh]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allow="fullscreen"
              />
            </div>

            <p className="mt-4 text-center text-sm text-black/50">
              Cadre vide ? En local, c&apos;est normal. En production, si ça persiste, utilise «
              Continuer sur Squire (cet onglet) » — même résultat que le cadre, sans quitter l&apos;expérience
              de réservation.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
