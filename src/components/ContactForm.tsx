"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[24px] border border-white/10 p-8">
        <p className="text-[24px] font-normal text-white">
          ¡Gracias! Recibimos tu mensaje.
        </p>
        <p className="mt-3 text-[15px] font-extralight text-silver-mist">
          Nuestro equipo se pondrá en contacto contigo en menos de 24 horas
          hábiles.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label="Nombre" name="nombre" required />
        <Field label="Empresa" name="empresa" required />
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label="Email" name="email" type="email" required />
        <Field label="Teléfono" name="telefono" type="tel" />
      </div>

      <label className="flex flex-col gap-2">
        <span className="text-[14px] font-semibold uppercase tracking-[0.025em] text-ash-gray">
          Tipo de interés
        </span>
        <select
          name="interes"
          required
          defaultValue=""
          className="border-0 border-b border-white/20 bg-transparent py-3 text-[16px] font-extralight text-white outline-none transition-colors focus:border-electric-iris"
        >
          <option value="" disabled>
            Selecciona una opción
          </option>
          <option value="automatizacion">Automatización</option>
          <option value="desarrollo-web">Desarrollo Web</option>
          <option value="ambos">Ambos</option>
        </select>
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-[14px] font-semibold uppercase tracking-[0.025em] text-ash-gray">
          Mensaje
        </span>
        <textarea
          name="mensaje"
          rows={4}
          required
          className="resize-none border-0 border-b border-white/20 bg-transparent py-3 text-[16px] font-extralight text-white outline-none transition-colors focus:border-electric-iris"
        />
      </label>

      {status === "error" && (
        <p className="text-[14px] text-[#ff6b6b]">
          No pudimos enviar tu mensaje. Intenta de nuevo o escríbenos
          directamente por email.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 inline-flex w-fit items-center justify-center rounded-full bg-electric-iris px-4 py-3.5 text-[14px] font-semibold uppercase tracking-[0.025em] text-white transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {status === "submitting" ? "Enviando…" : "Enviar mensaje"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[14px] font-semibold uppercase tracking-[0.025em] text-ash-gray">
        {label}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="border-0 border-b border-white/20 bg-transparent py-3 text-[16px] font-extralight text-white outline-none transition-colors focus:border-electric-iris"
      />
    </label>
  );
}
