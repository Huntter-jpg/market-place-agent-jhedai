"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Calendar, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import JhedAiLogo from "../brand/JhedAiLogo";

const CALENDAR_URL = "https://calendar.app.google/xJ65YJbmrHFXmoqeA";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/agentes", label: "Agentes" },
];

export default function FloatingNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-50">
      <nav className="bg-primary-900/85 backdrop-blur-2xl border-b border-white/[0.08] shadow-[0_8px_32px_rgba(0,55,100,0.25)]">
        <div className="max-w-container mx-auto px-6 lg:px-8 flex items-center justify-between py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <div className="hidden sm:block">
              <JhedAiLogo size="full" theme="dark" />
            </div>
            <div className="sm:hidden">
              <JhedAiLogo size="compact" theme="dark" />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-body-md font-bold font-body transition-colors whitespace-nowrap ${
                  pathname === link.href
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <a
              href="https://wa.me/56964730628"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 text-body-sm font-bold font-body rounded-full transition-all whitespace-nowrap bg-white/[0.08] border border-white/[0.15] text-white hover:bg-white/[0.16]"
            >
              <MessageCircle className="w-4 h-4 text-green-400" />
              WhatsApp
            </a>
            <a
              href={CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2.5 bg-accent-500 text-white text-body-sm font-bold font-body rounded-full shadow-md hover:bg-accent-600 hover:shadow-glow-orange transition-all whitespace-nowrap"
            >
              <Calendar className="w-4 h-4" />
              Agendar Demo
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white hover:text-primary-300 transition-colors"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-white/10 overflow-hidden"
            >
              <div className="p-6 flex flex-col gap-6 bg-primary-900/95 backdrop-blur-xl">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-title-md font-bold font-body ${
                      pathname === link.href ? "text-white" : "text-white/60"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="grid grid-cols-1 gap-3 pt-4 border-t border-white/10">
                  <a
                    href="https://wa.me/56964730628"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 h-12 bg-white/10 border border-white/20 text-white font-bold font-body rounded-full"
                  >
                    <MessageCircle className="w-4 h-4 text-green-400" />
                    WhatsApp
                  </a>
                  <a
                    href={CALENDAR_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 h-12 bg-accent-500 text-white font-bold font-body rounded-full shadow-md"
                  >
                    <Calendar className="w-4 h-4" />
                    Agendar Demo
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
