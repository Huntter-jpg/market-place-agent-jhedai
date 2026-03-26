"use client";

import Link from "next/link";
import { Phone, Mail, Globe } from "lucide-react";
import JhedAiLogo from "./brand/JhedAiLogo";

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white pt-16 pb-8 px-6 lg:px-8">
      <div className="max-w-container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="inline-block mb-8"
              aria-label="JHED AI - Ir a la página principal"
            >
              <JhedAiLogo size="full" theme="dark" />
            </Link>
            <p className="text-body-sm text-white/70 leading-relaxed font-body mb-6">
              Agentes de IA diseñados a la medida de tus procesos, datos y
              regulaciones internas para empresas en Chile y Latinoamérica.
            </p>
            {/* Contact info */}
            <div className="space-y-2.5">
              <p className="text-label-md text-white font-bold font-body">
                Edison Vásquez
              </p>
              <p className="text-body-sm text-white/60 font-body">CEO</p>
              <div className="flex items-center gap-2 text-body-sm text-white/70 font-body">
                <Phone className="w-3.5 h-3.5 text-primary-300" />
                <a
                  href="tel:+56982780892"
                  className="hover:text-white transition-colors"
                >
                  +56 9 8278 0892
                </a>
              </div>
              <div className="flex items-center gap-2 text-body-sm text-white/70 font-body">
                <Mail className="w-3.5 h-3.5 text-primary-300" />
                <a
                  href="mailto:edison@jhedai.com"
                  className="hover:text-white transition-colors"
                >
                  edison@jhedai.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-body-sm text-white/70 font-body">
                <Globe className="w-3.5 h-3.5 text-primary-300" />
                <a
                  href="https://www.jhedai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  www.jhedai.com
                </a>
              </div>
            </div>
          </div>

          {/* Plataforma */}
          <div>
            <h4 className="text-title-sm text-white font-bold font-body mb-6">
              Plataforma
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/agentes"
                  className="text-body-md text-white/70 hover:text-white transition-colors font-body"
                >
                  Ver Agentes
                </Link>
              </li>
              <li>
                <Link
                  href="/agentes/asistente-ventas"
                  className="text-body-md text-white/70 hover:text-white transition-colors font-body"
                >
                  Agente de Ventas
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-title-sm text-white font-bold font-body mb-6">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li className="text-body-md text-white/50 font-body">
                Chile & Latinoamérica
              </li>
              <li>
                <a
                  href="https://wa.me/56964730628"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body-md text-white/70 hover:text-green-400 transition-colors font-body"
                >
                  WhatsApp Soporte
                </a>
              </li>
              <li>
                <a
                  href="mailto:edison@jhedai.com"
                  className="text-body-md text-white/70 hover:text-white transition-colors font-body"
                >
                  edison@jhedai.com
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-title-sm text-white font-bold font-body mb-6">
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="text-body-md text-white/70 hover:text-white transition-colors font-body"
                >
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-body-md text-white/70 hover:text-white transition-colors font-body"
                >
                  Términos y Condiciones
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-primary-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-body-sm text-white/50 font-body">
            &copy; {new Date().getFullYear()} JhedAI. Todos los derechos
            reservados.
          </p>
          <p className="text-body-sm text-white/50 font-body">
            Inteligencia artificial a la medida de tu negocio
          </p>
        </div>
      </div>
    </footer>
  );
}
