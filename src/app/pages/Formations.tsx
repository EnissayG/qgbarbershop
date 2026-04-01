import { motion } from "motion/react";
import { GraduationCap, Users, CheckCircle2, Calendar, MapPin, Scissors } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { SectionTopDiagonal } from "../components/SectionTopDiagonal";
import { shopBookingUrl } from "../config/shopInfo";
import { shopInstagramUrl, shopPhotos } from "../config/shopPhotos";

export function Formations() {
  return (
    <div className="overflow-x-hidden">
      <section className="page-hero-section relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 transform skew-x-12 translate-x-32" />
          <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-white/5 transform -skew-x-12 -translate-x-16" />
        </div>

        <div className="page-hero-inner">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 text-white mb-8">
              <GraduationCap size={20} />
              <span className="uppercase tracking-widest font-bold text-sm">QG Academy</span>
            </div>

            <h1 className="text-6xl lg:text-9xl font-black tracking-tighter leading-none mb-8 text-white uppercase">
              Apprends
              <br />
              <span className="text-white/30">Le métier</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/80 leading-relaxed max-w-2xl">
              On forme la prochaine génération de barbers d'élite. 
              Si t'as la passion, on t'apprend le reste
            </p>
          </motion.div>
        </div>
      </section>

      {/* Formation principale - Hybride 1000$ */}
      <section className="relative bg-white py-24 lg:py-32">
        <SectionTopDiagonal tone="light" variant="slashAlt" />
        <div className="layout-gutter">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-6 py-2 bg-black text-white mb-6">
              <span className="uppercase tracking-wider font-bold text-sm">Programme QG Academy</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase mb-4">
              Formation
              <br />
              <span className="text-black/30">Barber</span>
            </h2>
            <p className="text-xl text-black/60">
              Techniques de coupe, marketing et branding
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Image */}
              <div className="relative">
                <div className="aspect-[4/5] overflow-hidden bg-black/10">
                  <ImageWithFallback
                    src={shopPhotos.formationFlyer}
                    alt="Formation au QG, sur le terrain"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-black text-white flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-black">1000$</div>
                    <div className="text-xs uppercase tracking-widest">Prix</div>
                  </div>
                </div>
              </div>

              {/* Détails */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-black uppercase mb-4">Programme Hybride</h3>
                  <p className="text-lg text-black/70 leading-relaxed mb-6">
                    Des sessions animées par les barbers du QG, techniques réelles, en conditions de salon, avec
                    la même exigence qu&apos;au comptoir.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-black/5">
                      <Calendar size={24} className="flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold mb-1">Format hybride</p>
                        <p className="text-black/60 text-sm">Cours en ligne et sessions pratiques en personne</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-black/5">
                      <Users size={24} className="flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold mb-1">Petits groupes</p>
                        <p className="text-black/60 text-sm">Attention personnalisée pour chaque élève</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-black/5">
                      <Scissors size={24} className="flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold mb-1">Sur le terrain, avec l&apos;équipe QG</p>
                        <p className="text-black/60 text-sm">
                          Techniques et routines utilisées au salon chaque jour, apprentissage orienté résultat.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-black/5">
                      <MapPin size={24} className="flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold mb-1">7072 rue Sherbrooke Est</p>
                        <p className="text-black/60 text-sm">Montréal, QC H1N 1E6, sessions pratiques au QG</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-black/10">
                  <h4 className="text-lg font-black uppercase mb-4">Ce que tu vas apprendre</h4>
                  <ul className="space-y-3">
                    {[
                      "Techniques de coupe professionnelles",
                      "Fades, tapers et designs",
                      "Taille et entretien de barbe",
                      "Marketing et branding personnel",
                      "Gestion de clientèle",
                      "Création de contenu pour réseaux sociaux",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="flex-shrink-0 mt-0.5" />
                        <span className="text-black/70">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <a
                    href={shopInstagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-5 bg-black text-white hover:bg-black/90 transition-all text-center font-black uppercase tracking-wider"
                  >
                    DM pour infos
                  </a>
                  <a
                    href="mailto:academy@qgbarbershop.com"
                    className="flex-1 py-5 border-4 border-black text-black hover:bg-black hover:text-white transition-all text-center font-black uppercase tracking-wider"
                  >
                    Email nous
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Formations à l'annonce */}
      <section className="relative bg-black pt-24 pb-[max(6.5rem,calc(env(safe-area-inset-bottom,0px)+4rem))] lg:py-32">
        <SectionTopDiagonal tone="dark" variant="slash" />
        <div className="layout-gutter">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase text-white mb-6">
              Autres
              <br />
              <span className="text-white/30">Formations</span>
            </h2>
            <p className="text-xl text-white/60">
              On offre aussi des formations spécialisées annoncées sur nos réseaux sociaux
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 lg:p-10 space-y-6"
            >
              <div className="inline-block px-4 py-2 bg-black text-white">
                <span className="uppercase tracking-wider font-bold text-xs">À l'annonce</span>
              </div>

              <h3 className="text-3xl font-black uppercase">Masterclass & Workshops</h3>
              
              <p className="text-black/70 leading-relaxed">
                On organise régulièrement des masterclass et workshops sur des techniques spécifiques. 
                Suis-nous sur Instagram pour ne rien manquer.
              </p>

              <ul className="space-y-3 text-black/60">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="flex-shrink-0 mt-0.5" />
                  <span>Techniques avancées de fade</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="flex-shrink-0 mt-0.5" />
                  <span>Designs créatifs et motifs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="flex-shrink-0 mt-0.5" />
                  <span>Rasage traditionnel</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="flex-shrink-0 mt-0.5" />
                  <span>Content creation pour barbers</span>
                </li>
              </ul>

              <div className="pt-4">
                <p className="text-sm text-black/50 mb-4">Inscriptions sur Instagram</p>
                <a
                  href={shopInstagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 border-4 border-black text-black hover:bg-black hover:text-white transition-all text-center font-black uppercase tracking-wider"
                >
                  @quartiergeneralbarbershop
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 lg:p-10 space-y-6"
            >
              <div className="inline-block px-4 py-2 bg-black text-white">
                <span className="uppercase tracking-wider font-bold text-xs">Flexibilité</span>
              </div>

              <h3 className="text-3xl font-black uppercase">Horaires Personnalisés</h3>
              
              <p className="text-black/70 leading-relaxed">
                On comprend que tout le monde a des horaires différents. 
                On adapte nos formations selon ta disponibilité.
              </p>

              <ul className="space-y-3 text-black/60">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="flex-shrink-0 mt-0.5" />
                  <span>Sessions de jour ou de soir</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="flex-shrink-0 mt-0.5" />
                  <span>Weekends disponibles</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="flex-shrink-0 mt-0.5" />
                  <span>Formation intensive ou étalée</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="flex-shrink-0 mt-0.5" />
                  <span>Mentorat one-on-one disponible</span>
                </li>
              </ul>

              <div className="pt-4">
                <p className="text-sm text-black/50 mb-4">Contact direct</p>
                <a
                  href={shopInstagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 border-4 border-black text-black hover:bg-black hover:text-white transition-all text-center font-black uppercase tracking-wider"
                >
                  @quartiergeneralbarbershop
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative bg-white py-24 lg:py-32">
        <SectionTopDiagonal tone="light" variant="slice" />
        <div className="layout-gutter-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-black tracking-tighter uppercase mb-4">
              Questions?
            </h2>
            <p className="text-black/60">On a les réponses</p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                q: "J'ai besoin d'expérience avant?",
                a: "Non, on part de zéro. Si t'as la passion et la motivation, on s'occupe de tout le reste.",
              },
              {
                q: "Je dois apporter mes outils?",
                a: "On fournit tout pendant la formation. Tu recevras une liste pour ton kit personnel après.",
              },
              {
                q: "Y'a des plans de paiement?",
                a: "Oui, on offre des options flexibles. DM nous pour en discuter.",
              },
              {
                q: "Qui anime les formations ?",
                a: "L'équipe du QG : les mêmes barbers qu'au salon, pour un coaching concret et un suivi du début à la fin.",
              },
              {
                q: "Comment je m'inscris?",
                a: "Envoie-nous un DM sur Instagram ou un email. On te donnera tous les détails.",
              },
            ].map((faq, index) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="border-b-2 border-black/10 pb-6 last:border-0"
              >
                <h3 className="text-xl lg:text-2xl font-black mb-3 uppercase tracking-tight">{faq.q}</h3>
                <p className="text-black/70 leading-relaxed text-lg">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-x-hidden bg-black pt-24 pb-[max(6.5rem,calc(env(safe-area-inset-bottom,0px)+4rem))] lg:py-32">
        <SectionTopDiagonal tone="dark" variant="slashAlt" />
        <div className="absolute inset-0 opacity-5">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute h-full w-8 bg-white transform -skew-x-12"
              style={{ left: `${i * 8}%` }}
            />
          ))}
        </div>

        <div className="layout-gutter-narrow relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <h2 className="text-5xl lg:text-8xl font-black tracking-tighter uppercase text-white leading-tight">
              Ready to
              <br />
              learn?
            </h2>
            
            <p className="text-xl lg:text-2xl text-white/70 max-w-2xl mx-auto">
              Les inscriptions sont ouvertes. DM nous pour réserver ta place
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 flex-wrap">
              <a
                href={shopInstagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 lg:px-12 py-5 lg:py-6 bg-white text-black hover:bg-white/90 transition-all font-black uppercase tracking-wider"
              >
                DM Instagram
              </a>
              <a
                href={shopBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 lg:px-12 py-5 lg:py-6 border-4 border-white text-white hover:bg-white hover:text-black transition-all font-black uppercase tracking-wider text-center"
              >
                Réserver une coupe (Squire)
              </a>
              <a
                href="mailto:academy@qgbarbershop.com"
                className="px-10 lg:px-12 py-5 lg:py-6 border-4 border-white text-white hover:bg-white hover:text-black transition-all font-black uppercase tracking-wider text-center"
              >
                Email Academy
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}