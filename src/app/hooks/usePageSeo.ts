import { useEffect } from "react";

/**
 * Met à jour le titre et la meta description pour la navigation client (SPA).
 */
export function usePageSeo(opts: { title: string; description: string }) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = opts.title;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    const prevDesc = meta.getAttribute("content") ?? "";
    meta.setAttribute("content", opts.description);

    return () => {
      document.title = prevTitle;
      meta.setAttribute("content", prevDesc);
    };
  }, [opts.title, opts.description]);
}
