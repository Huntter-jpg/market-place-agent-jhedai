"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const impactBullets = [
  "Agentes de IA diseñados a la medida de tus procesos, datos y regulaciones internas.",
  "Despliegue flexible: nube segura o infraestructura local, según requerimientos de TI y compliance.",
  "Integración con cualquier software que disponga de API (CRM, ERP, e-commerce, sistemas internos, legacy, etc.).",
  "Modalidades: proyecto cerrado o suscripción mensual con soporte, mejora continua y nuevas funcionalidades.",
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function ImpactBridge() {
  return (
    <section className="relative z-10 bg-neutral-50 pt-12 pb-4">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {impactBullets.map((bullet, i) => (
            <motion.div
              key={bullet}
              className="flex items-start gap-4 p-5 rounded-2xl bg-primary-900 border border-primary-800 shadow-elevation-3 hover:shadow-[0_12px_40px_rgba(0,55,100,0.35)] transition-all duration-300"
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              <div className="w-6 h-6 bg-accent-500/20 border border-accent-500/40 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5 text-accent-400" strokeWidth={3} />
              </div>
              <span className="text-body-sm text-white font-body leading-relaxed">
                {bullet}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
