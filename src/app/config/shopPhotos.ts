/**
 * Photos réelles du QG — fichiers dans public/assets/shop/
 */
const b = "/assets/shop";

/** Instagram officiel du salon (co-proprio KG & Benz) */
export const shopInstagramUrl = "https://www.instagram.com/quartiergeneralbarbershop/";

export const shopPhotos = {
  logo: `${b}/qg-logo.png`,
  /** Bannière branding (hors carousel — usage marketing / print) */
  heroBanner: `${b}/hero-banner.png`,
  /** Carousel accueil — série actuelle du salon */
  carousel: [
    `${b}/carousel-01.png`,
    `${b}/carousel-02.png`,
    `${b}/carousel-03.png`,
    `${b}/carousel-04.png`,
    `${b}/carousel-05.png`,
    `${b}/carousel-06.png`,
  ],
  homeAbout: `${b}/about-atmosphere.png`,
  gallery: [
    `${b}/gallery-result-01.png`,
    `${b}/gallery-result-02.png`,
    `${b}/gallery-result-03.png`,
    `${b}/gallery-result-04.png`,
  ],
  contactHero: `${b}/shop-floor.png`,
  /** Affiche / visuel formation officielle */
  formationFlyer: `${b}/formation-flyer.png`,
  squad: {
    kg: `${b}/squad-kg.png`,
    benz: `${b}/squad-benz.png`,
    lennox: `${b}/squad-lennox.png`,
    hauzoftanz: `${b}/squad-hauzoftanz.png`,
    shuyacutz: `${b}/squad-shuyacutz.png`,
    magickevcuts: `${b}/squad-magickevcuts.png`,
    doncruzcuts: `${b}/squad-doncruzcuts.png`,
  },
} as const;
