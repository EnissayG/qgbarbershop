import React from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, ExternalLink, Calendar } from "lucide-react";
import { GETSQUIRE_BOOKING_URL } from "../config/booking";
import { GOOGLE_MAPS_EMBED_SRC } from "../config/location";

const GOOGLE_LINK = "https://share.google/IrYHUn7NjG4AH4sYh";

export function Contact() {
  const fadeInUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.45 }
  };

  const columnTitle = "text-2xl sm:text-3xl font-bold text-black tracking-tight";
  const columnSubtitle = "mt-2 text-sm sm:text-base text-black/55 leading-relaxed max-w-md";

  return (
    <div className="bg-white pt-20">
      {/* Hero */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white" />

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.05 }}
          transition={{ duration: 1 }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-black rounded-full"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-[1.1]">
              Contact
              <span className="text-black/40 font-normal"> · </span>
              <span className="italic text-black/75">Rendez-vous</span>
            </h1>
            <p className="mt-5 text-lg text-black/55 leading-relaxed">
              Réservation en ligne, coordonnées du salon et itinéraire.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Deux colonnes alignées en haut, même rythme typographique */}
      <section className="pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 lg:items-start">
            {/* Colonne réservation */}
            <motion.div {...fadeInUp} id="reservation-getsquire" className="min-w-0">
              <h2 className={columnTitle}>Réservation en ligne</h2>
              <p className={columnSubtitle}>
                Choisissez votre prestation et un créneau qui vous convient. Vous serez redirigé vers
                notre page de réservation sécurisée pour finaliser.
              </p>

              <div className="mt-8 border border-black/12 bg-white p-6 sm:p-8 shadow-sm">
                <div className="flex gap-4 sm:gap-5">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center bg-black text-white"
                    aria-hidden
                  >
                    <Calendar className="h-6 w-6" />
                  </div>
                  <div className="min-w-0 space-y-3 pt-0.5">
                    <p className="font-semibold text-black text-base sm:text-lg leading-snug">
                      Prendre rendez-vous
                    </p>
                    <p className="text-sm text-black/60 leading-relaxed">
                      Quelques minutes suffisent : services, disponibilités et confirmation en ligne.
                    </p>
                  </div>
                </div>

                <a
                  href={GETSQUIRE_BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex w-full items-center justify-center gap-2 bg-black px-6 py-3.5 text-sm sm:text-base font-semibold text-white transition-colors hover:bg-black/90 min-h-[48px]"
                >
                  Réserver en ligne
                  <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" aria-hidden />
                </a>
              </div>
            </motion.div>

            {/* Colonne coordonnées & carte */}
            <div className="min-w-0 space-y-8">
              <motion.div {...fadeInUp} transition={{ delay: 0.05 }}>
                <h2 className={columnTitle}>Coordonnées</h2>
                <p className={columnSubtitle}>
                  QG Le Quartier Général — Montréal. Métro Radisson à proximité.
                </p>

                <div className="mt-8 bg-black text-white p-6 sm:p-8 space-y-5">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 mt-0.5 text-white/90" />
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-1">
                          Adresse
                        </p>
                        <p className="text-white/85 text-sm leading-relaxed">
                          7072 R. Sherbrooke E
                          <br />
                          Montréal, QC H1N 1E6
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 sm:gap-4">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 mt-0.5 text-white/90" />
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-1">
                          Téléphone
                        </p>
                        <a
                          href="tel:4384541412"
                          className="text-white/85 text-sm hover:text-white transition-colors"
                        >
                          438 454 1412
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 sm:gap-4">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 mt-0.5 text-white/90" />
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-1">
                          Courriel
                        </p>
                        <a
                          href="mailto:contact@quartiergeneral.com"
                          className="text-white/85 text-sm hover:text-white transition-colors break-all"
                        >
                          contact@quartiergeneral.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 sm:gap-4">
                      <Clock className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 mt-0.5 text-white/90" />
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-1">
                          Horaires
                        </p>
                        <p className="text-white/85 text-sm leading-relaxed">
                          Lun–Sam 9h–20h
                          <br />
                          Dimanche fermé
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                {...fadeInUp}
                transition={{ delay: 0.1 }}
                className="overflow-hidden border border-black/12 bg-white shadow-sm"
              >
                <div className="flex items-center justify-between gap-3 border-b border-black/10 px-4 py-3 sm:px-5">
                  <span className="text-sm font-semibold text-black">Plan d&apos;accès</span>
                  <a
                    href={GOOGLE_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-medium text-black/60 hover:text-black transition-colors shrink-0"
                  >
                    Ouvrir dans Google Maps
                  </a>
                </div>
                <div className="relative aspect-[4/3] w-full min-h-[220px] bg-neutral-100">
                  <iframe
                    title="Carte — QG Quartier Général, Montréal"
                    src={GOOGLE_MAPS_EMBED_SRC}
                    className="absolute inset-0 h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              </motion.div>

              <motion.div
                {...fadeInUp}
                transition={{ delay: 0.15 }}
                className="border border-black/10 bg-neutral-50 px-5 py-5 sm:px-6 sm:py-6"
              >
                <p className="text-sm font-semibold text-black">Besoin d&apos;aide ?</p>
                <p className="mt-2 text-sm text-black/60 leading-relaxed">
                  Pour le jour même ou une question rapide, appelez-nous ou passez au salon aux
                  heures d&apos;ouverture.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA bas de page */}
      <section className="bg-black text-white py-14 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <motion.div {...fadeInUp}>
            <h3 className="text-xl sm:text-2xl font-bold">Rendez-vous urgent ?</h3>
            <p className="mt-3 text-white/65 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
              Appelez-nous ou réservez en ligne selon ce qui vous arrange.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center max-w-md sm:max-w-none mx-auto">
              <a
                href="tel:4384541412"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-black text-sm font-semibold hover:bg-white/90 transition-colors min-h-[48px]"
              >
                <Phone className="w-5 h-5 shrink-0" />
                438 454 1412
              </a>
              <a
                href={GETSQUIRE_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-white text-white text-sm font-semibold hover:bg-white hover:text-black transition-colors min-h-[48px]"
              >
                Réserver en ligne
                <ExternalLink className="w-5 h-5 shrink-0" aria-hidden />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
