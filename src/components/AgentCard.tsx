"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Headphones,
  TrendingUp,
  Megaphone,
  Users,
  BarChart3,
  DollarSign,
  ArrowRight,
} from "lucide-react";
import type { LucideProps } from "lucide-react";
import type { Agent } from "@/data/agents";

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  Headphones,
  TrendingUp,
  Megaphone,
  Users,
  BarChart3,
  DollarSign,
};

interface AgentCardProps {
  agent: Agent;
  index?: number;
}

export default function AgentCard({ agent, index = 0 }: AgentCardProps) {
  const IconComponent = iconMap[agent.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link href={`/agentes/${agent.id}`} className="block group">
        <div className="bg-white border border-neutral-200 rounded-xl p-6 hover:border-primary-300 hover:shadow-elevation-2 transition-all duration-300 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-primary-50 border border-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500 group-hover:border-primary-500 transition-colors duration-300">
              {IconComponent && (
                <IconComponent className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors duration-300" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-label-sm text-primary-500 font-bold font-body">
                {agent.category}
              </span>
              <h3 className="text-title-md text-primary-900 font-bold font-body mt-1 group-hover:text-primary-600 transition-colors">
                {agent.name}
              </h3>
            </div>
          </div>

          {/* Role / description */}
          {agent.role && (
            <p className="text-body-sm text-neutral-600 font-body mb-4 leading-relaxed">
              {agent.role}
            </p>
          )}

          {/* Quick bullets */}
          <div className="space-y-2 mb-6 flex-1">
            {agent.features.slice(0, 3).map((feature) => (
              <div key={feature} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-primary-400 rounded-full flex-shrink-0 mt-2" />
                <span className="text-body-sm text-neutral-500 font-body">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-2 text-label-md text-primary-600 font-bold font-body group-hover:text-accent-500 transition-colors">
            Ver ficha del agente
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
