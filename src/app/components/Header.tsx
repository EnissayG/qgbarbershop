import type { Dispatch, SetStateAction } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { shopPhotos } from "../config/shopPhotos";
import { MAIN_NAV_ITEMS } from "../config/navigation";

type HeaderProps = {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
};

export function Header({ mobileMenuOpen, setMobileMenuOpen }: HeaderProps) {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const textShadow = "[text-shadow:0_1px_10px_rgba(0,0,0,0.85),0_0_1px_rgba(0,0,0,0.9)]";

  return (
    <header className="fixed left-0 right-0 top-0 z-[100] w-full max-w-full overflow-x-hidden">
      <nav
        className="nav-shell relative z-[130] mx-auto flex max-w-7xl items-center justify-end gap-6 lg:justify-between"
        aria-label="Navigation principale"
      >
        <Link
          to="/"
          className="hidden shrink-0 lg:block"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Accueil Quartier Général"
        >
          <img
            src={shopPhotos.logo}
            alt=""
            className="h-10 w-auto drop-shadow-[0_2px_14px_rgba(0,0,0,0.8)] lg:h-11"
          />
        </Link>

        <div className={`hidden items-center gap-8 lg:flex ${textShadow}`}>
          {MAIN_NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative text-sm font-bold uppercase tracking-wider transition-colors ${
                isActive(item.path) ? "text-white" : "text-white/75 hover:text-white"
              }`}
            >
              {item.name}
              {isActive(item.path) && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
            </Link>
          ))}
        </div>

        <button
          type="button"
          className={
            mobileMenuOpen
              ? "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-black shadow-lg ring-2 ring-black/15 lg:hidden"
              : `p-1 text-white lg:hidden ${textShadow}`
          }
          onClick={() => setMobileMenuOpen((o) => !o)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {mobileMenuOpen ? <X size={24} strokeWidth={2.5} /> : <Menu size={26} strokeWidth={2.25} />}
        </button>
      </nav>
    </header>
  );
}
