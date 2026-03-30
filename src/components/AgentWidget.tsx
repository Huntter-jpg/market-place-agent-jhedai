"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  X,
  TrendingUp,
  ArrowRight,
  Maximize2,
  Minimize2,
  Calendar,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useAgent } from "./AgentProvider";

const CALENDAR_URL = "https://calendar.app.google/xJ65YJbmrHFXmoqeA";

interface AgentWidgetProps {
  onExpandToModal: () => void;
}

export default function AgentWidget({ onExpandToModal }: AgentWidgetProps) {
  const { messages, isTyping, sendMessage } = useAgent();
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping, isOpen]);

  const handleExpandToModal = () => {
    setIsOpen(false);
    onExpandToModal();
  };

  const handleSend = () => {
    if (!inputValue.trim() || isTyping) return;
    sendMessage(inputValue);
    setInputValue("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[90]">
      {/* Chat bubble */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`absolute bottom-20 right-0 origin-bottom-right bg-primary-900 border border-white/10 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.4)] flex flex-col overflow-hidden ${
              isExpanded
                ? "w-[480px] h-[600px]"
                : "w-[360px] h-[480px]"
            } transition-all duration-300`}
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 bg-primary-500 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-label-md text-white font-bold font-body">
                    Agente IA de Ventas
                  </h4>
                  <span className="text-[11px] text-green-400 font-bold flex items-center gap-1 font-body">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                    En línea
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="w-8 h-8 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] flex items-center justify-center transition-colors"
                  aria-label={isExpanded ? "Reducir" : "Expandir"}
                >
                  {isExpanded ? (
                    <Minimize2 className="w-3.5 h-3.5 text-white/60" />
                  ) : (
                    <Maximize2 className="w-3.5 h-3.5 text-white/60" />
                  )}
                </button>
                <button
                  onClick={handleExpandToModal}
                  className="w-8 h-8 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] flex items-center justify-center transition-colors"
                  aria-label="Abrir modal completo"
                  title="Pantalla completa"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-accent-400" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] flex items-center justify-center transition-colors"
                  aria-label="Cerrar chat"
                >
                  <X className="w-3.5 h-3.5 text-white/60" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-none">
              {messages.map((msg, i) =>
                msg.role === "ai" ? (
                  <motion.div
                    key={i}
                    className="flex gap-2"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center shrink-0 text-[8px] font-bold text-primary-200 border border-primary-500/30">
                      AI
                    </div>
                    <div className="bg-white/[0.06] border border-white/10 p-3 rounded-xl rounded-tl-none text-body-sm text-primary-100 max-w-[85%] font-body">
                      {msg.text}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key={i}
                    className="flex gap-2 justify-end"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 }}
                  >
                    <div className="bg-accent-500 p-3 rounded-xl rounded-tr-none text-body-sm text-white font-bold max-w-[80%] font-body">
                      {msg.text}
                    </div>
                  </motion.div>
                ),
              )}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  className="flex gap-2"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center shrink-0 text-[8px] font-bold text-primary-200 border border-primary-500/30">
                    AI
                  </div>
                  <div className="bg-white/[0.06] border border-white/10 px-4 py-3 rounded-xl rounded-tl-none">
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 bg-primary-300 rounded-full animate-bounce [animation-delay:0ms]" />
                      <span className="w-1.5 h-1.5 bg-primary-300 rounded-full animate-bounce [animation-delay:150ms]" />
                      <span className="w-1.5 h-1.5 bg-primary-300 rounded-full animate-bounce [animation-delay:300ms]" />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Calendar CTA */}
              {!isTyping && messages.length >= 1 && (
                <motion.div
                  className="flex gap-2"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <div className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center shrink-0 text-[8px] font-bold text-primary-200 border border-primary-500/30">
                    AI
                  </div>
                  <div className="bg-white/[0.06] border border-white/10 p-3 rounded-xl rounded-tl-none max-w-[85%]">
                    <p className="text-body-sm text-primary-100 font-body mb-2">
                      ¿Agendamos una demo?
                    </p>
                    <a
                      href={CALENDAR_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-accent-500 text-white text-label-sm font-bold font-body rounded-full hover:bg-accent-600 transition-colors"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      Agendar demo
                    </a>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="px-4 py-3 border-t border-white/10 shrink-0">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Escribe un mensaje..."
                  disabled={isTyping}
                  className="flex-1 h-10 bg-white/[0.06] border border-white/10 rounded-full px-4 text-body-sm text-white placeholder:text-primary-400 font-body outline-none focus:border-primary-400 transition-colors disabled:opacity-50"
                />
                <button
                  onClick={handleSend}
                  disabled={isTyping || !inputValue.trim()}
                  className="w-10 h-10 bg-accent-500 rounded-full flex items-center justify-center hover:bg-accent-600 transition-colors shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(255,95,0,0.4)] transition-all duration-300 ${
          isOpen
            ? "bg-primary-800 hover:bg-primary-700"
            : "bg-accent-500 hover:bg-accent-600 hover:shadow-glow-orange"
        }`}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        aria-label={isOpen ? "Cerrar chat" : "Abrir chat con Agente de Ventas"}
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
