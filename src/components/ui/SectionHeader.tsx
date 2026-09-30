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
      className={`${centered ? "text-center" : ""} mb-20 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="font-display text-display-sm sm:text-display-md text-ink">
        {title}{" "}
        {highlight && <span className="text-primary-500">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className="mt-8 text-body-lg text-ink-subtle max-w-3xl mx-auto font-body">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
