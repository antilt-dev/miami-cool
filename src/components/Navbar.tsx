import { useState, useEffect } from "react";
import { Phone, Sun, Moon } from "lucide-react";

interface NavbarProps {
  darkMode: boolean;
  toggleDark: () => void;
}

const Navbar = ({ darkMode, toggleDark }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-background/80 backdrop-blur-md shadow-lg"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-heading font-extrabold tracking-tight text-primary">
          ARTILES <span className="text-muted-foreground font-light">AUTO AC</span>
        </a>

        <div className="hidden md:flex items-center gap-6 text-sm font-semibold">
          <a href="#services" className="hover:text-primary transition-colors">Services</a>
          <a href="#gallery" className="hover:text-primary transition-colors">Gallery</a>
          <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleDark}
            className="p-2 rounded-full bg-muted transition-transform active:scale-90"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun size={18} className="text-yellow-400" />
            ) : (
              <Moon size={18} className="text-foreground" />
            )}
          </button>

          <a
            href="tel:+13052640777"
            className="hidden md:flex items-center gap-2 font-bold text-primary text-sm"
          >
            <Phone size={16} /> (305) 264-0777
          </a>

          <a
            href="#contact"
            className="bg-accent text-accent-foreground px-5 py-2 rounded-lg font-bold text-sm copper-glow-hover transition-all active:scale-95"
          >
            BOOK NOW
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
