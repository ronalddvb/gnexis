import Link from "next/link";
import { PrimaryButton } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="container-gnexis flex min-h-[60vh] flex-col justify-center py-24">
      <p className="text-[14px] font-semibold uppercase tracking-[0.025em] text-saffron-spark">
        Error 404
      </p>
      <h1 className="mt-6 max-w-xl text-[56px] font-normal leading-[1.1] tracking-[-2px] text-white">
        Esta página no existe
      </h1>
      <p className="mt-6 max-w-md text-[18px] font-extralight leading-[1.5] text-silver-mist">
        Puede que el enlace esté roto o que la página se haya movido.
        Volvamos a un lugar conocido.
      </p>
      <div className="mt-10 flex items-center gap-8">
        <PrimaryButton href="/">Ir al inicio</PrimaryButton>
        <Link
          href="/contacto"
          className="text-[14px] font-normal text-ash-gray transition-colors hover:text-white"
        >
          Contactar soporte
        </Link>
      </div>
    </section>
  );
}
