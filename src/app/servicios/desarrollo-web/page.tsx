import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CTABanner } from "@/components/CTABanner";
import { IconCode, IconSearch, IconLayoutGrid, IconCheck } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Desarrollo y Asistencia Web",
  description:
    "Diseño, desarrollo, SEO técnico y mantenimiento de sitios web integrados con agentes de IA para convertir visitas en leads.",
};

const pillars = [
  {
    icon: IconCode,
    title: "Diseño y desarrollo a medida",
    text: "Sitios rápidos, responsivos y construidos sobre un stack moderno — sin plantillas genéricas.",
  },
  {
    icon: IconSearch,
    title: "SEO técnico",
    text: "Metadatos, datos estructurados, sitemap y Core Web Vitals optimizados desde el primer despliegue.",
  },
  {
    icon: IconLayoutGrid,
    title: "Mantenimiento continuo",
    text: "Actualizaciones, monitoreo y soporte para que tu sitio nunca quede desatendido.",
  },
];

const included = [
  "Diseño de interfaz y experiencia de usuario",
  "Formularios inteligentes conectados a tus agentes de IA",
  "Chat en vivo impulsado por IA agéntica",
  "Hosting, dominio y certificados SSL gestionados",
  "Reportes de rendimiento y SEO mensuales",
];

export default function DesarrolloWebPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicios · Desarrollo Web"
        title="Tu sitio web, integrado con tus agentes de IA"
        text="No separamos el diseño web de la automatización: cada sitio que construimos está pensado para convertir visitas en conversaciones y conversaciones en leads calificados."
      />

      <section className="container-gnexis border-t border-white/10 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
          {pillars.map((p) => (
            <div key={p.title}>
              <p.icon className="h-7 w-7 text-electric-iris" />
              <h3 className="mt-6 text-[20px] font-normal text-white">
                {p.title}
              </h3>
              <p className="mt-3 text-[15px] font-extralight leading-[1.5] text-silver-mist">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-gnexis border-t border-white/10 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          <h2 className="max-w-md text-[36px] font-normal leading-[1.2] tracking-[-1px] text-white">
            Qué incluye el servicio
          </h2>
          <ul className="flex flex-col gap-4">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <IconCheck className="mt-1 h-4 w-4 shrink-0 text-electric-iris" />
                <span className="text-[16px] font-extralight text-silver-mist">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABanner
        title="Hablemos de tu sitio web"
        text="Ya sea que necesites un sitio nuevo o integrar agentes en el actual, empecemos con un diagnóstico gratuito."
      />
    </>
  );
}
