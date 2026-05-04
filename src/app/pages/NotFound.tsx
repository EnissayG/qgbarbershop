import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, Home, Scissors } from "lucide-react";

const quickLinks = [
  { to: "/services", label: "Services & prix" },
  { to: "/equipe", label: "Équipe" },
  { to: "/formations", label: "Formations" },
  { to: "/contact", label: "Contact" },
] as const;

export function NotFound() {
  return (
    <div className="min-h-[70vh] bg-white">
      <section className="layout-gutter flex flex-col items-center justify-center py-20 text-center sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-lg"
        >
          <p className="mb-4 text-xs font-black uppercase tracking-[0.35em] text-black/40">
            Erreur 404
          </p>
          <h1 className="mb-4 text-5xl font-black uppercase leading-none tracking-tighter text-black sm:text-7xl">
            Page
            <br />
            <span className="text-black/25">introuvable</span>
          </h1>
          <p className="mb-10 text-lg leading-relaxed text-black/55">
            Cette URL n&apos;existe pas ou a été déplacée. Retourne au QG ou choisis une section ci-dessous.
          </p>

          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-black px-8 py-4 text-sm font-black uppercase tracking-wider text-white transition-colors hover:bg-black/85"
            >
              <Home size={18} aria-hidden />
              Accueil
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 border-2 border-black px-8 py-4 text-sm font-black uppercase tracking-wider text-black transition-colors hover:bg-black hover:text-white"
            >
              <Scissors size={18} aria-hidden />
              Nos prix
            </Link>
          </div>

          <nav
            className="mt-14 border-t border-black/10 pt-10"
            aria-label="Liens utiles"
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-black/35">
              Autres pages
            </p>
            <ul className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-6 sm:gap-y-2">
              {quickLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm font-bold text-black/60 underline-offset-4 transition-colors hover:text-black hover:underline"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link
            to="/"
            className="mt-12 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black/45 transition-colors hover:text-black"
          >
            <ArrowLeft size={16} aria-hidden />
            Retour en arrière (accueil)
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
