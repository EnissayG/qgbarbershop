import { motion } from "motion/react";
import { Scissors, Sparkles, Clock } from "lucide-react";
import { Link } from "react-router";
import { SectionTopDiagonal } from "../components/SectionTopDiagonal";
import {
  shopBookingUrl,
  shopPhoneDisplay,
  shopPhoneTel,
} from "../config/shopInfo";
import { shopInstagramUrl } from "../config/shopPhotos";

export function Services() {
  const services = [
    {
      icon: Scissors,
      name: "Coupe adulte",
      description: "Le cut classique, toujours fresh. Fade, taper, tout ce que tu veux.",
      duration: "45 min",
      price: "40$",
      extras: [
        { name: "Extra ciseaux", price: "5$" },
        { name: "Extra lavage", price: "25$" },
      ],
    },
    {
      icon: Scissors,
      name: "Line up",
      description: "Rafraîchis tes contours, reste sharp entre deux coupes.",
      duration: "20 min",
      price: "20$",
    },
    {
      icon: Scissors,
      name: "Barbe",
      description: "Taille, contour, style. Ta barbe jamais été aussi clean.",
      duration: "30 min",
      price: "20$",
    },
    {
      icon: Sparkles,
      name: "Shampooing",
      description: "Lavage premium avec produits de qualité.",
      duration: "15 min",
      price: "30$",
    },
    {
      icon: Scissors,
      name: "Coupe enfant",
      description: "Pour les p'tits qui veulent être fresh comme papa.",
      duration: "30 min",
      price: "30$",
    },
    {
      icon: Sparkles,
      name: "Tresses",
      description:
        "Tresses, nattes et styles protecteurs, avec notre barber spécialisée (Hauz of Tanz). Durée et tarif selon le style.",
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
              Pas de surprises, que de la qualité. Check nos services et book ton spot
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid - Style diagonal cards */}
      <section className="relative overflow-x-hidden bg-white py-24 lg:py-32">
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
              Des cuts de qualité, des prix honnêtes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="group relative"
                >
                  <div className="bg-black p-8 lg:p-10 text-white hover:scale-105 transition-all duration-300 relative overflow-hidden h-full flex flex-col">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 transform rotate-45 translate-x-10 -translate-y-10" />
                    
                    <div className="relative z-10 flex-1 flex flex-col">
                      <div className="mb-6">
                        <div className="w-14 h-14 bg-white/10 group-hover:bg-white group-hover:text-black transition-all flex items-center justify-center">
                          <Icon size={28} className="group-hover:text-black transition-colors" />
                        </div>
                      </div>
                      
                      <h3 className="text-2xl lg:text-3xl font-black mb-3 uppercase tracking-tight">
                        {service.name}
                      </h3>
                      <p className="text-white/70 mb-6 leading-relaxed flex-1">
                        {service.description}
                      </p>
                      
                      {service.extras && (
                        <div className="mb-4 space-y-1 text-sm pb-4 border-b border-white/20">
                          {service.extras.map((extra) => (
                            <div key={extra.name} className="flex justify-between text-white/50">
                              <span>{extra.name}</span>
                              <span className="font-bold">{extra.price}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between pt-4 border-t border-white/20 mt-auto">
                        <div className="flex items-center gap-2 text-sm text-white/60">
                          <Clock size={16} />
                          <span>{service.duration}</span>
                        </div>
                        <div className="text-3xl lg:text-4xl font-black tracking-tight">{service.price}</div>
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
              Tous nos services incluent une consultation personnalisée et des produits premium
            </p>
            <a
              href={shopBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-5 bg-black text-white hover:bg-black/90 transition-all font-black uppercase tracking-wider"
            >
              Réserver sur Squire
            </a>
          </motion.div>
        </div>
      </section>

      {/* Horaires - Style moderne */}
      <section className="relative overflow-x-hidden bg-black pt-24 pb-[max(6.5rem,calc(env(safe-area-inset-bottom,0px)+4rem))] lg:py-32">
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
                  { day: "Lun - Mar", hours: "Fermé", closed: true },
                  { day: "Mer - Ven", hours: "10h - 20h", closed: false },
                  { day: "Samedi", hours: "9h - 18h", closed: false },
                  { day: "Dimanche", hours: "10h - 17h", closed: false },
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
                    <span className="uppercase tracking-wider font-bold text-xs">Walk-ins ok</span>
                  </div>

                  <h3 className="text-4xl lg:text-5xl font-black tracking-tighter uppercase">
                    Book ton
                    <br />
                    spot
                  </h3>
                  
                  <p className="text-black/60 text-lg leading-relaxed">
                    Réservation en ligne sur Squire, ou message Instagram au barber de ton choix.
                    Walk-ins selon disponibilité.
                  </p>

                  <div className="space-y-3 pt-4">
                    <a
                      href={shopBookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full py-5 bg-black text-white hover:bg-black/90 transition-all text-center font-black uppercase tracking-wider"
                    >
                      Réserver sur Squire
                    </a>
                    <a
                      href={shopInstagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full py-5 border-4 border-black text-black hover:bg-black hover:text-white transition-all text-center font-black uppercase tracking-wider"
                    >
                      DM Instagram (barber au choix)
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
      <section className="relative overflow-x-hidden bg-white py-24">
        <SectionTopDiagonal tone="light" variant="slice" />
        <div className="layout-gutter-narrow min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h3 className="text-3xl lg:text-4xl font-black uppercase text-center">Good to know</h3>
            <div className="grid md:grid-cols-2 gap-6 text-center md:text-left">
              <div className="p-6 bg-black/5">
                <p className="font-bold mb-2">Une équipe qui vit le métier</p>
                <p className="text-black/60 text-sm">Barbers expérimentés, sur le plancher tous les jours</p>
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
                <p className="font-bold mb-2">Tag-nous sur Instagram</p>
                <p className="text-black/60 text-sm">@quartiergeneralbarbershop</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Slogan Section */}
      <section className="relative overflow-x-hidden bg-black pt-24 pb-[max(6.5rem,calc(env(safe-area-inset-bottom,0px)+4rem))] lg:py-32">
        <SectionTopDiagonal tone="dark" variant="slash" />
        <div className="layout-gutter min-w-0 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl lg:text-7xl font-black tracking-tighter text-white mb-8 italic">
              "Viens juste faire ta tiass"
            </h2>
            <p className="text-xl text-white/60 mb-8">
              Au QG, on te transforme
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-12 py-6 bg-white text-black hover:bg-white/90 transition-all font-black uppercase tracking-wider"
            >
              Réserve maintenant
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
