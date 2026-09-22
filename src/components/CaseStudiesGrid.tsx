"use client";

import { useState } from "react";
import Link from "next/link";

const industries = [
  "Todos",
  "Retail",
  "Logística",
  "Finanzas",
  "Salud",
] as const;

const cases = [
  {
    client: "Nimbus Retail",
    industry: "Retail",
    problem: "Soporte saturado en horas pico, con tiempos de espera de más de una hora.",
    solution: "Agente de atención al cliente multicanal integrado a WhatsApp y web.",
    result: "-60% tiempo de respuesta",
    quote: "Pasamos de responder en horas a responder en segundos.",
  },
  {
    client: "Vertex Logistics",
    industry: "Logística",
    problem: "El equipo comercial perdía horas calificando leads manualmente.",
    solution: "Agente de calificación y seguimiento automático de leads en el CRM.",
    result: "+35% conversión de leads",
    quote: "Ventas dejó de perder tiempo en prospectos que no iban a cerrar.",
  },
  {
    client: "Alto Capital",
    industry: "Finanzas",
    problem: "Procesos de onboarding de clientes lentos y propensos a errores manuales.",
    solution: "Automatización del flujo de onboarding con validación documental por IA.",
    result: "-45% tiempo de onboarding",
    quote: "Redujimos errores de captura casi a cero.",
  },
  {
    client: "Clara Salud",
    industry: "Salud",
    problem: "Agenda de citas y recordatorios gestionados manualmente por recepción.",
    solution: "Agente que agenda, reprograma y envía recordatorios automáticamente.",
    result: "-30% inasistencias",
    quote: "No nos dejaron solos con una plataforma: construyeron el agente con nuestro equipo.",
  },
];

export function CaseStudiesGrid() {
  const [filter, setFilter] = useState<(typeof industries)[number]>("Todos");

  const filtered =
    filter === "Todos" ? cases : cases.filter((c) => c.industry === filter);

  return (
    <section className="container-gnexis border-t border-white/10 py-16 md:py-20">
      <div className="flex flex-wrap gap-3">
        {industries.map((ind) => (
          <button
            key={ind}
            type="button"
            onClick={() => setFilter(ind)}
            className={`rounded-full border px-4 py-2 text-[14px] font-semibold uppercase tracking-[0.025em] transition-colors ${
              filter === ind
                ? "border-electric-iris bg-electric-iris text-white"
                : "border-white/15 text-ash-gray hover:text-white"
            }`}
          >
            {ind}
          </button>
        ))}
      </div>

      <div className="mt-14 grid grid-cols-1 gap-14 md:grid-cols-2">
        {filtered.map((c) => (
          <div key={c.client} className="border-t border-white/10 pt-8">
            <p className="text-[12px] font-semibold uppercase tracking-[0.025em] text-saffron-spark">
              {c.industry}
            </p>
            <h3 className="mt-3 text-[27px] font-normal text-white">
              {c.client}
            </h3>
            <dl className="mt-5 flex flex-col gap-3 text-[15px] font-extralight text-silver-mist">
              <div>
                <dt className="text-ash-gray">Problema</dt>
                <dd>{c.problem}</dd>
              </div>
              <div>
                <dt className="text-ash-gray">Solución</dt>
                <dd>{c.solution}</dd>
              </div>
            </dl>
            <p className="mt-5 text-[36px] font-normal tracking-[-1px] text-electric-iris">
              {c.result}
            </p>
            <p className="mt-3 text-[15px] font-extralight italic leading-[1.5] text-silver-mist">
              “{c.quote}”
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <Link
          href="/contacto"
          className="text-[14px] font-semibold uppercase tracking-[0.025em] text-electric-iris underline underline-offset-4"
        >
          Quiero resultados como estos
        </Link>
      </div>
    </section>
  );
}
