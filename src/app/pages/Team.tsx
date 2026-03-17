import React from "react";
import { motion } from "motion/react";
import { Award, Heart, Users, Instagram } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const ASSETS = `${import.meta.env.BASE_URL}assets`;

export function Team() {
  const fadeInUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.45 }
  };

  const teamMembers = [
    {
      name: "Shuya",
      handle: "@shuyacutz",
      image: `${ASSETS}/shuyacutz.png`,
      specialty: "Expert Fades & Coupes Modernes",
      description: "Spécialiste des dégradés précis et des styles urbains contemporains."
    },
    {
      name: "Benz",
      handle: "@bigbenzcuts",
      image: `${ASSETS}/bigbenzcuts.png`,
      specialty: "Maître Coiffeur & Styliste",
      description: "Expert en transformations capillaires et techniques avancées de coiffure."
    },
    {
      name: "Don Cruz",
      handle: "@doncruzcuts",
      image: `${ASSETS}/doncruzcuts.png`,
      specialty: "Barbier Créatif",
      description: "Passionné de coupes audacieuses et de designs capillaires uniques."
    },
    {
      name: "Hauz",
      handle: "@hauzoftanz",
      image: `${ASSETS}/hauzoftanz.png`,
      specialty: "Spécialiste Tresses & Box Braids",
      description: "Experte en tressage, box braids et coiffures afro protectrices."
    },
    {
      name: "KG",
      handle: "@kgthebarber_",
      image: `${ASSETS}/kgthebarber.png`,
      specialty: "Barbier Polyvalent",
      description: "Maîtrise parfaite des techniques traditionnelles et modernes."
    },
    {
      name: "Lennox",
      handle: "@lennoxcutzz",
      image: `${ASSETS}/lennoxcutzz.png`,
      specialty: "Expert Ligne & Détails",
      description: "Précision chirurgicale dans les contours et finitions impeccables."
    },
    {
      name: "Kev",
      handle: "@magickevcuts",
      image: `${ASSETS}/magickevcuts.png`,
      specialty: "Barbier Artistique",
      description: "Créateur de styles personnalisés qui révèlent votre personnalité."
    }
  ];

  const [availableMembers, setAvailableMembers] = useState<typeof teamMembers>([]);

  useEffect(() => {
    let cancelled = false;

    const check = (src: string) =>
      new Promise<boolean>((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = src;
      });

    (async () => {
      const results = await Promise.all(teamMembers.map((m) => check(m.image)));
      if (cancelled) return;
      setAvailableMembers(teamMembers.filter((_, i) => results[i]));
    })();

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { featured, others } = useMemo(() => {
    const byHandle = new Map(availableMembers.map((m) => [m.handle, m]));
    const featuredOrder = ["@kgthebarber_", "@bigbenzcuts"];
    const featuredMembers = featuredOrder.map((h) => byHandle.get(h)).filter(Boolean) as typeof teamMembers;
    const featuredSet = new Set(featuredMembers.map((m) => m.handle));
    const otherMembers = availableMembers.filter((m) => !featuredSet.has(m.handle));
    return { featured: featuredMembers, others: otherMembers };
  }, [availableMembers]);

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Nous visons la perfection dans chaque coupe, chaque détail compte."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "L'amour du métier guide chacun de nos gestes et conseils."
    },
    {
      icon: Users,
      title: "Communauté",
      description: "Une relation authentique avec nos clients est notre priorité."
    }
  ];

  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/5">
              <Users className="w-4 h-4 text-black" />
              <span className="text-sm font-medium text-black">Notre Équipe</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-black leading-tight">
              Les Artistes
              <br />
              <span className="italic text-black/70">du Quartier Général</span>
            </h1>
            
            <p className="text-xl text-black/60 leading-relaxed">
              Une équipe talentueuse et passionnée, spécialisée dans tous les styles de coiffure
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid – n'affiche que les membres dont l'image existe */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Propriétaires (KG + Benz) */} 
          {featured.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
              {featured.map((member) => (
                <motion.a
                  key={member.handle}
                  href={`https://instagram.com/${member.handle.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  {...fadeInUp}
                  transition={{ duration: 0.6 }}
                  className="group block overflow-hidden bg-white border border-black/10 hover:border-black/30 transition-colors"
                >
                  <div className="relative overflow-hidden aspect-[16/10] bg-gray-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="absolute inset-0 w-full h-full object-contain object-center group-hover:scale-[1.02] transition-transform duration-700"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <p className="text-white/90 text-sm leading-relaxed mb-3">{member.description}</p>
                      <span className="inline-flex items-center gap-2 text-white text-sm font-medium">
                        <Instagram className="w-4 h-4" /> Suivre
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-1">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h3 className="font-bold text-black text-2xl">{member.name}</h3>
                      <span className="text-xs font-semibold tracking-wider uppercase bg-black text-white px-3 py-1">
                        Propriétaire
                      </span>
                    </div>
                    <p className="text-black/60 text-sm font-medium">{member.handle}</p>
                    <p className="text-black/80 text-sm pt-2">{member.specialty}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          )}

          {/* Reste de l'équipe – cartes confortables (pas trop petites) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 auto-rows-fr">
              {others.map((member) => (
              <motion.a
                key={member.handle}
                href={`https://instagram.com/${member.handle.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                {...fadeInUp}
                transition={{ duration: 0.6 }}
                className="group block overflow-hidden bg-white border border-black/10 hover:border-black/30 transition-colors"
              >
                <div className="relative overflow-hidden aspect-[3/4]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-white/90 text-sm leading-relaxed mb-3">{member.description}</p>
                    <span className="inline-flex items-center gap-2 text-white text-sm font-medium">
                      <Instagram className="w-4 h-4" /> Suivre
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-1">
                  <h3 className="font-bold text-black text-xl">{member.name}</h3>
                  <p className="text-black/60 text-sm font-medium">{member.handle}</p>
                  <p className="text-black/80 text-sm pt-2">{member.specialty}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Diagonal Separator */}
      <div className="relative h-24 bg-white overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <polygon points="0,100 100,0 100,100" fill="black" />
        </svg>
      </div>

      {/* Values Section */}
      <section className="bg-black text-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16 space-y-4"
          >
            <h2 className="text-4xl lg:text-5xl font-bold">
              Nos Valeurs
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Ce qui fait du Quartier Général plus qu'un simple salon
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  {...fadeInUp}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative p-10 bg-white/5 hover:bg-white transition-all duration-500"
                >
                  <div className="space-y-6">
                    <div className="w-16 h-16 bg-white group-hover:bg-black flex items-center justify-center transition-colors duration-500">
                      <Icon className="w-8 h-8 text-black group-hover:text-white transition-colors duration-500" />
                    </div>
                    
                    <h3 className="text-2xl font-bold group-hover:text-black transition-colors duration-500">
                      {value.title}
                    </h3>
                    
                    <p className="text-white/70 group-hover:text-black/80 leading-relaxed transition-colors duration-500">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-black">
                Notre Histoire
              </h2>
              <div className="w-20 h-1 bg-black" />
            </div>
            
            <div className="space-y-6 text-lg text-black/70 leading-relaxed">
              <p>
                <strong className="text-black">Le Quartier Général</strong> est bien plus qu'un salon de coiffure. C'est un espace communautaire où se rencontrent passion, créativité et excellence technique.
              </p>
              
              <p>
                Situés au cœur de Montréal, nous nous démarquons par notre approche professionnelle, notre attention aux détails et notre ambiance moderne et chaleureuse. Notre équipe diversifiée et talentueuse maîtrise tous les styles : des coupes classiques aux fades modernes, des rasages traditionnels aux tresses sophistiquées.
              </p>
              
              <p>
                Que vous recherchiez une coupe précise, des box braids impeccables, des locks entretenus avec soin, ou que vous souhaitiez apprendre le métier à travers nos formations, Le Quartier Général est l'endroit idéal pour une expérience de qualité dans un espace inspirant.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 pt-8">
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-black">469+</div>
                <div className="text-black/60">Avis 5 étoiles</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-black">7</div>
                <div className="text-black/60">Artistes experts</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-black">100%</div>
                <div className="text-black/60">Satisfaction client</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
