import React from "react";
import { motion } from "motion/react";
import { MapPin, Clock, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.45 }
  };

  const schedule = [
    { day: "Lundi", hours: "9h00 - 20h00" },
    { day: "Mardi", hours: "9h00 - 20h00" },
    { day: "Mercredi", hours: "9h00 - 20h00" },
    { day: "Jeudi", hours: "9h00 - 20h00" },
    { day: "Vendredi", hours: "9h00 - 20h00" },
    { day: "Samedi", hours: "9h00 - 20h00" },
    { day: "Dimanche", hours: "Fermé" },
  ];

  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl space-y-6"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-black leading-tight">
              À Propos
              <br />
              <span className="italic text-black/70">du Quartier Général</span>
            </h1>
            
            <p className="text-xl text-black/60 leading-relaxed">
              Plus qu'un salon, un espace communautaire au cœur de Montréal
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content - Split Layout */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-3 space-y-12">
              {/* Story */}
              <motion.div {...fadeInUp} className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-black">
                  Notre Vision
                </h2>
                <div className="w-20 h-1 bg-black" />
                <div className="space-y-4 text-lg text-black/70 leading-relaxed">
                  <p>
                    Le Quartier Général est bien plus qu'un simple salon de coiffure. C'est un espace où se mêlent tradition et modernité, où chaque visite devient une expérience mémorable.
                  </p>
                  <p>
                    Situé à Montréal dans un lieu avantageux, notre établissement se démarque par son approche professionnelle, son attention aux détails et son ambiance moderne et chaleureuse. Nous sommes facilement accessibles en transport en commun : le métro Station Radisson est à proximité. Nous offrons une gamme complète de services pour hommes et femmes : coupes, fades, rasages, soins de barbe, tresses, box braids et locks.
                  </p>
                  <p>
                    Au-delà du travail en salon, nous investissons dans les réseaux sociaux et la création de contenu pour augmenter notre visibilité et partager notre univers. Notre objectif n'est pas seulement de coiffer : c'est de construire une communauté et de faire rayonner le Quartier Général.
                  </p>
                  <p>
                    Nous croyons que chaque personne mérite un moment privilégié pour prendre soin d'elle. C'est pourquoi nous avons créé un lieu où l'expertise technique rencontre le conseil personnalisé, où chaque coupe est pensée pour sublimer votre style unique.
                  </p>
                </div>
              </motion.div>

              {/* Philosophy */}
              <motion.div
                {...fadeInUp}
                className="bg-gradient-to-br from-black to-black/90 text-white p-10 space-y-6"
              >
                <h2 className="text-3xl font-bold">Notre Philosophie</h2>
                <div className="w-20 h-1 bg-white/30" />
                <div className="space-y-4 text-white/80 leading-relaxed">
                  <p>
                    Au Quartier Général, nous ne faisons pas que coiffer. Nous écoutons, conseillons et créons. Nous travaillons aussi sur les réseaux sociaux et la création de contenu pour augmenter notre visibilité et partager notre univers  pas seulement en salon, mais en ligne.
                  </p>
                  <p>
                    Notre engagement envers l'excellence se reflète dans chaque détail : des produits premium soigneusement sélectionnés, des techniques maîtrisées à la perfection, et une attention constante à votre confort.
                  </p>
                </div>
              </motion.div>

              {/* Image Gallery */}
              <motion.div {...fadeInUp} className="grid grid-cols-2 gap-4">
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1769034260387-39fa07f0c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBjaGFpciUyMHNhbG9ufGVufDF8fHx8MTc3MzcyNDcwN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Salon K&B"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1656921350183-7935040cf7fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBzY2lzc29ycyUyMHRvb2xzfGVufDF8fHx8MTc3MzcyMTQ5M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Outils professionnels"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </motion.div>
            </div>

            {/* Right Column - Info Cards */}
            <div className="lg:col-span-2 space-y-6">
              {/* Location Card */}
              <motion.div
                {...fadeInUp}
                className="bg-black text-white p-8 space-y-4"
              >
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6" />
                  <h3 className="text-xl font-bold">Adresse & Avis Google</h3>
                </div>
                <p className="text-white/80 leading-relaxed">
                  7072 R. Sherbrooke E<br />
                  Montréal, QC H1N 1E6<br />
                  <span className="text-white/60 text-sm">Métro à proximité : Station Radisson</span>
                </p>
                <a
                  href="https://share.google/IrYHUn7NjG4AH4sYh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm font-medium underline hover:text-white/80 transition-colors"
                >
                  Localisation et avis sur Google
                </a>
              </motion.div>

              {/* Schedule Card */}
              <motion.div
                {...fadeInUp}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white border border-black/10 p-8 space-y-4"
              >
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-black" />
                  <h3 className="text-xl font-bold text-black">Horaires</h3>
                </div>
                <div className="space-y-3">
                  {schedule.map((item) => (
                    <div
                      key={item.day}
                      className="flex justify-between items-center py-2 border-b border-black/5 last:border-0"
                    >
                      <span className="text-black/70 font-medium">{item.day}</span>
                      <span
                        className={`text-sm font-bold ${
                          item.hours === "Fermé" ? "text-black/40" : "text-black"
                        }`}
                      >
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Contact Card */}
              <motion.div
                {...fadeInUp}
                transition={{ delay: 0.2 }}
                className="bg-black text-white p-8 space-y-6"
              >
                <h3 className="text-xl font-bold">Contact</h3>
                
                <div className="space-y-4">
                  <a
                    href="tel:5147138684"
                    className="flex items-center gap-3 group hover:text-white/80 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>(514) 713-8684</span>
                  </a>
                  
                  <a
                    href="mailto:contact@quartiergeneral.com"
                    className="flex items-center gap-3 group hover:text-white/80 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>contact@quartiergeneral.com</span>
                  </a>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-sm text-white/60 mb-3">Suivez-nous</p>
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="w-10 h-10 bg-white/10 hover:bg-white hover:text-black flex items-center justify-center transition-all duration-300"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-white/10 hover:bg-white hover:text-black flex items-center justify-center transition-all duration-300"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Pourquoi le Quartier Général ?
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Ce qui nous distingue et fait de nous votre barbier de confiance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Expertise",
                description: "Une équipe talentueuse maîtrisant tous les styles de coiffure"
              },
              {
                number: "02",
                title: "Produits Premium",
                description: "Uniquement les meilleures marques pour votre bien-être"
              },
              {
                number: "03",
                title: "Ambiance Unique",
                description: "Un espace moderne et chaleureux où vous vous sentirez bien"
              },
              {
                number: "04",
                title: "Service Personnalisé",
                description: "Chaque client reçoit des conseils adaptés à son style"
              }
            ].map((item, index) => (
              <motion.div
                key={item.number}
                {...fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="space-y-4"
              >
                <div className="text-5xl font-bold text-white/20">{item.number}</div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-white/70 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}