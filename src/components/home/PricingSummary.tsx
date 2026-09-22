"use client";

import { useState } from "react";
import { PrimaryButton, GhostButton } from "@/components/Button";
import { IconCheck } from "@/components/Icons";

const plans = [
  {
    name: "Starter",
    monthly: 249,
    annual: 199,
    audience: "Para equipos que automatizan su primer proceso",
    features: [
      "1 agente de IA activo",
      "Panel de control básico",
      "2 integraciones",
      "Soporte por email",
    ],
    cta: "Comenzar",
    href: "/contacto",
    highlighted: false,
  },
  {
    name: "Growth",
    monthly: 649,
    annual: 519,
    audience: "Para empresas que escalan varias áreas a la vez",
    features: [
      "Hasta 5 agentes de IA",
      "Analítica e informes automáticos",
      "Integraciones ilimitadas",
      "Soporte prioritario",
      "Desarrollo web incluido",
    ],
    cta: "Comenzar",
    href: "/contacto",
    highlighted: true,
  },
  {
    name: "Enterprise",
    monthly: null,
    annual: null,
    audience: "Para operaciones a gran escala con requisitos a medida",
    features: [
      "Agentes ilimitados",
      "SLA dedicado",
      "Seguridad y cumplimiento avanzados",
      "Acompañamiento estratégico",
    ],
    cta: "Contactar ventas",
    href: "/contacto",
    highlighted: false,
  },
];

export function PricingSummary() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="precios" className="container-gnexis py-20 md:py-28">
      <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <div>
          <p className="text-[14px] font-semibold uppercase tracking-[0.025em] text-saffron-spark">
            Precios
          </p>
          <h2 className="mt-4 max-w-2xl text-[36px] font-normal leading-[1.2] tracking-[-1px] text-white">
            Un plan para cada etapa de tu automatización
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <span
            className={`text-[14px] ${!annual ? "text-white" : "text-ash-gray"}`}
          >
            Mensual
          </span>
          <button
            type="button"
            role="switch"
            aria-checked={annual}
            onClick={() => setAnnual((v) => !v)}
            className="relative h-7 w-12 rounded-full bg-white/15 transition-colors"
          >
            <span
              className={`absolute top-1 h-5 w-5 rounded-full bg-electric-iris transition-transform ${
                annual ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
          <span
            className={`text-[14px] ${annual ? "text-white" : "text-ash-gray"}`}
          >
            Anual <span className="text-saffron-spark">(-20%)</span>
          </span>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
        {plans.map((plan) => (
          <div key={plan.name} className={plan.highlighted ? "md:-mt-4" : ""}>
            {plan.highlighted && (
              <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.025em] text-electric-iris">
                Más elegido
              </p>
            )}
            <h3 className="text-[27px] font-normal text-white">
              {plan.name}
            </h3>
            <p className="mt-2 text-[14px] font-extralight text-silver-mist">
              {plan.audience}
            </p>
            <p className="mt-6 text-[42px] font-normal tracking-[-1.68px] text-white">
              {plan.monthly ? (
                <>
                  ${annual ? plan.annual : plan.monthly}
                  <span className="text-[16px] font-extralight text-ash-gray">
                    {" "}
                    /mes
                  </span>
                </>
              ) : (
                "A medida"
              )}
            </p>
            <ul className="mt-8 flex flex-col gap-3">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-electric-iris" />
                  <span className="text-[15px] font-extralight text-silver-mist">
                    {f}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              {plan.highlighted ? (
                <PrimaryButton href={plan.href}>{plan.cta}</PrimaryButton>
              ) : (
                <GhostButton
                  href={plan.href}
                  className="border border-white/15 !text-white rounded-full px-4 py-3.5"
                >
                  {plan.cta}
                </GhostButton>
              )}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-12 text-[14px] font-extralight text-ash-gray">
        Todos los planes incluyen soporte y actualizaciones continuas.
      </p>
    </section>
  );
}
