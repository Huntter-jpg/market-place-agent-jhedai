"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, MessageSquare, Sparkles, X } from "lucide-react";

const CHATBOT_URL =
  "https://fzffkvucctadm6vhqia2dxr7ka0ktohh.lambda-url.us-west-2.on.aws/api/chatbot/chatbot-app?agent_uuid=6a585ab8-6651-46eb-81d4-2bd606e44b9f&type=custom&v=2";

export default function FeaturedAgent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="chatbot" className="scroll-mt-24 py-32 lg:py-40 px-6 lg:px-8 bg-primary-900 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-800 blur-[150px] rounded-full pointer-events-none opacity-50" />

      <div className="max-w-container mx-auto relative z-10">
        {/* Header — centered */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-800 border border-primary-700 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Bot className="w-4 h-4 text-accent-400" />
            <span className="text-label-md text-white font-bold font-body">
              Asistente IA
            </span>
          </motion.div>

          <motion.h2
            className="font-display text-display-sm sm:text-display-md text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Habla con nuestro{" "}
            <span className="text-primary-300">asistente inteligente</span>
          </motion.h2>

          <motion.p
            className="text-body-lg text-white/80 max-w-2xl mx-auto font-body"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Nuestro asistente IA te ayuda a encontrar el agente ideal para tu
            negocio: e-commerce, reportes, correo, salud, contenido o analítica.
            Cuéntale tu necesidad y te recomendará la mejor solución.
          </motion.p>
        </div>

        {/* Interactive trigger card */}
        <motion.div
          className="max-w-xl mx-auto relative cursor-pointer group"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          onClick={() => setIsOpen(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") setIsOpen(true);
          }}
          aria-label="Abrir conversación con el Asistente IA"
        >
          {/* Glow behind */}
          <div className="absolute inset-0 bg-primary-500/10 blur-[80px] rounded-full group-hover:bg-primary-500/20 transition-all duration-500" />

          {/* Card */}
          <div className="relative bg-white/[0.06] backdrop-blur-xl border border-white/[0.12] rounded-2xl shadow-2xl overflow-hidden group-hover:border-primary-400/40 group-hover:shadow-glow-blue transition-all duration-500">
            {/* Chat header preview */}
            <div className="p-5 border-b border-white/10 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-primary-500 flex items-center justify-center shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/imagen_chatbot.webp"
                  alt="Asistente JhedAI"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="text-body-md text-white font-bold font-body">
                  Asistente JhedAI
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
                <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 border border-primary-500/30">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/imagen_chatbot.webp"
                    alt="Asistente JhedAI"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white/[0.05] border border-white/10 p-4 rounded-2xl rounded-tl-none text-body-sm text-white max-w-[85%] font-body">
                  ¡Hola! Soy el Asistente de JhedAI. Cuéntame qué necesitas
                  automatizar y te recomendaré el agente ideal para tu negocio...
                </div>
              </div>
            </div>

            {/* CTA strip */}
            <div className="px-5 pb-5">
              <div className="flex items-center justify-center gap-3 h-14 bg-primary-500 rounded-xl group-hover:bg-primary-400 transition-colors">
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

      {/* Chatbot Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Modal content — iframe as-is from the platform, with a floating X */}
            <motion.div
              className="relative w-full max-w-2xl h-[85vh] max-h-[700px] bg-white rounded-2xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Floating close button — sits above the iframe */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-white text-ink shadow-elevation-2 hover:bg-neutral-100 transition-colors"
                aria-label="Cerrar chatbot"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Iframe — fills the whole modal */}
              <iframe
                src={CHATBOT_URL}
                allow="clipboard-write"
                title="Chatbot Asistente JhedAI"
                className="w-full h-full border-0"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
