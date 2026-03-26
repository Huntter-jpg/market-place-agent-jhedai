"use client";

import Image from "next/image";

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

  /*  ── Mobile-first responsive sizing ──
      "full"    → h-10 (40px mobile) → md:h-20 (80px desktop)
                   Brand-dominant, "JHED AI" + tagline fully legible.
      "compact" → h-10 (40px mobile) → md:h-14 (56px desktop)
                   Balanced with action buttons (~44px), used on scroll.

      2X autonomy area: p-1.5 on wrapper = 6px clear space around mark. */
  const h = size === "full" ? "h-10 md:h-20" : "h-10 md:h-14";

  return (
    <div
      className={`flex items-center p-1.5 ${className}`}
      role="img"
      aria-label="JHED AI - Ir a la página principal"
    >
      <Image
        src="/assets/Marca Horizontal_Mesa de trabajo 1.png"
        alt="JhedAI - Artificial Intelligence"
        width={600}
        height={170}
        className={`object-contain w-auto ${h} ${
          isDark ? "brightness-0 invert" : ""
        }`}
        priority
      />
    </div>
  );
}
