import { motion } from "motion/react";
import { MapPin, Phone, Clock, Instagram, Zap, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { SectionTopDiagonal } from "../components/SectionTopDiagonal";
import {
  shopAddressLine1,
  shopAddressLine2,
  shopBookingUrl,
  shopGoogleUrl,
  shopMapEmbedUrl,
  shopPhoneDisplay,
  shopPhoneTel,
} from "../config/shopInfo";
import { shopInstagramUrl, shopPhotos } from "../config/shopPhotos";

const metroIconSrc = "/assets/metro-12.svg";

export function Contact() {
  return (
    <div className="overflow-x-hidden">
      <section className="relative overflow-x-hidden bg-black pt-28 sm:pt-32 pb-24 lg:pb-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0">
            <ImageWithFallback
              src={shopPhotos.contactHero}
              alt="Ambiance du salon QG"
              className="h-full w-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70" />
          </div>
          <div className="absolute left-0 top-0 h-full w-32 -translate-x-6 -skew-x-12 bg-white/5 sm:-translate-x-8" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 text-white mb-8">
              <Zap size={20} className="text-yellow-400" />
              <span className="uppercase tracking-widest font-bold text-sm">Walk-ins ok</span>
            </div>

            <h1 className="text-7xl lg:text-9xl font-black tracking-tighter leading-none mb-8 text-white uppercase">
              Passe
              <br />
              <span className="text-white/30">au QG</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
              Réserve sur Squire ou écris en DM le barber de ton choix. Walk-ins selon place.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-x-hidden bg-white py-32">
        <SectionTopDiagonal tone="light" variant="slice" />
        <div className="mx-auto max-w-7xl min-w-0 px-6 lg:px-12">
          <div className="grid min-w-0 grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="min-w-0 space-y-12"
            >
              <div>
                <h2 className="text-5xl font-black tracking-tighter mb-8 uppercase">Trouve-nous</h2>

                <div
                  className="mb-10 flex flex-col gap-4 border-4 border-black bg-black p-6 text-white sm:flex-row sm:items-center"
                  role="status"
                >
                  <div
                    className="flex h-16 w-16 flex-shrink-0 items-center justify-center bg-[#007F4E]"
                    aria-hidden
                  >
                    <img src={metroIconSrc} alt="" className="h-10 w-10 text-white brightness-0 invert" />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-white/70">
                      Métro, ligne verte
                    </p>
                    <p className="mt-1 text-2xl font-black uppercase tracking-tight">À côté de Radisson</p>
                    <p className="mt-2 text-sm text-white/80">
                      Descends à Radisson, le salon est tout près à pied sur Sherbrooke Est.
                    </p>
                  </div>
                </div>

                <div className="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex gap-4"
                  >
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center bg-black">
                      <MapPin size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-xs font-bold uppercase tracking-widest text-black/50">Adresse</h3>
                      <p className="text-xl font-bold">{shopAddressLine1}</p>
                      <p className="text-lg text-black/60">{shopAddressLine2}</p>
                      <a
                        href={shopGoogleUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block text-sm font-bold uppercase tracking-wider text-black hover:text-black/60"
                      >
                        Voir sur Google Maps →
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center bg-black">
                      <Phone size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-xs font-bold uppercase tracking-widest text-black/50">Téléphone</h3>
                      <a href={`tel:${shopPhoneTel}`} className="text-xl font-bold hover:underline">
                        {shopPhoneDisplay}
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex gap-4"
                  >
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center bg-black">
                      <Clock size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-xs font-bold uppercase tracking-widest text-black/50">Heures</h3>
                      <div className="space-y-1 text-black/80">
                        <p>Mer-Ven: 10h - 20h</p>
                        <p>Sam: 9h - 18h</p>
                        <p>Dim: 10h - 17h</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              <div>
                <h3 className="mb-6 text-xs font-bold uppercase tracking-widest text-black/50">Réseaux & avis</h3>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={shopGoogleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-14 w-14 items-center justify-center bg-black transition-all hover:bg-black/80"
                    aria-label="Google, fiche du salon"
                    title="Google"
                  >
                    <ExternalLink size={22} className="text-white" />
                  </a>
                  <a
                    href={shopInstagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-14 w-14 items-center justify-center bg-black transition-all hover:bg-black/80"
                    aria-label="Instagram"
                  >
                    <Instagram size={24} className="text-white" />
                  </a>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <a
                  href={shopBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-3 bg-black py-5 font-black uppercase tracking-wider text-white transition-all hover:bg-black/90"
                >
                  <span>Réserver sur Squire</span>
                </a>
                <a
                  href={shopInstagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-3 border-4 border-black py-5 font-black uppercase tracking-wider text-black transition-all hover:bg-black hover:text-white"
                >
                  <Instagram size={20} />
                  <span>DM Instagram (barber au choix)</span>
                </a>
                <a
                  href={`tel:${shopPhoneTel}`}
                  className="flex w-full items-center justify-center gap-3 border-4 border-black py-5 font-black uppercase tracking-wider text-black transition-all hover:bg-black hover:text-white"
                >
                  <Phone size={20} />
                  <span>Appeler le salon</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex min-w-0 flex-col gap-6"
            >
              <div className="min-w-0 max-w-full">
                <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-black/50">Carte</h3>
                <div className="max-w-full overflow-hidden border-4 border-black bg-black/5 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                  <div className="aspect-[4/3] w-full max-w-full sm:aspect-video">
                    <iframe
                      title="Quartier Général Barbershop sur la carte"
                      src={shopMapEmbedUrl}
                      className="h-full w-full max-w-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
                  </div>
                </div>
                <a
                  href={shopGoogleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-black underline underline-offset-4 hover:text-black/60"
                >
                  Ouvrir dans Google Maps
                  <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mt-24 max-w-4xl border-t-4 border-black pt-16 text-center"
          >
            <h3 className="text-4xl font-black uppercase tracking-tight lg:text-5xl">On se voit bientôt? 👊</h3>
            <p className="mt-6 text-xl text-black/60">
              Passe au QG et découvre pourquoi on est le meilleur spot de Montréal.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
