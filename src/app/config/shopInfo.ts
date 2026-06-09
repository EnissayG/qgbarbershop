/** Coordonnées et liens officiels, Quartier Général Barbershop */

/** Domaine public du site (SEO, canonical, sitemap, partages). */
export const shopSiteUrl = "https://barbierquartiergeneral.ca";
export const shopSiteName = "Quartier Général Barbershop";

/** Slug boutique dans l’URL Squire (`/booking/book/…`). */
export const shopSquireShopRoute = "quartier-general-barbershop-montreal";

export const shopBookingUrl = `https://getsquire.com/booking/book/${shopSquireShopRoute}`;

/** URL iframe embarquée (même page que le lien direct, paramètres widget Squire). */
export const shopSquireEmbedUrl = `${shopBookingUrl}?platform=widget&viewMode=singleShop`;

/** Brand ID Squire (référence interne). */
export const shopSquireBrandId = "d8e21510-540e-4dc9-923f-cc4e8b7b7496";

export const shopGoogleUrl = "https://share.google/iw59bpzgtJpANcE1q";

export const shopAddressLine1 = "7072 rue Sherbrooke Est";
export const shopAddressLine2 = "Montréal, QC H1N 1E6";

/** Aperçu carte (iframe), même adresse que la fiche Google */
export const shopMapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
  "7072 rue Sherbrooke Est, Montréal, QC H1N 1E6"
)}&output=embed&z=16&hl=fr`;

export const shopPhoneTel = "+15147138684";
export const shopPhoneDisplay = "(514) 713-8684";

export const shopEmail = "barbierquartiergeneral@gmail.com";
