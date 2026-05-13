import { motion } from "motion/react";
import { SectionTopDiagonal } from "../components/SectionTopDiagonal";
import { SquireBookingEmbed } from "../components/SquireBookingEmbed";
import { usePageSeo } from "../hooks/usePageSeo";

const SEO_RESERVE_TITLE = "Réserver | Quartier Général Barbershop Montréal";
const SEO_RESERVE_DESCRIPTION =
  "Réserve ta coupe au QG : choix du barbier, service et créneau en ligne via Squire. Barbier Montréal Est, Sherbrooke.";

export function Reserve() {
  usePageSeo({ title: SEO_RESERVE_TITLE, description: SEO_RESERVE_DESCRIPTION });

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
              Le planning officiel s&apos;affiche dans le cadre ci-dessous.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-diagonal-top relative bg-white pb-[max(6rem,calc(env(safe-area-inset-bottom,0px)+3rem))] lg:pb-24">
        <SectionTopDiagonal tone="light" variant="slash" />
        <div className="layout-gutter min-w-0">
          <div className="mx-auto max-w-5xl">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-black/45">
              Planning en ligne, Quartier Général
            </p>
            <div className="overflow-hidden border-4 border-black shadow-[10px_10px_0_0_rgba(0,0,0,1)]">
              <SquireBookingEmbed variant="page" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
