import { Instagram } from "lucide-react";
import { Link } from "react-router";
import {
  shopAddressLine1,
  shopAddressLine2,
  shopGoogleUrl,
  shopPhoneAltDisplay,
  shopPhoneAltTel,
  shopPhoneDisplay,
  shopPhoneTel,
} from "../config/shopInfo";
import { shopInstagramUrl, shopPhotos } from "../config/shopPhotos";

export function Footer() {
  return (
    <footer className="bg-black text-white py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <img 
              src={shopPhotos.logo} 
              alt="QG Logo" 
              className="h-16 w-auto mb-4"
            />
            <p className="text-white/60 text-sm">
              Barbier moderne à Montréal, look épuré, service pro, résultats nets.
            </p>
            <p className="text-white/80 font-black italic text-sm mt-4">
              "Viens juste faire ta tiass"
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="uppercase tracking-wider text-sm font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white/60 hover:text-white transition-colors text-sm">Accueil</Link></li>
              <li><Link to="/services" className="text-white/60 hover:text-white transition-colors text-sm">Services</Link></li>
              <li><Link to="/equipe" className="text-white/60 hover:text-white transition-colors text-sm">La Squad</Link></li>
              <li><Link to="/formations" className="text-white/60 hover:text-white transition-colors text-sm">Academy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="uppercase tracking-wider text-sm font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li>{shopAddressLine1}</li>
              <li>{shopAddressLine2}</li>
              <li className="pt-2">
                <a href={`tel:${shopPhoneTel}`} className="hover:text-white transition-colors">
                  {shopPhoneDisplay}
                </a>
              </li>
              <li>
                <a href={`tel:${shopPhoneAltTel}`} className="hover:text-white transition-colors">
                  {shopPhoneAltDisplay}
                </a>
              </li>
              <li>
                <a href="mailto:info@qgbarbershop.com" className="hover:text-white transition-colors">
                  info@qgbarbershop.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="uppercase tracking-wider text-sm font-bold mb-4">Réseaux & avis</h3>
            <p className="text-sm text-white/50 mb-3">
              <a
                href={shopGoogleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white underline underline-offset-2"
              >
                Google, fiche & avis
              </a>
            </p>
            <div className="flex gap-3">
              <a
                href={shopInstagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white hover:text-black transition-all flex items-center justify-center"
                aria-label="Instagram Quartier Général"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 text-center text-sm text-white/40">
          <p>&copy; {new Date().getFullYear()} QG Barbershop. On reste fresh.</p>
        </div>
      </div>
    </footer>
  );
}