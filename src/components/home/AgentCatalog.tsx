"use client";

import { agents } from "@/data/agents";
import AgentCard from "../AgentCard";
import SectionHeader from "../ui/SectionHeader";

export default function AgentCatalog() {
  return (
    <section id="agentes" className="py-32 lg:py-40 px-6 lg:px-8 bg-neutral-50">
      <div className="max-w-container mx-auto">
        <SectionHeader
          title="Agentes especialistas listos"
          highlight="para adaptar a tu negocio"
          subtitle="Explora nuestra biblioteca de agentes diseñados para funciones específicas: e-commerce, reportes, correo, salud, contenido y analítica. Cada agente es una plantilla avanzada que personalizamos según tu realidad, tus datos y tus sistemas."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent, index) => (
            <AgentCard key={agent.id} agent={agent} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
