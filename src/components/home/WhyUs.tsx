const points = [
  {
    title: "Personalización real",
    text: "Nada de plantillas genéricas: cada agente se diseña sobre tus procesos y tu contexto de negocio.",
  },
  {
    title: "Equipo experto en IA agéntica",
    text: "Ingenieros especializados en agentes autónomos, no solo en chatbots con reglas fijas.",
  },
  {
    title: "De la web a la automatización",
    text: "Acompañamiento completo, desde el diseño del sitio hasta el agente que lo opera.",
  },
  {
    title: "Optimización basada en datos",
    text: "Medimos, ajustamos y mejoramos el desempeño de cada agente con datos reales de uso.",
  },
];

export function WhyUs() {
  return (
    <section className="border-t border-white/10">
      <div className="container-gnexis py-20 md:py-28">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <p className="text-[14px] font-semibold uppercase tracking-[0.025em] text-saffron-spark">
              Por qué elegirnos
            </p>
            <h2 className="mt-4 max-w-md text-[36px] font-normal leading-[1.2] tracking-[-1px] text-white">
              Automatización que se adapta a tu negocio, no al revés
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            {points.map((p) => (
              <div key={p.title}>
                <h3 className="text-[18px] font-normal text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-[15px] font-extralight leading-[1.5] text-silver-mist">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
