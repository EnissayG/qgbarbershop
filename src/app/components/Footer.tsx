import { Phone, MapPin, Clock, Instagram, ArrowRight } from "lucide-react";
import { Link } from "react-router";

const GOOGLE_LINK = "https://share.google/IrYHUn7NjG4AH4sYh";

export function Footer() {
  return (
    <footer className="bg-white border-t border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Marque & description */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-bold text-black tracking-tight">
                QG <span className="italic text-black/80">Quartier Général</span>
              </span>
            </Link>
            <p className="text-black/70 text-sm md:text-base leading-relaxed max-w-md mb-8">
              Salon de coiffure et barbershop à Montréal. Savoir-faire traditionnel et techniques contemporaines pour des résultats exceptionnels.
            </p>
            <a
              href={GOOGLE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-black font-medium hover:text-black/80 transition-colors text-sm"
            >
              Avis & localisation Google
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-black font-semibold mb-6 text-sm uppercase tracking-wider">
              Navigation
            </h3>
            <nav className="space-y-3">
              {[
                { to: "/", label: "Accueil" },
                { to: "/services", label: "Services" },
                { to: "/equipe", label: "Équipe" },
                { to: "/a-propos", label: "À propos" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-black/70 hover:text-black transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact & lieu */}
          <div>
            <h3 className="text-black font-semibold mb-6 text-sm uppercase tracking-wider">
              Nous trouver
            </h3>
            <div className="space-y-4">
              <a
                href="tel:4384541412"
                className="flex items-start gap-3 text-black/70 hover:text-black transition-colors text-sm"
              >
                <Phone size={16} className="mt-0.5 shrink-0" />
                438 454 1412
              </a>
              <div className="flex items-start gap-3 text-black/70 text-sm">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>
                  7072 R. Sherbrooke E<br />
                  Montréal, QC H1N 1E6<br />
                  <span className="text-black/50">Métro Radisson à proximité</span>
                </span>
              </div>
              <div className="flex items-start gap-3 text-black/70 text-sm">
                <Clock size={16} className="mt-0.5 shrink-0" />
                <span>Lun-Sam 9h-20h · Dim fermé</span>
              </div>
            </div>
            <a
              href="https://www.instagram.com/quartiergeneral.qg/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/5 text-black hover:bg-black hover:text-white transition-colors"
              aria-label="Instagram QG"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* Bas de page */}
        <div className="mt-16 pt-8 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-black/50 text-xs md:text-sm">
            © {new Date().getFullYear()} QG Barbier – Le Quartier Général
          </p>
          <div className="flex items-center gap-6 text-xs md:text-sm text-black/50">
            <a href={GOOGLE_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
              Avis Google
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
