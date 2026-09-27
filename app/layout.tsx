import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

// Sustituto libre de ES Allianz: serif de alto contraste, legible también a tamaño cuerpo.
const serif = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LiberAI — Webs, facturas y herramientas para empresas de obras y servicios",
  description:
    "Consultora especializada en empresas de obras, instalaciones y servicios. Webs, gestores de facturas, presupuestos e informes con tu marca — sin sistemas que nadie en tu empresa quiere usar.",
  keywords: ["empresa de obras", "gestor de facturas", "presupuestos", "digitalización pymes", "LiberAI"],
  metadataBase: new URL("https://liberai.es"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "LiberAI — La parte digital de tu empresa de obras",
    description:
      "Webs, facturas, presupuestos e informes. Diseñados para técnicos y obreros, no para oficinistas.",
    type: "website",
    locale: "es_ES",
    url: "https://liberai.es",
    siteName: "LiberAI",
  },
  twitter: {
    card: "summary_large_image",
    title: "LiberAI — La parte digital de tu empresa de obras",
    description: "Webs, facturas, presupuestos e informes. Diseñados para técnicos y obreros, no para oficinistas.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={serif.variable}>
      <body>{children}</body>
    </html>
  );
}
