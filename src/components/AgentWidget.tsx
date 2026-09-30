"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Maximize2, Minimize2 } from "lucide-react";
import { useState } from "react";

const CHATBOT_URL =
  "https://fzffkvucctadm6vhqia2dxr7ka0ktohh.lambda-url.us-west-2.on.aws/api/chatbot/chatbot-app?agent_uuid=6a585ab8-6651-46eb-81d4-2bd606e44b9f&type=custom&v=2";

export default function AgentWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-[90]">
      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`absolute bottom-20 right-0 origin-bottom-right bg-white border border-neutral-200 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.4)] overflow-hidden ${
              isExpanded
                ? "w-[calc(100vw-2rem)] sm:w-[420px] h-[75vh] sm:h-[640px] max-h-[640px]"
                : "w-[calc(100vw-2rem)] sm:w-[360px] h-[70vh] sm:h-[540px] max-h-[540px]"
            } transition-all duration-300`}
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Floating controls — sit above the iframe */}
            <div className="absolute top-2 right-2 z-20 flex items-center gap-1">
              <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                className="hidden sm:flex w-8 h-8 rounded-full bg-white shadow-elevation-2 text-ink hover:bg-neutral-100 items-center justify-center transition-colors"
                aria-label={isExpanded ? "Reducir" : "Expandir"}
              >
                {isExpanded ? (
                  <Minimize2 className="w-3.5 h-3.5" />
                ) : (
                  <Maximize2 className="w-3.5 h-3.5" />
                )}
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white shadow-elevation-2 text-ink hover:bg-neutral-100 flex items-center justify-center transition-colors"
                aria-label="Cerrar chat"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Iframe — fills the whole widget */}
            <iframe
              src={CHATBOT_URL}
              allow="clipboard-write"
              title="Chatbot Asistente JhedAI"
              className="w-full h-full border-0"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(255,95,0,0.4)] transition-all duration-300 ${
          isOpen
            ? "bg-primary-800 hover:bg-primary-700"
            : "bg-accent-500 hover:bg-accent-600 hover:shadow-glow-orange"
        }`}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        aria-label={isOpen ? "Cerrar chat" : "Abrir chat con Asistente JhedAI"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Pulse ring when closed */}
      {!isOpen && (
        <span className="absolute -inset-1 rounded-full bg-accent-500/30 animate-ping pointer-events-none" />
      )}
    </div>
  );
}
