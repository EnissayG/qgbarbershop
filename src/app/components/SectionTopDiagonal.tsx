/**
 * Bordure diagonale entre sections (cohérence site).
 * — Après un fond noir : tone "light" + variant "slash" (triangle blanc).
 * — Après un fond blanc : tone "dark" + variant "slashAlt" (triangle noir).
 * Utiliser avec la classe CSS .section-diagonal-top sur la section pour l’espace sous le pli.
 */
type Tone = "light" | "dark";
type Variant = "slash" | "slashAlt";

const PATHS: Record<Variant, string> = {
  slash: "M0,100 L100,0 L100,100 Z",
  slashAlt: "M0,0 L100,100 L0,100 Z",
};

type Props = {
  tone: Tone;
  variant?: Variant;
  className?: string;
};

export function SectionTopDiagonal({ tone, variant = "slash", className = "" }: Props) {
  const fill = tone === "light" ? "#ffffff" : "#000000";
  const d = PATHS[variant];

  return (
    <div
      className={`pointer-events-none absolute bottom-full left-0 right-0 z-20 h-11 w-full sm:h-14 md:h-16 lg:h-[4.25rem] ${className}`}
      style={{ marginBottom: "-1px" }}
      aria-hidden
    >
      <svg
        className="h-full w-full block"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        shapeRendering="geometricPrecision"
      >
        <path d={d} fill={fill} />
      </svg>
    </div>
  );
}
