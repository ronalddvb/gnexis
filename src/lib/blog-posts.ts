export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: "IA" | "Automatización" | "Casos de uso" | "Desarrollo Web";
  date: string;
  readTime: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "que-es-la-ia-agentica",
    title: "Qué es la IA agéntica y por qué está cambiando las empresas",
    excerpt:
      "A diferencia de un chatbot con guiones fijos, un agente de IA agéntica entiende objetivos y ejecuta acciones reales. Así es como está redefiniendo la automatización empresarial.",
    category: "IA",
    date: "2026-08-12",
    readTime: "6 min",
    content: [
      "Durante años, \"automatizar\" un proceso significó programar reglas fijas: si pasa X, entonces haz Y. Funcionaba para tareas simples, pero se rompía apenas el proceso tenía una excepción.",
      "La IA agéntica cambia el punto de partida: en lugar de programar reglas, se le da al agente un objetivo. El agente entiende el contexto, decide los pasos necesarios y ejecuta acciones reales sobre tus sistemas — no solo sugiere una respuesta, la ejecuta.",
      "Esto es lo que separa a un agente agéntico de un chatbot tradicional: el chatbot conversa, el agente actúa. Puede consultar un CRM, actualizar un pedido, agendar una cita o escalar un caso, todo sin que un humano tenga que intervenir en cada paso.",
      "Para las empresas, esto significa poder automatizar procesos que antes eran demasiado variables para las reglas fijas — y liberar a los equipos humanos para el trabajo que realmente requiere criterio.",
    ],
  },
  {
    slug: "procesos-que-automatizar-en-2026",
    title: "5 procesos que toda empresa debería automatizar en 2026",
    excerpt:
      "De la atención al cliente al onboarding de RRHH: estos son los procesos con mayor retorno al automatizarlos con agentes de IA.",
    category: "Automatización",
    date: "2026-07-30",
    readTime: "5 min",
    content: [
      "No todos los procesos se benefician igual de la automatización. Estos cinco son los que consistentemente muestran el mayor retorno cuando se automatizan con agentes de IA.",
      "1. Atención al cliente de primer nivel: preguntas frecuentes, seguimiento de pedidos y soporte básico pueden resolverse sin intervención humana en la mayoría de los casos.",
      "2. Calificación de leads: un agente puede evaluar cada lead entrante contra tu criterio de calificación y priorizar el seguimiento del equipo de ventas.",
      "3. Onboarding de clientes o empleados: recolectar información, validar documentos y coordinar los siguientes pasos es un proceso repetitivo ideal para un agente.",
      "4. Actualización de datos entre sistemas: mantener sincronizados el CRM, el ERP y las hojas de cálculo consume horas que un agente puede recuperar.",
      "5. Reportes y analítica recurrente: generar y distribuir reportes periódicos es mecánico, pero rara vez se automatiza por completo.",
    ],
  },
  {
    slug: "saas-vs-software-tradicional",
    title: "SaaS vs. software tradicional: qué conviene para tu automatización",
    excerpt:
      "Instalar, mantener y escalar software propio tiene un costo que muchas empresas subestiman. Comparamos ambos modelos para automatización con IA.",
    category: "Automatización",
    date: "2026-07-08",
    readTime: "4 min",
    content: [
      "La pregunta de \"comprar vs. construir\" es tan vieja como el software empresarial, pero cambia de forma cuando se trata de IA agéntica: los modelos evolucionan rápido, y mantener infraestructura propia significa mantenerse al día con esa velocidad.",
      "Un modelo SaaS traslada ese costo de mantenimiento al proveedor: actualizaciones de modelos, mejoras de plataforma y nueva capacidad llegan sin que tu equipo tenga que gestionarlas.",
      "El software tradicional (on-premise o construido internamente) puede tener sentido cuando los requisitos de datos o cumplimiento son muy específicos — pero para la mayoría de las empresas, el tiempo hasta obtener valor es la variable que más pesa, y ahí el SaaS gana casi siempre.",
    ],
  },
  {
    slug: "como-integrar-agentes-de-ia-en-tu-sitio-web",
    title: "Cómo integrar agentes de IA en tu sitio web",
    excerpt:
      "Un chat inteligente en tu web no es solo un widget: es la puerta de entrada a tu automatización. Estos son los pasos para integrarlo bien.",
    category: "Desarrollo Web",
    date: "2026-06-19",
    readTime: "5 min",
    content: [
      "Muchos sitios web agregan un chat de IA como si fuera un plugin más, sin conectarlo al resto de la operación. El resultado es un asistente que conversa pero no resuelve nada.",
      "La integración correcta empieza por definir qué acciones puede ejecutar el agente: agendar una demo, calificar un lead, responder con datos reales de tu catálogo o CRM.",
      "Después viene el diseño de la experiencia: el chat debe sentirse parte del sitio, no un widget genérico flotando en la esquina — coherente con tu marca y con el resto del contenido.",
      "Por último, la integración técnica: el agente necesita acceso (con los permisos correctos) a los sistemas donde vive la información que va a usar y las acciones que va a ejecutar.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
