import { motion } from "motion/react";
import { Award, ExternalLink, Calendar } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  focus: string;
  link?: string;
  score?: string;
  hours?: string;
}

const CERTIFICATES: Certificate[] = [
  {
    title: "Deep Learning Fundamentals",
    issuer: "NVIDIA",
    date: "Apr 2025",
    focus: "Foundational deep learning concepts and practical implementation techniques for neural networks",
    link: "https://www.linkedin.com/in/ahmed-hazem-elabady-9a904924b/overlay/1744716991852/single-media-viewer?type=DOCUMENT&profileId=ACoAAD3DtlEBjrg2pVZ_Vw2neyi64i93FzUZoCo",
  },
  {
    title: "Getting Started with Deep Learning",
    issuer: "NVIDIA",
    date: "Aug 2025",
    focus: "Comprehensive deep learning fundamentals, computer vision, and neural network architectures",
  },
  {
    title: "Building LLM Applications With Prompt Engineering",
    issuer: "NVIDIA (ITI program)",
    date: "Aug–Sep 2025",
    focus: "Optimizing large language models and building LLM applications with prompt engineering",
  },
  {
    title: "Computer Vision Training",
    issuer: "NTI",
    date: "Jul–Aug 2025",
    focus: "Intensive training in CNNs, transfer learning, classification, detection, segmentation, and face recognition",
    score: "96%",
    hours: "120+",
  },
  {
    title: "Innovation and Entrepreneurship (InnovEgypt)",
    issuer: "ITIDA",
    date: "Jul 2024",
    focus: "Business development, startup strategies, and technological innovation",
    link: "https://www.linkedin.com/in/ahmed-hazem-elabady-9a904924b/overlay/1728331601681/single-media-viewer?type=DOCUMENT&profileId=ACoAAD3DtlEBjrg2pVZ_Vw2neyi64i93FzUZoCo",
  },
  {
    title: "AI and Data Science Trainee Program",
    issuer: "DEPI",
    date: "2024–2025",
    focus: "Comprehensive training in AI and data science covering ML, DL, and data analysis techniques",
  },
  {
    title: "Python Programming Basics",
    issuer: "MaharaTech – ITIMooca",
    date: "Jun 2024",
    focus: "Python fundamentals, data structures, and programming best practices",
    link: "https://maharatech.gov.eg/mod/customcert/view.php?id=1737&downloadown=1",
  },
];

export default function Certificates() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="certificates"
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
            Professional Credentials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Certificates & Licenses
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATES.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card-dark rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex items-start gap-3 mb-3">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center bg-brand-yellow/20 border border-brand-yellow/30"
                >
                  <Award className="w-5 h-5 text-brand-yellow" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-white leading-tight">
                    {cert.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm font-semibold text-brand-yellow mb-2">
                {cert.issuer}
              </p>

              <div className="flex items-center gap-2 text-xs text-white/60 mb-3">
                <Calendar className="w-3 h-3" />
                <span>{cert.date}</span>
              </div>

              <p className="text-sm leading-relaxed text-white/80 mb-4">
                {cert.focus}
              </p>

              <div className="flex flex-wrap gap-2">
                {cert.score && (
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-brand-yellow/20 text-brand-yellow">
                    Score: {cert.score}
                  </span>
                )}
                {cert.hours && (
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-white/80 border border-white/20">
                    {cert.hours} hours
                  </span>
                )}
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-white/80 hover:text-brand-yellow border border-white/20 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    View
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}