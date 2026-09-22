"use client";

import { useState } from "react";
import { IconChevronDown } from "@/components/Icons";

const faqs = [
  {
    q: "¿Puedo cambiar de plan en cualquier momento?",
    a: "Sí. Puedes subir o bajar de plan cuando lo necesites; el cambio se refleja en tu siguiente ciclo de facturación, sin penalizaciones.",
  },
  {
    q: "¿Cómo se factura el plan anual?",
    a: "El plan anual se cobra en un solo pago con un 20% de descuento frente al precio mensual. Puedes solicitar factura para tu empresa.",
  },
  {
    q: "¿Qué pasa si supero el límite de conversaciones de mi plan?",
    a: "Te avisamos antes de llegar al límite y puedes ampliar tu plan o agregar el add-on correspondiente sin interrupciones en el servicio.",
  },
  {
    q: "¿El plan Enterprise tiene un mínimo de contrato?",
    a: "Los planes Enterprise se definen según volumen y requisitos específicos; nuestro equipo de ventas te comparte las condiciones exactas.",
  },
];

export function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="container-gnexis border-t border-white/10 py-16 md:py-20">
      <h2 className="text-[36px] font-normal leading-[1.2] tracking-[-1px] text-white">
        Preguntas sobre precios y facturación
      </h2>
      <div className="mt-12 max-w-3xl divide-y divide-white/10 border-t border-white/10">
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
