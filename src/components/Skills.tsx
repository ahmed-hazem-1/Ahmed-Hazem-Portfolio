import { motion } from "motion/react";
import { Code2, Brain, BarChart3, Globe, Cpu, Server, Layers } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

interface SkillGroup {
  title: string;
  icon: typeof Brain;
  skills: string[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Generative AI & LLMs",
    icon: Cpu,
    skills: [
      "RAG (Retrieval-Augmented Generation)",
      "LangChain & Agentic Workflows",
      "Prompt Engineering & Context Management",
      "LLM Fine-tuning & Deployment",
      "Autonomous Agents (Marketing, CRM, Social)",
    ],
  },
  {
    title: "Deep Learning & Computer Vision",
    icon: Brain,
    skills: [
      "TensorFlow / Keras / PyTorch",
      "CNNs & Neural Networks",
      "YOLO (v8–v11) Object Detection",
      "Semantic Segmentation",
      "Transfer Learning",
    ],
  },
  {
    title: "Machine Learning",
    icon: BarChart3,
    skills: [
      "Scikit-Learn / XGBoost",
      "GridSearchCV / Feature Engineering",
      "MLFlow / Model Tracking",
      "Image Preprocessing",
      "Supervised & Unsupervised Learning",
    ],
  },
  {
    title: "Programming & Tools",
    icon: Code2,
    skills: ["Python (Advanced)", "SQL / MySQL", "Git / GitHub", "Jupyter / Colab"],
  },
  {
    title: "Data Analysis & Visualization",
    icon: Globe,
    skills: [
      "Pandas / NumPy",
      "Matplotlib / Seaborn / Plotly",
      "Streamlit / Dash",
      "Web Scraping (BeautifulSoup / Selenium)",
    ],
  },
  {
    title: "Backend & DevOps",
    icon: Server,
    skills: [
      "Multi-tenant Systems Design",
      "Backend Pipeline Engineering",
      "API Development",
      "Vercel / Netlify Deployment",
    ],
  },
  {
    title: "Soft Skills",
    icon: Layers,
    skills: ["Teamwork", "Communication", "Problem-Solving", "Project Management", "Organization"],
  },
];

export default function Skills() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="skills"
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
            Technical Arsenal
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Skills & Technologies
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card-dark rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center bg-brand-yellow/20 border border-brand-yellow/30"
                >
                  <group.icon className="w-5 h-5 text-brand-yellow" />
                </div>
                <h3 className="text-lg font-bold text-white">{group.title}</h3>
              </div>

              <ul className="space-y-2">
                {group.skills.map((skill, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2 text-sm text-white/80"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-yellow/60 shrink-0" />
                    <span>{skill}</span>
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