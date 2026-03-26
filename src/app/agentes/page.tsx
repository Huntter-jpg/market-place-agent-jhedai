"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { agents, categories } from "@/data/agents";
import AgentCard from "@/components/AgentCard";
import AbstractShape from "@/components/brand/AbstractShape";

export default function AgentesPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredAgents =
    activeCategory === "Todos"
      ? agents
      : agents.filter((a) => a.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="relative pt-32 pb-16 px-6 lg:px-8 overflow-hidden bg-neutral-50">
        <div className="absolute top-0 right-0 opacity-20">
          <AbstractShape variant="circle" size={400} color="#0097ce" opacity={0.05} />
        </div>

        <div className="max-w-container mx-auto relative z-10">
          <motion.h1
            className="font-display text-display-sm sm:text-display-md text-primary-900 tracking-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Agentes especialistas
          </motion.h1>
          <motion.p
            className="text-body-lg text-neutral-600 max-w-2xl font-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Explora nuestra biblioteca de agentes diseñados para funciones
            específicas. Cada agente es una plantilla avanzada que
            personalizamos según tu realidad, tus datos y tus sistemas.
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-[72px] z-30 bg-white border-b border-neutral-200 px-6 lg:px-8">
        <div className="max-w-container mx-auto py-4">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-label-sm font-bold font-body whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? "bg-primary-900 text-white shadow-sm"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Agent Grid */}
      <section className="py-12 px-6 lg:px-8">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAgents.map((agent, index) => (
              <AgentCard key={agent.id} agent={agent} index={index} />
            ))}
          </div>

          {filteredAgents.length === 0 && (
            <div className="text-center py-16">
              <p className="text-body-lg text-neutral-500 font-body">
                No hay agentes en esta categoría aún.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
