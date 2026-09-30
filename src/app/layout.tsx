import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AgentProvider from "@/components/AgentProvider";

const GOOGLE_ADS_ID = "AW-18147429663";

export const metadata: Metadata = {
  title: "JhedAI - Agentes de IA a la medida de tu negocio",
  description:
    "Automatiza procesos, multiplica la productividad de tus equipos y genera nuevas ventas con agentes inteligentes diseñados por JhedAI para empresas en Chile y Latinoamérica.",
  keywords: [
    "agentes IA",
    "inteligencia artificial",
    "automatización",
    "ventas",
    "CRM",
    "Chile",
    "Latinoamérica",
    "JhedAI",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', '${GOOGLE_ADS_ID}');`,
          }}
        />
      </head>
      <body className="antialiased bg-white text-primary-900 min-h-screen flex flex-col font-body">
        <AgentProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </AgentProvider>
      </body>
    </html>
  );
}
