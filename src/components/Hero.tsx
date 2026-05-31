import { motion } from "motion/react";
import { Github, Mail, Download } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

interface Blob {
  width: string;
  height: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  background: string;
  animation: string;
}

const BLOBS: Blob[] = [
  {
    width: "60%",
    height: "70%",
    top: "-10%",
    left: "-10%",
    background:
      "radial-gradient(circle, #d97706 0%, #b45309 40%, transparent 70%)",
    animation: "blob1 15s ease-in-out infinite",
  },
  {
    width: "50%",
    height: "60%",
    bottom: "-15%",
    right: "-5%",
    background:
      "radial-gradient(circle, #fbbf24 0%, #d97706 35%, transparent 70%)",
    animation: "blob2 17s ease-in-out infinite",
  },
  {
    width: "45%",
    height: "55%",
    top: "20%",
    right: "15%",
    background:
      "radial-gradient(circle, #0c4a6e 0%, #0b3142 50%, transparent 70%)",
    animation: "blob3 13s ease-in-out infinite",
  },
  {
    width: "55%",
    height: "50%",
    bottom: "5%",
    left: "20%",
    background:
      "radial-gradient(circle, #164e63 0%, #083344 45%, transparent 70%)",
    animation: "blob4 18s ease-in-out infinite",
  },
  {
    width: "35%",
    height: "40%",
    top: "40%",
    left: "5%",
    background:
      "radial-gradient(circle, #f59e0b 0%, #92400e 40%, transparent 70%)",
    animation: "blob2 14s ease-in-out infinite reverse",
  },
  {
    width: "40%",
    height: "45%",
    top: "5%",
    right: "30%",
    background:
      "radial-gradient(circle, #0e7490 0%, #155e75 45%, transparent 70%)",
    animation: "blob1 16s ease-in-out infinite reverse",
  },
];

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 21h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.75 1.75 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.54-1.93A1.76 1.76 0 0013 14.19a1.5 1.5 0 00.1.45V19h-3v-9h3v1.1a3.27 3.27 0 012.83-1.22c1.56 0 3.07.94 3.07 3.48V19z" />
    </svg>
  );
}

function KaggleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8.16 11.57L13.68 4.82c.19-.24.19-.57 0-.81L12.36 2.5c-.19-.24-.56-.24-.75 0L4.73 11.57c-.19.24-.19.57 0 .81l6.88 8.72c.19.24.56.24.75 0l1.32-1.51c.19-.24.19-.57 0-.81L8.16 12.38c-.19-.24-.19-.57 0-.81zm8.74 0L21.58 4.82c.19-.24.19-.57 0-.81L20.26 2.5c-.19-.24-.56-.24-.75 0L13.31 11.57c-.19.24-.19.57 0 .81l6.88 8.72c.19.24.56.24.75 0l1.32-1.51c.19-.24.19-.57 0-.81L16.9 12.38c-.19-.24-.19-.57 0-.81z" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  {
    href: "https://github.com/ahmed-hazem-1",
    label: "GitHub",
    Icon: Github,
  },
  {
    href: "http://www.linkedin.com/in/ahmed-hazem-elabady-9a904924b",
    label: "LinkedIn",
    Icon: LinkedInIcon,
  },
  {
    href: "https://www.kaggle.com/ahmedhazemelabady",
    label: "Kaggle",
    Icon: KaggleIcon,
  },
  {
    href: "mailto:ahmed.hazem.elabady@gmail.com",
    label: "Email",
    Icon: Mail,
  },
];

export default function Hero() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="about"
      className={`relative min-h-screen flex items-center overflow-hidden ${
        isDark ? "fluid-bg-container" : "gradient-light"
      }`}
    >
      {isDark &&
        BLOBS.map((blob, i) => {
          const style: React.CSSProperties = {
            width: blob.width,
            height: blob.height,
            background: blob.background,
            animation: blob.animation,
          };
          if (blob.top) style.top = blob.top;
          if (blob.bottom) style.bottom = blob.bottom;
          if (blob.left) style.left = blob.left;
          if (blob.right) style.right = blob.right;
          return <div key={i} className="fluid-blob" style={style} />;
        })}

      {isDark && (
        <div className="absolute inset-0 glass-hero z-5 pointer-events-none" />
      )}

      {!isDark && (
        <>
          <div
            className="fluid-blob pointer-events-none z-0"
            style={{
              width: "40rem",
              height: "40rem",
              top: "-15%",
              right: "-15%",
              background: "radial-gradient(circle, rgba(251, 191, 36, 0.3) 0%, rgba(217, 119, 6, 0.12) 40%, transparent 70%)",
              animation: "blob1 15s ease-in-out infinite",
              filter: "blur(90px)"
            }}
            aria-hidden="true"
          />
          <div
            className="fluid-blob pointer-events-none z-0"
            style={{
              width: "35rem",
              height: "35rem",
              bottom: "-15%",
              left: "-15%",
              background: "radial-gradient(circle, rgba(14, 116, 144, 0.25) 0%, rgba(11, 25, 44, 0.08) 50%, transparent 70%)",
              animation: "blob2 17s ease-in-out infinite",
              filter: "blur(80px)"
            }}
            aria-hidden="true"
          />
        </>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 pb-12 pt-32 md:pb-16 md:pt-40">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:pl-8 order-2 lg:order-1 text-center lg:text-left"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              className={`inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[10px] sm:text-xs md:text-sm font-bold tracking-wider uppercase mb-4 md:mb-6 ${
                isDark
                  ? "bg-white/10 text-white/90 border border-white/20 backdrop-blur-sm"
                  : "bg-brand-yellow/10 text-brand-navy border border-brand-yellow/20 backdrop-blur-sm"
              }`}
            >
              NVIDIA Certified · GenAI Specialist
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight mb-3 md:mb-4 ${
                isDark ? "text-white" : "text-brand-navy"
              }`}
            >
              Ahmed Hazem Elabady
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`text-lg sm:text-xl lg:text-2xl font-semibold mb-3 md:mb-4 ${
                isDark ? "text-brand-yellow" : "text-brand-gray"
              }`}
            >
              Founder of Mogeeb.ai · AI & Automation Engineer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={`text-sm sm:text-base lg:text-lg leading-relaxed mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0 ${
                isDark ? "text-white/80" : "text-brand-gray"
              }`}
            >
              Generative AI Specialist and Founder with a proven track record of
              developing and deploying high-impact AI solutions. Expert in
              architecting autonomous Marketing, Social, and CRM Agents that
              optimize business processes. Recently launched a production-grade
              GenAI CRM for the hospitality sector, securing international B2B
              contracts in Saudi Arabia.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4 mb-6 md:mb-8"
            >
              <motion.a
                href="https://drive.google.com/file/d/14Z2ZxAimzsgGeOcPO5YtJi-Aj659dJIu/view"
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 rounded-full bg-brand-yellow text-white font-semibold shadow-lg hover:bg-yellow-600 transition-colors duration-200 focus:ring-2 focus:ring-brand-yellow focus:ring-offset-2 text-sm md:text-base"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.a>
              <motion.a
                href="#contact"
                whileTap={{ scale: 0.98 }}
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className={`inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 rounded-full font-semibold transition-colors duration-200 focus:ring-2 focus:ring-brand-yellow focus:ring-offset-2 text-sm md:text-base ${
                  isDark
                    ? "border-2 border-white text-white hover:bg-white hover:text-brand-navy"
                    : "border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white"
                }`}
              >
                <Mail className="w-5 h-5" />
                Contact Me
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-3 md:gap-4"
            >
              {SOCIAL_LINKS.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className={`transition-colors ${
                    isDark
                      ? "text-white/80 hover:text-brand-yellow"
                      : "text-brand-gray hover:text-brand-yellow"
                  }`}
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center lg:justify-center order-1 lg:order-2"
          >
            <div className="relative rounded-[2rem] overflow-hidden p-[2px] border-glow-wrapper">
              <div
                className="absolute inset-[-200%] border-glow"
                aria-hidden="true"
              />
              <div
                className={`relative rounded-[2rem] p-2 md:p-3 ${
                  isDark ? "glass-card-dark" : "glass-card"
                }`}
              >
                <img
                  src="/photo-pro.jpg"
                  alt="Ahmed Hazem Elabady"
                  className="rounded-2xl w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover"
                />
              </div>
              <div
                className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-brand-yellow/20 blur-xl pointer-events-none"
                aria-hidden="true"
              />
              <div
                className={`absolute -top-4 -left-4 w-24 h-24 rounded-full blur-xl pointer-events-none ${
                  isDark ? "bg-cyan-600/20" : "bg-brand-navy/5"
                }`}
                aria-hidden="true"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}