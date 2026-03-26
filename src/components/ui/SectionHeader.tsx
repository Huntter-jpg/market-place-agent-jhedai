"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  highlight?: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  title,
  highlight,
  subtitle,
  centered = true,
  className = "",
}: SectionHeaderProps) {
  return (
    <motion.div
      className={`${centered ? "text-center" : ""} mb-16 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="font-display text-display-sm sm:text-display-md text-primary-900 tracking-tight leading-tight">
        {title}{" "}
        {highlight && <span className="text-primary-500">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className="mt-5 text-body-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed font-body">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
