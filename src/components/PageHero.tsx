export function PageHero({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <section className="container-gnexis pt-16 pb-16 md:pt-24 md:pb-20">
      <p className="text-[14px] font-semibold uppercase tracking-[0.025em] text-saffron-spark">
        {eyebrow}
      </p>
      <h1 className="mt-6 max-w-3xl text-[42px] font-normal leading-[1.1] tracking-[-1.68px] text-white md:text-[56px] md:tracking-[-2.2px]">
        {title}
      </h1>
      {text && (
        <p className="mt-6 max-w-xl text-[18px] font-extralight leading-[1.5] text-silver-mist">
          {text}
        </p>
      )}
    </section>
  );
}
