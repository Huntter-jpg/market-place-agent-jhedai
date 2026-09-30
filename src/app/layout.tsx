import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AgentProvider from "@/components/AgentProvider";

const GOOGLE_ADS_ID = "AW-18147429663";
const GTM_ID = "GTM-T2F7MJRN";

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
        {/* Google Tag Manager — kept as a raw head script rather than
            next/script, which injects after hydration: GTM is specified to
            run in <head> so tags that gate rendering fire before paint. */}
        {/* eslint-disable-next-line @next/next/next-script-for-ga */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
        {/* End Google Tag Manager */}

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
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <AgentProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </AgentProvider>
      </body>
    </html>
  );
}
