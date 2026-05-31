import { motion } from "motion/react";
import { Heart, Users, Globe, Calendar } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

interface Volunteer {
  organization: string;
  position: string;
  duration: string;
  responsibilities: string[];
  icon: typeof Heart;
}

const VOLUNTEERS: Volunteer[] = [
  {
    organization: "GDG On Campus BU SB",
    position: "Vice Head AI",
    duration: "Sep 2025 – Present",
    responsibilities: [
      "Co-led AI committee and delivered hands-on AI/ML training sessions",
      "Mentored students on AI technologies and career development in tech",
    ],
    icon: Users,
  },
  {
    organization: "NASA Space Apps Benha",
    position: "Vice Head Researcher & Mentor",
    duration: "Jun 2025 – Present",
    responsibilities: [
      "Guided interdisciplinary teams on science and technology projects with real-world applications in exploration",
      "Fostered innovation in a collaborative, international context via NASA Space Apps mentorship",
    ],
    icon: Globe,
  },
  {
    organization: "Career Explorers",
    position: "Organization Team Member (Speaker Coordination)",
    duration: "Sep 2025",
    responsibilities: [
      "Collaborated with the organization team for the 1% Event 2025, a premier career exploration summit",
      "Managed speaker outreach, scheduling, and logistics for 20+ industry experts",
    ],
    icon: Users,
  },
  {
    organization: "Codeavour 5.0 Egypt",
    position: "Event Organizer",
    duration: "Mar 2024",
    responsibilities: [
      "Assisted in organizing a countrywide AI and Robotics programming competition with a capacity of 5,000",
      "Including 1,500 participants and 3,500 parents/spectators",
      "Worked alongside talented team of organizers to support and empower aspiring developers",
    ],
    icon: Heart,
  },
];

export default function Volunteering() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="volunteering"
      className={`relative py-24 min-h-screen flex items-center overflow-hidden ${
        isDark ? "gradient-navy" : "gradient-navy"
      } text-white`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-4 bg-white/10 text-brand-yellow border border-white/20 backdrop-blur-sm"
          >
            Community Impact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Volunteering
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {VOLUNTEERS.map((vol, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card-dark rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center bg-brand-yellow/20 border border-brand-yellow/30"
                >
                  <vol.icon className="w-6 h-6 text-brand-yellow" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-0.5">
                    {vol.organization}
                  </h3>
                  <p className="text-sm font-semibold text-brand-yellow">
                    {vol.position}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-white/60 mb-4">
                <Calendar className="w-3 h-3" />
                <span>{vol.duration}</span>
              </div>

              <ul className="space-y-2">
                {vol.responsibilities.map((r, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-white/80">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-yellow/60 shrink-0" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}