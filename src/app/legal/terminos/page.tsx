import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description: "Términos y condiciones de uso de los servicios de Gnexis.",
};

export default function TerminosPage() {
  return (
    <div className="pb-24">
      <PageHero eyebrow="Legal" title="Términos y Condiciones" />
      <div className="container-gnexis flex max-w-2xl flex-col gap-8 text-[16px] font-extralight leading-[1.7] text-silver-mist">
        <p className="text-[14px] font-extralight text-ash-gray">
          Última actualización: 22 de septiembre de 2026. Este documento es
          una plantilla base y debe ser revisado por asesoría legal antes de
          su publicación definitiva.
        </p>

        <section>
          <h2 className="mb-3 text-[20px] font-normal text-white">
            1. Aceptación de los términos
          </h2>
          <p>
            Al usar el sitio web o la plataforma de Gnexis, aceptas estos
            términos y condiciones en su totalidad. Si no estás de acuerdo,
            te pedimos no utilizar nuestros servicios.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-[20px] font-normal text-white">
            2. Descripción del servicio
          </h2>
          <p>
            Gnexis ofrece soluciones de automatización basadas en agentes de
            IA agéntica, una plataforma SaaS de gestión, y servicios de
            desarrollo y mantenimiento web, bajo los planes descritos en
            nuestra página de precios.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-[20px] font-normal text-white">
            3. Facturación y cancelación
          </h2>
          <p>
            Los planes se facturan de forma mensual o anual según lo elegido
            al contratar. Puedes cambiar o cancelar tu plan en cualquier
            momento; el cambio se aplica en el siguiente ciclo de
            facturación.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-[20px] font-normal text-white">
            4. Uso aceptable
          </h2>
          <p>
            Te comprometes a utilizar los agentes de IA y la plataforma de
            forma lícita, sin fines fraudulentos ni contrarios a estos
            términos o a la normativa aplicable.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-[20px] font-normal text-white">
            5. Contacto
          </h2>
          <p>
            Para dudas sobre estos términos, escríbenos a{" "}
            <a
              href="mailto:hola@gnexis.com"
              className="text-white hover:text-electric-iris"
            >
              hola@gnexis.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
