export interface DetailedUseCase {
  title: string;
  bullets: string[];
}

export interface Capability {
  name: string;
  bullets: string[];
}

export interface SpecificBenefit {
  title: string;
  description: string;
}

export interface ExecutiveSummary {
  whatIs: string;
  whatItSolves: string[];
  implementationFormat: string[];
}

export interface Agent {
  id: string;
  name: string;
  role?: string;
  description: string;
  longDescription: string;
  category: string;
  icon: string;
  features: string[];
  useCases: string[];
  featured?: boolean;
  executiveSummary?: ExecutiveSummary;
  targetAudience?: string[];
  detailedUseCases?: DetailedUseCase[];
  integrations?: {
    category: string;
    items: string[];
  }[];
  capabilities?: Capability[];
  specificBenefits?: SpecificBenefit[];
  saasInfo?: {
    bullets: string[];
    closingText: string;
  };
}

export const categories = [
  "Todos",
  "Ventas",
  "Atención al Cliente",
  "Marketing",
  "Operaciones",
  "Recursos Humanos",
  "Analítica",
  "Finanzas",
];

export const agents: Agent[] = [
  {
    id: "asistente-ventas",
    name: "Agente IA Experto en Ventas",
    role: "Automatiza la gestión de leads, pipeline y comunicaciones comerciales.",
    description:
      "Asistente de ventas profesional para captar, calificar y gestionar leads, automatizar comunicaciones comerciales y mantener tu CRM siempre actualizado.",
    longDescription:
      "Es un agente inteligente entrenado para operar como un miembro más de tu equipo comercial: capta oportunidades, conversa con prospectos, agenda reuniones y actualiza tu CRM en tiempo real, 24/7 y sin depender de la disponibilidad de los ejecutivos.",
    category: "Ventas",
    icon: "TrendingUp",
    featured: true,
    features: [
      "Captura y califica leads automáticamente",
      "Actualiza tu CRM en tiempo real",
      "Agenda reuniones sin fricción",
      "Seguimiento personalizado por email",
      "Scoring predictivo de prospectos",
      "Reportes de pipeline en tiempo real",
    ],
    useCases: [
      "Captura y calificación automática de leads.",
      "Gestión de pipeline y seguimiento de oportunidades.",
      "Comunicaciones outbound y follow-ups personalizados por email.",
      "Recordatorios y coordinación de reuniones con clientes.",
      "Actualización continua de contactos y deals en tu CRM.",
    ],
    executiveSummary: {
      whatIs:
        "Es un agente inteligente entrenado para operar como un miembro más de tu equipo comercial: capta oportunidades, conversa con prospectos, agenda reuniones y actualiza tu CRM en tiempo real, 24/7 y sin depender de la disponibilidad de los ejecutivos.",
      whatItSolves: [
        "Fugas de leads por falta de seguimiento oportuno.",
        "Ejecutivos saturados de tareas administrativas y de registro en CRM.",
        "Pérdida de oportunidades por no priorizar los mejores prospectos.",
        "Falta de visibilidad actualizada del pipeline para toma de decisiones.",
      ],
      implementationFormat: [
        "Plantilla lista para personalizar y desplegar.",
        "Despliegue en nube segura y escalable.",
        "Modalidad exclusiva SaaS: suscripción mensual con soporte, configuración inicial, monitoreo y mejora continua incluida.",
      ],
    },
    targetAudience: [
      "Gerentes comerciales y directores de ventas que requieren visibilidad clara del pipeline y proyección de cierres.",
      "Equipos de ejecutivos que gestionan alto volumen de leads y oportunidades en múltiples canales.",
      "Empresas B2B y B2C con ciclos de venta consultivos, donde el seguimiento y la oportunidad son clave.",
      "Startups y PYMEs que quieren escalar ventas sin aumentar proporcionalmente la dotación comercial.",
      "Instituciones y organizaciones públicas que necesitan gestionar solicitudes, reuniones e interesados en programas o servicios.",
    ],
    detailedUseCases: [
      {
        title: "Captura inteligente de leads",
        bullets: [
          "Captura leads desde formularios web, chat, redes, campañas y landing pages.",
          "Precalifica según criterios definidos (industria, tamaño, presupuesto, urgencia, necesidad).",
          "Encamina automáticamente al ejecutivo ideal o al equipo adecuado según reglas de negocio.",
        ],
      },
      {
        title: "Calificación y gestión de pipeline",
        bullets: [
          "Clasifica leads en etapas (nuevo, en contacto, propuesta, negociación, cerrado, etc.).",
          "Actualiza estado de cada oportunidad según interacciones, respuestas y reuniones realizadas.",
          "Prioriza oportunidades según probabilidad de cierre y valor potencial, ayudando a enfocar el esfuerzo comercial.",
        ],
      },
      {
        title: "Alcance a clientes y comunicaciones de seguimiento",
        bullets: [
          "Envía correos de bienvenida, seguimientos, recordatorios y nurtures personalizados según segmento y etapa.",
          'Retoma conversaciones "frías" y reactiva leads que quedaron sin respuesta.',
          "Mantiene una cadencia de contacto alineada con tu playbook comercial.",
        ],
      },
      {
        title: "Programación de citas y coordinación de reuniones",
        bullets: [
          "Propone horarios, coordina agendas con ejecutivos y clientes y bloquea automáticamente en calendarios (Google/Outlook).",
          "Envía invitaciones, recordatorios y links de reunión (Zoom, Meet, Teams, etc.).",
          "Reduce la fricción y el ida y vuelta de correos para concretar reuniones.",
        ],
      },
      {
        title: "Actualización de CRM y gestión de contactos",
        bullets: [
          "Crea y actualiza registros de contactos, empresas y oportunidades en tu CRM.",
          "Registra notas de llamadas, correos enviados, respuestas de clientes y próximos pasos.",
          "Mantiene el CRM limpio, actualizado y listo para reportes y dashboards ejecutivos.",
        ],
      },
    ],
    integrations: [
      {
        category: "Correo y calendario",
        items: ["Gmail", "Outlook", "Google Calendar", "Calendario de Outlook"],
      },
      {
        category: "CRM",
        items: [
          "HighLevel CRM",
          "AgendaPro",
          "HubSpot CRM",
          "NetHunt CRM",
          "Odoo CRM",
        ],
      },
      {
        category: "Productividad y datos",
        items: ["Notion", "Google Sheets"],
      },
      {
        category: "E-commerce",
        items: ["Shopify", "WooCommerce"],
      },
    ],
    capabilities: [
      {
        name: "Lector de documentos",
        bullets: [
          "Lee y extrae información de PDFs, documentos Word, archivos de texto y código.",
          "Resume propuestas comerciales, catálogos, contratos y presentaciones.",
          "Responde preguntas sobre documentos: condiciones comerciales, precios, características, políticas, etc.",
        ],
      },
      {
        name: "Análisis de imágenes",
        bullets: [
          "Interpreta capturas de pantalla, fotos de pizarras, gráficos y diagramas.",
          "Realiza OCR (lectura de texto en imágenes) para extraer datos clave de cotizaciones, órdenes de compra o documentos enviados por clientes.",
        ],
      },
      {
        name: "Gestión de fecha y hora",
        bullets: [
          "Conoce fecha y hora actual y gestiona múltiples zonas horarias.",
          "Calcula plazos, recordatorios de seguimiento y ventanas ideales de contacto.",
          "Facilita la programación de tareas y reuniones sensibles a tiempo.",
        ],
      },
      {
        name: "Compartir archivos",
        bullets: [
          "Genera enlaces seguros para compartir documentos, reportes o resúmenes con tu equipo o clientes.",
          "Permite descargar propuestas, reportes de pipeline o resúmenes de interacciones sin fricción.",
        ],
      },
      {
        name: "Gestor de archivos",
        bullets: [
          "Organiza todos los archivos utilizados en la conversación (subidos por el usuario o generados por el agente).",
          "Facilita localizar propuestas, anexos, minutas y otros documentos vinculados a oportunidades comerciales.",
        ],
      },
      {
        name: "Memoria de largo plazo",
        bullets: [
          "Recuerda preferencias de clientes, acuerdos previos, objeciones frecuentes y contexto de cuentas clave.",
          "Aprende de interacciones pasadas para afinar mensajes comerciales y mejorar la tasa de cierre en el tiempo.",
        ],
      },
    ],
    specificBenefits: [
      {
        title: "Más reuniones de calidad en menos tiempo",
        description:
          "La automatización de seguimiento, calificación y agendamiento incrementa la cantidad de reuniones calificadas sin aumentar la carga del equipo.",
      },
      {
        title: "Aumento de conversión por mejor timing",
        description:
          "El agente responde en segundos, mantiene conversaciones activas y evita enfriamiento de leads.",
      },
      {
        title: "CRM siempre al día",
        description:
          "Mejora la calidad del dato comercial, facilitando forecasting, reporting y decisiones de inversión en marketing y ventas.",
      },
      {
        title: "Reducción de tareas repetitivas para el equipo",
        description:
          "Los ejecutivos pueden enfocarse en reuniones, cierre y gestión de cuentas clave, no en copiar-pegar información y mandar correos estándar.",
      },
      {
        title: "Escalabilidad de la operación comercial",
        description:
          "Puedes manejar volúmenes crecientes de leads y clientes sin aumentar proporcionalmente la dotación comercial.",
      },
    ],
    saasInfo: {
      bullets: [
        "Setup inicial y suscripción mensual.",
        "Configuración inicial personalizada (prompts, reglas de negocio, integraciones).",
        "Soporte continuo, monitoreo de métricas y ajustes basados en tu uso real.",
        "Despliegue exclusivo en nube segura, con encriptación de datos y compliance con normativas locales e internacionales.",
      ],
      closingText:
        "Sin desarrollo complejo ni costos iniciales altos. Activa el agente y empieza a generar valor en días, no meses.",
    },
  },
  {
    id: "soporte-cliente",
    name: "Agente de Soporte al Cliente",
    role: "Gestiona consultas y resuelve problemas 24/7 con respuestas precisas.",
    description:
      "Agente inteligente que gestiona consultas, tickets y resuelve problemas de tus clientes 24/7 con respuestas precisas y empáticas.",
    longDescription:
      "Transforma tu servicio al cliente con un agente de IA que nunca duerme. Capaz de manejar múltiples conversaciones simultáneamente, escalar casos complejos y aprender de cada interacción para mejorar continuamente.",
    category: "Atención al Cliente",
    icon: "Headphones",
    features: [
      "Respuestas automáticas 24/7",
      "Gestión de tickets inteligente",
      "Escalamiento automático a agentes humanos",
      "Análisis de sentimiento en tiempo real",
      "Soporte multiidioma",
      "Integración con CRM y helpdesk",
    ],
    useCases: [
      "E-commerce con alto volumen de consultas",
      "Empresas SaaS con soporte técnico",
      "Servicios financieros con atención personalizada",
    ],
  },
  {
    id: "marketing-digital",
    name: "Agente de Marketing Digital",
    role: "Automatiza campañas y genera contenido optimizado.",
    description:
      "Automatiza campañas, genera contenido optimizado y analiza el rendimiento de tus estrategias de marketing.",
    longDescription:
      "Tu departamento de marketing potenciado por IA. Genera contenido para redes sociales, email marketing y blog. Optimiza campañas en tiempo real basándose en datos de rendimiento.",
    category: "Marketing",
    icon: "Megaphone",
    features: [
      "Generación de contenido para redes sociales",
      "Automatización de email marketing",
      "Análisis de rendimiento de campañas",
      "Optimización SEO automática",
      "Calendario editorial inteligente",
      "A/B testing automatizado",
    ],
    useCases: [
      "Agencias de marketing digital",
      "E-commerce con presencia en redes",
      "Empresas con estrategia de content marketing",
    ],
  },
  {
    id: "recursos-humanos",
    name: "Agente de Recursos Humanos",
    role: "Optimiza reclutamiento, onboarding y gestión de talento.",
    description:
      "Optimiza procesos de reclutamiento, onboarding y gestión del talento con inteligencia artificial.",
    longDescription:
      "Revoluciona la gestión de talento en tu empresa. Desde el screening inicial de CVs hasta el onboarding completo de nuevos empleados. Automatiza las tareas repetitivas de RRHH.",
    category: "Recursos Humanos",
    icon: "Users",
    features: [
      "Screening automático de CVs",
      "Programación de entrevistas",
      "Onboarding automatizado",
      "Encuestas de clima laboral",
      "Gestión de documentación",
      "Análisis de retención de talento",
    ],
    useCases: [
      "Empresas en proceso de contratación masiva",
      "Startups sin equipo de RRHH dedicado",
      "Corporaciones con alta rotación",
    ],
  },
  {
    id: "analista-datos",
    name: "Agente Analista de Datos",
    role: "Genera reportes automáticos y descubre insights de negocio.",
    description:
      "Genera reportes automáticos, descubre insights ocultos y visualiza datos clave de tu negocio.",
    longDescription:
      "Convierte tus datos en decisiones accionables. Este agente conecta con tus fuentes de datos, genera reportes automáticos y detecta patrones que humanos podrían pasar por alto.",
    category: "Analítica",
    icon: "BarChart3",
    features: [
      "Reportes automáticos programados",
      "Detección de anomalías",
      "Dashboards interactivos",
      "Predicciones basadas en ML",
      "Conexión con múltiples fuentes de datos",
      "Alertas inteligentes personalizables",
    ],
    useCases: [
      "Empresas data-driven",
      "Equipos de BI sin suficientes analistas",
      "Startups que necesitan métricas clave",
    ],
  },
  {
    id: "finanzas",
    name: "Agente de Finanzas",
    role: "Automatiza facturación, controla gastos y genera reportes financieros.",
    description:
      "Automatiza facturación, controla gastos y genera reportes financieros precisos para tu empresa.",
    longDescription:
      "Simplifica la gestión financiera de tu empresa. Automatiza la facturación, categoriza gastos automáticamente, reconcilia cuentas y genera reportes financieros listos para presentar.",
    category: "Finanzas",
    icon: "DollarSign",
    features: [
      "Facturación automática",
      "Categorización inteligente de gastos",
      "Reconciliación bancaria",
      "Reportes financieros automáticos",
      "Proyecciones de flujo de caja",
      "Alertas de presupuesto",
    ],
    useCases: [
      "PyMEs sin equipo contable dedicado",
      "Freelancers y consultores independientes",
      "Empresas con múltiples centros de costo",
    ],
  },
];
