"use client";

import { motion } from "framer-motion";
import { TrendingUp, MessageSquare, Sparkles } from "lucide-react";
import { useAgentModal } from "../AgentProvider";

export default function FeaturedAgent() {
  const { openModal } = useAgentModal();

  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8 bg-primary-900 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-800 blur-[150px] rounded-full pointer-events-none opacity-50" />

      <div className="max-w-container mx-auto relative z-10">
        {/* Header — centered */}
        <div className="text-center mb-12">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-800 border border-primary-700 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <TrendingUp className="w-4 h-4 text-accent-400" />
            <span className="text-label-md text-white/80 font-bold font-body">
              Agente Destacado
            </span>
          </motion.div>

          <motion.h2
            className="font-display text-display-sm sm:text-display-md text-white tracking-tight leading-tight mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Conoce a tu nuevo{" "}
            <span className="text-primary-300">vendedor digital</span>
          </motion.h2>

          <motion.p
            className="text-body-lg text-white/80 max-w-2xl mx-auto leading-relaxed font-body"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Este agente especialista está siempre activo: capta y califica leads,
            explica los servicios de JhedAI, coordina reuniones y mantiene tu CRM
            actualizado sin que tu equipo se quede en tareas administrativas.
          </motion.p>
        </div>

        {/* Interactive trigger card — opens the Agent Modal */}
        <motion.div
          className="max-w-xl mx-auto relative cursor-pointer group"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          onClick={openModal}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") openModal(); }}
          aria-label="Abrir conversación con el Agente de Ventas"
        >
          {/* Glow behind */}
          <div className="absolute inset-0 bg-accent-500/10 blur-[80px] rounded-full group-hover:bg-accent-500/20 transition-all duration-500" />

          {/* Card */}
          <div className="relative bg-white/[0.06] backdrop-blur-xl border border-white/[0.12] rounded-2xl shadow-2xl overflow-hidden group-hover:border-accent-500/40 group-hover:shadow-glow-orange transition-all duration-500">
            {/* Chat header preview */}
            <div className="p-5 border-b border-white/10 flex items-center gap-3">
              <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="text-body-md text-white font-bold font-body">
                  Agente IA de Ventas
                </div>
                <div className="text-label-sm text-green-400 font-bold flex items-center gap-1.5 font-body">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  En línea — Listo para conversar
                </div>
              </div>
            </div>

            {/* Preview message */}
            <div className="p-5">
              <div className="flex gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center shrink-0 text-[10px] font-bold text-white/70 border border-primary-500/30">
                  AI
                </div>
                <div className="bg-white/[0.05] border border-white/10 p-4 rounded-2xl rounded-tl-none text-body-sm text-white/90 max-w-[85%] font-body leading-relaxed">
                  ¡Hola! Soy el Agente de Ventas de JhedAI. Puedo mostrarte cómo
                  nuestros agentes de IA se adaptan a tu proceso comercial...
                </div>
              </div>
            </div>

            {/* CTA strip */}
            <div className="px-5 pb-5">
              <div className="flex items-center justify-center gap-3 h-14 bg-accent-500 rounded-xl group-hover:bg-accent-600 transition-colors">
                <MessageSquare className="w-5 h-5 text-white" />
                <span className="text-label-lg text-white font-bold font-body">
                  Iniciar conversación con el Agente
                </span>
                <Sparkles className="w-4 h-4 text-white/70" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
