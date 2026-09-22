const testimonials = [
  {
    quote:
      "En ocho semanas pasamos de responder en horas a responder en segundos. El equipo de soporte ahora se dedica a los casos que realmente importan.",
    name: "Marcela Ríos",
    role: "COO, Nimbus Retail",
  },
  {
    quote:
      "Los agentes califican leads mejor que nuestro proceso manual anterior. Ventas dejó de perder tiempo en prospectos que no iban a cerrar.",
    name: "Diego Fernández",
    role: "Director Comercial, Vertex Logistics",
  },
  {
    quote:
      "Lo que más valoramos fue el acompañamiento: no nos dejaron solos con una plataforma, construyeron el agente con nuestro equipo.",
    name: "Andrea Solís",
    role: "Head of Operations, Clara Salud",
  },
];

export function Testimonials() {
  return (
    <section id="casos-de-exito" className="border-t border-white/10">
      <div className="container-gnexis py-20 md:py-28">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[14px] font-semibold uppercase tracking-[0.025em] text-saffron-spark">
              Prueba social
            </p>
            <h2 className="mt-4 max-w-2xl text-[36px] font-normal leading-[1.2] tracking-[-1px] text-white">
              Empresas que ya automatizaron con Gnexis
            </h2>
          </div>
          <p className="text-[48px] font-normal leading-[1.1] tracking-[-1.68px] text-electric-iris">
            -60%
            <span className="ml-3 align-middle text-[15px] font-extralight text-silver-mist">
              tiempo de respuesta
            </span>
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-10">
          {testimonials.map((t) => (
            <figure key={t.name}>
              <blockquote className="text-[16px] font-extralight leading-[1.6] text-silver-mist">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6">
                <p className="text-[15px] font-normal text-white">
                  {t.name}
                </p>
                <p className="text-[14px] font-extralight text-ash-gray">
                  {t.role}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
