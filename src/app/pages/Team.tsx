import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Instagram, Award, Scissors, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { SectionTopDiagonal } from "../components/SectionTopDiagonal";
import { shopInstagramUrl, shopPhotos } from "../config/shopPhotos";

type SquadMember = {
  name: string;
  nickname: string;
  role: string;
  specialty: string;
  experience: string;
  image: string;
  /** Texte affiché (ex. @handle) */
  instagramLabel: string;
  instagramHref: string;
  vibe: string;
};

function SquadCard({ member, airy }: { member: SquadMember; airy?: boolean }) {
  return (
    <div className={`group ${airy ? "mx-auto w-full max-w-md" : ""}`}>
      <div className={`relative overflow-hidden ${airy ? "mb-8" : "mb-5"}`}>
        <div className="relative aspect-[4/5] overflow-hidden bg-neutral-900">
          <ImageWithFallback
            src={member.image}
            alt={member.name}
            className="h-full w-full object-cover object-top"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {!airy && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="absolute bottom-0 left-0 right-0 translate-y-full p-5 transition-transform duration-300 group-hover:translate-y-0"
            >
              <a
                href={member.instagramHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 bg-white px-5 py-3 text-xs font-black uppercase tracking-wider text-black transition-colors hover:bg-white/90"
              >
                <Instagram size={16} />
                <span className="truncate">{member.instagramLabel}</span>
              </a>
            </motion.div>
          )}

          <div className={`absolute ${airy ? "left-6 top-6" : "left-5 top-5"}`}>
            <div className="bg-white px-3 py-1.5 text-xs font-black uppercase tracking-wider text-black">
              {member.nickname}
            </div>
          </div>
        </div>

        {airy && (
          <a
            href={member.instagramHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex w-full items-center justify-center gap-2 border-2 border-black bg-black py-4 text-sm font-black uppercase tracking-wider text-white transition-colors active:bg-black/90"
          >
            <Instagram size={18} />
            <span className="truncate">{member.instagramLabel}</span>
          </a>
        )}
      </div>

      <div className={airy ? "space-y-5 px-1 sm:px-2" : "space-y-3"}>
        <h3
          className={`font-black uppercase tracking-tight ${airy ? "text-3xl sm:text-4xl" : "text-3xl"}`}
        >
          {member.name}
        </h3>
        <p
          className={`font-bold uppercase tracking-widest text-black/50 ${airy ? "text-xs leading-relaxed sm:text-sm" : "text-xs"}`}
        >
          {member.role}
        </p>
        {!airy && (
          <a
            href={member.instagramHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-black text-black transition-colors hover:text-black/60"
          >
            <Instagram size={16} />
            {member.instagramLabel}
          </a>
        )}
        <p
          className={`italic text-black/70 ${airy ? "text-base leading-relaxed sm:text-lg" : "text-base leading-snug"}`}
        >
          &quot;{member.vibe}&quot;
        </p>

        <div
          className={`flex flex-col gap-4 pt-2 text-sm text-black/60 sm:flex-row sm:flex-wrap sm:gap-x-4 sm:gap-y-3 ${airy ? "sm:text-base" : ""}`}
        >
          <span className="inline-flex items-start gap-2">
            <Scissors size={airy ? 16 : 14} className="mt-0.5 shrink-0 text-black/40" />
            <span className="leading-snug">{member.specialty}</span>
          </span>
          <span className="inline-flex items-start gap-2">
            <Award size={airy ? 16 : 14} className="mt-0.5 shrink-0 text-black/40" />
            <span className="leading-snug">{member.experience}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export function Team() {
  const [activeIdx, setActiveIdx] = useState(0);

  const team: SquadMember[] = [
    {
      name: "KG",
      nickname: "KG",
      role: "Co-proprio & barber",
      specialty: "Fades, techniques & vision QG",
      experience: "Co-fondateur du Quartier Général",
      image: shopPhotos.squad.kg,
      instagramLabel: "@kgthebarber_",
      instagramHref: "https://www.instagram.com/kgthebarber_/",
      vibe: "Co-proprio : vision et exigence au même niveau que la coupe",
    },
    {
      name: "Benz",
      nickname: "Benz",
      role: "Co-proprio & barber",
      specialty: "Coupe, style & identité du shop",
      experience: "Co-fondateur du Quartier Général",
      image: shopPhotos.squad.benz,
      instagramLabel: "@bigbenzcuts",
      instagramHref: "https://www.instagram.com/bigbenzcuts/",
      vibe: "Co-pilote du QG, même énergie, même exigence",
    },
    {
      name: "Lennox",
      nickname: "Lennox",
      role: "Barber",
      specialty: "Coupe précise & finitions",
      experience: "La squad QG",
      image: shopPhotos.squad.lennox,
      instagramLabel: "@lennoxcutzz",
      instagramHref: "https://www.instagram.com/lennoxcutzz/",
      vibe: "Calme sur les lignes, lourd sur le résultat",
    },
    {
      name: "Hauz of Tanz",
      nickname: "Tanz",
      role: "Barber, tresses & nattes",
      specialty: "Tresses, braids et styles protecteurs",
      experience: "Service tresses sur rendez-vous",
      image: shopPhotos.squad.hauzoftanz,
      instagramLabel: "@hauzoftanz",
      instagramHref: "https://www.instagram.com/hauzoftanz/",
      vibe: "Spécialiste tresses : précision, tenue et finitions nettes",
    },
    {
      name: "Shuya",
      nickname: "Shuya",
      role: "Barber",
      specialty: "Coupe & créativité",
      experience: "La squad QG",
      image: shopPhotos.squad.shuyacutz,
      instagramLabel: "@shuyacutz",
      instagramHref: "https://www.instagram.com/shuyacutz/",
      vibe: "Style propre, attitude QG",
    },
    {
      name: "Magic Kev",
      nickname: "Kev",
      role: "Barber",
      specialty: "Fades & line-ups",
      experience: "La squad QG",
      image: shopPhotos.squad.magickevcuts,
      instagramLabel: "@magickevcuts",
      instagramHref: "https://www.instagram.com/magickevcuts/",
      vibe: "La magie opère sur chaque session",
    },
    {
      name: "Don Cruz",
      nickname: "Don Cruz",
      role: "Barber",
      specialty: "Coupe moderne & texture",
      experience: "La squad QG",
      image: shopPhotos.squad.doncruzcuts,
      instagramLabel: "@doncruzcuts",
      instagramHref: "https://www.instagram.com/doncruzcuts/",
      vibe: "Couleur, texture, personnalité",
    },
  ];

  const n = team.length;
  const goPrev = useCallback(() => {
    setActiveIdx((i) => (i - 1 + n) % n);
  }, [n]);
  const goNext = useCallback(() => {
    setActiveIdx((i) => (i + 1) % n);
  }, [n]);

  return (
    <div className="overflow-x-hidden">
      <section className="page-hero-section relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 h-full w-1/2 translate-x-32 skew-x-12 bg-white/5" />
        </div>

        <div className="page-hero-inner">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-sm uppercase tracking-widest text-white/60 mb-6 block font-bold">
              Meet the squad
            </span>
            <h1 className="text-7xl lg:text-9xl font-black tracking-tighter leading-none mb-8 text-white uppercase">
              La
              <br />
              <span className="text-white/30">Squad</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
              La vraie équipe du Quartier Général. KG & Benz au commande, suis chaque barber sur Insta.
            </p>
            <a
              href={shopInstagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 text-white font-black uppercase tracking-wider text-sm border-b-2 border-white/40 hover:border-white transition-colors"
            >
              <Instagram size={18} />
              @quartiergeneralbarbershop
            </a>
          </motion.div>
        </div>
      </section>

      {/* Squad : carrousel + rail (mobile / tablette) · grille large écran */}
      <section className="section-diagonal-top relative bg-white pb-28 lg:pb-32">
        <SectionTopDiagonal tone="light" variant="slash" />
        <div className="layout-gutter">
          <nav
            className="team-carousel-track sticky z-20 mb-8 flex gap-2.5 overflow-x-auto border-b border-black/10 bg-white/95 py-4 backdrop-blur-sm lg:hidden"
            style={{
              top: "max(5rem, calc(env(safe-area-inset-top, 0px) + 3.25rem))",
            }}
            aria-label="Choisir un membre"
          >
            {team.map((m, i) => (
              <button
                key={m.name}
                type="button"
                onClick={() => setActiveIdx(i)}
                className={`flex shrink-0 flex-col items-center gap-2 rounded-xl border-2 px-2.5 py-2.5 transition-colors ${
                  activeIdx === i
                    ? "border-black bg-black text-white ring-2 ring-black/20 ring-offset-2"
                    : "border-black/15 bg-white text-black hover:border-black/35"
                }`}
              >
                <ImageWithFallback
                  src={m.image}
                  alt=""
                  className="pointer-events-none h-12 w-12 rounded-full object-cover object-top ring-2 ring-black/10"
                />
                <span className="max-w-[4.5rem] truncate text-center text-[10px] font-black uppercase leading-tight tracking-wide">
                  {m.nickname}
                </span>
              </button>
            ))}
          </nav>

          <div
            className="relative pb-10 lg:hidden"
            aria-live="polite"
            aria-atomic="true"
            aria-label={`Profil : ${team[activeIdx]?.name ?? ""}`}
          >
            <button
              type="button"
              onClick={goPrev}
              aria-label="Membre précédent"
              className="absolute left-0 top-[min(26%,11rem)] z-10 flex h-12 w-12 -translate-x-0.5 items-center justify-center rounded-full border-2 border-black bg-white shadow-md transition-transform active:scale-95 sm:left-1 sm:h-14 sm:w-14"
            >
              <ChevronLeft className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={2.25} aria-hidden />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Membre suivant"
              className="absolute right-0 top-[min(26%,11rem)] z-10 flex h-12 w-12 translate-x-0.5 items-center justify-center rounded-full border-2 border-black bg-white shadow-md transition-transform active:scale-95 sm:right-1 sm:h-14 sm:w-14"
            >
              <ChevronRight className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={2.25} aria-hidden />
            </button>

            <div className="mx-auto max-w-md overflow-hidden px-11 sm:px-14">
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={team[activeIdx].name}
                  initial={{ opacity: 0, x: 28 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -28 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                >
                  <SquadCard member={team[activeIdx]} airy />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-6 flex justify-center gap-2">
              {team.map((m, i) => (
                <button
                  key={m.name}
                  type="button"
                  onClick={() => setActiveIdx(i)}
                  aria-label={`Afficher ${m.name}`}
                  aria-current={activeIdx === i ? "true" : undefined}
                  className={`h-2 rounded-full transition-all ${
                    activeIdx === i ? "w-8 bg-black" : "w-2 bg-black/25 hover:bg-black/40"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="hidden gap-12 lg:grid lg:grid-cols-3 lg:gap-14">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.06 }}
              >
                <SquadCard member={member} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="section-diagonal-top relative overflow-x-hidden bg-black pb-[max(8rem,calc(env(safe-area-inset-bottom,0px)+4rem))] lg:pb-32">
        <SectionTopDiagonal tone="dark" variant="slashAlt" />
        <div className="layout-gutter">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl lg:text-7xl font-black tracking-tighter uppercase text-white mb-6">
              Notre vibe
            </h2>
            <p className="text-xl text-white/60">Ce qui nous définit au QG</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Star,
                title: "Excellence",
                desc: "Chaque coupe est un chef-d'œuvre. On se contente pas du 'correct'.",
              },
              {
                icon: Scissors,
                title: "Créativité",
                desc: "On pousse les limites. Ton style, ta personnalité, notre art.",
              },
              {
                icon: Instagram,
                title: "Communauté",
                desc: "Plus qu'un shop, c'est une famille. On grandit ensemble.",
              },
              {
                icon: Award,
                title: "Respect",
                desc: "Du respect pour le métier, pour chaque client et pour le salon.",
              },
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center space-y-4 group"
                >
                  <div className="inline-flex w-20 h-20 bg-white/10 group-hover:bg-white group-hover:text-black transition-all items-center justify-center">
                    <Icon size={32} className="text-white group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="text-2xl font-black uppercase text-white">{value.title}</h3>
                  <p className="text-white/60 leading-relaxed">{value.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="section-diagonal-top relative overflow-x-hidden bg-white pb-28 lg:pb-32">
        <SectionTopDiagonal tone="light" variant="slash" />
        <div className="absolute inset-0 opacity-5">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute h-full w-4 bg-black transform -skew-x-12"
              style={{ left: `${i * 6}%` }}
            />
          ))}
        </div>

        <div className="layout-gutter-narrow relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <div className="space-y-4">
              <span className="inline-block px-6 py-2 bg-black text-white uppercase tracking-wider font-bold text-sm">
                We're hiring
              </span>
              <h2 className="text-6xl font-black tracking-tighter uppercase">
                Rejoins
                <br />
                la squad
              </h2>
            </div>

            <p className="text-xl text-black/70 leading-relaxed max-w-2xl mx-auto">
              T'es un barber qui a la passion et le skill? Tu partages notre vision? Envoie-nous un message sur Instagram.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <a
                href="mailto:careers@qgbarbershop.com"
                className="px-12 py-6 bg-black text-white hover:bg-black/90 transition-all font-black uppercase tracking-wider"
              >
                Envoie ton portfolio
              </a>
              <a
                href={shopInstagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-6 border-4 border-black text-black hover:bg-black hover:text-white transition-all font-black uppercase tracking-wider inline-flex items-center justify-center gap-2"
              >
                <Instagram size={20} />
                <span>DM @quartiergeneralbarbershop</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
