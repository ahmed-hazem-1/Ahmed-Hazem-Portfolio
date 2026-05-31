import { motion } from "motion/react";
import { Trophy, Rocket, Users, Award, Mic, Globe, Cpu, Target } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

interface Achievement {
  text: string;
  icon: typeof Trophy;
}

const ACHIEVEMENTS: Achievement[] = [
  {
    text: "Startup Founder — Mogeeb.ai launched with immediate market traction",
    icon: Rocket,
  },
  {
    text: "Saudi Arabia B2B Contract secured within Month 1 of operations",
    icon: Globe,
  },
  {
    text: "Selected as one of 10 startups for Creativa AI Labs accelerator",
    icon: Trophy,
  },
  {
    text: "Featured speaker at Cairo ICT 2025",
    icon: Mic,
  },
  {
    text: "Waste Detection — 94% mAP50 accuracy on computer vision model",
    icon: Cpu,
  },
  {
    text: "Air Delay Prediction — 99.9% accuracy using time series analysis",
    icon: Target,
  },
  {
    text: "Led 5-person technical team at DEPI for end-to-end delivery (>90% CNN accuracy)",
    icon: Users,
  },
  {
    text: "NTI Excellence — 96% score on Computer Vision Summer Training (120+ hours)",
    icon: Award,
  },
  {
    text: "NVIDIA Certified — Multiple certifications in Deep Learning and Generative AI",
    icon: Award,
  },
  {
    text: "Vice Head AI at GDG On Campus — Co-led AI committee & training sessions",
    icon: Users,
  },
  {
    text: "Deployed AI solution to 3 hospitality venues in Egypt within 60 days",
    icon: Rocket,
  },
  {
    text: "15+ projects spanning GenAI, DL, ML, Web Scraping, and Data Analysis",
    icon: Cpu,
  },
];

export default function Achievements() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="achievements"
      className={`relative py-24 min-h-screen flex items-center overflow-hidden ${
        isDark ? "gradient-light" : "gradient-light"
      }`}
    >
      {!isDark && (
        <>
          <div
            className="absolute -top-24 -left-24 w-[40rem] h-[40rem] rounded-full bg-brand-yellow/15 blur-[140px] pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-20 -right-20 w-[35rem] h-[35rem] rounded-full bg-brand-navy/10 blur-[120px] pointer-events-none"
            aria-hidden="true"
          />
        </>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span
            className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-4 ${
              isDark
                ? "bg-white/10 text-brand-yellow border border-white/20 backdrop-blur-sm"
                : "bg-brand-yellow/10 text-brand-navy border border-brand-yellow/20 backdrop-blur-sm"
            }`}
          >
            Key Milestones
          </span>
          <h2
            className={`text-3xl md:text-4xl font-bold ${
              isDark ? "text-white" : "text-brand-navy"
            }`}
          >
            Achievements
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ACHIEVEMENTS.map((ach, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`rounded-2xl p-5 hover:-translate-y-1 transition-transform duration-300 ${
                isDark ? "glass-card-dark" : "glass-card"
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    isDark
                      ? "bg-brand-yellow/20 border border-brand-yellow/30"
                      : "bg-brand-yellow/10 border border-brand-yellow/20"
                  }`}
                >
                  <ach.icon
                    className={`w-5 h-5 ${isDark ? "text-brand-yellow" : "text-brand-yellow"}`}
                  />
                </div>
                <p
                  className={`text-sm leading-relaxed ${
                    isDark ? "text-white/80" : "text-brand-gray"
                  }`}
                >
                  {ach.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}