import { NextResponse } from "next/server";

type ContactPayload = {
  nombre?: string;
  empresa?: string;
  email?: string;
  telefono?: string;
  interes?: string;
  mensaje?: string;
};

export async function POST(request: Request) {
  const data = (await request.json()) as ContactPayload;

  if (!data.nombre || !data.empresa || !data.email || !data.mensaje) {
    return NextResponse.json(
      { ok: false, error: "Faltan campos obligatorios." },
      { status: 400 }
    );
  }

  // TODO: conectar a un servicio real (Resend, HubSpot, etc.) antes de salir a producción.
  console.log("Nuevo lead de contacto:", data);

  return NextResponse.json({ ok: true });
}
