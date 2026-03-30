"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Calendar, MessageCircle } from "lucide-react";
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
  const isHome = pathname === "/";
  const isDarkMode = isHome && !scrolled;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  /*  ── Layout math ──
      Unscrolled (full logo h-20 = 80px + py-4 = 16px×2):  total ~112px
      Scrolled   (compact logo h-14 = 56px + py-2 = 8px×2): total ~72px
      Buttons (~44px) and links (~20px) stay centered via items-center  */

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-neutral-200 py-2 shadow-elevation-1"
          : isDarkMode
            ? "bg-transparent border-transparent py-4"
            : "bg-white border-neutral-100 py-4"
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
            theme={isDarkMode ? "dark" : "light"}
          />
        </Link>

        {/* ── Group 2: Navigation Links (Center) ── */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-body-md font-bold font-body transition-colors whitespace-nowrap ${
                pathname === link.href
                  ? isDarkMode
                    ? "text-white"
                    : "text-primary-600"
                  : isDarkMode
                    ? "text-white/70 hover:text-white"
                    : "text-primary-900 hover:text-primary-500"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* ── Group 3: Action Buttons (Right) ── */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <a
            href="https://wa.me/56964730628"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-5 py-2.5 text-body-sm font-bold font-body rounded-full transition-all whitespace-nowrap ${
              isDarkMode
                ? "bg-green-600/20 border border-green-500/30 text-white hover:bg-green-600/30"
                : "bg-green-50 border border-green-200 text-green-700 hover:bg-green-100"
            }`}
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

        {/* Mobile toggle — 44px touch target */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden w-11 h-11 flex items-center justify-center rounded-lg transition-colors ${
            isDarkMode
              ? "text-white hover:bg-white/10"
              : "text-primary-900 hover:bg-neutral-100"
          }`}
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
            className={`md:hidden border-t overflow-hidden ${
              isDarkMode ? "border-white/10" : "border-neutral-200"
            }`}
          >
            <div
              className={`p-6 flex flex-col gap-6 ${
                isDarkMode ? "bg-primary-900/95 backdrop-blur-xl" : "bg-white"
              }`}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-title-md font-bold font-body ${
                    isDarkMode
                      ? pathname === link.href
                        ? "text-white"
                        : "text-white/60"
                      : pathname === link.href
                        ? "text-primary-500"
                        : "text-primary-900"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div
                className={`grid grid-cols-1 gap-3 pt-4 border-t ${
                  isDarkMode ? "border-white/10" : "border-neutral-200"
                }`}
              >
                <a
                  href="https://wa.me/56964730628"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 h-12 font-bold font-body rounded-full ${
                    isDarkMode
                      ? "bg-green-600/20 border border-green-500/30 text-white"
                      : "bg-green-50 border border-green-200 text-green-700"
                  }`}
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
  );
}
