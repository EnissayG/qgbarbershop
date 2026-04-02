import { Link } from "react-router";
import { Scissors, Users, GraduationCap, ArrowRight, Instagram } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { HeroBackgroundCarousel } from "../components/HeroBackgroundCarousel";
import { SectionTopDiagonal } from "../components/SectionTopDiagonal";
import {
  shopBookingUrl,
  shopGoogleUrl,
  shopPhoneDisplay,
  shopPhoneTel,
} from "../config/shopInfo";
import { shopInstagramUrl, shopPhotos } from "../config/shopPhotos";

export function Home() {
  const carouselImages = shopPhotos.carousel;
  const carouselAlts = carouselImages.map(
    (_, i) => `Quartier Général, salon ${i + 1}`
  );

  return (
    <div className="pt-0">
      {/* Hero plein écran (safe areas + dvh/lvh, voir index.css) */}
      <section className="hero-fullscreen-section relative isolate flex w-full items-center max-lg:items-start">
        <div className="hero-fullscreen-media pointer-events-none z-0 overflow-hidden">
          <HeroBackgroundCarousel images={carouselImages} alts={carouselAlts} />
          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-32 -translate-x-8 -skew-x-12 bg-gradient-to-r from-white/10 to-transparent" />
          <div className="pointer-events-none absolute left-20 top-0 z-20 h-full w-16 -skew-x-12 bg-gradient-to-r from-white/5 to-transparent" />
        </div>

        <div className="layout-gutter relative z-30 w-full pb-[max(4rem,calc(env(safe-area-inset-bottom,0px)+2.5rem))] pt-[max(5.5rem,calc(env(safe-area-inset-top,0px)+3.35rem))] sm:pb-[max(5rem,calc(env(safe-area-inset-bottom,0px)+3rem))] sm:pt-24 lg:pb-24 lg:pt-36">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl space-y-8 sm:space-y-10"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-0"
            >
              <img
                src={shopPhotos.logo}
                alt="QG Logo"
                className="h-20 w-auto drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)] lg:h-28"
              />
            </motion.div>

            <h1 className="text-6xl font-black uppercase leading-[0.95] tracking-tighter text-white [text-shadow:0_2px_4px_rgba(0,0,0,0.9),0_8px_48px_rgba(0,0,0,0.75)] sm:text-7xl lg:mb-0 lg:text-9xl">
              Quartier
              <br />
              <span className="text-white/40 [text-shadow:0_2px_4px_rgba(0,0,0,0.85),0_6px_40px_rgba(0,0,0,0.7)]">
                Général
              </span>
            </h1>

            <div className="space-y-4">
              <p className="text-2xl font-black italic text-white [text-shadow:0_2px_32px_rgba(0,0,0,0.9),0_1px_4px_rgba(0,0,0,0.95)] sm:text-3xl lg:text-4xl">
                "Viens juste faire ta tiass"
              </p>
              <p className="text-lg font-light text-white/90 [text-shadow:0_2px_24px_rgba(0,0,0,0.88),0_1px_3px_rgba(0,0,0,0.9)] sm:text-xl lg:text-2xl">
                Barbier moderne, ambiance soignée, Montréal
              </p>
            </div>

            <a
              href={shopGoogleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-b border-white/40 text-sm font-bold uppercase tracking-widest text-white/80 [text-shadow:0_2px_16px_rgba(0,0,0,0.9)] hover:text-white"
            >
              5,0 ★ sur Google · 470+ avis
            </a>

            <div className="flex flex-col gap-5 sm:flex-row sm:gap-4">
              <a
                href={shopBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-white px-8 py-5 text-center font-black uppercase tracking-wider text-black transition-all hover:bg-white/90 sm:px-10"
              >
                <span>Réserver sur Squire</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                to="/services"
                className="inline-flex items-center justify-center border-2 border-white px-8 py-5 text-center font-black uppercase tracking-wider text-white [text-shadow:0_2px_16px_rgba(0,0,0,0.85)] transition-all hover:bg-white hover:text-black hover:[text-shadow:none] sm:px-10"
              >
                <span>Check les prix</span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-sm uppercase tracking-widest z-30 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            Scroll
          </motion.div>
        </motion.div>
      </section>

      {/* About Section - Plus de détails */}
      <section className="section-diagonal-top relative overflow-x-hidden bg-white pb-24 lg:pb-32">
        <SectionTopDiagonal tone="light" variant="slash" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-black transform skew-x-12 translate-x-32 opacity-5" />
        
        <div className="layout-gutter relative z-10">
          <div className="grid items-center gap-y-14 gap-x-12 lg:grid-cols-2 lg:gap-x-20 lg:gap-y-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-7"
            >
              <span className="text-sm uppercase tracking-widest text-black/40 block font-bold">
                Qui sommes-nous
              </span>
              <h2 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase leading-tight">
                Plus qu'un
                <br />
                <span className="text-black/20">Barbershop</span>
              </h2>
              <div className="space-y-5 text-lg leading-relaxed text-black/70 sm:space-y-4">
                <p>
                  Le Quartier Général, c&apos;est un barbershop moderne au look noir et blanc épuré :
                  précision, confort et service professionnel du début à la fin.
                </p>
                <p>
                  Coupes, barbe, line-ups, et tresses sur rendez-vous avec des barbers qui maîtrisent
                  leur craft. On propose aussi des formations encadrées par notre équipe de pros.
                </p>
                <p>
                  Chaque coupe est unique, chaque client devient famille. Bienvenue dans notre quartier général.
                </p>
              </div>
              <Link
                to="/equipe"
                className="group inline-flex items-center gap-2 pt-2 font-bold text-black transition-all hover:gap-4 sm:pt-4"
              >
                <span className="uppercase tracking-widest text-sm">Rencontre l&apos;équipe</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden relative bg-black/10">
                <ImageWithFallback
                  src={shopPhotos.homeAbout}
                  alt="Le QG, ambiance du salon"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-2 flex h-28 w-28 items-center justify-center border-4 border-black bg-white sm:-bottom-6 sm:-right-5 sm:h-32 sm:w-32 lg:-bottom-8 lg:-right-8 lg:h-40 lg:w-40">
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-black tracking-tighter">5+</div>
                  <div className="text-xs uppercase tracking-widest font-bold">Ans</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-diagonal-top relative bg-black pb-[max(6.5rem,calc(env(safe-area-inset-bottom,0px)+4rem))] text-white lg:pb-32">
        <SectionTopDiagonal tone="dark" variant="slashAlt" />
        <div className="layout-gutter">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-sm uppercase tracking-widest text-white/40 mb-4 block font-bold">
              Ce qu'on fait
            </span>
            <h2 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase">
              On est des
              <br />
              <span className="text-white/20">Artistes</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Scissors,
                title: "Coupes & fades",
                desc: "Des fades nets, des contours précis, du classique au plus audacieux, toujours un résultat propre.",
              },
              {
                icon: Users,
                title: "Équipe d'élite",
                desc: "Des barbers passionnés, chacun avec son style. Tresses et spécialités selon le membre de l\u2019équipe.",
              },
              {
                icon: GraduationCap,
                title: "On forme",
                desc: "Tu veux apprendre le métier? On partage notre savoir-faire avec la nouvelle génération.",
              },
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="bg-white/5 p-8 lg:p-10 hover:bg-white hover:text-black transition-all duration-300 h-full">
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-white/10 group-hover:bg-black group-hover:text-white transition-all flex items-center justify-center">
                        <Icon size={32} />
                      </div>
                    </div>
                    <h3 className="text-3xl font-black mb-4 uppercase tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-white/60 group-hover:text-black/70 leading-relaxed transition-colors">
                      {service.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black hover:bg-white/90 transition-all font-black uppercase tracking-wider"
            >
              <span>Voir tous les services</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section - Instagram Style */}
      <section className="section-diagonal-top relative bg-white pb-24 lg:pb-32">
        <SectionTopDiagonal tone="light" variant="slash" />
        <div className="layout-gutter">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase mb-6">
              Le résultat
            </h2>
            <p className="text-xl text-black/60 mb-6">
              Check nos derniers glow-ups sur Insta
            </p>
            <a 
              href={shopInstagramUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-black hover:text-black/70 transition-colors font-bold"
            >
              <Instagram size={24} />
              <span>@quartiergeneralbarbershop</span>
            </a>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-4 lg:gap-4">
            {shopPhotos.gallery.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="aspect-square overflow-hidden group cursor-pointer"
              >
                <ImageWithFallback
                  src={img}
                  alt={`Réalisation QG ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-diagonal-top relative overflow-x-hidden bg-black pb-[max(6.5rem,calc(env(safe-area-inset-bottom,0px)+4rem))] lg:pb-32">
        <SectionTopDiagonal tone="dark" variant="slashAlt" />
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <span className="text-[20rem] lg:text-[30rem] font-black">QG</span>
        </div>

        <div className="layout-gutter relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <h2 className="text-5xl lg:text-8xl font-black tracking-tighter uppercase leading-tight text-white">
              Prêt pour ton
              <br />
              glow-up?
            </h2>
            
            <p className="text-xl lg:text-2xl text-white/60 max-w-2xl mx-auto">
              Passe au QG, on va te faire briller
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <a
                href={shopBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-10 lg:px-12 py-5 lg:py-6 bg-white text-black hover:bg-white/90 transition-all font-black uppercase tracking-wider text-base lg:text-lg"
              >
                <span>Réserver sur Squire</span>
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={`tel:${shopPhoneTel}`}
                className="inline-flex items-center justify-center px-10 lg:px-12 py-5 lg:py-6 border-4 border-white text-white hover:bg-white hover:text-black transition-all font-black uppercase tracking-wider text-base lg:text-lg"
              >
                {shopPhoneDisplay}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}