"use client";

import type { ReactNode } from "react";
import AgentWidget from "./AgentWidget";

export default function AgentProvider({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <AgentWidget />
    </>
  );
}
