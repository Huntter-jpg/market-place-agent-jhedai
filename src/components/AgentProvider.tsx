"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import AgentModal from "./AgentModal";
import AgentWidget from "./AgentWidget";

interface AgentContextValue {
  openModal: () => void;
}

const AgentContext = createContext<AgentContextValue>({ openModal: () => {} });

export function useAgentModal() {
  return useContext(AgentContext);
}

export default function AgentProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = useCallback(() => setIsModalOpen(true), []);

  return (
    <AgentContext.Provider value={{ openModal }}>
      {children}
      <AgentWidget onExpandToModal={openModal} />
      <AgentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </AgentContext.Provider>
  );
}
