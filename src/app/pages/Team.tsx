import { motion } from "motion/react";
import { Instagram, Award, Scissors, Star } from "lucide-react";
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

export function Team() {
  const team: SquadMember[] = [
    {
      name: "KG",
      nickname: "KG",
      role: "Co-proprio & barber",
      specialty: "Fades, techniques & vision QG",
      experience: "Co-fondateur du Quartier Général",
      image: shopPhotos.squad.kg,
      instagramLabel: "@quartiergeneralbarbershop",
      instagramHref: shopInstagramUrl,
      vibe: "Co-proprio : vision et exigence au même niveau que la coupe",
    },
    {
      name: "Benz",
      nickname: "Benz",
      role: "Co-proprio & barber",
      specialty: "Coupe, style & identité du shop",
      experience: "Co-fondateur du Quartier Général",
      image: shopPhotos.squad.benz,
      instagramLabel: "@quartiergeneralbarbershop",
      instagramHref: shopInstagramUrl,
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

  return (
    <div className="overflow-x-hidden">
      <section className="relative overflow-x-hidden bg-black pt-28 sm:pt-32 pb-32">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 transform skew-x-12 translate-x-32" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
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

      {/* Team Grid */}
      <section className="relative bg-white py-24 lg:py-32">
        <SectionTopDiagonal tone="light" variant="slashAlt" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-10 lg:gap-12">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.06 }}
                className="group"
              >
                <div className="relative overflow-hidden mb-5">
                  <div className="aspect-[4/5] relative overflow-hidden bg-neutral-900">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                    >
                      <a
                        href={member.instagramHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 bg-white text-black font-black uppercase tracking-wider text-xs hover:bg-white/90 transition-colors w-full justify-center"
                      >
                        <Instagram size={16} />
                        <span className="truncate">{member.instagramLabel}</span>
                      </a>
                    </motion.div>

                    <div className="absolute top-5 left-5">
                      <div className="px-3 py-1.5 bg-white text-black font-black uppercase text-xs tracking-wider">
                        {member.nickname}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-3xl font-black uppercase tracking-tight">{member.name}</h3>
                  <p className="text-xs uppercase tracking-widest text-black/50 font-bold">{member.role}</p>
                  <a
                    href={member.instagramHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-black text-black hover:text-black/60 transition-colors"
                  >
                    <Instagram size={16} />
                    {member.instagramLabel}
                  </a>
                  <p className="text-base text-black/70 italic leading-snug">"{member.vibe}"</p>

                  <div className="flex flex-wrap gap-3 pt-1 text-sm text-black/60">
                    <span className="inline-flex items-center gap-1.5">
                      <Scissors size={14} className="text-black/40 shrink-0" />
                      {member.specialty}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Award size={14} className="text-black/40 shrink-0" />
                      {member.experience}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="relative overflow-x-hidden bg-black py-32">
        <SectionTopDiagonal tone="dark" variant="slice" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
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
      <section className="relative overflow-x-hidden bg-white py-32">
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

        <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
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
