"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
  type ReactNode,
} from "react";
import AgentModal from "./AgentModal";
import AgentWidget from "./AgentWidget";

export interface ChatMessage {
  role: "ai" | "user";
  text: string;
}

interface AgentContextValue {
  messages: ChatMessage[];
  isTyping: boolean;
  error: string | null;
  sendMessage: (query: string) => Promise<void>;
  openModal: () => void;
  clearError: () => void;
}

const GREETING: ChatMessage = {
  role: "ai",
  text: "¡Hola! Soy el Agente de Ventas de JhedAI. Puedo mostrarte cómo nuestros agentes de IA se adaptan a tu proceso comercial y te ayudan a vender más. ¿En qué puedo ayudarte?",
};

const AgentContext = createContext<AgentContextValue>({
  messages: [],
  isTyping: false,
  error: null,
  sendMessage: async () => {},
  openModal: () => {},
  clearError: () => {},
});

export function useAgent() {
  return useContext(AgentContext);
}

export default function AgentProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([GREETING]);
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const sessionRef = useRef<string | null>(null);

  const openModal = useCallback(() => setIsModalOpen(true), []);
  const clearError = useCallback(() => setError(null), []);

  const sendMessage = useCallback(async (query: string) => {
    const trimmed = query.trim();
    if (!trimmed) return;

    setMessages((prev) => [...prev, { role: "user", text: trimmed }]);
    setIsTyping(true);
    setError(null);

    try {
      const body: Record<string, string> = { query: trimmed };
      if (sessionRef.current) body.session = sessionRef.current;

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.error || `Error ${res.status}`);
      }

      const data = await res.json();

      // Store session for continuity
      if (data.session) sessionRef.current = data.session;

      const reply =
        data.response || data.answer || data.message || data.text || "";

      if (reply) {
        setMessages((prev) => [...prev, { role: "ai", text: reply }]);
      }
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Error de conexión";
      setError(msg);
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: "Lo siento, hubo un error de conexión. Por favor intenta de nuevo.",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  }, []);

  return (
    <AgentContext.Provider
      value={{ messages, isTyping, error, sendMessage, openModal, clearError }}
    >
      {children}
      <AgentWidget onExpandToModal={openModal} />
      <AgentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </AgentContext.Provider>
  );
}
