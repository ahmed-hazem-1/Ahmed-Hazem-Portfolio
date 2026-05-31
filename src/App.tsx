import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { ThemeProvider } from "./contexts/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="font-cairo">
        <Hero />
        <section id="experience" className="min-h-screen gradient-light flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-navy text-lg">Placeholder — Experience section</p>
          </div>
        </section>
        <section id="achievements" className="min-h-screen gradient-navy flex items-center text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-white text-lg">Placeholder — Achievements (dark section)</p>
          </div>
        </section>
      </main>
    </ThemeProvider>
  );
}