"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "whatsapp";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  external?: boolean;
  icon?: ReactNode;
}

const variants = {
  primary:
    "bg-accent-500 text-white hover:bg-accent-600 shadow-md hover:shadow-glow-orange",
  secondary:
    "bg-white border-2 border-primary-900 text-primary-900 hover:bg-primary-50",
  whatsapp:
    "bg-white border border-neutral-300 text-neutral-800 hover:bg-neutral-50",
};

const sizes = {
  sm: "h-10 px-5 text-label-sm gap-1.5",
  md: "h-12 px-7 text-label-md gap-2",
  lg: "h-14 px-8 text-label-lg gap-2.5",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  external = false,
  icon,
}: ButtonProps) {
  const baseClasses = `inline-flex items-center justify-center font-bold rounded-full transition-all duration-300 active:scale-[0.97] ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={baseClasses}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={baseClasses}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
    >
      {content}
    </motion.button>
  );
}
