import { motion } from "motion/react";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

interface Job {
  position: string;
  company: string;
  duration: string;
  location: string;
  type: string;
  summary: string;
  achievements: string[];
  icon: typeof Briefcase;
}

const JOBS: Job[] = [
  {
    position: "Founder & AI Engineer",
    company: "Mogeeb.ai (مجيب)",
    duration: "Oct 2025 – Present",
    location: "Remote",
    type: "Self-employed",
    summary:
      "Founded and launched production-grade GenAI CRM for the hospitality sector. Secured first B2B enterprise project in Saudi Arabia within 30 days. Deployed AI solution to 3 premier venues in Egypt within 60 days. Selected as one of 10 startups for Creativa AI Labs accelerator. Speaker at Cairo ICT 2025.",
    achievements: [
      "Secured Saudi Arabia B2B contract within Month 1",
      "Deployed to 3 hospitality venues in Egypt within 60 days",
      "Architected multi-tenant backend pipelines",
      "Selected for Creativa AI Labs accelerator",
      "Speaker at Cairo ICT 2025",
    ],
    icon: Briefcase,
  },
  {
    position: "Talent Acquisition Specialist",
    company: "TAMOOH",
    duration: "Sep 2025 – Jan 2026",
    location: "Giza, Egypt",
    type: "Full-time",
    summary:
      "Talent acquisition and recruitment specialist role at TAMOOH, focusing on sourcing and placing top tech talent.",
    achievements: [
      "Full-cycle recruitment for tech roles",
      "Sourcing and candidate pipeline management",
    ],
    icon: Briefcase,
  },
  {
    position: "GenAI Engineer",
    company: "ITI & NVIDIA",
    duration: "Aug 2025 – Sep 2025",
    location: "Egypt",
    type: "Internship",
    summary:
      "Completed NVIDIA's AI for All and Generative AI Explained courses. Mastered Building LLM Applications with Prompt Engineering. Advanced expertise in Augmenting LLMs Using RAG through hands-on instructor-led sessions.",
    achievements: [
      "Designed autonomous AI agents including personal assistant digital twin",
      "Implemented RAG systems to augment LLMs with proprietary data",
      "Architected end-to-end LLM applications using advanced prompt engineering",
      "Built context-aware outputs for domain-specific queries",
    ],
    icon: Briefcase,
  },
  {
    position: "Computer Vision Engineer",
    company: "NTI",
    duration: "Jul 2025 – Aug 2025",
    location: "Remote",
    type: "Internship",
    summary:
      "Designed scalable CV workflows using YOLOv8-v11 for waste detection, achieving 94% mAP50 accuracy on a 24,000-image dataset. Optimized neural network architectures, reducing inference latency by 15%. Authored technical documentation improving team onboarding efficiency by 20%. 96% score on NTI Summer Training Program.",
    achievements: [
      "96% score on NTI Summer Training Program",
      "94% mAP50 waste detection accuracy on 24K-image dataset",
      "15% latency reduction through hyperparameter tuning",
      "120+ hours of intensive training",
    ],
    icon: Briefcase,
  },
  {
    position: "AI & Data Scientist",
    company: "DEPI",
    duration: "Oct 2024 – May 2025",
    location: "Benha, Egypt",
    type: "Internship",
    summary:
      "Acquired in-depth knowledge of Data Science principles and methodologies. Applied ML techniques including supervised and unsupervised learning. Developed and deployed an end-to-end CNN model (>90% accuracy) for satellite image classification. Spearheaded project planning and execution for a 5-person team.",
    achievements: [
      "Over 90% CNN accuracy on satellite imagery (EuroSAT)",
      "Led 5-person team project planning and execution",
      "Full ML workflow ownership from EDA to deployment",
      "Data pipeline design and optimization",
    ],
    icon: Briefcase,
  },
  {
    position: "AI Model Trainer",
    company: "Outlier",
    duration: "Sep 2024 – Nov 2024",
    location: "Remote",
    type: "Contract",
    summary:
      "Trained large language models (LLMs) to solve complex mathematical problems with high accuracy.",
    achievements: [
      "Trained LLMs for mathematical reasoning",
      "High accuracy model optimization",
    ],
    icon: Briefcase,
  },
  {
    position: "IT Trainee",
    company: "EGAS",
    duration: "Jul 2024",
    location: "On-site",
    type: "Internship",
    summary:
      "Gained expertise in diagnosing and resolving real-world IT issues through practical experience. Collaborated with team members to troubleshoot and address technical challenges effectively.",
    achievements: [
      "Real-world IT troubleshooting experience",
      "Collaborative technical problem solving",
    ],
    icon: Briefcase,
  },
];

export default function Experience() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="experience"
      className={`relative py-24 min-h-screen flex items-center overflow-hidden ${
        isDark ? "gradient-navy" : "gradient-light"
      }`}
    >
      {!isDark && (
        <>
          <div
            className="fluid-blob light-blob-yellow-3 absolute -top-[15%] -left-[15%] pointer-events-none z-0"
            aria-hidden="true"
          />
          <div
            className="fluid-blob light-blob-navy-4 absolute -bottom-[15%] -right-[15%] pointer-events-none z-0"
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
            Career Journey
          </span>
          <h2
            className={`text-3xl md:text-4xl font-bold ${
              isDark ? "text-white" : "text-brand-navy"
            }`}
          >
            Experience
          </h2>
        </motion.div>

        <div className="relative">
          <div
            className={`absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 ${
              isDark ? "bg-white/10" : "bg-brand-navy/10"
            } md:-translate-x-1/2`}
            aria-hidden="true"
          />

          {JOBS.map((job, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative mb-8 md:mb-12 pl-12 md:pl-0 md:w-1/2 ${
                  isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto md:text-left"
                }`}
              >
                <div
                  className={`absolute left-[10px] top-[26px] w-3.5 h-3.5 rounded-full border-2 z-20 ${
                    isLeft
                      ? "md:left-auto md:right-0 md:translate-x-1/2"
                      : "md:left-0 md:right-auto md:-translate-x-1/2"
                  } ${
                    isDark
                      ? "bg-brand-yellow border-brand-yellow"
                      : "bg-brand-navy border-brand-navy"
                  }`}
                  aria-hidden="true"
                />

                <div
                  className={`rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300 ${
                    isDark ? "glass-card-dark" : "glass-card"
                  }`}
                >
                  <div
                    className={`flex items-center gap-2 mb-2 ${
                      isLeft ? "md:justify-end" : "md:justify-start"
                    }`}
                  >
                    <span
                      className={`inline-block px-3 py-0.5 rounded-full text-xs font-bold ${
                        isDark
                          ? "bg-brand-yellow/20 text-brand-yellow"
                          : "bg-brand-yellow/10 text-brand-yellow"
                      }`}
                    >
                      {job.type}
                    </span>
                  </div>

                  <h3
                    className={`text-lg font-bold mb-1 ${
                      isDark ? "text-white" : "text-brand-navy"
                    }`}
                  >
                    {job.position}
                  </h3>

                  <p
                    className={`text-sm font-semibold mb-2 ${
                      isDark ? "text-brand-yellow" : "text-brand-yellow"
                    }`}
                  >
                    {job.company}
                  </p>

                  <div
                    className={`flex flex-wrap gap-3 text-xs mb-3 ${
                      isLeft ? "md:justify-end" : "md:justify-start"
                    } ${isDark ? "text-white/60" : "text-brand-gray"}`}
                  >
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {job.duration}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {job.location}
                    </span>
                  </div>

                  <p
                    className={`text-sm leading-relaxed mb-4 ${
                      isDark ? "text-white/80" : "text-brand-gray"
                    }`}
                  >
                    {job.summary}
                  </p>

                  <ul
                    className={`space-y-1 text-sm ${
                      isLeft ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    {job.achievements.map((a, j) => (
                      <li
                        key={j}
                        className={`inline-flex items-start gap-1.5 ${
                          isDark ? "text-white/70" : "text-brand-gray"
                        }`}
                      >
                        <span
                          className={`mt-1.5 w-1.5 h-1.5 rounded-full ${
                            isDark ? "bg-brand-yellow/60" : "bg-brand-yellow"
                          }`}
                        />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}