import { Link } from "react-router";
import { Scissors, Users, GraduationCap, ArrowRight, Instagram } from "lucide-react";
import { motion } from "motion/react";
import { usePageSeo } from "../hooks/usePageSeo";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { SectionTopDiagonal } from "../components/SectionTopDiagonal";
import { shopGoogleUrl, shopPhoneDisplay, shopPhoneTel } from "../config/shopInfo";
import { shopInstagramUrl, shopPhotos } from "../config/shopPhotos";

const SEO_HOME_TITLE = "Quartier Général Barbershop | Barbier et salon Montréal Est";
const SEO_HOME_DESCRIPTION =
  "Barbershop à Montréal Est : coupes précises, cheveux afro et texturés, tresses et locs. Équipe pro, réservation en ligne. Quartier Général Barbershop, Sherbrooke Est.";

export function Home() {
  usePageSeo({ title: SEO_HOME_TITLE, description: SEO_HOME_DESCRIPTION });

  return (
    <div className="pt-0">
      {/* Hero — Orienté conversion, photo de fond, responsive */}
      <section className="hero-fullscreen-section relative isolate flex w-full items-center overflow-hidden bg-black">
        {/* Photo de fond + voiles */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <ImageWithFallback
            src={shopPhotos.heroBanner}
            alt=""
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/10 to-black/55" />
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-white/25" />

        <div className="layout-gutter relative z-20 w-full pb-[max(4rem,calc(env(safe-area-inset-bottom,0px)+2.5rem))] pt-[max(5.75rem,calc(env(safe-area-inset-top,0px)+3.75rem))] sm:pb-[max(5rem,calc(env(safe-area-inset-bottom,0px)+3rem))] sm:pt-24 lg:pb-24 lg:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid items-center gap-10 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px]"
          >
            {/* Colonne gauche : identité + CTA mobile */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <motion.img
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                src={shopPhotos.logo}
                alt="Quartier Général Barbershop"
                className="mb-6 h-16 w-auto sm:h-20 lg:h-24"
              />

              <span className="mb-5 inline-block bg-white px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-black">
                Montréal — Sherbrooke Est
              </span>

              <h1 className="mb-6 font-black uppercase leading-[0.88] tracking-tight text-white text-[clamp(2.75rem,9vw,5.75rem)]">
                Quartier Général
                <br />
                <span className="text-white/40">Barbershop</span>
              </h1>

              <p className="mb-8 max-w-md text-base leading-relaxed text-white/75 sm:text-lg">
                Coupes précises, service soigné, ambiance professionnelle. Réserve en ligne et
                choisis ton barbier.
              </p>

              {/* CTA mobile — caché sur desktop */}
              <div className="w-full space-y-3 lg:hidden">
                <Link
                  to="/reserver"
                  className="group inline-flex w-full items-center justify-center gap-3 bg-white px-8 py-5 font-black uppercase tracking-wider text-black transition-all hover:bg-white/95 active:scale-[0.99] sm:text-lg"
                >
                  <span>Réserver maintenant</span>
                  <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href={`tel:${shopPhoneTel}`}
                  className="inline-flex w-full items-center justify-center border-2 border-white/35 px-8 py-4 font-bold uppercase tracking-wider text-white/80 transition-all hover:border-white hover:text-white"
                >
                  {shopPhoneDisplay}
                </a>
              </div>

              {/* Preuve sociale */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:mt-0 lg:justify-start">
                <a
                  href={shopGoogleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-white/20 bg-white/10 px-4 py-2.5 backdrop-blur-sm transition-colors hover:bg-white/20"
                >
                  <span className="tracking-wide text-yellow-400">★★★★★</span>
                  <span className="text-sm font-black text-white">470+ avis Google</span>
                </a>
              </div>
            </div>

            {/* Colonne droite : carte réservation — desktop uniquement */}
            <div className="hidden lg:flex lg:flex-col border-4 border-white bg-black/85 p-8 shadow-[12px_12px_0_0_rgba(255,255,255,0.12)] xl:p-10">
              <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-white/50">
                Réservation prioritaire
              </p>
              <h2 className="mb-3 text-3xl font-black uppercase tracking-tight text-white xl:text-4xl">
                Réserver maintenant
              </h2>
              <p className="mb-7 text-sm leading-relaxed text-white/60">
                Disponibilités en temps réel. Choisis ton barbier, ton service, ton créneau.
              </p>

              <div className="space-y-3">
                <Link
                  to="/reserver"
                  className="group inline-flex w-full items-center justify-center gap-3 bg-white px-6 py-5 font-black uppercase tracking-wider text-black transition-all hover:bg-white/93"
                >
                  <span>Réserver maintenant</span>
                  <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href={`tel:${shopPhoneTel}`}
                  className="inline-flex w-full items-center justify-center border-2 border-white px-6 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-white hover:text-black"
                >
                  Appeler : {shopPhoneDisplay}
                </a>
              </div>

              <p className="mt-5 text-xs font-bold uppercase tracking-wider text-white/40">
                Squire · Réservation sécurisée · Sans frais
              </p>
            </div>
          </motion.div>
        </div>
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
                Un vrai
                <br />
                <span className="text-black/20">barbershop</span>
              </h2>
              <div className="space-y-5 text-lg leading-relaxed text-black/70 sm:space-y-4">
                <p>
                  Le Quartier Général Barbershop est un salon où la priorité reste la même depuis le
                  jour un : offrir des coupes de qualité, propres, précises et adaptées à chaque client.
                  Le résultat final est au centre de tout ce qu&apos;on fait. Chaque détail compte, et rien
                  n&apos;est laissé au hasard.
                </p>
                <p>
                  Mais ce qui fait vraiment la différence, c&apos;est l&apos;expérience humaine. On a construit
                  un environnement où tu peux te sentir à l&apos;aise dès que tu rentres : prendre ton temps,
                  discuter, relaxer, et connecter avec ton barbier.
                </p>
                <p>
                  Beaucoup de nos clients ne viennent pas seulement pour une coupe, mais pour le moment
                  qu&apos;ils passent ici : les conversations, l&apos;ambiance, le respect, et l&apos;accueil.
                  Notre équipe prend son métier au sérieux, dans la qualité du travail comme dans
                  l&apos;approche humaine.
                </p>
              </div>
              <Link
                to="/equipe"
                className="group inline-flex items-center gap-2 pt-2 font-bold text-black transition-all hover:gap-4 sm:pt-4"
              >
                <span className="uppercase tracking-widest text-sm">Notre équipe</span>
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
              <span className="text-white/20">Artisans</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Scissors,
                title: "Coupes et dégradés",
                desc: "Des dégradés nets, des contours précis, du classique au plus audacieux, toujours un résultat propre.",
              },
              {
                icon: Users,
                title: "Équipe d'élite",
                desc: "Des barbiers passionnés, chacun avec son style. Tresses et spécialités selon le membre de l\u2019équipe.",
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

      {/* Galerie type fil Instagram */}
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
              Nos dernières coupes et finitions sur Instagram
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

      {/* Contenu SEO — visible, structuré */}
      <section
        className="section-diagonal-top relative border-t border-black/10 bg-neutral-100 pb-16 lg:pb-20"
        aria-labelledby="seo-accueil-heading"
      >
        <SectionTopDiagonal tone="light" variant="slash" />
        <div className="layout-gutter-narrow mx-auto max-w-3xl">
          <h2
            id="seo-accueil-heading"
            className="mb-6 text-2xl font-black uppercase tracking-tight text-black sm:text-3xl"
          >
            Salon de barbier à Montréal — Quartier Général
          </h2>
          <div className="space-y-5 text-base leading-relaxed text-black/75 sm:text-lg">
            <p>
              Bienvenue chez Quartier Général Barbershop, reconnu comme le meilleur salon de coiffure à
              Montréal pour ceux qui recherchent une coupe précise, moderne et adaptée à leur style.
            </p>
            <p>
              Situé dans l&apos;est de Montréal, notre barbershop est considéré comme un salon premium,
              offrant une expérience professionnelle et un service de haute qualité dans un environnement
              soigné.
            </p>
            <p>
              Notre équipe est spécialisée dans la coupe de cheveux afro, lisses et bouclés, avec une
              maîtrise des techniques modernes comme les dégradés, les finitions nettes et les coupes
              personnalisées.
            </p>
            <p>
              En plus des services de barbier, nous avons également des coiffeuses expérimentées qui
              proposent des services comme les tresses ainsi que l&apos;entretien et le retwist de locs,
              adaptés à votre style et à vos besoins.
            </p>
            <p>
              Que vous cherchiez une coupe de cheveux, une taille de barbe ou un service spécialisé,
              Quartier Général Barbershop à Montréal vous garantit un résultat précis, constant et à la
              hauteur des standards d&apos;un barbershop premium.
            </p>
            <p>
              Faites confiance à une équipe reconnue dans l&apos;est de Montréal pour son
              professionnalisme, sa constance et la qualité de ses services.
            </p>
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
              changement de style ?
            </h2>
            
            <p className="text-xl lg:text-2xl text-white/60 max-w-2xl mx-auto">
              Passe au QG pour repartir avec une coupe réussie
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link
                to="/reserver"
                className="group inline-flex items-center justify-center gap-3 px-10 lg:px-12 py-5 lg:py-6 bg-white text-black hover:bg-white/90 transition-all font-black uppercase tracking-wider text-base lg:text-lg"
              >
                <span>Réserver en ligne (Squire)</span>
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </Link>
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