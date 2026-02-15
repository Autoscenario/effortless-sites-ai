import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Özellikler", href: "#features" },
  { label: "Nasıl Çalışır", href: "#how-it-works" },
  { label: "Fiyatlandırma", href: "#pricing" },
  { label: "Referanslar", href: "#testimonials" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-card shadow-card py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="/" className="flex items-center gap-2">
          <img src={logo} alt="Scenario" className="h-8" />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-text-secondary transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="#"
            className="text-sm font-semibold text-foreground transition-colors hover:text-primary"
          >
            Giriş Yap
          </a>
          <a
            href="#hero"
            className="rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-primary transition-all hover:brightness-110"
          >
            Ücretsiz Başla
          </a>
        </div>

        <button
          className="lg:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="glass-card mt-2 mx-4 rounded-2xl overflow-hidden lg:hidden"
          >
            <nav className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-text-secondary transition hover:bg-accent hover:text-foreground"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#hero"
                className="mt-2 rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground shadow-primary"
                onClick={() => setMenuOpen(false)}
              >
                Ücretsiz Başla
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
