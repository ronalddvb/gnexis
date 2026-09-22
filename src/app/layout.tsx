import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["200", "400", "600", "700"],
});

const siteUrl = "https://gnexis.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Gnexis — Automatización empresarial con IA Agéntica",
    template: "%s | Gnexis",
  },
  description:
    "Gnexis diseña agentes de IA agéntica y una plataforma SaaS para automatizar ventas, soporte, marketing y operaciones. Agenda una demo gratuita.",
  openGraph: {
    title: "Gnexis — Automatización empresarial con IA Agéntica",
    description:
      "Agentes de IA que trabajan por tu empresa 24/7. Automatización personalizada, plataforma SaaS y desarrollo web integrado.",
    url: siteUrl,
    siteName: "Gnexis",
    locale: "es_ES",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-void text-bone-white antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Gnexis",
              url: siteUrl,
              description:
                "Automatización empresarial con agentes de IA agéntica y plataforma SaaS.",
            }),
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
