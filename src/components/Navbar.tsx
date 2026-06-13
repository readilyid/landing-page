import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Program", href: "#program" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontak", href: "#kontak" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.4 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-card/95 backdrop-blur-md shadow-card" : "bg-transparent"
        }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="flex items-center">
          <img src="/logo2.png" alt="Readily" className="md:hidden h-10 w-auto" />
          <img src={scrolled ? "/logo2.png" : "/logo.png"} alt="Readily" className="hidden md:block h-12 w-auto" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => {
            const id = l.href.replace("#", "");
            const isActive = id !== "home" && activeSection === id;
            return (
              <a
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? "text-primary" : scrolled ? "text-muted-foreground" : "text-white"
                }`}
              >
                {l.label}
              </a>
            );
          })}
          <a
            href="https://readily-practice-1083714527574.asia-southeast1.run.app"
            target="_blank"
            className="gradient-cta text-cta-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Daftar Sekarang
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2" style={{ color: "#135ea6" }}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-t border-border overflow-hidden"
          >
            <div className="container py-4 flex flex-col gap-3">
              {navLinks.map((l) => {
                const id = l.href.replace("#", "");
                const isActive = id !== "home" && activeSection === id;
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className={`text-sm font-medium py-2 transition-colors hover:text-primary ${
                      isActive ? "text-primary font-semibold" : "text-muted-foreground"
                    }`}
                  >
                    {l.label}
                  </a>
                );
              })}
              <a
                href="https://readily-practice-1083714527574.asia-southeast1.run.app/"
                target="_blank"
                onClick={() => setMobileOpen(false)}
                className="gradient-cta text-cta-foreground px-5 py-3 rounded-lg text-sm font-semibold text-center mt-2"
              >
                Daftar Sekarang
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
