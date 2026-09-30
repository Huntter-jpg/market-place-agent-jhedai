"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import JhedAiLogo from "./brand/JhedAiLogo";

const CALENDAR_URL = "https://calendar.app.google/xJ65YJbmrHFXmoqeA";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/agentes", label: "Agentes" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  /*  ── Layout math ──
      Always white glassmorphism. py-2 always. Scroll only adds shadow.
      Logo max-h-10 (40px) + py-2 (8px×2) = ~56px total.  */

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b bg-white/90 backdrop-blur-xl py-2 ${
        scrolled
          ? "border-neutral-200 shadow-elevation-1"
          : "border-neutral-100"
      }`}
    >
      <div className="max-w-container mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* ── Group 1: Logo (Left) ── */}
        <Link
          href="/"
          className="flex items-center shrink-0"
          aria-label="JHED AI - Ir a la página principal"
        >
          <JhedAiLogo
            size={scrolled ? "compact" : "full"}
            theme="light"
          />
        </Link>

        {/* ── Group 2: Navigation Links (Center) ── */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-body-sm font-bold font-body transition-colors whitespace-nowrap ${
                pathname === link.href
                  ? "text-primary-600"
                  : "text-ink hover:text-primary-500"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* ── Group 3: Action Buttons (Right) ── */}
        <div className="hidden md:flex items-center gap-2.5 shrink-0">
          <a
            href="https://wa.me/56964730628"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-label-sm font-bold font-body rounded-full transition-all whitespace-nowrap bg-green-50 border border-green-200 text-green-700 hover:bg-green-100"
          >
            <MessageCircle className="w-3.5 h-3.5 text-green-500" />
            WhatsApp
          </a>
          <a
            href={CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-5 py-2 bg-primary-500 text-white text-label-sm font-bold font-body rounded-full hover:bg-primary-400 hover:shadow-glow-blue transition-all whitespace-nowrap"
          >
            Agendar Demo
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile toggle — 44px touch target */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-11 h-11 flex items-center justify-center rounded-lg transition-colors text-primary-900 hover:bg-neutral-100"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            className="md:hidden border-t border-neutral-200 overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-6 bg-white">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-title-md font-bold font-body ${
                    pathname === link.href ? "text-primary-500" : "text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="grid grid-cols-1 gap-3 pt-4 border-t border-neutral-200">
                <a
                  href="https://wa.me/56964730628"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 h-12 font-bold font-body rounded-full bg-green-50 border border-green-200 text-green-700"
                >
                  <MessageCircle className="w-4 h-4 text-green-500" />
                  WhatsApp
                </a>
                <a
                  href={CALENDAR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 h-12 bg-primary-500 text-white font-bold font-body rounded-full"
                >
                  Agendar Demo
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
