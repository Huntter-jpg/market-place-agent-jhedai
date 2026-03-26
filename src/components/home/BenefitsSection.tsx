"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Zap,
  BarChart3,
  HeadphonesIcon,
  Users,
} from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

const benefits = [
  {
    icon: TrendingUp,
    title: "Más ventas y mejores clientes",
    description:
      "Captura, califica y nutre leads automáticamente, priorizando las oportunidades con mayor probabilidad de cierre e integrando todo con tu CRM.",
  },
  {
    icon: Zap,
    title: "Eficiencia operativa inmediata",
    description:
      "Reduce tiempos de respuesta, errores manuales y retrabajos, automatizando tareas en áreas como comercial, soporte, operación y backoffice.",
  },
  {
    icon: BarChart3,
    title: "Decisiones guiadas por datos",
    description:
      "Los agentes registran cada interacción, alimentan tus sistemas con datos limpios y facilitan dashboards ejecutivos para tomar decisiones con evidencia.",
  },
  {
    icon: HeadphonesIcon,
    title: "Experiencia de cliente constante 24/7",
    description:
      "Atención siempre disponible, con respuestas consistentes, personalizadas y alineadas a tus protocolos de servicio, sin depender de horarios o disponibilidad de equipo.",
  },
  {
    icon: Users,
    title: "Escalabilidad sin contratar más personal",
    description:
      "Aumenta el volumen de interacciones que puedes gestionar (consultas, leads, casos, solicitudes) sin incrementar proporcionalmente tu dotación.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function BenefitsSection() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-neutral-50">
      <div className="max-w-container mx-auto">
        <SectionHeader
          title="Convierte la IA en resultados de negocio,"
          highlight="no solo en tecnología"
          subtitle="Los agentes con IA permiten que tus equipos se enfoquen en tareas de alto valor mientras la automatización se encarga del trabajo repetitivo, la captura de datos y la comunicación 24/7 con clientes y usuarios internos."
        />

        <div className="flex flex-wrap justify-center gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="bg-white border border-neutral-200 rounded-xl p-7 hover:border-primary-300 hover:shadow-elevation-2 transition-all duration-300 group w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="w-12 h-12 bg-primary-50 border border-primary-100 rounded-lg flex items-center justify-center mb-5 group-hover:bg-primary-500 group-hover:border-primary-500 transition-colors duration-300">
                <benefit.icon className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-title-lg text-primary-900 font-bold font-body mb-3 group-hover:text-primary-600 transition-colors">
                {benefit.title}
              </h3>
              <p className="text-body-md text-neutral-600 leading-relaxed font-body">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
