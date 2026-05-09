import { useState } from "react";
import { usePageSeo } from "../hooks/usePageSeo";
import { motion } from "motion/react";
import { Scissors, Sparkles, Clock, ChevronDown } from "lucide-react";
import { Link } from "react-router";
import { SectionTopDiagonal } from "../components/SectionTopDiagonal";
import { shopPhoneDisplay, shopPhoneTel } from "../config/shopInfo";
import { shopInstagramUrl } from "../config/shopPhotos";

type ServiceItem = {
  slug: string;
  icon: typeof Scissors;
  name: string;
  description: string;
  duration: string;
  price: string;
  extras?: { name: string; price: string }[];
};

const SEO_SERVICES_TITLE =
  "Prix barbier Montréal | Tarifs transparents | Quartier Général Barbershop";
const SEO_SERVICES_DESCRIPTION =
  "Barbier à Montréal avec prix clairs : coupe enfant dès 35$, coupe standard 40$, options ciseaux et lavage, tresses et locs. Quartier Général Barbershop, Sherbrooke Est.";

export function Services() {
  usePageSeo({ title: SEO_SERVICES_TITLE, description: SEO_SERVICES_DESCRIPTION });
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  const services: ServiceItem[] = [
    {
      slug: "coupe-adulte",
      icon: Scissors,
      name: "Coupe adulte",
      description: "La coupe classique, toujours propre. Dégradé, coupe courte, tout ce que tu veux.",
      duration: "45 min",
      price: "40$",
      extras: [
        { name: "Supplément ciseaux", price: "10$" },
        { name: "Supplément lavage", price: "20$" },
      ],
    },
    {
      slug: "line-up",
      icon: Scissors,
      name: "Contours",
      description: "Rafraîchis tes contours, reste net entre deux coupes.",
      duration: "20 min",
      price: "20$",
    },
    {
      slug: "barbe",
      icon: Scissors,
      name: "Barbe",
      description: "Taille, contour, style. Ta barbe n'a jamais été aussi impeccable.",
      duration: "30 min",
      price: "20$",
    },
    {
      slug: "shampooing",
      icon: Sparkles,
      name: "Shampooing",
      description: "Lavage soigné avec produits de qualité.",
      duration: "15 min",
      price: "30$",
    },
    {
      slug: "coupe-enfant",
      icon: Scissors,
      name: "Coupe enfant",
      description: "Pour les jeunes qui veulent être soignés comme les grands.",
      duration: "30 min",
      price: "35$",
    },
    {
      slug: "tresses",
      icon: Sparkles,
      name: "Tresses",
      description:
        "Tresses, nattes et styles protecteurs avec notre spécialiste. Fourchettes indicatives : tresses 60$ à 100$, retwist de locs 80$ à 120$ selon longueur et densité.",
      duration: "Variable",
      price: "Sur devis",
    },
  ];

  return (
    <div className="overflow-x-hidden">
      <section className="page-hero-section relative bg-black">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 h-full w-1/3 translate-x-16 skew-x-12 bg-white/5 sm:translate-x-24 lg:translate-x-32" />
          <div className="absolute bottom-0 left-0 h-1/2 w-1/4 -translate-x-8 -skew-x-12 bg-white/5 sm:-translate-x-12 lg:-translate-x-16" />
        </div>

        <div className="page-hero-inner">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="mb-6 block text-sm font-bold uppercase tracking-widest text-white/60">
              Les tarifs
            </span>
            <h1 className="mb-8 text-6xl font-black uppercase leading-none tracking-tighter text-white lg:text-9xl">
              Nos
              <br />
              <span className="text-white/30">prix</span>
            </h1>
            <p className="max-w-xl text-xl leading-relaxed text-white/80 lg:text-2xl">
              Pas de surprises, que de la qualité. Consulte nos services et réserve ta place.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid - Style diagonal cards */}
      <section className="section-diagonal-top relative overflow-x-hidden bg-white pb-24 lg:pb-32">
        <SectionTopDiagonal tone="light" variant="slash" />
        <div className="layout-gutter min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-4xl lg:text-6xl font-black tracking-tighter uppercase mb-4">
              Nos services
            </h2>
            <p className="text-xl text-black/60">
              Des coupes de qualité, des prix honnêtes
            </p>
            <p className="mt-3 text-sm font-bold uppercase tracking-wider text-black/40 md:hidden">
              Liste compacte : appuie pour ouvrir les détails
            </p>
          </motion.div>

          {/* Mobile : accordéon (moins de scroll) */}
          <div className="space-y-2 md:hidden">
            {services.map((service) => {
              const Icon = service.icon;
              const open = openSlug === service.slug;
              return (
                <div
                  key={service.slug}
                  id={`service-${service.slug}`}
                  className="overflow-hidden border-2 border-black bg-white"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenSlug((s) => (s === service.slug ? null : service.slug))
                    }
                    className="flex w-full items-center gap-3 p-5 text-left transition-colors active:bg-black/5"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-black text-white">
                      <Icon size={22} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="block font-black uppercase tracking-tight">
                        {service.name}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-black/45">
                        {service.duration}
                      </span>
                    </div>
                    <span className="shrink-0 text-xl font-black tabular-nums sm:text-2xl">
                      {service.price}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
                      aria-hidden
                    />
                  </button>
                  {open && (
                    <div className="border-t-2 border-black bg-black px-5 py-6 text-white">
                      <p className="leading-relaxed text-white/85">{service.description}</p>
                      {service.extras && (
                        <div className="mt-4 space-y-2 border-t border-white/20 pt-4 text-sm">
                          {service.extras.map((extra) => (
                            <div
                              key={extra.name}
                              className="flex justify-between gap-4 text-white/65"
                            >
                              <span>{extra.name}</span>
                              <span className="shrink-0 font-black text-white">{extra.price}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      <div className="mt-4 flex items-center gap-2 border-t border-white/20 pt-4 text-sm text-white/55">
                        <Clock size={16} />
                        <span>{service.duration}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Tablette & desktop : grille classique */}
          <div className="hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="group relative"
                >
                  <div className="relative flex h-full flex-col overflow-hidden bg-black p-8 text-white transition-all duration-300 hover:scale-105 lg:p-10">
                    <div className="absolute right-0 top-0 h-20 w-20 translate-x-10 -translate-y-10 rotate-45 bg-white/5" />

                    <div className="relative z-10 flex flex-1 flex-col">
                      <div className="mb-6">
                        <div className="flex h-14 w-14 items-center justify-center bg-white/10 transition-all group-hover:bg-white group-hover:text-black">
                          <Icon size={28} className="transition-colors group-hover:text-black" />
                        </div>
                      </div>

                      <h3 className="mb-3 text-2xl font-black uppercase tracking-tight lg:text-3xl">
                        {service.name}
                      </h3>
                      <p className="mb-6 flex-1 leading-relaxed text-white/70">{service.description}</p>

                      {service.extras && (
                        <div className="mb-4 space-y-1 border-b border-white/20 pb-4 text-sm">
                          {service.extras.map((extra) => (
                            <div key={extra.name} className="flex justify-between text-white/50">
                              <span>{extra.name}</span>
                              <span className="font-bold">{extra.price}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="mt-auto flex items-center justify-between border-t border-white/20 pt-4">
                        <div className="flex items-center gap-2 text-sm text-white/60">
                          <Clock size={16} />
                          <span>{service.duration}</span>
                        </div>
                        <div className="text-3xl font-black tracking-tight lg:text-4xl">
                          {service.price}
                        </div>
                      </div>
                    </div>
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
            className="mt-16 text-center"
          >
            <p className="text-lg text-black/60 mb-6">
              Tous nos services incluent une consultation personnalisée et des produits haut de gamme
            </p>
            <Link
              to="/reserver"
              className="inline-flex items-center justify-center px-10 py-5 bg-black text-white hover:bg-black/90 transition-all font-black uppercase tracking-wider"
            >
              Réserver en ligne (Squire)
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Horaires - Style moderne */}
      <section className="section-diagonal-top relative overflow-x-hidden bg-black pb-[max(6.5rem,calc(env(safe-area-inset-bottom,0px)+4rem))] lg:pb-32">
        <SectionTopDiagonal tone="dark" variant="slashAlt" />
        <div className="layout-gutter min-w-0">
          <div className="grid min-w-0 grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Horaires */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="min-w-0"
            >
              <h2 className="text-5xl lg:text-6xl font-black tracking-tighter mb-12 text-white uppercase">
                Quand on
                <br />
                <span className="text-white/30">est là</span>
              </h2>
              
              <div className="space-y-6">
                {[
                  { day: "Lundi", hours: "11h00 - 19h00", closed: false },
                  { day: "Mardi", hours: "11h00 - 19h00", closed: false },
                  { day: "Mercredi", hours: "11h00 - 19h00", closed: false },
                  { day: "Jeudi", hours: "10h00 - 20h00", closed: false },
                  { day: "Vendredi", hours: "9h00 - 21h00", closed: false },
                  { day: "Samedi", hours: "10h00 - 21h00", closed: false },
                  { day: "Dimanche", hours: "12h00 - 18h00", closed: false },
                ].map((schedule, index) => (
                  <motion.div
                    key={schedule.day}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`flex justify-between items-center py-6 border-b border-white/10 ${
                      schedule.closed ? "opacity-40" : ""
                    }`}
                  >
                    <span className="text-xl lg:text-2xl font-bold text-white">{schedule.day}</span>
                    <span className="text-xl lg:text-2xl font-black text-white/60">{schedule.hours}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Box */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative min-w-0 overflow-x-clip"
            >
              <div className="relative overflow-hidden bg-white p-10 lg:p-16">
                <div className="absolute inset-0 opacity-5">
                  {[...Array(10)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute h-full w-8 bg-black transform -skew-x-12"
                      style={{ left: `${i * 12}%` }}
                    />
                  ))}
                </div>

                <div className="relative z-10 space-y-6">
                  <div className="inline-block px-4 py-2 bg-black text-white">
                    <span className="uppercase tracking-wider font-bold text-xs">Sans rendez-vous possible</span>
                  </div>

                  <h3 className="text-4xl lg:text-5xl font-black tracking-tighter uppercase">
                    Réserve ton
                    <br />
                    rendez-vous
                  </h3>
                  
                  <p className="text-black/60 text-lg leading-relaxed">
                    Réservation en ligne (Squire), ou écris au barbier de ton choix sur Instagram.
                    Sans rendez-vous selon disponibilité.
                  </p>

                  <div className="space-y-3 pt-4">
                    <Link
                      to="/reserver"
                      className="block w-full py-5 bg-black text-white hover:bg-black/90 transition-all text-center font-black uppercase tracking-wider"
                    >
                      Réserver en ligne (Squire)
                    </Link>
                    <a
                      href={shopInstagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full py-5 border-4 border-black text-black hover:bg-black hover:text-white transition-all text-center font-black uppercase tracking-wider"
                    >
                      Écrire sur Instagram (barbier au choix)
                    </a>
                    <a
                      href={`tel:${shopPhoneTel}`}
                      className="block w-full py-5 border-4 border-black text-black hover:bg-black hover:text-white transition-all text-center font-black uppercase tracking-wider"
                    >
                      Appeler : {shopPhoneDisplay}
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="absolute -top-4 -right-4 hidden h-20 w-20 rotate-12 bg-black sm:block sm:h-24 sm:w-24 lg:-top-6 lg:-right-6 lg:h-32 lg:w-32"
                aria-hidden
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Info supplémentaire */}
      <section className="section-diagonal-top relative overflow-x-hidden bg-white pb-24 lg:pb-32">
        <SectionTopDiagonal tone="light" variant="slash" />
        <div className="layout-gutter-narrow min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h3 className="text-3xl lg:text-4xl font-black uppercase text-center">À savoir</h3>
            <div className="grid md:grid-cols-2 gap-6 text-center md:text-left">
              <div className="p-6 bg-black/5">
                <p className="font-bold mb-2">Une équipe qui vit le métier</p>
                <p className="text-black/60 text-sm">Barbiers expérimentés, sur le plancher tous les jours</p>
              </div>
              <div className="p-6 bg-black/5">
                <p className="font-bold mb-2">On accepte cash et cartes</p>
                <p className="text-black/60 text-sm">Paiement facile et sécurisé</p>
              </div>
              <div className="p-6 bg-black/5">
                <p className="font-bold mb-2">Ambiance soignée</p>
                <p className="text-black/60 text-sm">Espace moderne, noir & blanc, service pro</p>
              </div>
              <div className="p-6 bg-black/5">
                <p className="font-bold mb-2">Identifie-nous sur Instagram</p>
                <p className="text-black/60 text-sm">@quartiergeneralbarbershop</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contenu SEO — visible, structuré (pas de texte masqué) */}
      <section
        className="section-diagonal-top relative border-t border-black/10 bg-neutral-100 pb-20 lg:pb-24"
        aria-labelledby="seo-tarifs-heading"
      >
        <SectionTopDiagonal tone="light" variant="slash" />
        <div className="layout-gutter-narrow mx-auto max-w-3xl">
          <h2
            id="seo-tarifs-heading"
            className="mb-6 text-2xl font-black uppercase tracking-tight text-black sm:text-3xl"
          >
            Barbier à Montréal : tarifs clairs et accessibles
          </h2>
          <div className="space-y-5 text-base leading-relaxed text-black/75 sm:text-lg">
            <p>
              Vous cherchez un barbier à Montréal avec des prix clairs et accessibles? Chez Quartier
              Général Barbershop, nous offrons des coupes modernes adaptées à tous les styles, à partir
              de 35$ pour une coupe enfant et 40$ pour une coupe de cheveux standard.
            </p>
            <p>
              Nos services incluent la coupe de cheveux et barbe à 40$, la coupe aux ciseaux à 50$ ainsi
              que la coupe avec lavage à 60$.
            </p>
            <p>
              Pour les services spécialisés, nous proposons les tresses entre 60$ et 100$, ainsi que le
              retwist de locs entre 80$ et 120$, selon la longueur et la densité des cheveux.
            </p>
            <p>
              Nos prix sont transparents afin que vous sachiez exactement combien coûte votre service,
              sans surprise.
            </p>
            <p>
              Situé à Montréal, notre salon est spécialisé dans les cheveux afro, bouclés et texturés,
              avec une équipe de barbiers professionnels qui vous garantit un résultat précis et adapté à
              votre style.
            </p>
            <p>
              Que ce soit pour une coupe rapide, un entretien de barbe ou un service de locs, nous
              offrons un excellent rapport qualité-prix pour un barbier à Montréal.
            </p>
          </div>
        </div>
      </section>

      {/* Slogan Section */}
      <section className="section-diagonal-top relative overflow-x-hidden bg-black pb-[max(6.5rem,calc(env(safe-area-inset-bottom,0px)+4rem))] lg:pb-32">
        <SectionTopDiagonal tone="dark" variant="slashAlt" />
        <div className="layout-gutter min-w-0 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl lg:text-7xl font-black tracking-tighter text-white mb-8 italic">
              &quot;Viens juste faire ta tiass&quot;
            </h2>
            <p className="text-xl text-white/60 mb-8">
              Au QG, on te transforme
            </p>
            <Link
              to="/reserver"
              className="inline-flex items-center justify-center px-12 py-6 bg-white text-black hover:bg-white/90 transition-all font-black uppercase tracking-wider"
            >
              Réserver maintenant
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
