const stats = [
  { value: "+40%", label: "Reducción de tiempo operativo" },
  { value: "+150", label: "Procesos automatizados" },
  { value: "24/7", label: "Disponibilidad de los agentes" },
  { value: "30+", label: "Empresas que confían en nosotros" },
];

export function StatsBar() {
  return (
    <section className="border-y border-white/10">
      <div className="container-gnexis grid grid-cols-2 gap-10 py-14 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="text-[42px] font-normal tracking-[-1.68px] text-white">
              {s.value}
            </p>
            <p className="mt-2 text-[14px] font-extralight leading-[1.4] text-silver-mist">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
