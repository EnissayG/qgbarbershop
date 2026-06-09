import { useEffect } from "react";
import { useLocation } from "react-router";
import { shopSiteUrl } from "../config/shopInfo";

function upsertMeta(attr: "name" | "property", key: string, content: string): HTMLMetaElement {
  let meta = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(attr, key);
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", content);
  return meta;
}

function upsertCanonical(href: string): HTMLLinkElement {
  let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
  return link;
}

/**
 * Met à jour titre, description, canonical et balises sociales pour la navigation client (SPA).
 */
export function usePageSeo(opts: { title: string; description: string }) {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const prevTitle = document.title;
    document.title = opts.title;

    const descriptionMeta = document.querySelector('meta[name="description"]');
    const prevDesc = descriptionMeta?.getAttribute("content") ?? "";
    upsertMeta("name", "description", opts.description);

    const canonicalPath = pathname === "/" && hash === "#reserver" ? "/" : pathname;
    const canonicalUrl = `${shopSiteUrl}${canonicalPath === "/" ? "" : canonicalPath}`;
    const canonical = upsertCanonical(canonicalUrl);
    const prevCanonical = canonical.getAttribute("href") ?? "";

    const ogTitle = upsertMeta("property", "og:title", opts.title);
    const ogDesc = upsertMeta("property", "og:description", opts.description);
    const ogUrl = upsertMeta("property", "og:url", canonicalUrl);
    const prevOgTitle = ogTitle.getAttribute("content") ?? "";
    const prevOgDesc = ogDesc.getAttribute("content") ?? "";
    const prevOgUrl = ogUrl.getAttribute("content") ?? "";

    const twitterTitle = upsertMeta("name", "twitter:title", opts.title);
    const twitterDesc = upsertMeta("name", "twitter:description", opts.description);
    const prevTwitterTitle = twitterTitle.getAttribute("content") ?? "";
    const prevTwitterDesc = twitterDesc.getAttribute("content") ?? "";

    return () => {
      document.title = prevTitle;
      if (descriptionMeta) descriptionMeta.setAttribute("content", prevDesc);
      canonical.setAttribute("href", prevCanonical);
      ogTitle.setAttribute("content", prevOgTitle);
      ogDesc.setAttribute("content", prevOgDesc);
      ogUrl.setAttribute("content", prevOgUrl);
      twitterTitle.setAttribute("content", prevTwitterTitle);
      twitterDesc.setAttribute("content", prevTwitterDesc);
    };
  }, [opts.title, opts.description, pathname, hash]);
}
