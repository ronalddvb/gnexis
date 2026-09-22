const steps = [
  {
    n: "01",
    title: "Diagnóstico",
    text: "Analizamos tus procesos actuales y detectamos oportunidades de automatización.",
  },
  {
    n: "02",
    title: "Diseño del agente",
    text: "Creamos el agente de IA a medida para tu caso de uso específico.",
  },
  {
    n: "03",
    title: "Integración",
    text: "Lo conectamos a tus herramientas: CRM, WhatsApp, correo, web, ERP.",
  },
  {
    n: "04",
    title: "Optimización continua",
    text: "Monitoreamos resultados y mejoramos el desempeño con datos reales.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="border-t border-white/10">
      <div className="container-gnexis py-20 md:py-28">
        <p className="text-[14px] font-semibold uppercase tracking-[0.025em] text-saffron-spark">
          Cómo funciona
        </p>
        <h2 className="mt-4 max-w-2xl text-[36px] font-normal leading-[1.2] tracking-[-1px] text-white">
          De diagnóstico a agente en producción
        </h2>
        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="relative">
              <p className="text-[27px] font-normal text-electric-iris">
                {s.n}
              </p>
              <h3 className="mt-4 text-[20px] font-normal text-white">
                {s.title}
              </h3>
              <p className="mt-3 text-[15px] font-extralight leading-[1.5] text-silver-mist">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
