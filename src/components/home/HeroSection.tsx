"use client";

import { motion } from "framer-motion";
import { Calendar, MessageCircle, ArrowRight } from "lucide-react";
import AbstractShape from "../brand/AbstractShape";

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
    <section className="relative pt-36 pb-32 lg:pt-48 lg:pb-40 overflow-hidden bg-primary-900">
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

      <div className="max-w-container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="font-display text-display-sm sm:text-display-md lg:text-display-lg text-white tracking-tight leading-[1.1] mb-6"
            variants={fadeUp}
          >
            Agentes de IA a la medida{" "}
            <span className="text-primary-300">de tu negocio</span>
          </motion.h1>

          <motion.p
            className="text-body-lg text-white/80 max-w-3xl mx-auto leading-relaxed mb-12 font-body"
            variants={fadeUp}
          >
            Desarrollamos agentes y automatizaciones con IA entrenados en tu
            propio negocio, desplegados en la nube o en tus servidores locales,
            integrados vía API con tus sistemas actuales y disponibles como
            proyecto a medida o en formato SaaS (suscripción mensual).
          </motion.p>

          {/* Dual CTA */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
            variants={fadeUp}
          >
            <motion.a
              href={CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-8 h-14 bg-accent-500 text-white text-label-lg font-bold font-body rounded-full hover:bg-accent-600 hover:shadow-glow-orange transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Calendar className="w-5 h-5" />
              Agendar demo estratégica
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="https://wa.me/56964730628"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 h-14 bg-transparent border-2 border-white/30 text-white text-label-lg font-bold font-body rounded-full hover:bg-white/[0.06] hover:border-white/50 transition-all duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <MessageCircle className="w-5 h-5 text-green-400" />
              Hablar con un experto en IA
            </motion.a>
          </motion.div>

          <motion.p
            className="text-body-sm text-white/60 max-w-xl mx-auto font-body"
            variants={fadeUp}
          >
            Sin formularios eternos ni spam. Agenda una sesión con nuestro
            equipo para explorar casos de uso y ver agentes funcionando sobre
            escenarios reales de tu negocio.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
