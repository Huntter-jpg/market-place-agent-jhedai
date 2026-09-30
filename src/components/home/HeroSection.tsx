"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import AbstractShape from "../brand/AbstractShape";
import PhoneMockup from "./PhoneMockup";

const CALENDAR_URL = "https://calendar.app.google/xJ65YJbmrHFXmoqeA";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function HeroSection() {
  return (
    <section className="relative pt-36 pb-32 lg:pt-44 lg:pb-40 overflow-hidden bg-primary-900">
      {/* Atmospheric radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-primary-800 blur-[180px] rounded-full opacity-60" />
        <div className="absolute top-[10%] right-[5%] w-[400px] h-[400px] bg-primary-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[5%] left-[10%] w-[300px] h-[300px] bg-accent-500/5 blur-[100px] rounded-full" />
      </div>

      {/* Abstract shapes for texture */}
      <div className="absolute top-[-5%] right-[-8%] opacity-100">
        <AbstractShape variant="circle" size={700} color="#0097ce" opacity={0.06} />
      </div>
      <div className="absolute bottom-[-10%] left-[-6%] opacity-100">
        <AbstractShape variant="triangle" size={550} color="#ffffff" opacity={0.03} />
      </div>
      <div className="absolute top-[20%] left-[5%] opacity-100">
        <AbstractShape variant="mixed" size={350} color="#0097ce" opacity={0.04} />
      </div>

      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 xl:gap-16">
          {/* Left column — Text content */}
          <motion.div
            className="flex-1 lg:max-w-xl xl:max-w-2xl"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="font-display text-display-sm sm:text-display-md lg:text-display-lg text-white mb-8"
              variants={fadeUp}
            >
              Agentes de IA a la medida{" "}
              <span className="text-primary-300">de tu negocio</span>
            </motion.h1>

            <motion.p
              className="text-body-lg sm:text-body-lg text-white/80 max-w-2xl leading-relaxed mb-16 font-body"
              variants={fadeUp}
            >
              Desarrollamos agentes y automatizaciones con IA entrenados en tu
              propio negocio, integrados vía API con tus sistemas actuales y
              disponibles como proyecto a medida o en formato SaaS.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-start gap-4 mb-8"
              variants={fadeUp}
            >
              <motion.a
                href={CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto px-6 sm:px-8 h-14 bg-primary-500 text-white text-label-lg font-bold font-body rounded-full hover:bg-primary-400 hover:shadow-glow-blue transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Agendar demo estratégica
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="https://wa.me/56964730628"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-6 sm:px-8 h-14 bg-transparent border border-white/25 text-white text-label-lg font-bold font-body rounded-full hover:bg-white/[0.06] hover:border-white/40 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle className="w-5 h-5 text-green-400" />
                Hablar con un experto
              </motion.a>
            </motion.div>

            <motion.p
              className="text-body-sm text-white/50 max-w-lg font-body"
              variants={fadeUp}
            >
              Sin formularios eternos ni spam. Agenda una sesión para explorar
              casos de uso reales de tu negocio.
            </motion.p>
          </motion.div>

          {/* Right column — Phone Mockup */}
          <motion.div
            className="flex-shrink-0 mt-16 lg:mt-0 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
