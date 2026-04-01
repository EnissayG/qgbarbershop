import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { shopPhotos } from "../config/shopPhotos";

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Accueil", path: "/" },
    { name: "Services", path: "/services" },
    { name: "La Squad", path: "/equipe" },
    { name: "Academy", path: "/formations" },
    { name: "Book", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const textShadow = "[text-shadow:0_1px_10px_rgba(0,0,0,0.85),0_0_1px_rgba(0,0,0,0.9)]";

  return (
    <header className="fixed left-0 right-0 top-0 z-[100] w-full max-w-full overflow-x-hidden">
      {/* z-[130] pour rester au-dessus du voile menu (z-90) et du panneau (z-95) : le X reste toujours cliquable */}
      <nav
        className="relative z-[130] mx-auto flex max-w-7xl items-center justify-end gap-6 px-5 py-4 sm:px-6 lg:justify-between lg:px-12 lg:py-5"
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
          {navItems.map((item) => (
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

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              key="menu-backdrop"
              role="presentation"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.28 }}
              className="fixed inset-0 z-[90] bg-black/80 backdrop-blur-2xl lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              id="mobile-menu"
              key="menu-panel"
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="pointer-events-none fixed inset-0 z-[95] flex flex-col items-center justify-center px-6 pb-28 pt-24 lg:hidden"
            >
              <nav className="pointer-events-auto flex w-full max-w-sm flex-col gap-1">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 16 }}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 32,
                      delay: 0.06 + i * 0.055,
                    }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block rounded-2xl border border-white/10 px-6 py-4 text-center text-xl font-black uppercase tracking-wide backdrop-blur-md transition-colors ${
                        isActive(item.path)
                          ? "bg-white/20 text-white"
                          : "bg-white/5 text-white/85 hover:bg-white/12 hover:text-white"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
