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
      {/* Hero plein écran sous le header flottant */}
      <section className="relative flex min-h-[100dvh] items-center overflow-hidden">
        {/* Carousel Background */}
        <div className="absolute inset-0 min-h-[100dvh] w-full">
          <HeroBackgroundCarousel images={carouselImages} alts={carouselAlts} />
          {/* Voile plus léger que l’original (via-black/80) pour laisser voir les photos */}
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/45 to-transparent" />
        </div>

        <div className="pointer-events-none absolute top-0 left-0 z-20 h-full w-32 -translate-x-8 -skew-x-12 bg-gradient-to-r from-white/10 to-transparent" />
        <div className="pointer-events-none absolute top-0 left-20 z-20 h-full w-16 -skew-x-12 bg-gradient-to-r from-white/5 to-transparent" />

        <div className="relative z-30 mx-auto w-full max-w-7xl px-6 pb-20 pt-28 sm:pt-32 lg:px-12 lg:pb-24 lg:pt-36">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <img 
                src={shopPhotos.logo} 
                alt="QG Logo" 
                className="h-20 lg:h-28 w-auto"
              />
            </motion.div>

            <h1 className="text-7xl lg:text-9xl font-black tracking-tighter text-white mb-6 leading-none uppercase">
              Quartier
              <br />
              <span className="text-white/30">Général</span>
            </h1>

            <div className="mb-8">
              <p className="text-3xl lg:text-4xl text-white font-black mb-2 italic">
                "Viens juste faire ta tiass"
              </p>
              <p className="text-xl lg:text-2xl text-white/70 font-light">
                Barbier moderne, ambiance soignée, Montréal
              </p>
            </div>

            <a
              href={shopGoogleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mb-4 text-sm uppercase tracking-widest text-white/50 hover:text-white/80 font-bold border-b border-white/30"
            >
              5,0 ★ sur Google · 470+ avis
            </a>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={shopBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-10 py-5 bg-white text-black hover:bg-white/90 transition-all inline-flex items-center justify-center gap-3 font-black uppercase tracking-wider text-center"
              >
                <span>Réserver sur Squire</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                to="/services"
                className="px-10 py-5 border-2 border-white text-white hover:bg-white hover:text-black transition-all inline-flex items-center justify-center font-black uppercase tracking-wider text-center"
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
      <section className="relative bg-white py-24 lg:py-32 overflow-x-hidden">
        <SectionTopDiagonal tone="light" variant="slash" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-black transform skew-x-12 translate-x-32 opacity-5" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <span className="text-sm uppercase tracking-widest text-black/40 block font-bold">
                Qui sommes-nous
              </span>
              <h2 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase leading-tight">
                Plus qu'un
                <br />
                <span className="text-black/20">Barbershop</span>
              </h2>
              <div className="space-y-4 text-lg text-black/70 leading-relaxed">
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
                className="inline-flex items-center gap-2 text-black hover:gap-4 transition-all group pt-4 font-bold"
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
              <div className="absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8 w-32 h-32 lg:w-40 lg:h-40 bg-white border-4 border-black flex items-center justify-center">
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
      <section className="relative bg-black py-24 lg:py-32 text-white">
        <SectionTopDiagonal tone="dark" variant="slashAlt" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
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
      <section className="relative bg-white py-24 lg:py-32">
        <SectionTopDiagonal tone="light" variant="slice" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4">
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
      <section className="relative overflow-x-hidden bg-black py-24 lg:py-32">
        <SectionTopDiagonal tone="dark" variant="slash" />
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <span className="text-[20rem] lg:text-[30rem] font-black">QG</span>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
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