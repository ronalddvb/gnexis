import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CTABanner } from "@/components/CTABanner";
import {
  IconCheck,
  IconChat,
  IconChart,
  IconLayers,
  IconCart,
  IconUsers,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Automatización con Agentes de IA",
  description:
    "Agentes de IA agéntica que ejecutan tareas reales: atención al cliente, ventas, marketing y operaciones, entendiendo el contexto de tu negocio.",
};

const flows = [
  {
    icon: IconChat,
    title: "Atención al cliente",
    text: "El agente responde, resuelve y escala solo cuando de verdad se necesita a una persona.",
  },
  {
    icon: IconChart,
    title: "Ventas y calificación de leads",
    text: "Prioriza y da seguimiento a cada oportunidad según su probabilidad real de cierre.",
  },
  {
    icon: IconLayers,
    title: "Operaciones internas",
    text: "Automatiza tareas de back office que hoy consumen horas de tu equipo.",
  },
  {
    icon: IconCart,
    title: "E-commerce",
    text: "Recomendaciones, soporte postventa y seguimiento de pedidos sin intervención manual.",
  },
  {
    icon: IconUsers,
    title: "Recursos Humanos",
    text: "Onboarding y respuestas a preguntas frecuentes del equipo, disponibles todo el día.",
  },
];

const benefits = [
  "Reduce tiempos de respuesta de horas a segundos",
  "Opera 24/7 sin turnos ni escalamientos manuales",
  "Aprende del contexto específico de tu negocio",
  "Se integra con tus sistemas actuales sin migrarlos",
];

export default function AgentesIAPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicios · Agentes de IA"
        title="Agentes de IA que ejecutan, no solo responden"
        text="Un agente de IA agéntica entiende el objetivo, decide los pasos necesarios y actúa en tus sistemas para completarlo — sin depender de guiones fijos ni de intervención humana constante."
      />

      <section className="container-gnexis border-t border-white/10 py-16 md:py-20">
        <h2 className="max-w-xl text-[36px] font-normal leading-[1.2] tracking-[-1px] text-white">
          Un agente para cada flujo de tu operación
        </h2>
        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {flows.map((f) => (
            <div key={f.title} className="flex gap-4">
              <f.icon className="h-6 w-6 shrink-0 text-electric-iris" />
              <div>
                <h3 className="text-[18px] font-normal text-white">
                  {f.title}
                </h3>
                <p className="mt-2 text-[15px] font-extralight leading-[1.5] text-silver-mist">
                  {f.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-gnexis border-t border-white/10 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          <h2 className="max-w-md text-[36px] font-normal leading-[1.2] tracking-[-1px] text-white">
            Por qué un agente agéntico, y no un chatbot más
          </h2>
          <ul className="flex flex-col gap-4">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <IconCheck className="mt-1 h-4 w-4 shrink-0 text-electric-iris" />
                <span className="text-[16px] font-extralight text-silver-mist">
                  {b}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABanner
        title="Diseñemos tu primer agente de IA"
        text="Cuéntanos tu proceso más repetitivo y te mostramos cómo automatizarlo."
      />
    </>
  );
}
