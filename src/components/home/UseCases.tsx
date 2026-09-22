import {
  IconChat,
  IconChart,
  IconLayoutGrid,
  IconLayers,
  IconCart,
  IconUsers,
} from "@/components/Icons";

const cases = [
  {
    icon: IconChat,
    title: "Atención al cliente",
    text: "Respuestas inmediatas 24/7 sin perder el tono de tu marca.",
  },
  {
    icon: IconChart,
    title: "Ventas y leads",
    text: "Calificación y seguimiento automático de cada oportunidad.",
  },
  {
    icon: IconLayoutGrid,
    title: "Marketing",
    text: "Contenido y campañas que se ajustan solas al desempeño.",
  },
  {
    icon: IconLayers,
    title: "Operaciones internas",
    text: "Back office más rápido, con menos intervención manual.",
  },
  {
    icon: IconCart,
    title: "E-commerce",
    text: "Recomendaciones, soporte y logística automatizados de punta a punta.",
  },
  {
    icon: IconUsers,
    title: "Recursos Humanos",
    text: "Onboarding, dudas frecuentes y procesos internos sin fricción.",
  },
];

export function UseCases() {
  return (
    <section className="container-gnexis py-20 md:py-28">
      <p className="text-[14px] font-semibold uppercase tracking-[0.025em] text-saffron-spark">
        Casos de uso
      </p>
      <h2 className="mt-4 max-w-2xl text-[36px] font-normal leading-[1.2] tracking-[-1px] text-white">
        Un agente para cada área de tu negocio
      </h2>
      <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {cases.map((c) => (
          <div key={c.title} className="flex gap-4">
            <c.icon className="h-6 w-6 shrink-0 text-electric-iris" />
            <div>
              <h3 className="text-[18px] font-normal text-white">
                {c.title}
              </h3>
              <p className="mt-2 text-[15px] font-extralight leading-[1.5] text-silver-mist">
                {c.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
