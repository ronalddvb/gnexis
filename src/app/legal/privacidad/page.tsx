import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Cómo Gnexis recopila, usa y protege tus datos personales.",
};

export default function PrivacidadPage() {
  return (
    <div className="pb-24">
      <PageHero eyebrow="Legal" title="Política de Privacidad" />
      <div className="container-gnexis flex max-w-2xl flex-col gap-8 text-[16px] font-extralight leading-[1.7] text-silver-mist">
        <p className="text-[14px] font-extralight text-ash-gray">
          Última actualización: 22 de septiembre de 2026. Este documento es
          una plantilla base y debe ser revisado por asesoría legal antes de
          su publicación definitiva.
        </p>

        <section>
          <h2 className="mb-3 text-[20px] font-normal text-white">
            1. Datos que recopilamos
          </h2>
          <p>
            Recopilamos la información que nos proporcionas directamente a
            través de nuestros formularios de contacto (nombre, empresa,
            email, teléfono y mensaje), así como datos de uso de nuestra
            plataforma cuando eres cliente de Gnexis.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-[20px] font-normal text-white">
            2. Cómo usamos tus datos
          </h2>
          <p>
            Usamos tus datos para responder a tus solicitudes de contacto,
            brindarte nuestros servicios de automatización, mejorar nuestra
            plataforma y, cuando corresponda, enviarte comunicaciones sobre
            nuestros productos.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-[20px] font-normal text-white">
            3. Cumplimiento GDPR
          </h2>
          <p>
            Operamos bajo principios de cumplimiento GDPR: minimización de
            datos, encriptación en tránsito y en reposo, y control de acceso
            por roles. Puedes solicitar acceso, corrección o eliminación de
            tus datos en cualquier momento.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-[20px] font-normal text-white">
            4. Contacto
          </h2>
          <p>
            Para ejercer tus derechos sobre tus datos personales, escríbenos
            a{" "}
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
