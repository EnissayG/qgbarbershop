/** Coordonnées et liens officiels, Quartier Général Barbershop */

/** Slug boutique dans l’URL Squire (`/booking/book/…`). */
export const shopSquireShopRoute = "quartier-general-barbershop-montreal";

export const shopBookingUrl = `https://getsquire.com/booking/book/${shopSquireShopRoute}`;

/** Brand ID Squire (référence support / intégrations futures). */
export const shopSquireBrandId = "d8e21510-540e-4dc9-923f-cc4e8b7b7496";

/** Script widget officiel (charge frameLoader.js, etc.). Ne pas pointer vers `/v2/` seul : la page HTML est obsolète. */
export const shopSquireWidgetScriptUrl = "https://widget.getsquire.com/widget.js";

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
