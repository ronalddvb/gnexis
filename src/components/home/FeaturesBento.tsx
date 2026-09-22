import {
  IconChart,
  IconPlug,
  IconPuzzle,
  IconShield,
  IconLayoutGrid,
  IconScale,
} from "@/components/Icons";

const features = [
  {
    icon: IconLayoutGrid,
    title: "Panel de control en tiempo real",
    text: "Visibilidad total de cada agente y cada conversación.",
    big: true,
  },
  {
    icon: IconPuzzle,
    title: "Agentes multicanal",
    text: "Web, WhatsApp, email y redes desde un mismo cerebro.",
  },
  {
    icon: IconPlug,
    title: "Integraciones nativas",
    text: "Zapier, HubSpot, Salesforce, Google Workspace y más.",
  },
  {
    icon: IconShield,
    title: "Seguridad y cumplimiento",
    text: "Encriptación end-to-end y cumplimiento GDPR.",
  },
  {
    icon: IconChart,
    title: "Analítica automática",
    text: "Informes que se generan solos, sin hojas de cálculo.",
  },
  {
    icon: IconScale,
    title: "Escalabilidad",
    text: "De un agente a cientos, sin rehacer la arquitectura.",
  },
];

export function FeaturesBento() {
  return (
    <section className="border-t border-white/10">
      <div className="container-gnexis py-20 md:py-28">
        <p className="text-[14px] font-semibold uppercase tracking-[0.025em] text-saffron-spark">
          Plataforma
        </p>
        <h2 className="mt-4 max-w-2xl text-[36px] font-normal leading-[1.2] tracking-[-1px] text-white">
          Todo lo que necesitas para operar a escala
        </h2>
        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className={f.big ? "lg:col-span-2" : ""}>
              <f.icon className="h-6 w-6 text-electric-iris" />
              <h3 className="mt-5 text-[18px] font-normal text-white">
                {f.title}
              </h3>
              <p className="mt-2 max-w-sm text-[15px] font-extralight leading-[1.5] text-silver-mist">
                {f.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
