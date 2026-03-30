"use client";

interface JhedAiLogoProps {
  variant?: "horizontal" | "vertical";
  size?: "full" | "compact";
  theme?: "light" | "dark";
  className?: string;
}

export default function JhedAiLogo({
  size = "full",
  theme = "light",
  className = "",
}: JhedAiLogoProps) {
  const isDark = theme === "dark";

  /*  ── SVG logo with mobile-first responsive sizing ──
      "full"    → h-12 (48px mobile) → md:h-24 (96px desktop)
                   Brand-dominant, scaled up for impact.
      "compact" → h-10 (40px mobile) → md:h-16 (64px desktop)
                   Balanced with action buttons (~44px), used on scroll.

      2X autonomy area: p-1.5 on wrapper = 6px clear space around mark. */
  const h = size === "full" ? "h-12 md:h-24" : "h-10 md:h-16";

  return (
    <div
      className={`flex items-center p-1.5 ${className}`}
      role="img"
      aria-label="JHED AI - Ir a la página principal"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/Marca-Horizontal_Mesa-de-trabajo-1.svg"
        alt="JhedAI - Artificial Intelligence"
        className={`object-contain w-auto ${h} ${
          isDark ? "brightness-0 invert" : ""
        }`}
      />
    </div>
  );
}
