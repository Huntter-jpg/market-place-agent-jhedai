"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Search,
  PenTool,
  Plug,
  BookOpen,
  Rocket,
} from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import AbstractShape from "../brand/AbstractShape";

const steps = [
  {
    icon: Search,
    title: "Diagnóstico y estrategia IA",
    description:
      "Analizamos procesos, datos disponibles y objetivos de negocio para definir dónde un agente generará más impacto (ventas, operación, servicio al cliente, soporte interno, etc.).",
    phase: 1,
  },
  {
    icon: PenTool,
    title: "Diseño del agente y casos de uso",
    description:
      "Definimos personalidad, flujos conversacionales, políticas de negocio y límites operativos, junto con los KPIs que mediremos (tiempo de respuesta, leads calificados, citas agendadas, etc.).",
    phase: 1,
  },
  {
    icon: Plug,
    title: "Integración tecnológica",
    description:
      "Conectamos el agente a tus plataformas vía API: CRMs, ERPs, plataformas de agendamiento, sistemas documentales, e-commerce, etc., en nube o infraestructura local.",
    phase: 2,
  },
  {
    icon: BookOpen,
    title: "Entrenamiento con conocimiento interno",
    description:
      'Alimentamos al agente con tus documentos, procedimientos, catálogos, contratos y datos históricos para que hable el idioma de tu empresa y no solo "genérico de la industria".',
    phase: 2,
  },
  {
    icon: Rocket,
    title: "Mejora continua y monitoreo",
    description:
      "Implementamos pilotos controlados, monitoreamos métricas reales y ajustamos comportamiento, prompts y reglas para maximizar el valor entregado.",
    phase: 2,
  },
];

export default function ProcessInfographic() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8 relative overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-[-5%] -translate-y-1/2">
        <AbstractShape variant="mixed" size={500} color="#0097ce" opacity={0.03} />
      </div>

      <div className="max-w-container mx-auto relative z-10">
        <SectionHeader
          title="Automatización con IA,"
          highlight="diseñada para tu realidad"
          subtitle='No vendemos "bots genéricos". Diseñamos agentes inteligentes alineados con la estrategia, procesos y sistemas de tu organización.'
        />

        {/* ═══ DESKTOP — Infographic Image ═══ */}
        <motion.div
          className="hidden lg:block max-w-4xl mx-auto mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="/assets/infografia agentes personalizados.png"
            alt="Arquitectura de Agentes Inteligentes JhedAI: Del Diagnóstico al Retorno de Inversión"
            width={1200}
            height={500}
            className="w-full h-auto rounded-xl shadow-elevation-2"
          />
        </motion.div>

        {/* ═══ MOBILE — Vertical Timeline ═══ */}
        <div className="lg:hidden">
          {/* Phase 1 */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-primary-200 to-transparent" />
            <span className="text-label-md text-primary-600 font-bold font-body bg-primary-50 border border-primary-100 px-4 py-1.5 rounded-full whitespace-nowrap text-center">
              Fase 1: Alineación y Diseño
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-primary-200 to-transparent" />
          </div>

          <div className="relative pl-14 space-y-5 mb-10">
            <div className="absolute left-[22px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0097ce] to-[#0097ce]/30" />

            {steps.slice(0, 2).map((step, i) => (
              <motion.div
                key={step.title}
                className="relative flex gap-4 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <div className="absolute -left-14 top-4">
                  <div className="w-11 h-11 bg-white border-2 border-neutral-200 rounded-xl flex items-center justify-center shadow-sm group-hover:bg-primary-500 group-hover:border-primary-500 transition-all duration-300">
                    <step.icon
                      className="w-5 h-5 text-primary-600 group-hover:text-white transition-colors"
                      strokeWidth={1.8}
                    />
                  </div>
                  <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-accent-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>

                <div className="flex-1 bg-white border border-neutral-200 rounded-xl p-5 hover:border-primary-200 hover:shadow-elevation-2 transition-all duration-300">
                  <h3 className="text-title-sm text-primary-900 font-bold font-body mb-2 group-hover:text-primary-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-body-sm text-neutral-600 leading-relaxed font-body">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Phase 2 */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-primary-200 to-transparent" />
            <span className="text-label-md text-primary-600 font-bold font-body bg-primary-50 border border-primary-100 px-4 py-1.5 rounded-full whitespace-nowrap text-center">
              Fase 2: Especialización y Valor
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-primary-200 to-transparent" />
          </div>

          <div className="relative pl-14 space-y-5">
            <div className="absolute left-[22px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#003764]/40 to-[#003764]" />

            {steps.slice(2).map((step, i) => (
              <motion.div
                key={step.title}
                className="relative flex gap-4 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <div className="absolute -left-14 top-4">
                  <div className="w-11 h-11 bg-white border-2 border-neutral-200 rounded-xl flex items-center justify-center shadow-sm group-hover:bg-primary-500 group-hover:border-primary-500 transition-all duration-300">
                    <step.icon
                      className="w-5 h-5 text-primary-600 group-hover:text-white transition-colors"
                      strokeWidth={1.8}
                    />
                  </div>
                  <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-accent-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                    {i + 3}
                  </span>
                </div>

                <div className="flex-1 bg-white border border-neutral-200 rounded-xl p-5 hover:border-primary-200 hover:shadow-elevation-2 transition-all duration-300">
                  <h3 className="text-title-sm text-primary-900 font-bold font-body mb-2 group-hover:text-primary-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-body-sm text-neutral-600 leading-relaxed font-body">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
