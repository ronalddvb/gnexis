"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { PrimaryButton } from "./Button";

const links = [
  { href: "/#servicios", label: "Servicios" },
  { href: "/#precios", label: "Precios" },
  { href: "/#casos-de-exito", label: "Casos de Éxito" },
  { href: "/#blog", label: "Blog" },
  { href: "/#nosotros", label: "Nosotros" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="container-gnexis flex h-[76px] items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[14px] font-semibold uppercase tracking-[0.025em] text-ash-gray transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <Link
            href="/#"
            className="text-[14px] font-normal text-ash-gray transition-colors hover:text-white"
          >
            Iniciar sesión
          </Link>
          <PrimaryButton href="/contacto">Agenda una demo</PrimaryButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          <span className="h-px w-6 bg-white" />
          <span className="h-px w-6 bg-white" />
        </button>
      </div>

      {open && (
        <div className="container-gnexis flex flex-col gap-6 pb-8 lg:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-[14px] font-semibold uppercase tracking-[0.025em] text-ash-gray transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#"
            className="text-[14px] font-normal text-ash-gray transition-colors hover:text-white"
          >
            Iniciar sesión
          </Link>
          <PrimaryButton href="/contacto" className="w-fit">
            Agenda una demo
          </PrimaryButton>
        </div>
      )}
    </header>
  );
}
