import { motion } from "motion/react";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

export default function Education() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="education"
      className={`relative py-24 min-h-screen flex items-center overflow-hidden ${
        isDark ? "gradient-light" : "gradient-light"
      }`}
    >
      {!isDark && (
        <>
          <div
            className="fluid-blob light-blob-yellow-1-reverse absolute -top-[15%] -right-[15%] pointer-events-none z-0"
            aria-hidden="true"
          />
          <div
            className="fluid-blob light-blob-navy-2-reverse absolute -bottom-[15%] -left-[15%] pointer-events-none z-0"
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
            Academic Path
          </span>
          <h2
            className={`text-3xl md:text-4xl font-bold ${
              isDark ? "text-white" : "text-brand-navy"
            }`}
          >
            Education
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div
            className={`rounded-2xl p-8 md:p-10 ${
              isDark ? "glass-card-dark" : "glass-card"
            }`}
          >
            <div className="flex items-start gap-6 mb-6">
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                  isDark
                    ? "bg-brand-yellow/20 border border-brand-yellow/30"
                    : "bg-brand-yellow/10 border border-brand-yellow/20"
                }`}
              >
                <GraduationCap
                  className={`w-7 h-7 ${isDark ? "text-brand-yellow" : "text-brand-yellow"}`}
                />
              </div>

              <div className="flex-1">
                <h3
                  className={`text-xl md:text-2xl font-bold mb-1 ${
                    isDark ? "text-white" : "text-brand-navy"
                  }`}
                >
                  Benha University
                </h3>
                <p
                  className={`text-base font-semibold ${
                    isDark ? "text-brand-yellow" : "text-brand-yellow"
                  }`}
                >
                  Benha Faculty of Computer Science and Artificial Intelligence
                </p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <Award
                  className={`w-5 h-5 ${isDark ? "text-white/60" : "text-brand-gray"}`}
                />
                <div>
                  <p
                    className={`text-base font-semibold ${
                      isDark ? "text-white" : "text-brand-navy"
                    }`}
                  >
                    Bachelor of Applied Science — BASc
                  </p>
                  <p
                    className={`text-sm ${
                      isDark ? "text-white/70" : "text-brand-gray"
                    }`}
                  >
                    Computer Science and Artificial Intelligence
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Calendar
                  className={`w-5 h-5 ${isDark ? "text-white/60" : "text-brand-gray"}`}
                />
                <p
                  className={`text-sm ${isDark ? "text-white/70" : "text-brand-gray"}`}
                >
                  October 2023 – April 2027 (Currently Enrolled)
                </p>
              </div>

              <div className="flex items-center gap-3">
                <MapPin
                  className={`w-5 h-5 ${isDark ? "text-white/60" : "text-brand-gray"}`}
                />
                <p
                  className={`text-sm ${isDark ? "text-white/70" : "text-brand-gray"}`}
                >
                  Benha, Al Qalyubiyah, Egypt
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <span
                className={`inline-block px-3 py-1 rounded-full text-sm font-bold ${
                  isDark
                    ? "bg-brand-yellow/20 text-brand-yellow"
                    : "bg-brand-yellow/10 text-brand-yellow"
                }`}
              >
                GPA: 3.6 / 4.0
              </span>
              <span
                className={`inline-block px-3 py-1 rounded-full text-sm font-bold ${
                  isDark
                    ? "bg-white/10 text-white/80 border border-white/20"
                    : "bg-brand-navy/10 text-brand-navy border border-brand-navy/10"
                }`}
              >
                Computer Science
              </span>
              <span
                className={`inline-block px-3 py-1 rounded-full text-sm font-bold ${
                  isDark
                    ? "bg-white/10 text-white/80 border border-white/20"
                    : "bg-brand-navy/10 text-brand-navy border border-brand-navy/10"
                }`}
              >
                Artificial Intelligence
              </span>
              <span
                className={`inline-block px-3 py-1 rounded-full text-sm font-bold ${
                  isDark
                    ? "bg-white/10 text-white/80 border border-white/20"
                    : "bg-brand-navy/10 text-brand-navy border border-brand-navy/10"
                }`}
              >
                Data Science
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}