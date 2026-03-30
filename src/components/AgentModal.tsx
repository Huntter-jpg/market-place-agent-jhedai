"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, TrendingUp, ArrowRight, Calendar } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useAgent } from "./AgentProvider";

const CALENDAR_URL = "https://calendar.app.google/xJ65YJbmrHFXmoqeA";

interface AgentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AgentModal({ isOpen, onClose }: AgentModalProps) {
  const { messages, isTyping, sendMessage } = useAgent();
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

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
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop overlay */}
          <motion.div
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Modal container */}
          <motion.div
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 sm:p-6 pointer-events-none"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="pointer-events-auto w-full max-w-4xl h-[85vh] max-h-[800px] bg-primary-900 rounded-2xl border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 bg-primary-500 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-title-sm text-white font-bold font-body">
                      Agente IA de Ventas
                    </h3>
                    <div className="text-label-sm text-green-400 font-bold flex items-center gap-1.5 font-body">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      En línea
                    </div>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 flex items-center justify-center transition-colors"
                  aria-label="Cerrar modal"
                >
                  <X className="w-5 h-5 text-white/70" />
                </button>
              </div>

              {/* Messages area */}
              <div className="flex-1 overflow-y-auto p-6 space-y-5 scrollbar-none">
                {messages.map((msg, i) =>
                  msg.role === "ai" ? (
                    <motion.div
                      key={i}
                      className="flex gap-3"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.05 }}
                    >
                      <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center shrink-0 text-[10px] font-bold text-primary-200 border border-primary-500/30">
                        AI
                      </div>
                      <div className="bg-white/[0.06] border border-white/10 p-4 rounded-2xl rounded-tl-none text-body-sm text-primary-100 max-w-[85%] font-body leading-relaxed">
                        {msg.text}
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={i}
                      className="flex gap-3 justify-end"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.05 }}
                    >
                      <div className="bg-accent-500 p-4 rounded-2xl rounded-tr-none text-body-sm text-white font-bold max-w-[80%] font-body">
                        {msg.text}
                      </div>
                    </motion.div>
                  ),
                )}

                {/* Typing indicator */}
                {isTyping && (
                  <motion.div
                    className="flex gap-3"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center shrink-0 text-[10px] font-bold text-primary-200 border border-primary-500/30">
                      AI
                    </div>
                    <div className="bg-white/[0.06] border border-white/10 px-5 py-4 rounded-2xl rounded-tl-none">
                      <div className="flex gap-1.5">
                        <span className="w-2 h-2 bg-primary-300 rounded-full animate-bounce [animation-delay:0ms]" />
                        <span className="w-2 h-2 bg-primary-300 rounded-full animate-bounce [animation-delay:150ms]" />
                        <span className="w-2 h-2 bg-primary-300 rounded-full animate-bounce [animation-delay:300ms]" />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Calendar CTA (always visible after messages) */}
                {!isTyping && messages.length >= 1 && (
                  <motion.div
                    className="flex gap-3"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center shrink-0 text-[10px] font-bold text-primary-200 border border-primary-500/30">
                      AI
                    </div>
                    <div className="bg-white/[0.06] border border-white/10 p-4 rounded-2xl rounded-tl-none max-w-[85%]">
                      <p className="text-body-sm text-primary-100 font-body leading-relaxed mb-3">
                        ¿Te gustaría agendar una demo estratégica para ver cómo
                        funcionaría en tu negocio?
                      </p>
                      <a
                        href={CALENDAR_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent-500 text-white text-label-sm font-bold font-body rounded-full hover:bg-accent-600 hover:shadow-glow-orange transition-all"
                      >
                        <Calendar className="w-4 h-4" />
                        Agendar demo
                      </a>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input area */}
              <div className="px-6 py-4 border-t border-white/10 shrink-0">
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Escribe un mensaje..."
                    disabled={isTyping}
                    className="flex-1 h-12 bg-white/[0.06] border border-white/10 rounded-full px-5 text-body-sm text-white placeholder:text-primary-400 font-body outline-none focus:border-primary-400 transition-colors disabled:opacity-50"
                  />
                  <button
                    onClick={handleSend}
                    disabled={isTyping || !inputValue.trim()}
                    className="w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center hover:bg-accent-600 transition-colors shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ArrowRight className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
