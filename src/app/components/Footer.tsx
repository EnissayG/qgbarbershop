import { Instagram } from "lucide-react";
import { Link } from "react-router";
import {
  shopAddressLine1,
  shopAddressLine2,
  shopEmail,
  shopGoogleUrl,
  shopPhoneDisplay,
  shopPhoneTel,
} from "../config/shopInfo";
import { shopInstagramUrl, shopPhotos } from "../config/shopPhotos";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-8 pb-[max(2.25rem,calc(env(safe-area-inset-bottom,0px)+0.75rem))] text-white sm:py-12 sm:pb-[max(3rem,calc(env(safe-area-inset-bottom,0px)+1.25rem))] lg:py-16 lg:pb-[max(4rem,calc(env(safe-area-inset-bottom,0px)+2rem))]">
      <div className="layout-gutter">
        <div className="mb-6 grid grid-cols-2 gap-x-5 gap-y-6 sm:gap-x-8 sm:gap-y-8 lg:mb-12 lg:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <img
              src={shopPhotos.logo}
              alt="Logo du QG"
              className="mb-2 h-[3.25rem] w-auto sm:mb-3 sm:h-16 lg:mb-4 lg:h-[4.75rem]"
            />
            <p className="text-xs leading-snug text-white/60 sm:text-sm lg:leading-normal">
              Barbier moderne à Montréal, style épuré, service professionnel, résultats nets.
            </p>
            <p className="mt-2 text-xs font-black italic text-white/80 sm:mt-3 sm:text-sm lg:mt-4">
              &quot;Viens juste faire ta tiass&quot;
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-2 text-xs font-bold uppercase tracking-wider sm:mb-3 sm:text-sm lg:mb-4">
              Navigation
            </h3>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-xs text-white/60 transition-colors hover:text-white sm:text-sm"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-xs text-white/60 transition-colors hover:text-white sm:text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/#reserver"
                  className="text-xs text-white/60 transition-colors hover:text-white sm:text-sm"
                >
                  Réservation
                </Link>
              </li>
              <li>
                <Link
                  to="/equipe"
                  className="text-xs text-white/60 transition-colors hover:text-white sm:text-sm"
                >
                  Équipe
                </Link>
              </li>
              <li>
                <Link
                  to="/formations"
                  className="text-xs text-white/60 transition-colors hover:text-white sm:text-sm"
                >
                  Formations
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-2 text-xs font-bold uppercase tracking-wider sm:mb-3 sm:text-sm lg:mb-4">
              Contact
            </h3>
            <ul className="space-y-1 text-xs text-white/60 sm:space-y-2 sm:text-sm">
              <li className="leading-snug">{shopAddressLine1}</li>
              <li className="leading-snug">{shopAddressLine2}</li>
              <li className="pt-1 sm:pt-2">
                <a href={`tel:${shopPhoneTel}`} className="hover:text-white transition-colors">
                  {shopPhoneDisplay}
                </a>
              </li>
              <li className="break-all">
                <a href={`mailto:${shopEmail}`} className="hover:text-white transition-colors">
                  {shopEmail}
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="col-span-2 flex flex-col sm:flex-row sm:items-start sm:justify-between sm:gap-8 lg:col-span-1 lg:flex-col lg:gap-0">
            <div>
              <h3 className="mb-2 text-xs font-bold uppercase tracking-wider sm:mb-3 sm:text-sm lg:mb-4">
                Réseaux &amp; avis
              </h3>
              <p className="mb-2 text-xs text-white/50 sm:mb-3 sm:text-sm">
                <a
                  href={shopGoogleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-white"
                >
                  Google, fiche &amp; avis
                </a>
              </p>
            </div>
            <div className="flex gap-2 sm:gap-3">
              <a
                href={shopInstagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center bg-white/10 transition-all hover:bg-white hover:text-black sm:h-10 sm:w-10"
                aria-label="Instagram Quartier Général"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-4 text-center text-xs text-white/40 sm:pt-6 sm:text-sm">
          <p>&copy; {new Date().getFullYear()} QG Barbershop. On reste soignés.</p>
        </div>
      </div>
    </footer>
  );
}