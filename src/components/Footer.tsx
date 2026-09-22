import Link from "next/link";
import { Logo } from "./Logo";

const columns = [
  {
    title: "Servicios",
    links: [
      { href: "/#servicios", label: "Agentes de IA" },
      { href: "/#servicios", label: "Plataforma SaaS" },
      { href: "/#servicios", label: "Desarrollo web" },
      { href: "/#precios", label: "Precios" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { href: "/#nosotros", label: "Nosotros" },
      { href: "/#blog", label: "Blog" },
      { href: "/#casos-de-exito", label: "Casos de éxito" },
      { href: "/contacto", label: "Contacto" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/legal/privacidad", label: "Privacidad" },
      { href: "/legal/terminos", label: "Términos" },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10">
      <div className="container-gnexis grid grid-cols-1 gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:py-24">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-6 text-[15px] font-extralight leading-6 text-silver-mist">
            Automatizamos empresas con agentes de IA agéntica y una
            plataforma SaaS pensada para equipos que quieren escalar sin
            fricción.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <a
              href="#"
              aria-label="Twitter / X"
              className="text-ash-gray transition-colors hover:text-white"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.9 2H22l-7.6 8.7L23.3 22h-7l-5.5-6.7L4.5 22H1.4l8.1-9.3L1 2h7.2l5 6.1L18.9 2Zm-1.2 18h1.7L7.4 3.9H5.6L17.7 20Z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-ash-gray transition-colors hover:text-white"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21h-4V9Z" />
              </svg>
            </a>
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <p className="text-[12px] font-semibold uppercase tracking-[0.025em] text-saffron-spark">
              {col.title}
            </p>
            <ul className="mt-5 flex flex-col gap-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-[15px] font-extralight text-silver-mist transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container-gnexis flex flex-col items-start justify-between gap-4 border-t border-white/10 py-8 text-[13px] font-extralight text-ash-gray md:flex-row md:items-center">
        <p>© {year} Gnexis. Todos los derechos reservados.</p>
        <p>gnexis.com · Automatización con IA Agéntica</p>
      </div>
    </footer>
  );
}
