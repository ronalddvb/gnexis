import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CTABanner } from "@/components/CTABanner";
import { Reveal } from "@/components/Reveal";
import {
  IconBot,
  IconLayers,
  IconCode,
  IconPlug,
  IconCheck,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Automatización con agentes de IA agéntica, plataforma SaaS y desarrollo web integrado. Conoce las tres soluciones de Gnexis.",
};

const blocks = [
  {
    id: "agentes-ia",
    icon: IconBot,
    title: "Automatización con agentes de IA",
    text: "A diferencia del RPA tradicional o un chatbot con guiones fijos, un agente de IA agéntica entiende el objetivo de negocio, decide los pasos necesarios y ejecuta acciones reales en tus sistemas de forma autónoma.",
    items: [
      "Agentes de atención al cliente que resuelven, no solo derivan",
      "Calificación y seguimiento automático de leads",
      "Automatización de back office y operaciones internas",
      "Agentes entrenados con el contexto y tono de tu marca",
    ],
    href: "/servicios/agentes-ia",
    linkLabel: undefined,
  },
  {
    id: "plataforma-saas",
    icon: IconLayers,
    title: "Plataforma SaaS",
    text: "Un panel de control centralizado para gestionar tus agentes, ver métricas en tiempo real y escalar tu operación sin depender de instalaciones ni infraestructura propia.",
    items: [
      "Onboarding guiado, sin fricción técnica",
      "Panel en tiempo real por agente y por canal",
      "Planes que crecen con tu operación",
      "Actualizaciones y mejoras continuas incluidas",
    ],
    href: "/precios",
    linkLabel: "Ver planes",
  },
  {
    id: "desarrollo-web",
    icon: IconCode,
    title: "Desarrollo y asistencia de páginas web",
    text: "Diseñamos, desarrollamos y damos mantenimiento a sitios web, integrando tus agentes de IA directamente en la experiencia: chat, formularios inteligentes y automatización de leads desde el primer clic.",
    items: [
      "Diseño y desarrollo de sitios a medida",
      "SEO técnico y rendimiento optimizado",
      "Mantenimiento y soporte continuo",
      "Integración nativa con tus agentes de IA",
    ],
    href: "/servicios/desarrollo-web",
    linkLabel: undefined,
  },
  {
    id: "integraciones",
    icon: IconPlug,
    title: "Integraciones",
    text: "Tus agentes se conectan con las herramientas que tu equipo ya usa todos los días, sin migrar de sistema ni interrumpir procesos existentes.",
    items: [
      "CRM: HubSpot, Salesforce y más",
      "Mensajería: WhatsApp Business, Slack, Gmail",
      "E-commerce: Shopify y pasarelas de pago",
      "Integraciones personalizadas por API",
    ],
    href: "/servicios/integraciones",
    linkLabel: undefined,
  },
];

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicios"
        title="Soluciones de automatización a la medida de tu empresa"
        text="Combinamos IA agéntica, una plataforma SaaS y desarrollo web para que tu empresa automatice de punta a punta, sin fricción técnica."
      />

      {blocks.map((block, i) => (
        <Reveal key={block.id}>
          <section
            id={block.id}
            className={`container-gnexis py-16 md:py-20 ${
              i > 0 ? "border-t border-white/10" : ""
            }`}
          >
            <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
              <div>
                <block.icon className="h-8 w-8 text-electric-iris" />
                <h2 className="mt-6 text-[36px] font-normal leading-[1.2] tracking-[-1px] text-white">
                  {block.title}
                </h2>
                <p className="mt-5 max-w-md text-[16px] font-extralight leading-[1.6] text-silver-mist">
                  {block.text}
                </p>
                <Link
                  href={block.href}
                  className="mt-8 inline-block text-[14px] font-semibold uppercase tracking-[0.025em] text-electric-iris underline underline-offset-4"
                >
                  {block.linkLabel ?? "Conocer más"}
                </Link>
              </div>
              <ul className="flex flex-col gap-4">
                {block.items.map((item) => (
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
        </Reveal>
      ))}

      <Reveal>
        <CTABanner />
      </Reveal>
    </>
  );
}
