const tools = [
  "CRM",
  "WhatsApp Business",
  "Slack",
  "Gmail",
  "Notion",
  "Shopify",
  "HubSpot",
  "Salesforce",
];

export function IntegrationsStrip() {
  return (
    <section className="container-gnexis py-16 md:py-20">
      <p className="text-center text-[14px] font-semibold uppercase tracking-[0.025em] text-ash-gray">
        Se conecta con las herramientas que ya usas
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
        {tools.map((t) => (
          <span
            key={t}
            className="text-[18px] font-extralight text-silver-mist"
          >
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}
