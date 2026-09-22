import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Gnexis es un equipo de ingeniería especializado en IA agéntica que ayuda a empresas a automatizar su operación de punta a punta.",
};

const values = [
  {
    title: "Personalización real",
    text: "Cada agente se diseña sobre el contexto específico de tu negocio, nunca sobre una plantilla genérica.",
  },
  {
    title: "Claridad sobre jerga",
    text: "Explicamos la IA agéntica en términos de negocio y resultados, no de tecnología por la tecnología.",
  },
  {
    title: "Resultados medibles",
    text: "Cada agente se evalúa con datos reales: tiempo de respuesta, conversión, satisfacción.",
  },
  {
    title: "Acompañamiento continuo",
    text: "No entregamos y desaparecemos: optimizamos cada agente junto a tu equipo.",
  },
];

const team = [
  { name: "Ronald Vera", role: "Fundador & CEO" },
  { name: "Equipo de Ingeniería IA", role: "Agentes & Plataforma" },
  { name: "Equipo de Producto", role: "Diseño & Desarrollo Web" },
];

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        eyebrow="Nosotros"
        title="Creemos que la automatización debería adaptarse al negocio, no al revés"
        text="Gnexis nace de una idea simple: la mayoría del software de automatización obliga a las empresas a cambiar sus procesos. Nosotros construimos agentes que se adaptan a los tuyos."
      />

      <section className="container-gnexis border-t border-white/10 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          <div>
            <p className="text-[14px] font-semibold uppercase tracking-[0.025em] text-saffron-spark">
              Nuestra misión
            </p>
            <h2 className="mt-4 max-w-md text-[36px] font-normal leading-[1.2] tracking-[-1px] text-white">
              El futuro del trabajo es humano + agentes de IA
            </h2>
          </div>
          <p className="max-w-lg text-[16px] font-extralight leading-[1.6] text-silver-mist">
            No creemos en reemplazar equipos, sino en liberarlos de lo
            repetitivo. Trabajamos con empresas que quieren escalar su
            operación sin escalar linealmente su plantilla, combinando
            agentes de IA agéntica con el criterio de las personas que mejor
            conocen su negocio.
          </p>
        </div>
      </section>

      <section className="container-gnexis border-t border-white/10 py-16 md:py-20">
        <h2 className="text-[36px] font-normal leading-[1.2] tracking-[-1px] text-white">
          Nuestros valores
        </h2>
        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2">
          {values.map((v) => (
            <div key={v.title}>
              <h3 className="text-[18px] font-normal text-white">
                {v.title}
              </h3>
              <p className="mt-2 text-[15px] font-extralight leading-[1.5] text-silver-mist">
                {v.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-gnexis border-t border-white/10 py-16 md:py-20">
        <h2 className="text-[36px] font-normal leading-[1.2] tracking-[-1px] text-white">
          Equipo
        </h2>
        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {team.map((t) => (
            <div key={t.name}>
              <div className="aspect-[4/5] w-full rounded-[24px] bg-white/5" />
              <p className="mt-4 text-[12px] font-normal uppercase tracking-[0.025em] text-electric-iris">
                {t.role}
              </p>
              <p className="mt-1 text-[24px] font-normal text-white">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
