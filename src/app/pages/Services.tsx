import React from "react";
import { motion } from "motion/react";
import { Check, Clock, Scissors, Sparkles } from "lucide-react";
import { Link } from "react-router";
import { BarberPole3D } from "../components/BarberPole3D";

export function Services() {
  const fadeInUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.45 }
  };

  type ServiceItem = {
    name: string;
    price: string;
    duration: string;
    description: string;
    features: string[];
    popular?: boolean;
  };

  type ServiceCategory = {
    category: string;
    items: ServiceItem[];
  };

  const services: ServiceCategory[] = [
    {
      category: "Liste de prix – Quartier Général",
      items: [
        {
          name: "Coupe adulte",
          price: "40$",
          duration: "45min",
          description: "Coupe personnalisée avec consultation de style",
          features: ["Extra ciseaux : 5$", "Extra lavage : 25$"]
        },
        {
          name: "Coupe enfant",
          price: "30$",
          duration: "30min",
          description: "Coupe adaptée pour les 12 ans et moins",
          features: ["Patience garantie", "Styling ludique"]
        },
        {
          name: "Barbe",
          price: "20$",
          duration: "20min",
          description: "Taille et sculpture professionnelle de la barbe",
          features: ["Définition des contours", "Hydratation"]
        },
        {
          name: "Line up",
          price: "20$",
          duration: "15min",
          description: "Définition précise des contours",
          features: ["Finitions impeccables"]
        },
        {
          name: "Shampoing",
          price: "30$",
          duration: "20min",
          description: "Shampooing professionnel avec massage du cuir chevelu",
          features: ["Soins du cuir chevelu"]
        }
      ]
    },
    {
      category: "Tressage & autres coiffures",
      items: [
        {
          name: "Tresses, box braids, locks…",
          price: "À déterminer sur place",
          duration: "Variable",
          description: "Tresses, braids et autres coiffures. Tarif selon la prestation.",
          features: ["Consultation sur place", "Devis personnalisé"]
        }
      ]
    },
    {
      category: "Formations",
      items: [
        {
          name: "Formation Barbier / Coiffure",
          price: "À déterminer sur place",
          duration: "Variable",
          description: "Apprenez le métier avec nos experts. Tarifs et modalités sur demande.",
          features: ["Techniques avancées", "Pratique supervisée"]
        }
      ]
    }
  ];

  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white" />
        
        {/* Decorative circles */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.05 }}
          transition={{ duration: 1 }}
          className="absolute top-0 right-0 w-96 h-96 bg-black rounded-full -translate-y-1/2 translate-x-1/2"
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/5">
                <Sparkles className="w-4 h-4 text-black" />
                <span className="text-sm font-medium text-black">Services Premium</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-black leading-tight">
                Nos Services
                <br />
                <span className="italic text-black/70">& Tarifs</span>
              </h1>
              
              <p className="text-xl text-black/60 leading-relaxed">
                Des prestations sur mesure pour révéler votre style avec l'expertise de Khalid et Benz
              </p>
            </motion.div>

            {/* Animation à droite (comme sur ta capture) */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="justify-self-end w-full max-w-xl"
            >
              <div className="w-full aspect-[4/3]">
                <BarberPole3D className="w-full h-full" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      {services.map((category, categoryIndex) => (
        <section
          key={category.category}
          className={`py-16 lg:py-24 ${
            categoryIndex % 2 === 0 ? "bg-white" : "bg-black text-white"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              {...fadeInUp}
              className={`text-3xl lg:text-4xl font-bold mb-12 ${
                categoryIndex % 2 === 0 ? "text-black" : "text-white"
              }`}
            >
              {category.category}
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((service) => (
                <motion.div
                  key={service.name}
                  {...fadeInUp}
                  transition={{ duration: 0.55 }}
                  className={`relative group ${
                    categoryIndex % 2 === 0
                      ? "bg-gradient-to-br from-gray-50 to-white hover:from-black hover:to-black/90"
                      : "bg-gradient-to-br from-white/5 to-white/10 hover:from-white hover:to-white/95"
                  } p-8 transition-all duration-500 ${
                    service.popular ? "ring-2 ring-black/20" : ""
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-8 px-3 py-1 bg-black text-white text-xs font-bold">
                      POPULAIRE
                    </div>
                  )}

                  <div className="space-y-6">
                    {/* Header */}
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <h3
                          className={`text-2xl font-bold ${
                            categoryIndex % 2 === 0
                              ? "text-black group-hover:text-white"
                              : "text-white group-hover:text-black"
                          } transition-colors duration-500`}
                        >
                          {service.name}
                        </h3>
                        <Scissors
                          className={`w-6 h-6 ${
                            categoryIndex % 2 === 0
                              ? "text-black/20 group-hover:text-white/50"
                              : "text-white/20 group-hover:text-black/50"
                          } transition-colors duration-500`}
                        />
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <span
                          className={`text-3xl font-bold ${
                            categoryIndex % 2 === 0
                              ? "text-black group-hover:text-white"
                              : "text-white group-hover:text-black"
                          } transition-colors duration-500`}
                        >
                          {service.price}
                        </span>
                        <div
                          className={`flex items-center gap-1 text-sm ${
                            categoryIndex % 2 === 0
                              ? "text-black/60 group-hover:text-white/70"
                              : "text-white/60 group-hover:text-black/70"
                          } transition-colors duration-500`}
                        >
                          <Clock className="w-4 h-4" />
                          {service.duration}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p
                      className={`${
                        categoryIndex % 2 === 0
                          ? "text-black/70 group-hover:text-white/80"
                          : "text-white/70 group-hover:text-black/80"
                      } transition-colors duration-500 leading-relaxed`}
                    >
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className={`flex items-center gap-2 text-sm ${
                            categoryIndex % 2 === 0
                              ? "text-black/60 group-hover:text-white/70"
                              : "text-white/60 group-hover:text-black/70"
                          } transition-colors duration-500`}
                        >
                          <Check className="w-4 h-4 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center space-y-8 p-12 bg-gradient-to-br from-black to-black/90 text-white"
          >
            <h2 className="text-4xl font-bold">
              Besoin d'un conseil ?
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Notre équipe est là pour vous conseiller et vous aider à choisir le service qui vous correspond le mieux.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-medium hover:bg-white/90 transition-colors"
            >
              Prendre rendez-vous
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}