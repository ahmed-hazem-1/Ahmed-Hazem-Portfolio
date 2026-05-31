import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { MENU_ITEMS } from "./constants";
import { useTypewriter } from "./useTypewriter";
import { useTheme } from "../../contexts/ThemeContext";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { text, isQuestion } = useTypewriter();
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-4 left-4 right-4 z-[9999]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="glass-navbar rounded-[2rem] h-14 shadow-lg flex items-center justify-between px-6">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}
            className="flex items-center gap-2 min-w-0"
          >
            <span
              className={`text-base font-bold leading-tight truncate ${
                isQuestion
                  ? "text-brand-yellow text-sm font-bold"
                  : "text-white"
              }`}
            >
              {text}
              <span
                className="inline-block w-[2px] h-[1em] bg-brand-yellow ml-0.5"
                style={{ animation: "cursor-blink 0.75s step-end infinite" }}
              />
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {MENU_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className="text-sm font-medium text-white/80 hover:text-brand-yellow transition-colors"
              >
                {item.label}
              </a>
            ))}
            <motion.button
              onClick={toggleTheme}
              whileTap={{ scale: 0.9 }}
              className="text-white/80 hover:text-brand-yellow transition-colors focus:ring-2 focus:ring-brand-yellow focus:ring-offset-2 rounded-lg p-1"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              <motion.div
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </motion.div>
            </motion.button>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <motion.button
              onClick={toggleTheme}
              whileTap={{ scale: 0.9 }}
              className="text-white/80 hover:text-brand-yellow transition-colors focus:ring-2 focus:ring-brand-yellow focus:ring-offset-2 rounded-lg p-1"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              <motion.div
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </motion.div>
            </motion.button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-white hover:text-brand-yellow transition-colors focus:ring-2 focus:ring-brand-yellow focus:ring-offset-2 rounded-lg p-1"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden md:hidden mt-2"
            >
              <div className="bg-brand-navy/95 backdrop-blur-md border-t border-white/10 rounded-2xl px-6 py-6 flex flex-col gap-4">
                {MENU_ITEMS.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                    className="text-base font-medium text-white/80 hover:text-brand-yellow transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}