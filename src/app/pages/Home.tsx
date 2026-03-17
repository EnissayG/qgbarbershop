import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { Scissors, Clock, MapPin, Star, ArrowRight, Quote } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState } from "react";

export function Home() {
  const ASSET_BASE = import.meta.env.BASE_URL;
  const [showAllReviews, setShowAllReviews] = useState(false);
  const MOBILE_REVIEW_LIMIT = 4;
  const fadeInUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.45 }
  };

  const services = [
    { name: "Coupe adulte", price: "40$", duration: "45min" },
    { name: "Coupe enfant", price: "30$", duration: "30min" },
    { name: "Barbe", price: "20$", duration: "20min" },
    { name: "Line up", price: "20$", duration: "15min" },
    { name: "Shampoing", price: "30$", duration: "20min" },
  ];

  const reviews = [
    {
      name: "Kolosia Fagba",
      rating: 5,
      text: "Première fois que je viens dans ce barber shop et honnêtement je suis vraiment impressionné. Le service est professionnel, l'accueil est chaleureux et le barbier prend vraiment le temps de bien faire les choses. La coupe est propre, précise …",
      date: "Il y a 1 semaine"
    },
    {
      name: "Yahia H.",
      rating: 5,
      text: "Tout simplement le meilleur salon de coiffure en ville ! Une ambiance très agréable, équipements et décor de qualité, mais surtout, un service offert exceptionnel. Khalid & Benz les 2 propriétaires font un travail colossal et ça parait …",
      date: "Il y a 1 mois"
    },
    {
      name: "Esteban LaBanane",
      rating: 5,
      text: "Excellent barber ! Lennox est très talentueux, à l'écoute et minutieux dans son travail. Il prend vraiment le temps de comprendre ce que tu veux et le résultat est toujours clean. Le salon est impeccable et l'ambiance est super agréable. Je recommande sans hésiter.",
      date: "Il y a 2 mois"
    },
    {
      name: "Japhiflyy",
      rating: 5,
      text: "Lennox est le meilleur barbier. Il est passionné par ce qu'il fait ! Sa coiffure est toujours wow. Pour moi, c'est le meilleur barbier du salon. Je vous le recommande sans hésitation.",
      date: "Il y a 2 mois"
    },
    {
      name: "Steaven Milfort",
      rating: 5,
      text: "Ça va bientôt faire un an que je suis avec Lennox et le service est toujours impeccable. Il fait exactement ce qui est demandé et il est très professionnel tout en étant proche de ses clients. Je recommande vivement …",
      date: "Il y a 3 mois"
    },
    {
      name: "Thomas Fonseca",
      rating: 5,
      text: "Première visite et certainement pas la dernière. L'ambiance est relax, Miaki est attentif aux détails et la coupe est exactement ce que je cherchais. Très bon rapport qualité-prix aussi. Vraiment une belle découverte …",
      date: "Il y a 3 mois"
    },
    {
      name: "Mylo-Elijah Tshinkola",
      rating: 5,
      text: "J'ai eu une excellente expérience avec Lennox ! Il coiffe très bien mais il est aussi bon pour mettre ses clients à l'aise en tenant des conversations avec eux. Je vous conseille fort ce barbershop !",
      date: "Il y a 2 mois"
    },
    {
      name: "Gabrielle Dubé",
      rating: 5,
      text: "Lennox meilleur barber, service impeccable et toujours une coupe à la hauteur. Ambiance chill, professionnel et à l'écoute. Je recommande à 100 %.",
      date: "Il y a 2 mois"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section - Asymmetric Layout */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white" />
        
        {/* Cercles décoratifs – le cercle gauche descend jusqu’en bas */}
        {/* Cercles discrets – sans prendre trop de place */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.04, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-black"
          aria-hidden
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.06, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.15 }}
          className="absolute -left-24 -bottom-32 w-72 h-72 rounded-full bg-black"
          aria-hidden
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.03, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="absolute left-[15%] bottom-[20%] w-40 h-40 rounded-full bg-black"
          aria-hidden
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 backdrop-blur-sm"
              >
                <Scissors className="w-4 h-4 text-black" />
                <span className="text-sm font-medium text-black">Depuis 2024</span>
              </motion.div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black leading-[1.1] tracking-tight">
                L'Art du
                <br />
                <span className="italic">Barbier</span>
                <br />
                Moderne
              </h1>
            </div>

            <p className="text-lg text-black/70 max-w-lg leading-relaxed">
              Le Quartier Général est un salon de coiffure et barbershop situé à Montréal, offrant une expérience professionnelle pour hommes et femmes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white font-medium hover:bg-black/90 transition-all"
              >
                Prendre rendez-vous
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-black text-black font-medium hover:bg-black hover:text-white transition-all"
              >
                Nos Services
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-black">500+</div>
                <div className="text-sm text-black/60">Clients satisfaits</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-black">2</div>
                <div className="text-sm text-black/60">Experts passionnés</div>
              </div>
              <div className="flex items-center gap-1">
                <div className="text-3xl font-bold text-black">5.0</div>
                <Star className="w-6 h-6 fill-black text-black" />
                <div className="text-sm text-black/60 ml-2">Note moyenne</div>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:justify-self-end"
          >
            <div className="relative w-full max-w-md lg:max-w-lg">
              <div className="aspect-[3/4] overflow-hidden">
                <ImageWithFallback
                  src={`${ASSET_BASE}assets/hero.png`}
                  alt="QG Le Quartier Général – Intérieur du salon"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-8 -left-8 bg-white p-6 shadow-2xl max-w-xs"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-5 h-5 text-black" />
                  <span className="font-bold text-black">Horaires</span>
                </div>
                <p className="text-sm text-black/70">
                  Lun-Sam: 9h-20h<br />
                  Dimanche: Fermé
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Séparateur diagonal : aucune “cassure” entre blanc → section noire */}
      <div className="relative -mt-6 md:-mt-10 h-14 md:h-24 w-full overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
          aria-hidden
        >
          {/* Forme noire qui recouvre le bas du hero sans laisser de blanc. */}
          <path d="M0,24 L100,0 L100,100 L0,100 Z" fill="black" />
        </svg>
      </div>

      {/* Services Preview Section - Black Background */}
      <section className="bg-black text-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image Grid */}
            <motion.div {...fadeInUp} className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1768363446104-b8a0c1716600?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBiYXJiZXIlMjBjdXR0aW5nJTIwaGFpcnxlbnwxfHx8fDE3NzM2OTc1MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Barbier professionnel"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1656921350183-7935040cf7fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBzY2lzc29ycyUyMHRvb2xzfGVufDF8fHx8MTc3MzcyMTQ5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Outils de barbier"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1603899968034-1a56ca48d172?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFyZCUyMHRyaW0lMjBncm9vbWluZ3xlbnwxfHx8fDE3NzM3MDY5OTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Taille de barbe"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1590540179446-a27de47f393e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBzdHlsaW5nJTIwbWFufGVufDF8fHx8MTc3MzcyNDcwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Coiffure moderne"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right - Services List */}
            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                  Nos Services
                  <br />
                  <span className="italic text-white/70">d'Exception</span>
                </h2>
                <p className="text-white/70 text-lg leading-relaxed max-w-md">
                  Une gamme complète de services pour sublimer votre style avec précision et expertise.
                </p>
              </div>

              <div className="space-y-6">
                {services.map((service, index) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group flex items-center justify-between p-6 border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all duration-300"
                  >
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{service.name}</h3>
                      <p className="text-white/50 text-sm">{service.duration}</p>
                    </div>
                    <div className="text-2xl font-bold">{service.price}</div>
                  </motion.div>
                ))}
              </div>

              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-white font-medium group"
              >
                Voir tous les services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Wave Separator */}
      <div className="relative h-24 bg-black overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <path d="M0,0 Q50,100 100,0 L100,100 L0,100 Z" fill="white" />
        </svg>
      </div>

      {/* Reviews Section - NEW */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16 space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/5">
              <Star className="w-4 h-4 text-black fill-black" />
              <span className="text-sm font-medium text-black">5.0 sur Google</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-black">
              Nos Clients
              <br />
              <span className="italic text-black/70">Témoignent</span>
            </h2>
            <p className="text-black/60 text-lg max-w-2xl mx-auto">
              469 avis Google • Une communauté satisfaite
            </p>
          </motion.div>

          {/* Grille d'avis – tailles variées pour un style unique */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review, index) => (
              <motion.div
                key={review.name}
                {...fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className={`bg-gradient-to-br from-gray-50 to-white p-6 md:p-8 space-y-4 hover:from-black hover:to-black/90 group transition-all duration-500 ${
                  index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
                } ${index >= MOBILE_REVIEW_LIMIT && !showAllReviews ? "hidden md:block" : ""}`}
              >
                <Quote className="w-8 h-8 text-black/10 group-hover:text-white/20 transition-colors duration-500" />
                
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-black text-black group-hover:fill-white group-hover:text-white transition-colors duration-500" />
                  ))}
                </div>

                <p className={`leading-relaxed text-black/80 group-hover:text-white/90 transition-colors duration-500 ${
                  index === 0 ? "text-lg" : "text-base"
                }`}>
                  "{review.text}"
                </p>

                <div className="pt-4 border-t border-black/10 group-hover:border-white/20 transition-colors duration-500">
                  <p className="font-bold text-black group-hover:text-white transition-colors duration-500">
                    {review.name}
                  </p>
                  <p className="text-sm text-black/50 group-hover:text-white/60 transition-colors duration-500">
                    {review.date}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Voir plus (mobile) */}
          {reviews.length > MOBILE_REVIEW_LIMIT && (
            <div className="mt-10 md:hidden flex justify-center">
              <button
                type="button"
                onClick={() => setShowAllReviews((v) => !v)}
                className="inline-flex items-center justify-center px-7 py-3 border-2 border-black text-black font-medium hover:bg-black hover:text-white transition-colors"
              >
                {showAllReviews ? "Voir moins" : `Voir plus (${reviews.length - MOBILE_REVIEW_LIMIT})`}
              </button>
            </div>
          )}

          {/* Google Link */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <a
              href="https://share.google/IrYHUn7NjG4AH4sYh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-black/70 hover:text-black font-medium group transition-colors"
            >
              Voir tous les avis et la localisation sur Google
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16 space-y-4"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-black">
              Pourquoi nous choisir ?
            </h2>
            <p className="text-black/60 text-lg max-w-2xl mx-auto">
              Une expérience unique alliant savoir-faire traditionnel et tendances contemporaines
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Expertise",
                description: "Khalid et Benz cumulent des années d'expérience dans l'art du barbier traditionnel et moderne."
              },
              {
                title: "Qualité",
                description: "Nous utilisons exclusivement des produits premium pour garantir les meilleurs résultats."
              },
              {
                title: "Ambiance",
                description: "Un espace moderne et chaleureux où vous vous sentirez chez vous à chaque visite."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                {...fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-8 bg-gradient-to-br from-gray-50 to-white hover:from-black hover:to-black/90 transition-all duration-500"
              >
                <div className="w-12 h-12 bg-black group-hover:bg-white flex items-center justify-center mb-6 transition-colors duration-500">
                  <span className="text-2xl font-bold text-white group-hover:text-black transition-colors duration-500">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-black group-hover:text-white mb-4 transition-colors duration-500">
                  {item.title}
                </h3>
                <p className="text-black/70 group-hover:text-white/80 leading-relaxed transition-colors duration-500">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <motion.div
            {...fadeInUp}
            className="space-y-4"
          >
            <h2 className="text-4xl lg:text-5xl font-bold">
              Prêt pour une nouvelle coupe ?
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Réservez votre rendez-vous dès maintenant et découvrez l'expérience K&B Barber Shop
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-medium hover:bg-white/90 transition-all"
            >
              Réserver maintenant
              <ArrowRight className="w-5 h-5" />
            </Link>
            <div className="flex items-center gap-2 text-white/70">
              <MapPin className="w-5 h-5" />
              <span>7072 R. Sherbrooke E, Montréal</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}