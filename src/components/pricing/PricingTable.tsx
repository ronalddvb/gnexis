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
      "1,000 conversaciones/mes",
    ],
    cta: "Comenzar",
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
      "10,000 conversaciones/mes",
    ],
    cta: "Comenzar",
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
      "Volumen de conversaciones a medida",
    ],
    cta: "Contactar ventas",
    highlighted: false,
  },
];

const addons = [
  { name: "Agente adicional", price: "$89/mes por agente" },
  { name: "Integración premium a medida", price: "Desde $199 (pago único)" },
  { name: "Soporte prioritario 24/7", price: "$149/mes" },
  { name: "Paquete de desarrollo web", price: "Desde $890 (pago único)" },
];

export function PricingTable() {
  const [annual, setAnnual] = useState(true);

  return (
    <>
      <section className="container-gnexis py-16 md:py-20">
        <div className="flex justify-center">
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
                  <PrimaryButton href="/contacto">{plan.cta}</PrimaryButton>
                ) : (
                  <GhostButton
                    href="/contacto"
                    className="rounded-full border border-white/15 px-4 py-3.5 !text-white"
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

      <section className="container-gnexis border-t border-white/10 py-16 md:py-20">
        <h2 className="text-[36px] font-normal leading-[1.2] tracking-[-1px] text-white">
          Add-ons
        </h2>
        <p className="mt-3 max-w-lg text-[15px] font-extralight text-silver-mist">
          Amplía cualquier plan según lo que tu operación necesite.
        </p>
        <div className="mt-10 divide-y divide-white/10 border-t border-white/10">
          {addons.map((a) => (
            <div
              key={a.name}
              className="flex items-center justify-between py-5"
            >
              <span className="text-[16px] font-extralight text-white">
                {a.name}
              </span>
              <span className="text-[15px] font-extralight text-ash-gray">
                {a.price}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
