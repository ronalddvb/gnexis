import Link from "next/link";
import { IconBot, IconLayers, IconCode } from "@/components/Icons";

const services = [
  {
    icon: IconBot,
    title: "Agentes de IA personalizados",
    text: "Automatización de ventas, soporte, marketing y operaciones con agentes que entienden el contexto de tu negocio.",
    href: "/servicios/agentes-ia",
  },
  {
    icon: IconLayers,
    title: "Plataforma SaaS",
    text: "Panel de control, métricas en tiempo real y gestión de tus agentes desde un solo lugar, sin instalaciones.",
    href: "/precios",
  },
  {
    icon: IconCode,
    title: "Desarrollo y soporte de páginas web",
    text: "Diseño, desarrollo y mantenimiento de sitios web integrados directamente con tus agentes de IA.",
    href: "/servicios/desarrollo-web",
  },
];

export function ServicesOverview() {
  return (
    <section id="servicios" className="container-gnexis py-20 md:py-28">
      <p className="text-[14px] font-semibold uppercase tracking-[0.025em] text-saffron-spark">
        Qué hacemos
      </p>
      <h2 className="mt-4 max-w-2xl text-[36px] font-normal leading-[1.2] tracking-[-1px] text-white">
        Tres pilares para automatizar tu operación
      </h2>
      <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
        {services.map((s) => (
          <div key={s.title}>
            <s.icon className="h-7 w-7 text-electric-iris" />
            <h3 className="mt-6 text-[24px] font-normal leading-[1.25] tracking-[-0.48px] text-white">
              {s.title}
            </h3>
            <p className="mt-3 text-[15px] font-extralight leading-[1.5] text-silver-mist">
              {s.text}
            </p>
            <Link
              href={s.href}
              className="mt-4 inline-block text-[14px] font-normal text-ash-gray underline underline-offset-4 transition-colors hover:text-white"
            >
              Saber más
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
