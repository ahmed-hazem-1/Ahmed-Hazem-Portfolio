import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Volunteering from "./components/Volunteering";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import { ThemeProvider } from "./contexts/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="font-cairo">
        <Hero />
        <Experience />
        <Education />
        <Volunteering />
        <Projects />
        <Skills />
        <Achievements />
        <Certificates />
        <Contact />
      </main>
    </ThemeProvider>
  );
}