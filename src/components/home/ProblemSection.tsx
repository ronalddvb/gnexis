import { IconClock, IconChat, IconWarning } from "@/components/Icons";

const problems = [
  {
    icon: IconClock,
    title: "Tu equipo pierde horas en tareas repetitivas",
    text: "Cargar datos, responder lo mismo una y otra vez, mover información entre sistemas — tiempo que debería ir a lo estratégico.",
  },
  {
    icon: IconChat,
    title: "La atención al cliente no escala",
    text: "Cada pico de demanda satura al equipo humano y alarga los tiempos de respuesta justo cuando más importan.",
  },
  {
    icon: IconWarning,
    title: "Los procesos manuales generan errores",
    text: "Sin automatización, los cuellos de botella y los errores de captura se vuelven parte del costo operativo.",
  },
];

export function ProblemSection() {
  return (
    <section className="container-gnexis py-20 md:py-28">
      <h2 className="max-w-2xl text-[36px] font-normal leading-[1.2] tracking-[-1px] text-white">
        Reconoces alguno de estos problemas
      </h2>
      <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
        {problems.map((p) => (
          <div key={p.title}>
            <p.icon className="h-7 w-7 text-electric-iris" />
            <h3 className="mt-6 text-[20px] font-normal leading-[1.3] text-white">
              {p.title}
            </h3>
            <p className="mt-3 text-[15px] font-extralight leading-[1.5] text-silver-mist">
              {p.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
