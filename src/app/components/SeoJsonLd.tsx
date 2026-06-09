import {
  shopAddressLine1,
  shopBookingUrl,
  shopGoogleUrl,
  shopPhoneTel,
  shopSiteName,
  shopSiteUrl,
} from "../config/shopInfo";
import { shopInstagramUrl } from "../config/shopPhotos";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: shopSiteName,
  alternateName: ["QG Barbershop", "Barbier Quartier Général", "Quartier Général Barbershop"],
  url: shopSiteUrl,
  image: `${shopSiteUrl}/assets/og-preview.png`,
  telephone: shopPhoneTel,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: shopAddressLine1,
    addressLocality: "Montréal",
    addressRegion: "QC",
    postalCode: "H1N 1E6",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 45.5887,
    longitude: -73.534,
  },
  areaServed: {
    "@type": "City",
    name: "Montréal",
  },
  sameAs: [shopInstagramUrl, shopGoogleUrl, shopBookingUrl],
  hasMap: shopGoogleUrl,
  description:
    "Barbershop à Montréal Est : coupes, dégradés, cheveux afro et texturés, barbe, tresses et réservation en ligne.",
  knowsAbout: [
    "barbier Montréal",
    "barbershop Montréal Est",
    "coupe cheveux afro",
    "dégradé",
    "tresses",
    "locs",
  ],
};

export function SeoJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
    />
  );
}
