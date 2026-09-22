"use client";

import { useState } from "react";
import { IconChevronDown } from "@/components/Icons";

const faqs = [
  {
    q: "¿Qué es la IA agéntica y en qué se diferencia de un chatbot tradicional?",
    a: "Un chatbot tradicional sigue guiones fijos. Un agente de IA agéntica entiende el objetivo, decide los pasos necesarios y ejecuta acciones reales en tus sistemas para completarlo, sin intervención humana constante.",
  },
  {
    q: "¿Cuánto tiempo toma implementar un agente de IA?",
    a: "Depende de la complejidad del proceso, pero la mayoría de nuestros clientes tienen un primer agente en producción entre 3 y 6 semanas, siguiendo nuestro proceso de diagnóstico, diseño e integración.",
  },
  {
    q: "¿Necesito conocimientos técnicos para usar la plataforma?",
    a: "No. El panel está diseñado para equipos de negocio: configuras, monitoreas y ajustas tus agentes sin escribir código.",
  },
  {
    q: "¿Con qué herramientas se integra?",
    a: "Con los CRM, WhatsApp Business, Slack, Gmail, Notion, Shopify, HubSpot, Salesforce y ERPs más usados, además de integraciones personalizadas por API.",
  },
  {
    q: "¿Ofrecen soporte para el desarrollo de mi página web también?",
    a: "Sí. Diseñamos, desarrollamos y damos mantenimiento a sitios web, integrando los agentes de IA directamente en tu web (chat, formularios inteligentes, etc.).",
  },
  {
    q: "¿Cómo se garantiza la seguridad de mis datos?",
    a: "Encriptamos los datos en tránsito y en reposo, y operamos bajo principios de cumplimiento GDPR. El acceso a cada agente se controla por roles y permisos.",
  },
  {
    q: "¿Puedo cambiar de plan en cualquier momento?",
    a: "Sí, puedes subir o bajar de plan cuando lo necesites; el ajuste se refleja en tu siguiente ciclo de facturación.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="container-gnexis py-20 md:py-28">
      <p className="text-[14px] font-semibold uppercase tracking-[0.025em] text-saffron-spark">
        Preguntas frecuentes
      </p>
      <h2 className="mt-4 max-w-2xl text-[36px] font-normal leading-[1.2] tracking-[-1px] text-white">
        Todo lo que deberías saber antes de empezar
      </h2>

      <div className="mt-14 max-w-3xl divide-y divide-white/10 border-t border-white/10">
        {faqs.map((item, i) => {
          const open = openIndex === i;
          return (
            <div key={item.q}>
              <button
                type="button"
                onClick={() => setOpenIndex(open ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
                aria-expanded={open}
              >
                <span className="text-[18px] font-normal text-white">
                  {item.q}
                </span>
                <IconChevronDown
                  className={`h-5 w-5 shrink-0 text-ash-gray transition-transform ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out"
                style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
              >
                <div className="min-h-0">
                  <p className="max-w-2xl pb-6 text-[15px] font-extralight leading-[1.6] text-silver-mist">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
