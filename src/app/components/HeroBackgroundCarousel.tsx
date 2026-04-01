import { useState, useEffect } from "react";

const FADE_MS = 900;
const INTERVAL_MS = 4000;

type Props = {
  images: readonly string[];
  alts: readonly string[];
};

/**
 * Carrousel plein cadre sans Slick : évite les bugs de hauteur au resize.
 * Images en object-fit: cover, centrées, remplissent toujours la zone (ratio préservé par recadrage).
 */
export function HeroBackgroundCarousel({ images, alts }: Props) {
  const [index, setIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const n = images.length;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const fn = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);

  useEffect(() => {
    if (n <= 1) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % n), INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [n]);

  const fadeMs = reduceMotion ? 0 : FADE_MS;

  if (n === 0) return null;

  return (
    <div
      className="hero-bg-carousel pointer-events-none absolute inset-0 h-full min-h-full w-full overflow-hidden"
      aria-hidden
    >
      {images.map((src, i) => (
        <div
          key={`${src}-${i}`}
          className="hero-bg-carousel__slide absolute inset-0 h-full min-h-full w-full"
          style={{
            opacity: i === index ? 1 : 0,
            zIndex: i === index ? 2 : 1,
            transition: `opacity ${fadeMs}ms ease-out`,
          }}
        >
          <img
            src={src}
            alt={alts[i] ?? ""}
            className="hero-bg-carousel__img"
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "low"}
            decoding="async"
            sizes="100vw"
          />
        </div>
      ))}
    </div>
  );
}
