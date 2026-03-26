"use client";

interface AbstractShapeProps {
  variant?: "circle" | "triangle" | "mixed";
  size?: number;
  color?: string;
  opacity?: number;
  className?: string;
}

export default function AbstractShape({
  variant = "circle",
  size = 400,
  color = "#003764",
  opacity = 0.06,
  className = "",
}: AbstractShapeProps) {
  if (variant === "triangle") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`pointer-events-none ${className}`}
        aria-hidden="true"
      >
        {/* Spirograph-like triangular lines - per brand manual p.21 */}
        {Array.from({ length: 20 }).map((_, i) => {
          const rotation = i * 9;
          const scale = 1 - i * 0.015;
          return (
            <path
              key={i}
              d="M200 60L340 300H60L200 60Z"
              stroke={color}
              strokeWidth="0.8"
              opacity={opacity * (1 - i * 0.03)}
              transform={`rotate(${rotation} 200 200) scale(${scale})`}
              style={{ transformOrigin: "200px 200px" }}
            />
          );
        })}
      </svg>
    );
  }

  if (variant === "mixed") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`pointer-events-none ${className}`}
        aria-hidden="true"
      >
        {/* Combined circular and triangular spirograph */}
        {Array.from({ length: 15 }).map((_, i) => {
          const rotation = i * 12;
          return (
            <g key={i} transform={`rotate(${rotation} 200 200)`}>
              <circle
                cx="200"
                cy="200"
                r={120 + i * 3}
                stroke={color}
                strokeWidth="0.6"
                opacity={opacity * (1 - i * 0.04)}
              />
              <ellipse
                cx="200"
                cy="200"
                rx={140 + i * 2}
                ry={80 + i * 4}
                stroke={color}
                strokeWidth="0.5"
                opacity={opacity * (1 - i * 0.04)}
              />
            </g>
          );
        })}
      </svg>
    );
  }

  // Circle variant (default) - spirograph-like circular lines
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {Array.from({ length: 25 }).map((_, i) => {
        const rotation = i * 7.2;
        const radiusOffset = i * 2;
        return (
          <ellipse
            key={i}
            cx="200"
            cy="200"
            rx={150 - radiusOffset}
            ry={100 + radiusOffset * 0.5}
            stroke={color}
            strokeWidth="0.7"
            opacity={opacity * (1 - i * 0.025)}
            transform={`rotate(${rotation} 200 200)`}
          />
        );
      })}
    </svg>
  );
}
