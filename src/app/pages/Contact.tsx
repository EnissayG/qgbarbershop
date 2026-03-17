import { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, Send, Check } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        time: "",
        message: ""
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const services = [
    "Coupe Classique",
    "Coupe Moderne",
    "Coupe + Barbe",
    "Rasage Traditionnel",
    "Taille de Barbe",
    "Formule Premium",
    "Autre"
  ];

  const timeSlots = [
    "9h00", "10h00", "11h00", "12h00",
    "14h00", "15h00", "16h00", "17h00", "18h00", "19h00"
  ];

  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white" />
        
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.05 }}
          transition={{ duration: 1 }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-black rounded-full"
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl space-y-6"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-black leading-tight">
              Réservez votre
              <br />
              <span className="italic text-black/70">Rendez-vous</span>
            </h1>
            
            <p className="text-xl text-black/60 leading-relaxed">
              Prenez rendez-vous en quelques clics ou contactez-nous directement
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form - Left */}
            <motion.div
              {...fadeInUp}
              className="lg:col-span-3"
            >
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 lg:p-12">
                <h2 className="text-3xl font-bold text-black mb-8">
                  Formulaire de réservation
                </h2>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 space-y-4"
                  >
                    <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center">
                      <Check className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-black">Demande envoyée !</h3>
                    <p className="text-black/60 text-center max-w-md">
                      Nous avons bien reçu votre demande de réservation. Nous vous contacterons rapidement pour confirmer votre rendez-vous.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border-2 border-black/10 focus:border-black outline-none transition-colors text-black"
                        placeholder="Votre nom"
                      />
                    </div>

                    {/* Email & Phone */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white border-2 border-black/10 focus:border-black outline-none transition-colors text-black"
                          placeholder="votre@email.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-black mb-2">
                          Téléphone *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white border-2 border-black/10 focus:border-black outline-none transition-colors text-black"
                          placeholder="+33 6 12 34 56 78"
                        />
                      </div>
                    </div>

                    {/* Service */}
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-black mb-2">
                        Service souhaité *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border-2 border-black/10 focus:border-black outline-none transition-colors text-black"
                      >
                        <option value="">Sélectionnez un service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Date & Time */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="date" className="block text-sm font-medium text-black mb-2">
                          Date souhaitée *
                        </label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          required
                          value={formData.date}
                          onChange={handleChange}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-3 bg-white border-2 border-black/10 focus:border-black outline-none transition-colors text-black"
                        />
                      </div>
                      <div>
                        <label htmlFor="time" className="block text-sm font-medium text-black mb-2">
                          Heure souhaitée *
                        </label>
                        <select
                          id="time"
                          name="time"
                          required
                          value={formData.time}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white border-2 border-black/10 focus:border-black outline-none transition-colors text-black"
                        >
                          <option value="">Choisir une heure</option>
                          {timeSlots.map((slot) => (
                            <option key={slot} value={slot}>
                              {slot}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                        Message (optionnel)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border-2 border-black/10 focus:border-black outline-none transition-colors text-black resize-none"
                        placeholder="Des demandes particulières ?"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="group w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white font-medium hover:bg-black/90 transition-all"
                    >
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      Envoyer la demande
                    </button>

                    <p className="text-sm text-black/50">
                      * Champs obligatoires. Nous vous contacterons pour confirmer votre rendez-vous.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info - Right */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Cards */}
              <motion.div
                {...fadeInUp}
                transition={{ delay: 0.1 }}
                className="bg-black text-white p-8 space-y-6"
              >
                <h3 className="text-2xl font-bold">Coordonnées</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium mb-1">Adresse</p>
                      <p className="text-white/70 text-sm leading-relaxed">
                        7072 R. Sherbrooke E<br />
                        Montréal, QC H1N 1E6
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium mb-1">Téléphone</p>
                      <a href="tel:5147138684" className="text-white/70 text-sm hover:text-white transition-colors">
                        (514) 713-8684
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium mb-1">Email</p>
                      <a href="mailto:contact@quartiergeneral.com" className="text-white/70 text-sm hover:text-white transition-colors">
                        contact@quartiergeneral.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium mb-1">Horaires</p>
                      <p className="text-white/70 text-sm leading-relaxed">
                        Lun-Sam: 9h00 - 20h00<br />
                        Dimanche: Fermé
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Map Placeholder */}
              <motion.div
                {...fadeInUp}
                transition={{ delay: 0.2 }}
                className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden"
              >
                <div className="text-center p-8 space-y-3">
                  <MapPin className="w-12 h-12 text-black/20 mx-auto" />
                  <p className="text-black/40 font-medium">Plan d'accès</p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm text-black hover:underline"
                  >
                    Voir sur Google Maps
                  </a>
                </div>
              </motion.div>

              {/* Info Box */}
              <motion.div
                {...fadeInUp}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-gray-50 to-white border border-black/10 p-6 space-y-3"
              >
                <h4 className="font-bold text-black">Besoin d'aide ?</h4>
                <p className="text-sm text-black/70 leading-relaxed">
                  Pour toute question ou information complémentaire, n'hésitez pas à nous appeler directement. Nous serons ravis de vous répondre.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Info */}
      <section className="bg-black text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <motion.div {...fadeInUp}>
            <h3 className="text-2xl font-bold mb-4">Rendez-vous urgent ?</h3>
            <p className="text-white/70 mb-6">
              Pour une prise de rendez-vous en urgence ou le jour même, contactez-nous directement par téléphone.
            </p>
            <a
              href="tel:5147138684"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-medium hover:bg-white/90 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Appeler maintenant
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}