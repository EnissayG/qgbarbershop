import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { shopPhotos } from "../config/shopPhotos";

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollLockYRef = useRef(0);

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
    if (!mobileMenuOpen) return;

    scrollLockYRef.current = window.scrollY;
    const y = scrollLockYRef.current;
    const html = document.documentElement;
    const body = document.body;

    html.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${y}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";

    return () => {
      html.style.overflow = "";
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.width = "";
      window.scrollTo(0, y);
    };
  }, [mobileMenuOpen]);

  const textShadow = "[text-shadow:0_1px_10px_rgba(0,0,0,0.85),0_0_1px_rgba(0,0,0,0.9)]";

  return (
    <header className="fixed left-0 right-0 top-0 z-[100] w-full max-w-full overflow-x-hidden">
      {/* z-[130] pour rester au-dessus du voile menu (z-90) et du panneau (z-95) : le X reste toujours cliquable */}
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
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.24 }}
            className="mobile-menu-overlay fixed inset-0 z-[90] flex min-h-0 flex-col items-center justify-center overscroll-contain bg-black pl-[max(1.5rem,calc(env(safe-area-inset-left,0px)+0.75rem))] pr-[max(1.5rem,calc(env(safe-area-inset-right,0px)+0.75rem))] pb-[max(1.25rem,env(safe-area-inset-bottom,0px))] pt-[max(4.75rem,calc(env(safe-area-inset-top,0px)+2.75rem))] lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <nav
              className="flex w-full max-w-sm flex-col gap-1"
              onClick={(e) => e.stopPropagation()}
              aria-label="Navigation mobile"
            >
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
                    className={`block rounded-2xl border border-white/10 px-6 py-4 text-center text-xl font-black uppercase tracking-wide transition-colors ${
                      isActive(item.path)
                        ? "bg-white/20 text-white"
                        : "bg-white/10 text-white/90 hover:bg-white/15 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
