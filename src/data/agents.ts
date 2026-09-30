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
  badge: "Pro" | "Basic";
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
  "E-commerce",
  "Documentos",
  "Comunicación",
  "Salud",
  "Contenido",
  "Analítica",
];

export const agents: Agent[] = [
  /* ───────────────────────────────────────────────
     1. Experto en Tienda Online (Pro)
     ─────────────────────────────────────────────── */
  {
    id: "experto-tienda-online",
    name: "Experto en Tienda Online",
    role: "Gestión inteligente de productos, pedidos y servicio en Shopify, WooCommerce y Magento.",
    badge: "Pro",
    description:
      "Agente especializado en la gestión integral de tiendas online. Automatiza la administración de productos, inventario, pedidos y atención al cliente en las principales plataformas de e-commerce.",
    longDescription:
      "Tu copiloto para e-commerce: gestiona catálogos de productos, sincroniza inventario entre canales, procesa pedidos y brinda atención al cliente de forma automática. Conecta con Shopify, WooCommerce y Magento para centralizar toda la operación de tu tienda.",
    category: "E-commerce",
    icon: "ShoppingBag",
    featured: true,
    features: [
      "Gestión automática de catálogo de productos",
      "Sincronización de inventario multicanal",
      "Procesamiento inteligente de pedidos",
      "Atención al cliente 24/7 para tu tienda",
      "Actualizaciones masivas de precios y descripciones",
      "Alertas de stock bajo y reposición",
    ],
    useCases: [
      "Automatización completa de la gestión de tienda online.",
      "Actualización masiva de productos, precios y descripciones.",
      "Procesamiento y seguimiento automático de pedidos.",
      "Atención de consultas de clientes sobre productos y envíos.",
      "Sincronización de inventario entre múltiples canales de venta.",
    ],
    executiveSummary: {
      whatIs:
        "Es un agente inteligente entrenado para operar como el gestor principal de tu tienda online: administra productos, procesa pedidos, atiende consultas de clientes y mantiene tu catálogo actualizado 24/7 en Shopify, WooCommerce o Magento.",
      whatItSolves: [
        "Gestión manual y lenta de catálogos con cientos o miles de SKUs.",
        "Errores en la sincronización de inventario entre canales de venta.",
        "Demoras en la respuesta a consultas de clientes sobre productos y pedidos.",
        "Falta de automatización en el procesamiento de órdenes y actualizaciones.",
      ],
      implementationFormat: [
        "Plantilla lista para personalizar según tu plataforma de e-commerce.",
        "Despliegue en nube segura con conexión directa a Shopify, WooCommerce o Magento.",
        "Modalidad SaaS: suscripción mensual con soporte, configuración inicial y mejora continua.",
      ],
    },
    targetAudience: [
      "Dueños de tiendas online que necesitan automatizar la gestión diaria de productos y pedidos.",
      "Equipos de e-commerce que operan en múltiples plataformas y canales de venta.",
      "Marcas D2C que buscan escalar operaciones sin ampliar equipo operativo.",
      "Agencias de e-commerce que gestionan múltiples tiendas para diferentes clientes.",
    ],
    detailedUseCases: [
      {
        title: "Gestión automática de catálogo",
        bullets: [
          "Crea, actualiza y organiza productos con descripciones, imágenes y variantes.",
          "Aplica cambios masivos de precios, descuentos y categorías en segundos.",
          "Sincroniza catálogo entre Shopify, WooCommerce y Magento de forma automática.",
        ],
      },
      {
        title: "Procesamiento inteligente de pedidos",
        bullets: [
          "Procesa nuevas órdenes y actualiza estados de envío automáticamente.",
          "Gestiona devoluciones, cambios y reembolsos según tus políticas.",
          "Envía notificaciones de seguimiento al cliente en cada etapa del pedido.",
        ],
      },
      {
        title: "Atención al cliente de tu tienda",
        bullets: [
          "Responde consultas sobre productos, disponibilidad, tallas y envíos.",
          "Gestiona reclamos y escala casos complejos al equipo humano.",
          "Recomienda productos basándose en el historial de compra del cliente.",
        ],
      },
      {
        title: "Control de inventario multicanal",
        bullets: [
          "Monitorea niveles de stock en tiempo real y genera alertas de reposición.",
          "Sincroniza inventario entre tienda física, marketplace y tienda online.",
          "Previene sobreventa y desabastecimiento con predicciones de demanda.",
        ],
      },
    ],
    integrations: [
      {
        category: "Plataformas E-commerce",
        items: ["Shopify", "WooCommerce", "Magento"],
      },
      {
        category: "Marketplaces",
        items: ["MercadoLibre", "Amazon", "Falabella"],
      },
      {
        category: "Logística y envíos",
        items: ["Chilexpress", "Starken", "Shipit", "Correos de Chile"],
      },
      {
        category: "Pagos",
        items: ["MercadoPago", "Transbank", "Stripe", "PayPal"],
      },
    ],
    capabilities: [
      {
        name: "Lector de documentos",
        bullets: [
          "Lee catálogos de productos en PDF o Excel para cargas masivas.",
          "Extrae información de guías de despacho y órdenes de compra.",
        ],
      },
      {
        name: "Análisis de imágenes",
        bullets: [
          "Procesa fotos de productos para generar descripciones automáticas.",
          "Realiza OCR en boletas y facturas para conciliación.",
        ],
      },
      {
        name: "Gestión de fecha y hora",
        bullets: [
          "Programa publicaciones de productos y activación de ofertas.",
          "Calcula tiempos de entrega según zona geográfica.",
        ],
      },
      {
        name: "Compartir archivos",
        bullets: [
          "Genera reportes de ventas y los comparte con tu equipo.",
          "Exporta catálogos actualizados en formatos CSV y Excel.",
        ],
      },
      {
        name: "Gestor de archivos",
        bullets: [
          "Organiza imágenes, fichas de producto y documentos de proveedores.",
          "Mantiene un registro organizado de todas las operaciones de la tienda.",
        ],
      },
      {
        name: "Memoria de largo plazo",
        bullets: [
          "Recuerda preferencias de clientes recurrentes y su historial de compra.",
          "Aprende patrones de demanda para optimizar inventario y promociones.",
        ],
      },
    ],
    specificBenefits: [
      {
        title: "Operación 24/7 sin intervención manual",
        description:
          "Tu tienda funciona de forma autónoma: pedidos procesados, clientes atendidos y catálogo actualizado sin esperar a que tu equipo esté disponible.",
      },
      {
        title: "Reducción de errores operativos",
        description:
          "Elimina errores humanos en precios, stock y procesamiento de pedidos que generan pérdidas y reclamos.",
      },
      {
        title: "Escalabilidad sin aumentar dotación",
        description:
          "Maneja 10x más SKUs y pedidos sin contratar personal adicional para la gestión diaria de la tienda.",
      },
      {
        title: "Experiencia de compra consistente",
        description:
          "Cada cliente recibe atención rápida y personalizada sin importar la hora ni el volumen de consultas.",
      },
    ],
    saasInfo: {
      bullets: [
        "Setup inicial y suscripción mensual.",
        "Conexión directa con tu Shopify, WooCommerce o Magento.",
        "Soporte continuo, monitoreo de operaciones y ajustes basados en tu uso real.",
        "Despliegue en nube segura con encriptación de datos y compliance con normativas locales.",
      ],
      closingText:
        "Automatiza tu tienda online y empieza a vender más con menos esfuerzo operativo.",
    },
  },

  /* ───────────────────────────────────────────────
     2. Generador de Reportes PDF (Pro)
     ─────────────────────────────────────────────── */
  {
    id: "generador-reportes-pdf",
    name: "Generador de Reportes PDF",
    role: "Creación de reportes PDF formateados con gráficos y tablas usando ReportLab.",
    badge: "Pro",
    description:
      "Agente especializado en la generación automática de reportes PDF profesionales con gráficos, tablas y formato corporativo usando ReportLab.",
    longDescription:
      "Transforma datos crudos en reportes PDF listos para presentar. Este agente genera propuestas de presupuesto, análisis de datos, resúmenes ejecutivos y reportes financieros con formato profesional, gráficos y tablas — todo de forma automática.",
    category: "Documentos",
    icon: "FileText",
    features: [
      "Generación automática de PDFs con formato profesional",
      "Gráficos de barras, líneas y circulares integrados",
      "Tablas con datos formateados y estilos corporativos",
      "Templates personalizables con tu marca",
      "Programación de reportes periódicos",
      "Exportación desde múltiples fuentes de datos",
    ],
    useCases: [
      "Propuestas de presupuesto con desglose detallado y gráficos.",
      "Análisis de datos con visualizaciones profesionales.",
      "Resúmenes ejecutivos para dirección y stakeholders.",
      "Reportes financieros mensuales y trimestrales.",
      "Informes de avance de proyecto con métricas y KPIs.",
    ],
    executiveSummary: {
      whatIs:
        "Es un agente inteligente que genera reportes PDF profesionales de forma automática. Conecta con tus fuentes de datos, aplica formato corporativo y produce documentos listos para presentar con gráficos, tablas y visualizaciones.",
      whatItSolves: [
        "Horas dedicadas a formatear reportes manualmente en Word o Excel.",
        "Inconsistencia de formato y estilo entre reportes de diferentes equipos.",
        "Demoras en la entrega de informes periódicos a dirección.",
        "Falta de visualizaciones claras para comunicar datos de negocio.",
      ],
      implementationFormat: [
        "Plantilla con templates PDF predefinidos y personalizables.",
        "Motor de generación basado en ReportLab para máxima flexibilidad.",
        "Modalidad SaaS: suscripción mensual con soporte y actualizaciones incluidas.",
      ],
    },
    detailedUseCases: [
      {
        title: "Propuestas de presupuesto automatizadas",
        bullets: [
          "Genera propuestas comerciales con desglose de costos, timeline y términos.",
          "Incluye gráficos comparativos de opciones y escenarios.",
          "Aplica branding corporativo automáticamente (logo, colores, tipografía).",
        ],
      },
      {
        title: "Reportes financieros periódicos",
        bullets: [
          "Produce estados financieros mensuales con gráficos de tendencia.",
          "Genera balances, flujos de caja y P&L con formato profesional.",
          "Programa envío automático a los stakeholders relevantes.",
        ],
      },
      {
        title: "Resúmenes ejecutivos",
        bullets: [
          "Condensa datos complejos en dashboards visuales de una página.",
          "Destaca KPIs principales con indicadores de semáforo (rojo/amarillo/verde).",
          "Incluye comparativas periodo vs periodo con análisis de variación.",
        ],
      },
      {
        title: "Informes de análisis de datos",
        bullets: [
          "Transforma datasets en reportes narrativos con gráficos y conclusiones.",
          "Genera análisis estadísticos con visualizaciones de distribución y correlación.",
          "Produce reportes de segmentación de clientes y análisis de cohortes.",
        ],
      },
    ],
    integrations: [
      {
        category: "Fuentes de datos",
        items: ["Google Sheets", "Excel", "PostgreSQL", "MySQL", "BigQuery"],
      },
      {
        category: "Almacenamiento",
        items: ["Google Drive", "Dropbox", "OneDrive", "S3"],
      },
      {
        category: "Comunicación",
        items: ["Gmail", "Outlook", "Slack"],
      },
    ],
    specificBenefits: [
      {
        title: "Ahorro de horas en formateo manual",
        description:
          "Genera en segundos reportes que antes tomaban horas de trabajo manual en Word, Excel o PowerPoint.",
      },
      {
        title: "Consistencia profesional garantizada",
        description:
          "Cada reporte sigue el mismo estándar de calidad visual y corporativo sin importar quién lo solicite.",
      },
      {
        title: "Datos siempre actualizados",
        description:
          "Conecta directo con tus fuentes de datos para generar reportes con información en tiempo real.",
      },
      {
        title: "Automatización de entregas periódicas",
        description:
          "Programa la generación y envío de reportes diarios, semanales o mensuales sin intervención.",
      },
    ],
    saasInfo: {
      bullets: [
        "Setup inicial con templates personalizados a tu marca.",
        "Motor ReportLab para generación de PDFs de alta calidad.",
        "Soporte continuo y actualización de templates según necesidad.",
        "Despliegue seguro con encriptación de datos sensibles.",
      ],
      closingText:
        "Automatiza tus reportes y dedica tu tiempo a analizar, no a formatear.",
    },
  },

  /* ───────────────────────────────────────────────
     3. Experto en Correo (Basic)
     ─────────────────────────────────────────────── */
  {
    id: "experto-correo",
    name: "Experto en Correo",
    role: "Asistente de gestión de emails: leer, organizar, redactar y enviar en formato HTML.",
    badge: "Basic",
    description:
      "Agente que gestiona tu bandeja de entrada de forma inteligente. Lee, organiza, redacta y envía correos en formato HTML con estilo profesional.",
    longDescription:
      "Tu asistente personal de email: organiza tu bandeja, redacta respuestas profesionales en HTML, programa envíos, gestiona seguimientos y coordina calendarios. Ideal para profesionales que reciben alto volumen de correos y necesitan mantener comunicaciones impecables.",
    category: "Comunicación",
    icon: "Mail",
    features: [
      "Lectura y clasificación inteligente de correos",
      "Redacción de emails en formato HTML profesional",
      "Organización automática de bandeja de entrada",
      "Seguimiento de correos sin respuesta",
      "Programación de envíos y recordatorios",
      "Coordinación de calendarios por email",
    ],
    useCases: [
      "Seguimiento automático de correos sin respuesta.",
      "Recordatorios inteligentes de emails pendientes.",
      "Coordinación de calendarios y agendamiento de reuniones.",
      "Creación y envío de boletines informativos en HTML.",
      "Clasificación y priorización de bandeja de entrada.",
    ],
    executiveSummary: {
      whatIs:
        "Es un agente inteligente que gestiona tu correo electrónico como un asistente ejecutivo: lee, clasifica, responde, programa envíos y mantiene tu bandeja organizada para que te enfoques en lo que importa.",
      whatItSolves: [
        "Horas perdidas revisando y respondiendo correos repetitivos.",
        "Emails importantes que quedan sin respuesta o se pierden en la bandeja.",
        "Falta de seguimiento sistemático de conversaciones por correo.",
        "Dificultad para mantener comunicaciones profesionales y consistentes.",
      ],
      implementationFormat: [
        "Configuración inicial con tus cuentas de correo (Gmail/Outlook).",
        "Reglas de organización y respuesta personalizadas a tu estilo.",
        "Modalidad SaaS: suscripción mensual con soporte incluido.",
      ],
    },
    detailedUseCases: [
      {
        title: "Seguimiento de correos pendientes",
        bullets: [
          "Detecta correos enviados sin respuesta y genera recordatorios automáticos.",
          "Envía follow-ups personalizados según el contexto de la conversación.",
          "Escala correos urgentes que llevan demasiado tiempo sin atención.",
        ],
      },
      {
        title: "Organización inteligente de bandeja",
        bullets: [
          "Clasifica correos por prioridad, categoría y acción requerida.",
          "Archiva automáticamente newsletters, notificaciones y correos informativos.",
          "Destaca emails que requieren acción inmediata de tu parte.",
        ],
      },
      {
        title: "Redacción y envío profesional",
        bullets: [
          "Redacta respuestas profesionales en HTML con tu tono y estilo.",
          "Genera boletines y comunicados con formato visual atractivo.",
          "Programa envíos para horarios óptimos de apertura.",
        ],
      },
      {
        title: "Coordinación de calendarios",
        bullets: [
          "Propone horarios disponibles a los participantes de reuniones.",
          "Envía confirmaciones, recordatorios e invitaciones automáticamente.",
          "Gestiona reprogramaciones y cancelaciones sin fricción.",
        ],
      },
    ],
    integrations: [
      {
        category: "Correo electrónico",
        items: ["Gmail", "Outlook", "Yahoo Mail"],
      },
      {
        category: "Calendarios",
        items: ["Google Calendar", "Outlook Calendar"],
      },
      {
        category: "Productividad",
        items: ["Notion", "Google Docs", "Slack"],
      },
    ],
    specificBenefits: [
      {
        title: "Bandeja siempre bajo control",
        description:
          "Nunca más pierdas un correo importante ni dejes conversaciones sin seguimiento.",
      },
      {
        title: "Comunicaciones profesionales consistentes",
        description:
          "Cada email que envías mantiene un estándar de calidad y tono profesional.",
      },
      {
        title: "Ahorro de 2+ horas diarias",
        description:
          "Automatiza la lectura, clasificación y respuesta de correos rutinarios.",
      },
      {
        title: "Coordinación sin fricción",
        description:
          "Agendar reuniones y coordinar calendarios sin el ida y vuelta de emails.",
      },
    ],
    saasInfo: {
      bullets: [
        "Configuración inicial con tus cuentas de correo.",
        "Templates de respuesta personalizados a tu estilo.",
        "Soporte continuo y ajustes según tu uso.",
        "Conexión segura con OAuth, sin almacenar contraseñas.",
      ],
      closingText:
        "Recupera el control de tu bandeja y dedica tu tiempo a lo que realmente importa.",
    },
  },

  /* ───────────────────────────────────────────────
     4. Asistente de Ventas y Atención para Médicos (Pro)
     ─────────────────────────────────────────────── */
  {
    id: "asistente-medicos",
    name: "Asistente de Ventas y Atención para Médicos",
    role: "Gestión de consultas médicas, agendamiento de citas y embudo de ventas para pacientes.",
    badge: "Pro",
    description:
      "Agente especializado en consultorios y clínicas: gestiona consultas de pacientes, agenda citas automáticamente y administra el embudo de ventas de servicios médicos.",
    longDescription:
      "Tu recepcionista y asistente de ventas virtual para el sector salud. Responde preguntas sobre servicios médicos, captura pacientes potenciales, agenda citas, envía recordatorios y gestiona el ciclo completo desde la primera consulta hasta el seguimiento post-atención.",
    category: "Salud",
    icon: "Stethoscope",
    features: [
      "Agendamiento automático de citas médicas",
      "Respuesta a consultas sobre servicios y especialidades",
      "Captura y calificación de pacientes potenciales",
      "Recordatorios automáticos de citas",
      "Embudo de ventas para servicios médicos",
      "Seguimiento post-consulta personalizado",
    ],
    useCases: [
      "Responder preguntas sobre servicios médicos y especialidades.",
      "Capturar pacientes potenciales desde web, WhatsApp y redes sociales.",
      "Agendar, confirmar y recordar citas médicas automáticamente.",
      "Gestionar el embudo de ventas de tratamientos y procedimientos.",
      "Seguimiento post-consulta y fidelización de pacientes.",
    ],
    executiveSummary: {
      whatIs:
        "Es un agente inteligente diseñado para consultorios y clínicas médicas: atiende consultas de pacientes, agenda citas, gestiona el embudo de ventas de servicios médicos y mantiene la comunicación activa con pacientes potenciales y actuales.",
      whatItSolves: [
        "Pacientes potenciales que no agendan por falta de respuesta rápida.",
        "Recepción saturada con llamadas y mensajes de consulta repetitivos.",
        "Alto porcentaje de no-show por falta de recordatorios efectivos.",
        "Falta de seguimiento sistemático a pacientes interesados en tratamientos.",
      ],
      implementationFormat: [
        "Configuración personalizada según especialidad y servicios del consultorio.",
        "Conexión con sistemas de agendamiento y CRM médico.",
        "Modalidad SaaS: suscripción mensual con soporte especializado en salud.",
      ],
    },
    targetAudience: [
      "Consultorios médicos y odontológicos que necesitan automatizar la atención de consultas.",
      "Clínicas de especialidades con múltiples médicos y agenda compleja.",
      "Centros de estética y cirugía que gestionan embudo de ventas de procedimientos.",
      "Profesionales de salud independientes que quieren captar más pacientes sin contratar recepcionista.",
    ],
    detailedUseCases: [
      {
        title: "Atención de consultas de pacientes",
        bullets: [
          "Responde preguntas sobre especialidades, servicios, precios y coberturas.",
          "Informa sobre preparación para procedimientos y exámenes.",
          "Escala consultas médicas complejas al profesional correspondiente.",
        ],
      },
      {
        title: "Agendamiento inteligente de citas",
        bullets: [
          "Muestra horarios disponibles y permite agendar en tiempo real.",
          "Confirma citas y envía recordatorios por WhatsApp, email o SMS.",
          "Gestiona reprogramaciones y cancelaciones automáticamente.",
        ],
      },
      {
        title: "Embudo de ventas para servicios médicos",
        bullets: [
          "Captura leads interesados en tratamientos específicos.",
          "Califica pacientes según urgencia, interés y capacidad de pago.",
          "Envía información personalizada sobre tratamientos y financiamiento.",
        ],
      },
      {
        title: "Seguimiento y fidelización de pacientes",
        bullets: [
          "Envía recordatorios de controles periódicos y chequeos.",
          "Solicita feedback post-consulta para mejorar el servicio.",
          "Mantiene la comunicación activa para tratamientos en curso.",
        ],
      },
    ],
    integrations: [
      {
        category: "Agendamiento",
        items: ["Google Calendar", "Outlook Calendar", "AgendaPro", "Reservo"],
      },
      {
        category: "Comunicación",
        items: ["WhatsApp Business", "Gmail", "SMS"],
      },
      {
        category: "CRM y gestión",
        items: ["HubSpot", "Google Sheets", "Notion"],
      },
    ],
    capabilities: [
      {
        name: "Lector de documentos",
        bullets: [
          "Lee fichas de servicios y protocolos para responder consultas con precisión.",
          "Procesa listas de precios y convenios de seguros.",
        ],
      },
      {
        name: "Gestión de fecha y hora",
        bullets: [
          "Coordina agendas de múltiples profesionales en tiempo real.",
          "Calcula ventanas de disponibilidad y optimiza la agenda del día.",
        ],
      },
      {
        name: "Memoria de largo plazo",
        bullets: [
          "Recuerda historial de consultas y preferencias de cada paciente.",
          "Personaliza la comunicación según el tratamiento en curso.",
        ],
      },
    ],
    specificBenefits: [
      {
        title: "Más pacientes atendidos con el mismo equipo",
        description:
          "Automatiza la recepción y agendamiento para que tu personal se enfoque en la atención presencial.",
      },
      {
        title: "Reducción drástica de no-shows",
        description:
          "Recordatorios automáticos multicanal que reducen las inasistencias hasta en un 60%.",
      },
      {
        title: "Captación 24/7 de nuevos pacientes",
        description:
          "Nunca pierdas un paciente potencial por no responder fuera del horario de atención.",
      },
      {
        title: "Embudo de ventas profesional para salud",
        description:
          "Gestiona el ciclo completo desde la primera consulta hasta la conversión en paciente recurrente.",
      },
    ],
    saasInfo: {
      bullets: [
        "Setup inicial personalizado para tu especialidad y servicios.",
        "Conexión con tu sistema de agendamiento actual.",
        "Soporte continuo especializado en sector salud.",
        "Cumplimiento de normativas de privacidad de datos de salud.",
      ],
      closingText:
        "Automatiza tu consultorio y dedica tu tiempo a lo que mejor haces: atender pacientes.",
    },
  },

  /* ───────────────────────────────────────────────
     5. Creador de Contenido (Pro)
     ─────────────────────────────────────────────── */
  {
    id: "creador-contenido",
    name: "Creador de Contenido",
    role: "Generación de contenido visual (imágenes y videos) para marketing y redes sociales.",
    badge: "Pro",
    description:
      "Agente especializado en la generación de contenido visual para marketing: crea imágenes, banners, materiales promocionales y contenido de video para redes sociales y campañas publicitarias.",
    longDescription:
      "Tu equipo creativo potenciado por IA. Genera imágenes de alta calidad, banners promocionales, visuales de marca y contenido de video para anuncios y redes sociales. Ideal para equipos de marketing que necesitan producir contenido visual a escala sin depender de diseñadores externos.",
    category: "Contenido",
    icon: "Video",
    features: [
      "Generación de imágenes para redes sociales",
      "Creación de banners y materiales promocionales",
      "Visuales de marca consistentes con tu identidad",
      "Contenido de video para anuncios y campañas",
      "Adaptación automática a formatos de cada plataforma",
      "Templates personalizables con tu branding",
    ],
    useCases: [
      "Creación de materiales promocionales para campañas.",
      "Diseño de banners para web, email y redes sociales.",
      "Generación de visuales de marca consistentes.",
      "Producción de contenido de video para anuncios digitales.",
      "Adaptación de creatividades a múltiples formatos y plataformas.",
    ],
    executiveSummary: {
      whatIs:
        "Es un agente inteligente que genera contenido visual profesional para marketing: desde imágenes y banners hasta videos cortos para redes sociales y campañas publicitarias, todo alineado con la identidad visual de tu marca.",
      whatItSolves: [
        "Dependencia de diseñadores externos con tiempos y costos elevados.",
        "Inconsistencia visual entre piezas de diferentes campañas.",
        "Cuello de botella en la producción de contenido para múltiples canales.",
        "Falta de contenido de video por complejidad y costo de producción.",
      ],
      implementationFormat: [
        "Configuración con los lineamientos de marca (colores, tipografías, logo).",
        "Biblioteca de templates personalizados para tus formatos más usados.",
        "Modalidad SaaS: suscripción mensual con generación ilimitada de contenido.",
      ],
    },
    detailedUseCases: [
      {
        title: "Materiales promocionales para campañas",
        bullets: [
          "Genera piezas gráficas para lanzamientos, ofertas y eventos.",
          "Crea variaciones A/B para testing de creatividades.",
          "Produce materiales adaptados a cada etapa del funnel.",
        ],
      },
      {
        title: "Banners y visuales para redes sociales",
        bullets: [
          "Diseña posts, stories, reels covers y banners para todas las plataformas.",
          "Adapta automáticamente las dimensiones a Instagram, Facebook, LinkedIn y TikTok.",
          "Mantiene consistencia visual con la guía de marca en cada pieza.",
        ],
      },
      {
        title: "Contenido de video para anuncios",
        bullets: [
          "Genera videos cortos para anuncios en redes sociales.",
          "Crea animaciones de producto y demostraciones visuales.",
          "Produce contenido de video optimizado para cada plataforma publicitaria.",
        ],
      },
      {
        title: "Identidad visual y branding",
        bullets: [
          "Mantiene coherencia de marca en todas las piezas generadas.",
          "Aplica paleta de colores, tipografías y estilo visual automáticamente.",
          "Genera variaciones de logos y assets de marca para diferentes contextos.",
        ],
      },
    ],
    integrations: [
      {
        category: "Redes sociales",
        items: ["Instagram", "Facebook", "LinkedIn", "TikTok", "YouTube"],
      },
      {
        category: "Diseño",
        items: ["Canva", "Figma", "Adobe Creative Cloud"],
      },
      {
        category: "Marketing",
        items: ["HubSpot", "Mailchimp", "Google Ads", "Meta Ads"],
      },
    ],
    specificBenefits: [
      {
        title: "Producción visual a escala",
        description:
          "Genera decenas de piezas de contenido en minutos, no días, manteniendo calidad profesional.",
      },
      {
        title: "Consistencia de marca garantizada",
        description:
          "Cada pieza sigue los lineamientos de tu marca sin necesidad de revisión manual.",
      },
      {
        title: "Reducción de costos creativos",
        description:
          "Disminuye la dependencia de agencias y freelancers para la producción de contenido visual.",
      },
      {
        title: "Video accesible para todos los equipos",
        description:
          "Produce contenido de video sin necesidad de equipos de grabación ni editores especializados.",
      },
    ],
    saasInfo: {
      bullets: [
        "Setup inicial con lineamientos de marca y templates personalizados.",
        "Generación ilimitada de contenido visual.",
        "Soporte continuo y actualización de templates.",
        "Almacenamiento seguro de assets de marca y creatividades.",
      ],
      closingText:
        "Escala tu producción de contenido visual sin escalar tu equipo creativo.",
    },
  },

  /* ───────────────────────────────────────────────
     6. Analista de Datos Simple (Pro)
     ─────────────────────────────────────────────── */
  {
    id: "analista-datos-simple",
    name: "Analista de Datos Simple",
    role: "Análisis de datos, visualizaciones y generación de informes automáticos por correo.",
    badge: "Pro",
    description:
      "Agente que analiza tus datos, genera visualizaciones claras y envía informes automáticos por correo. Ideal para equipos que necesitan insights sin complejidad técnica.",
    longDescription:
      "Tu analista de datos personal: conecta con tus hojas de cálculo y bases de datos, genera dashboards visuales, limpia y transforma datos, y envía informes automáticos a tu equipo por correo. Sin necesidad de saber SQL ni Python.",
    category: "Analítica",
    icon: "BarChart3",
    features: [
      "Análisis automático de KPIs operativos",
      "Generación de dashboards y visualizaciones",
      "Limpieza y transformación de datos",
      "Informes automáticos por correo electrónico",
      "Hojas de cálculo con fórmulas inteligentes",
      "Detección de tendencias y anomalías",
    ],
    useCases: [
      "Monitoreo y reporte automático de KPIs operativos.",
      "Generación de dashboards visuales para dirección.",
      "Limpieza y preparación de datos desde múltiples fuentes.",
      "Creación de hojas de cálculo con fórmulas y análisis automatizados.",
      "Envío de informes periódicos por correo a stakeholders.",
    ],
    executiveSummary: {
      whatIs:
        "Es un agente inteligente que convierte tus datos en decisiones accionables: analiza KPIs, genera visualizaciones, limpia datasets y envía informes automáticos por correo — todo sin que necesites conocimientos técnicos avanzados.",
      whatItSolves: [
        "Datos dispersos en múltiples fuentes sin consolidar.",
        "Falta de visibilidad de KPIs operativos para toma de decisiones.",
        "Horas dedicadas a limpiar datos y preparar reportes manualmente.",
        "Equipos que necesitan insights pero no tienen analistas dedicados.",
      ],
      implementationFormat: [
        "Conexión directa con tus fuentes de datos (Sheets, Excel, bases de datos).",
        "Dashboards y reportes configurados según tus KPIs principales.",
        "Modalidad SaaS: suscripción mensual con soporte y ajustes incluidos.",
      ],
    },
    detailedUseCases: [
      {
        title: "Monitoreo de KPIs operativos",
        bullets: [
          "Conecta con tus fuentes de datos y calcula KPIs en tiempo real.",
          "Genera alertas cuando métricas clave se desvían de los objetivos.",
          "Produce reportes de tendencia para identificar mejoras o deterioros.",
        ],
      },
      {
        title: "Dashboards y visualizaciones",
        bullets: [
          "Crea dashboards interactivos con gráficos de barras, líneas y tortas.",
          "Genera visualizaciones de distribución, correlación y segmentación.",
          "Actualiza dashboards automáticamente con datos frescos.",
        ],
      },
      {
        title: "Limpieza y preparación de datos",
        bullets: [
          "Detecta y corrige errores, duplicados y valores faltantes.",
          "Normaliza formatos de datos entre diferentes fuentes.",
          "Transforma y enriquece datasets para análisis más profundo.",
        ],
      },
      {
        title: "Hojas de cálculo inteligentes",
        bullets: [
          "Genera hojas de cálculo con fórmulas y cálculos automatizados.",
          "Crea tablas dinámicas y resúmenes desde datos crudos.",
          "Produce reportes tabulares listos para compartir con el equipo.",
        ],
      },
    ],
    integrations: [
      {
        category: "Hojas de cálculo",
        items: ["Google Sheets", "Microsoft Excel", "Airtable"],
      },
      {
        category: "Bases de datos",
        items: ["PostgreSQL", "MySQL", "BigQuery", "MongoDB"],
      },
      {
        category: "Comunicación",
        items: ["Gmail", "Outlook", "Slack"],
      },
      {
        category: "Visualización",
        items: ["Google Data Studio", "Metabase"],
      },
    ],
    specificBenefits: [
      {
        title: "Insights sin complejidad técnica",
        description:
          "Obtén análisis profesionales sin necesidad de saber SQL, Python ni herramientas de BI complejas.",
      },
      {
        title: "Decisiones basadas en datos frescos",
        description:
          "Dashboards y reportes siempre actualizados con la información más reciente de tu negocio.",
      },
      {
        title: "Automatización de reportes periódicos",
        description:
          "Informes enviados automáticamente por correo a los stakeholders cada día, semana o mes.",
      },
      {
        title: "Datos limpios y confiables",
        description:
          "Elimina errores y inconsistencias en tus datos antes de que afecten las decisiones de negocio.",
      },
    ],
    saasInfo: {
      bullets: [
        "Setup inicial con conexión a tus fuentes de datos.",
        "Dashboards y reportes configurados a tus KPIs.",
        "Soporte continuo y ajustes según la evolución de tu negocio.",
        "Encriptación de datos y acceso controlado por roles.",
      ],
      closingText:
        "Convierte tus datos en decisiones sin necesitar un equipo de analistas.",
    },
  },
];
