import { useState } from "react";
import { motion } from "motion/react";
import { ExternalLink, Code2, Brain, BarChart3, Globe, Cpu } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

type Category = "all" | "genai" | "dl" | "ml" | "webscraping" | "dataanalysis";

interface Project {
  title: string;
  subtitle: string;
  category: Category;
  achievement: string;
  description: string;
  code?: string;
  live?: string;
  icon: typeof Brain;
}

const CATEGORIES: { key: Category; label: string }[] = [
  { key: "all", label: "All" },
  { key: "genai", label: "GenAI / Agents" },
  { key: "dl", label: "Deep Learning" },
  { key: "ml", label: "Machine Learning" },
  { key: "webscraping", label: "Web Scraping" },
  { key: "dataanalysis", label: "Data Analysis" },
];

const PROJECTS: Project[] = [
  {
    title: "CRM Agent for Hospitality",
    subtitle: "Autonomous AI for Cafes and Restaurants",
    category: "genai",
    achievement: "Production — Deployed in Egypt & Saudi Arabia",
    description:
      "Autonomous conversational AI that engages customers, answers inquiries, and provides personalized menu recommendations. Automates order processing and customer support.",
    icon: Cpu,
  },
  {
    title: "Social Media Agent",
    subtitle: "Autonomous Content Creation Pipeline",
    category: "genai",
    achievement: "Active — Automated scheduling & content delivery",
    description:
      "Autonomous agent capable of crafting high-engagement brand-aligned social media content. Implemented automated scheduling pipelines for time-specific posts.",
    icon: Cpu,
  },
  {
    title: "Personal AI Assistant",
    subtitle: "AI Digital Twin for Professional Inquiries",
    category: "genai",
    achievement: "Production — Live on portfolio website",
    description:
      "Context-aware AI agent acting as digital twin to automate responses to professional inquiries. Embedded into live web portfolio for 24/7 interactive experience.",
    code: "https://github.com/ahmed-hazem-1",
    live: "https://ahmed-hazem-1.github.io",
    icon: Cpu,
  },
  {
    title: "Waste Detection (YOLO v8–v11)",
    subtitle: "Scalable Computer Vision Pipeline",
    category: "dl",
    achievement: "94% mAP50 · 24K images · 22 waste types",
    description:
      "Advanced waste detection using YOLOv8-v11 to identify 22 waste material types. Achieved 94% mAP50 through strategic preprocessing, augmentation, and optimization.",
    code: "https://github.com/ahmed-hazem-1/Trash_Detector",
    live: "https://trash--detector.streamlit.app/",
    icon: Brain,
  },
  {
    title: "Land Type Classification (EuroSAT)",
    subtitle: "Satellite Image Analysis for Urban Planning",
    category: "dl",
    achievement: "94% accuracy · 10 land types · Sentinel-2",
    description:
      "Deep neural network classifying land types from Sentinel-2 satellite images. Enabled applications in urban planning and environmental monitoring.",
    code: "https://github.com/ahmed-hazem-1/DEPI-Project--Land-Type-Classification.git",
    icon: Brain,
  },
  {
    title: "COVID-19 X-ray Detection",
    subtitle: "Medical Image Classification",
    category: "dl",
    achievement: "95%+ accuracy · 60% faster diagnosis potential",
    description:
      "CNN-based system for COVID-19 detection from chest X-rays with real-time prediction and confidence visualization.",
    code: "https://github.com/ahmed-hazem-1/COVID-19-Xray-Detection.git",
    live: "https://covid-19-xray-detection.streamlit.app/",
    icon: Brain,
  },
  {
    title: "Air Delay Prediction",
    subtitle: "Time Series Analysis for Flight Delays",
    category: "dl",
    achievement: "99.9% accuracy · weather-based prediction",
    description:
      "Predicts weather-caused flight delays; tuned with early stopping for 99.9% accuracy.",
    code: "https://colab.research.google.com/drive/1_TZxoqVbBwWezRDTmLzZzw6-DMKfmxo1",
    icon: Brain,
  },
  {
    title: "Customer Churn Prediction",
    subtitle: "XGBoost · RF · SVC · KNN",
    category: "ml",
    achievement: "92% accuracy · 25% churn reduction potential",
    description:
      "Churn prediction using XGBoost, Random Forest, SVC, and KNN, optimized with GridSearchCV.",
    code: "https://colab.research.google.com/drive/1HGWa_N0SFB6dJCkHtCHCiBSvhbwMMfRj",
    icon: BarChart3,
  },
  {
    title: "Heart Disease Indicators",
    subtitle: "LR · SVC · KNN · Random Forest",
    category: "ml",
    achievement: "Best KNN at 90% vs baselines",
    description:
      "Pipeline on 319,795 records; best KNN (90%) vs LR/SVC/RF baselines.",
    code: "https://colab.research.google.com/drive/16nMS2nUjRVy0dFuPgACu51i0Of4lUrIy",
    icon: BarChart3,
  },
  {
    title: "Student Performance",
    subtitle: "Linear Regression Model",
    category: "ml",
    achievement: "R²=0.989 · MSE=4.083",
    description:
      "Predicts student scores; R²=0.989 and MSE=4.083 on held-out data.",
    code: "https://www.kaggle.com/code/ahmedhazemelabady/student-performance-linear-regression-model",
    icon: BarChart3,
  },
  {
    title: "Wuzzuf Jobs — 8,000+ Listings",
    subtitle: "Egypt Job Market Dataset",
    category: "webscraping",
    achievement: "8K+ listings · Public Kaggle dataset",
    description:
      "Scraped 8k+ listings from Wuzzuf for analytics and predictive modeling.",
    icon: Globe,
  },
  {
    title: "Top Ranked Anime — 20,000+ Rows",
    subtitle: "Ranking & Trend Analysis",
    category: "webscraping",
    achievement: "20K+ entries · Trend insights",
    description:
      "Collected 20k anime entries enabling ranking, trend analysis, and EDA.",
    icon: Globe,
  },
  {
    title: "Indeed Jobs — 2,000+ Rows",
    subtitle: "Skill & Salary Trend Extraction",
    category: "webscraping",
    achievement: "2K+ postings · Skill & salary trends",
    description:
      "Scraped postings to capture skill and salary trends across roles.",
    icon: Globe,
  },
  {
    title: "Wuzzuf Jobs EDA",
    subtitle: "Market Trend Exploration",
    category: "dataanalysis",
    achievement: "Market trends & skill demand analysis",
    description:
      "Explores market trends and skill demand across the scraped Wuzzuf dataset.",
    code: "https://colab.research.google.com/drive/1JDoMhh_pkKgGjcf8O2Ka5SF9zNfOI_yo",
    icon: BarChart3,
  },
  {
    title: "Titanic Data Analysis",
    subtitle: "Survival Patterns Visualization",
    category: "dataanalysis",
    achievement: "Survival patterns by gender, class, features",
    description:
      "Survival patterns by gender, class, and other features with clear visuals.",
    code: "https://colab.research.google.com/github/ahmed-hazem-1/DEPI-Tasks/blob/main/FullTitanicPloting.ipynb",
    icon: BarChart3,
  },
];

export default function Projects() {
  const [filter, setFilter] = useState<Category>("all");
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const filtered =
    filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      className={`relative py-24 min-h-screen flex items-center overflow-hidden ${
        isDark ? "gradient-light" : "gradient-light"
      }`}
    >
      {!isDark && (
        <>
          <div
            className="fluid-blob light-blob-yellow-3 absolute -top-[15%] -right-[15%] pointer-events-none z-0"
            aria-hidden="true"
          />
          <div
            className="fluid-blob light-blob-navy-4 absolute -bottom-[15%] -left-[15%] pointer-events-none z-0"
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
          className="text-center mb-8"
        >
          <span
            className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-4 ${
              isDark
                ? "bg-white/10 text-brand-yellow border border-white/20 backdrop-blur-sm"
                : "bg-brand-yellow/10 text-brand-navy border border-brand-yellow/20 backdrop-blur-sm"
            }`}
          >
            Portfolio Showcase
          </span>
          <h2
            className={`text-3xl md:text-4xl font-bold ${
              isDark ? "text-white" : "text-brand-navy"
            }`}
          >
            Projects
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                filter === cat.key
                  ? "bg-brand-yellow text-white shadow-md"
                  : isDark
                    ? "bg-white/10 text-white/80 border border-white/20 hover:bg-white/20"
                    : "bg-brand-navy/5 text-brand-navy border border-brand-navy/10 hover:bg-brand-navy/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300 ${
                isDark ? "glass-card-dark" : "glass-card"
              }`}
            >
              <div className="flex items-start gap-3 mb-4">
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                    isDark
                      ? "bg-brand-yellow/20 border border-brand-yellow/30"
                      : "bg-brand-yellow/10 border border-brand-yellow/20"
                  }`}
                >
                  <project.icon
                    className={`w-5 h-5 ${isDark ? "text-brand-yellow" : "text-brand-yellow"}`}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3
                    className={`text-lg font-bold leading-tight ${
                      isDark ? "text-white" : "text-brand-navy"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`text-xs font-semibold ${
                      isDark ? "text-white/60" : "text-brand-gray"
                    }`}
                  >
                    {project.subtitle}
                  </p>
                </div>
              </div>

              <p
                className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${
                  isDark
                    ? "bg-brand-yellow/20 text-brand-yellow"
                    : "bg-brand-yellow/10 text-brand-yellow"
                }`}
              >
                {project.achievement}
              </p>

              <p
                className={`text-sm leading-relaxed mb-4 ${
                  isDark ? "text-white/80" : "text-brand-gray"
                }`}
              >
                {project.description}
              </p>

              <div className="flex gap-2">
                {project.code && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                      isDark
                        ? "bg-white/10 text-white/80 hover:text-brand-yellow border border-white/20"
                        : "bg-brand-navy/5 text-brand-navy hover:text-brand-yellow border border-brand-navy/10"
                    }`}
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-brand-yellow text-white hover:bg-yellow-600 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Live
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