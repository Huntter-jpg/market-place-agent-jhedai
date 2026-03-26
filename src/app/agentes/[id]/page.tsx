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
  Check,
  ArrowLeft,
  Shield,
  Clock,
  Sparkles,
  HeadphonesIcon,
  Calendar,
  Target,
  FileText,
  Image,
  Share2,
  FolderOpen,
  Brain,
  Plug,
  Lock,
  MessageCircle,
} from "lucide-react";
import { agents } from "@/data/agents";
import { notFound } from "next/navigation";
import type { LucideProps } from "lucide-react";
import AbstractShape from "@/components/brand/AbstractShape";

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  Headphones,
  TrendingUp,
  Megaphone,
  Users,
  BarChart3,
  DollarSign,
};

const capabilityIconMap: Record<string, React.ComponentType<LucideProps>> = {
  "Lector de documentos": FileText,
  "Análisis de imágenes": Image,
  "Gestión de fecha y hora": Clock,
  "Compartir archivos": Share2,
  "Gestor de archivos": FolderOpen,
  "Memoria de largo plazo": Brain,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function SalesAgentPage({ agent }: { agent: (typeof agents)[0] }) {
  const IconComponent = iconMap[agent.icon];

  return (
    <div className="min-h-screen bg-primary-900">
      {/* Background shapes */}
      <div className="absolute top-20 right-0 opacity-10 pointer-events-none">
        <AbstractShape variant="circle" size={500} color="#ffffff" opacity={0.03} />
      </div>

      {/* Back nav */}
      <div className="max-w-container mx-auto px-6 lg:px-8 pt-28">
        <Link
          href="/agentes"
          className="inline-flex items-center gap-2 text-label-md text-primary-400 hover:text-white px-4 h-10 rounded-full transition-colors duration-200 -ml-4 font-body"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a agentes
        </Link>
      </div>

      <div className="max-w-container mx-auto px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          className="max-w-4xl mb-16 relative z-10"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <div className="flex items-start gap-6 mb-6">
            <div className="w-[72px] h-[72px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
              {IconComponent && (
                <IconComponent
                  className="w-8 h-8 text-primary-400"
                  strokeWidth={1.4}
                />
              )}
            </div>
            <div>
              <span className="text-label-md text-primary-300 bg-primary-500/10 border border-primary-500/20 px-3 py-1.5 rounded-full font-body">
                {agent.category}
              </span>
              <h1 className="font-display text-display-sm text-white mt-3 tracking-tight">
                {agent.name}
              </h1>
            </div>
          </div>
          <p className="text-body-lg text-primary-200 leading-relaxed font-body">
            {agent.description}
          </p>
        </motion.div>

        {/* 1. Executive Summary */}
        {agent.executiveSummary && (
          <motion.section
            className="mb-16 relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="font-display text-headline-md text-white mb-6">
              ¿Qué es el {agent.name}?
            </h2>
            <p className="text-body-lg text-primary-200 leading-relaxed mb-8 font-body">
              {agent.executiveSummary.whatIs}
            </p>

            <h3 className="text-title-lg text-white mb-4 font-body">
              ¿Qué resuelve?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {agent.executiveSummary.whatItSolves.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3.5 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
                >
                  <div className="w-5 h-5 bg-primary-500/20 border border-primary-500/50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary-400" strokeWidth={3} />
                  </div>
                  <span className="text-body-md text-primary-200 font-body">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <h3 className="text-title-lg text-white mb-4 font-body">
              Formato de implementación
            </h3>
            <div className="space-y-3 mb-8">
              {agent.executiveSummary.implementationFormat.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3.5 p-4 rounded-xl bg-primary-500/5 border border-primary-500/20"
                >
                  <div className="w-5 h-5 bg-primary-500/20 border border-primary-500/50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary-400" strokeWidth={3} />
                  </div>
                  <span className="text-body-md text-primary-200 font-body">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://calendar.app.google/xJ65YJbmrHFXmoqeA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 h-12 bg-accent-500 text-white text-label-lg font-bold font-body rounded-full shadow-glow-orange hover:bg-accent-600 transition-all active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4" />
                Agendar demo del Agente de Ventas
              </a>
              <a
                href="https://wa.me/56964730628"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 h-12 border border-primary-600 bg-white/5 text-primary-200 text-label-lg font-bold font-body rounded-full hover:bg-white/10 hover:border-primary-500 transition-all active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
            <p className="mt-3 text-body-sm text-primary-300 font-body">
              En 30 minutos te mostramos cómo este agente se integra a tu CRM y
              procesos actuales de ventas vía SaaS.
            </p>
          </motion.section>
        )}

        {/* 2. Target Audience */}
        {agent.targetAudience && (
          <motion.section
            className="mb-16 relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="font-display text-headline-md text-white mb-3">
              ¿Para quién es este agente?
            </h2>
            <p className="text-body-lg text-primary-200 mb-6 font-body">
              Pensado para equipos que necesitan vender más con el mismo esfuerzo
              (o menos)
            </p>
            <div className="space-y-3">
              {agent.targetAudience.map((audience, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 border border-white/5 bg-white/5 rounded-xl hover:border-white/15 hover:bg-white/10 transition-all duration-200"
                >
                  <div className="w-8 h-8 bg-primary-800 border border-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target
                      className="w-4 h-4 text-primary-400"
                      strokeWidth={1.5}
                    />
                  </div>
                  <span className="text-body-md text-primary-200 pt-1 font-body">
                    {audience}
                  </span>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* 3. Detailed Use Cases */}
        {agent.detailedUseCases && (
          <motion.section
            className="mb-16 relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="font-display text-headline-md text-white mb-8">
              Casos de uso: lo que puedes crear con este agente
            </h2>
            <div className="space-y-5">
              {agent.detailedUseCases.map((uc, index) => (
                <div
                  key={uc.title}
                  className="bg-white/5 border border-white/10 rounded-xl p-7 hover:border-white/20 transition-all group"
                >
                  <div className="flex items-center gap-4 mb-5">
                    <span className="w-10 h-10 bg-primary-500/20 border border-primary-500/50 text-primary-400 font-bold font-body rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      {index + 1}
                    </span>
                    <h3 className="text-title-lg text-white font-body group-hover:text-primary-400 transition-colors">
                      {uc.title}
                    </h3>
                  </div>
                  <div className="space-y-3 pl-14">
                    {uc.bullets.map((bullet) => (
                      <div key={bullet} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-primary-500/50 rounded-full flex-shrink-0 mt-2" />
                        <span className="text-body-md text-primary-200 leading-relaxed font-body">
                          {bullet}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* 4. Integrations */}
        {agent.integrations && (
          <motion.section
            className="mb-16 relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="font-display text-headline-md text-white mb-3">
              Integraciones del {agent.name}
            </h2>
            <p className="text-body-lg text-primary-200 mb-8 font-body">
              Este agente se conecta vía API con los principales CRMs,
              calendarios y herramientas que hoy ya utilizas.
            </p>
            <div className="space-y-8">
              {agent.integrations.map((group) => (
                <div key={group.category}>
                  <h3 className="text-title-md text-primary-200 mb-4 flex items-center gap-2 font-body">
                    <Plug
                      className="w-4 h-4 text-primary-400"
                      strokeWidth={1.5}
                    />
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="text-label-md text-primary-200 bg-white/5 border border-white/10 px-4 py-2.5 rounded-full hover:border-primary-500/50 hover:bg-primary-500/10 transition-all font-body"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              <p className="text-body-sm text-primary-300 font-body">
                Compatible con cualquier software que cuente con API disponible,
                incluyendo sistemas internos o desarrollos a medida.
              </p>
            </div>
          </motion.section>
        )}

        {/* 5. Capabilities */}
        {agent.capabilities && (
          <motion.section
            className="mb-16 relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="font-display text-headline-md text-white mb-3">
              Capacidades pre-integradas
            </h2>
            <p className="text-body-lg text-primary-200 mb-8 font-body">
              Estas capacidades vienen incorporadas como estándar en el
              ecosistema de agentes de JhedAI, y potencian al {agent.name} desde
              el día uno.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {agent.capabilities.map((cap) => {
                const CapIcon = capabilityIconMap[cap.name] || FileText;
                return (
                  <div
                    key={cap.name}
                    className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all group"
                  >
                    <div className="w-10 h-10 bg-primary-800 rounded-lg flex items-center justify-center mb-4 border border-white/10 group-hover:bg-primary-500/10 transition-colors">
                      <CapIcon
                        className="w-5 h-5 text-primary-400"
                        strokeWidth={1.5}
                      />
                    </div>
                    <h4 className="text-title-md text-white mb-4 font-body group-hover:text-primary-400 transition-colors">
                      {cap.name}
                    </h4>
                    <ul className="space-y-2.5">
                      {cap.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary-500/50 rounded-full flex-shrink-0 mt-2" />
                          <span className="text-body-sm text-primary-200 leading-relaxed font-body">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </motion.section>
        )}

        {/* 6. Specific Benefits */}
        {agent.specificBenefits && (
          <motion.section
            className="mb-16 relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="font-display text-headline-md text-white mb-3">
              Beneficios específicos para tu área comercial
            </h2>
            <p className="text-body-lg text-primary-200 mb-8 font-body">
              Impacto directo en ventas y gestión comercial
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {agent.specificBenefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="bg-white/5 border border-white/5 rounded-xl p-6 hover:border-white/20 hover:bg-white/10 transition-all"
                >
                  <h4 className="text-title-md text-white mb-2 font-body">
                    {benefit.title}
                  </h4>
                  <p className="text-body-md text-primary-200 leading-relaxed font-body">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* 7. SaaS & Security */}
        {agent.saasInfo && (
          <motion.section
            className="mb-16 relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="bg-white/5 border border-primary-500/20 rounded-2xl p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-primary-500/20 border border-primary-500/50 rounded-xl flex items-center justify-center">
                  <Lock className="w-6 h-6 text-primary-400" strokeWidth={1.5} />
                </div>
                <h2 className="font-display text-headline-md text-white">
                  Modalidad SaaS y seguridad
                </h2>
              </div>
              <p className="text-title-md text-primary-200 mb-8 font-body">
                Implementación simple vía SaaS
              </p>
              <div className="space-y-4 mb-8">
                {agent.saasInfo.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-start gap-4">
                    <div className="w-5 h-5 bg-primary-500/20 border border-primary-500/50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check
                        className="w-3 h-3 text-primary-400"
                        strokeWidth={3}
                      />
                    </div>
                    <span className="text-body-md text-primary-200 leading-relaxed font-body">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-body-lg text-primary-300 font-bold tracking-wide font-body">
                {agent.saasInfo.closingText}
              </p>
            </div>
          </motion.section>
        )}

        {/* 8. Final CTA */}
        <motion.section
          className="mb-8 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="bg-white/5 border border-primary-500/20 rounded-2xl p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-accent-500/5 pointer-events-none" />
            <h2 className="font-display text-headline-md text-white mb-8 relative z-10">
              Probar y agendar
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 relative z-10">
              <a
                href="https://calendar.app.google/xJ65YJbmrHFXmoqeA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 h-12 bg-accent-500 text-white text-label-lg font-bold font-body rounded-full shadow-glow-orange hover:bg-accent-600 transition-all active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4" />
                Probar el Agente de Ventas ahora
              </a>
              <a
                href="https://calendar.app.google/xJ65YJbmrHFXmoqeA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 h-12 border border-primary-600 bg-white/5 text-primary-200 text-label-lg font-bold font-body rounded-full hover:bg-white/10 transition-all active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4" />
                Agendar demo personalizada
              </a>
            </div>
            <p className="text-body-sm text-primary-300 max-w-xl mx-auto mb-3 relative z-10 leading-relaxed font-body">
              Interactúa en vivo con el Agente IA Experto en Ventas: hazle
              preguntas, simula procesos de captación y pídele que agende una
              reunión contigo.
            </p>
            <p className="text-body-sm text-primary-300 max-w-xl mx-auto relative z-10 leading-relaxed font-body">
              Conversemos sobre tu proceso comercial actual y te mostramos cómo
              este agente SaaS se adapta a tu CRM, a tu industria y a los
              objetivos del próximo trimestre.
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

function DefaultAgentPage({ agent }: { agent: (typeof agents)[0] }) {
  const IconComponent = iconMap[agent.icon];

  return (
    <div className="min-h-screen bg-primary-900">
      {/* Back nav */}
      <div className="max-w-container mx-auto px-6 lg:px-8 pt-28">
        <Link
          href="/agentes"
          className="inline-flex items-center gap-2 text-label-md text-primary-400 hover:text-white px-4 h-10 rounded-full transition-colors duration-200 -ml-4 font-body"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a agentes
        </Link>
      </div>

      <div className="max-w-container mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main content */}
          <div className="lg:col-span-2">
            {/* Header */}
            <motion.div
              className="flex items-start gap-6 mb-10 relative z-10"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <div className="w-[72px] h-[72px] bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                {IconComponent && (
                  <IconComponent
                    className="w-8 h-8 text-primary-400"
                    strokeWidth={1.4}
                  />
                )}
              </div>
              <div>
                <span className="text-label-md text-primary-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full font-body">
                  {agent.category}
                </span>
                <h1 className="font-display text-display-sm text-white mt-3 tracking-tight">
                  {agent.name}
                </h1>
              </div>
            </motion.div>

            <p className="text-body-lg text-primary-200 leading-relaxed mb-14 relative z-10 font-body">
              {agent.longDescription}
            </p>

            {/* Features */}
            <div className="mb-14 relative z-10">
              <h2 className="font-display text-headline-sm text-white mb-8">
                Características
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {agent.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3.5 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/15 transition-all"
                  >
                    <div className="w-5 h-5 bg-primary-500/20 border border-primary-500/50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check
                        className="w-3 h-3 text-primary-400"
                        strokeWidth={3}
                      />
                    </div>
                    <span className="text-body-md text-primary-200 font-body">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Use cases */}
            <div className="relative z-10">
              <h2 className="font-display text-headline-sm text-white mb-8">
                Casos de uso
              </h2>
              <div className="space-y-4">
                {agent.useCases.map((useCase, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-5 p-5 bg-white/5 border border-white/5 rounded-xl hover:border-white/15 hover:bg-white/10 transition-all group"
                  >
                    <span className="w-10 h-10 bg-primary-500/20 border border-primary-500/50 text-label-md text-primary-400 font-bold font-body rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      {index + 1}
                    </span>
                    <span className="text-body-lg text-primary-200 pt-1 group-hover:text-white transition-colors font-body">
                      {useCase}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              {/* CTA card */}
              <div className="bg-white/5 border border-primary-500/20 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-accent-500/5 pointer-events-none" />
                <div className="text-center mb-8 relative z-10">
                  <p className="text-title-lg text-white font-body">
                    ¿Te interesa este agente?
                  </p>
                  <p className="text-body-sm text-primary-300 mt-2 leading-relaxed font-body">
                    Conversemos sobre cómo adaptarlo a tu negocio
                  </p>
                </div>

                <a
                  href="https://calendar.app.google/xJ65YJbmrHFXmoqeA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full h-12 bg-accent-500 text-white text-label-lg font-bold font-body rounded-full shadow-glow-orange hover:bg-accent-600 transition-all active:scale-[0.98] mb-4 relative z-10"
                >
                  <Calendar className="w-4 h-4" />
                  Agendar demo
                </a>
                <a
                  href="https://wa.me/56964730628"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full h-12 border border-primary-600 bg-white/5 text-primary-200 text-label-lg font-bold font-body rounded-full hover:bg-white/10 transition-all active:scale-[0.98] relative z-10"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>

              {/* Benefits */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-7">
                <div className="space-y-5">
                  {[
                    { icon: Clock, label: "Configuración en 5 minutos" },
                    { icon: HeadphonesIcon, label: "Soporte prioritario" },
                    { icon: Shield, label: "Cancela cuando quieras" },
                    { icon: Sparkles, label: "14 días de prueba gratis" },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-4 group">
                      <div className="w-10 h-10 bg-primary-800 border border-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500/10 transition-colors">
                        <Icon
                          className="w-5 h-5 text-primary-400"
                          strokeWidth={1.5}
                        />
                      </div>
                      <span className="text-body-md text-primary-200 font-body">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AgentDetail({
  params,
}: {
  params: { id: string };
}) {
  const agent = agents.find((a) => a.id === params.id);

  if (!agent) {
    notFound();
  }

  if (agent.id === "asistente-ventas") {
    return <SalesAgentPage agent={agent} />;
  }

  return <DefaultAgentPage agent={agent} />;
}
