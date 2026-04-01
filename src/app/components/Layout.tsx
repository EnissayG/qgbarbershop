import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import { MAIN_NAV_ITEMS } from "../config/navigation";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout() {
  const { pathname } = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const html = document.documentElement;
    const body = document.body;
    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;
    const prevOverscroll = body.style.overscrollBehavior;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    body.style.overscrollBehavior = "none";

    return () => {
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
      body.style.overscrollBehavior = prevOverscroll;
    };
  }, [mobileMenuOpen]);

  return (
    <div className="flex min-h-screen w-full max-w-full flex-col bg-white">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

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
            className="mobile-menu-overlay fixed inset-0 z-[90] flex min-h-0 flex-col items-center justify-center overscroll-none bg-black pl-[max(1.5rem,calc(env(safe-area-inset-left,0px)+0.75rem))] pr-[max(1.5rem,calc(env(safe-area-inset-right,0px)+0.75rem))] pb-[max(1.25rem,env(safe-area-inset-bottom,0px))] pt-[max(6.5rem,calc(env(safe-area-inset-top,0px)+4rem))] lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <nav
              className="flex w-full max-w-sm flex-col gap-1"
              onClick={(e) => e.stopPropagation()}
              aria-label="Navigation mobile"
            >
              {MAIN_NAV_ITEMS.map((item, i) => (
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
                      pathname === item.path
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

      <main className="min-w-0 flex-1 bg-white">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
