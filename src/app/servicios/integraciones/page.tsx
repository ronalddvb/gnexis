import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CTABanner } from "@/components/CTABanner";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Integraciones",
  description:
    "Conecta tus agentes de IA con el CRM, WhatsApp Business, Slack, Gmail, Shopify y las herramientas que tu equipo ya usa.",
};

const groups = [
  {
    title: "CRM y ventas",
    tools: ["HubSpot", "Salesforce", "Pipedrive"],
  },
  {
    title: "Mensajería",
    tools: ["WhatsApp Business", "Slack", "Gmail", "Instagram DM"],
  },
  {
    title: "E-commerce y pagos",
    tools: ["Shopify", "Stripe", "Mercado Pago"],
  },
  {
    title: "Productividad",
    tools: ["Notion", "Google Workspace", "Zapier"],
  },
];

export default function IntegracionesPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicios · Integraciones"
        title="Se conecta con las herramientas que ya usas"
        text="Tus agentes de IA se integran directo con tu stack actual — sin migraciones, sin interrumpir procesos que ya funcionan."
      />

      <Reveal>
        <section className="container-gnexis border-t border-white/10 py-16 md:py-20">
          <div className="grid grid-cols-1 gap-14 sm:grid-cols-2">
            {groups.map((g) => (
              <div key={g.title}>
                <h3 className="text-[20px] font-normal text-white">
                  {g.title}
                </h3>
                <ul className="mt-5 flex flex-col gap-3">
                  {g.tools.map((t) => (
                    <li
                      key={t}
                      className="text-[16px] font-extralight text-silver-mist"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-16 max-w-lg text-[15px] font-extralight leading-[1.6] text-silver-mist">
            ¿No ves tu herramienta en la lista? Construimos integraciones
            personalizadas por API para conectar tus agentes con cualquier
            sistema interno.
          </p>
        </section>
      </Reveal>

      <Reveal>
        <CTABanner
          title="Conectemos tus herramientas"
          text="Cuéntanos qué stack usas y te confirmamos cómo integrarlo con tus agentes."
        />
      </Reveal>
    </>
  );
}
