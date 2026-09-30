"use client";

interface JhedAiLogoProps {
  variant?: "horizontal" | "vertical";
  size?: "full" | "compact" | "footer";
  theme?: "light" | "dark";
  className?: string;
}

export default function JhedAiLogo({
  size = "full",
  className = "",
}: JhedAiLogoProps) {
  const isFooter = size === "footer";
  const src = isFooter
    ? "/assets/logo-blanco.png"
    : "/assets/Marca-Horizontal_Mesa-de-trabajo-1.svg";

  /* Header SVG is wide (3.3:1) → h-10 (40px) yields ~131px width.
     Footer PNG is square (1:1) → use w-36 (144px) to match visual width. */
  const sizeClass = isFooter ? "w-36 h-auto" : "h-10 w-auto";

  return (
    <div
      className={`flex items-center ${className}`}
      role="img"
      aria-label="JHED AI - Ir a la página principal"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt="JhedAI - Artificial Intelligence"
        className={`object-contain ${sizeClass}`}
      />
    </div>
  );
}
