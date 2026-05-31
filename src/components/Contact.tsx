import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

export default function Contact() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xjkgapwy", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSent(true);
        form.reset();
      }
    } catch {
      // silently fail
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-32 pb-12 md:py-24">
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
            Get In Touch
          </span>
          <h2
            className={`text-3xl md:text-4xl font-bold ${
              isDark ? "text-white" : "text-brand-navy"
            }`}
          >
            Contact
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div
              className={`rounded-2xl p-5 sm:p-6 md:p-8 ${
                isDark ? "glass-card-dark" : "glass-card"
              }`}
            >
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 ${
                      isDark
                        ? "bg-brand-yellow/20 border border-brand-yellow/30"
                        : "bg-brand-yellow/10 border border-brand-yellow/20"
                    }`}
                  >
                    <Mail className={`w-5 h-5 sm:w-6 sm:h-6 ${isDark ? "text-brand-yellow" : "text-brand-yellow"}`} />
                  </div>
                  <div className="min-w-0">
                    <p
                      className={`text-xs sm:text-sm font-semibold ${
                        isDark ? "text-white/60" : "text-brand-gray"
                      }`}
                    >
                      Email
                    </p>
                    <a
                      href="mailto:ahmed.hazem.elabady@gmail.com"
                      className={`text-xs sm:text-sm md:text-base font-bold break-all ${
                        isDark ? "text-white hover:text-brand-yellow" : "text-brand-navy hover:text-brand-yellow"
                      } transition-colors block`}
                    >
                      ahmed.hazem.elabady@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 ${
                      isDark
                        ? "bg-brand-yellow/20 border border-brand-yellow/30"
                        : "bg-brand-yellow/10 border border-brand-yellow/20"
                    }`}
                  >
                    <Phone className={`w-5 h-5 sm:w-6 sm:h-6 ${isDark ? "text-brand-yellow" : "text-brand-yellow"}`} />
                  </div>
                  <div className="min-w-0">
                    <p
                      className={`text-xs sm:text-sm font-semibold ${
                        isDark ? "text-white/60" : "text-brand-gray"
                      }`}
                    >
                      Phone
                    </p>
                    <p
                      className={`text-sm sm:text-base md:text-lg font-bold ${
                        isDark ? "text-white" : "text-brand-navy"
                      }`}
                    >
                      +20 127 5012 177
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 ${
                      isDark
                        ? "bg-brand-yellow/20 border border-brand-yellow/30"
                        : "bg-brand-yellow/10 border border-brand-yellow/20"
                    }`}
                  >
                    <MapPin className={`w-5 h-5 sm:w-6 sm:h-6 ${isDark ? "text-brand-yellow" : "text-brand-yellow"}`} />
                  </div>
                  <div className="min-w-0">
                    <p
                      className={`text-xs sm:text-sm font-semibold ${
                        isDark ? "text-white/60" : "text-brand-gray"
                      }`}
                    >
                      Location
                    </p>
                    <p
                      className={`text-sm sm:text-base md:text-lg font-bold ${
                        isDark ? "text-white" : "text-brand-navy"
                      }`}
                    >
                      Cairo, Egypt
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div
              className={`rounded-2xl p-5 sm:p-6 md:p-8 ${
                isDark ? "glass-card-dark" : "glass-card"
              }`}
            >
              {sent ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                      isDark ? "bg-brand-yellow/20" : "bg-brand-yellow/10"
                    }`}
                  >
                    <Send className={`w-8 h-8 ${isDark ? "text-brand-yellow" : "text-brand-yellow"}`} />
                  </div>
                  <p
                    className={`text-lg font-bold ${
                      isDark ? "text-white" : "text-brand-navy"
                    }`}
                  >
                    Message sent!
                  </p>
                  <p
                    className={`text-sm ${isDark ? "text-white/60" : "text-brand-gray"}`}
                  >
                    Thank you for reaching out.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Name"
                      className={`w-full rounded-full px-4 py-3 md:px-5 md:py-4 text-sm ${
                        isDark
                          ? "bg-white/10 text-white border border-white/20 placeholder:text-white/50 focus:ring-brand-yellow focus:border-transparent"
                          : "bg-white/60 text-brand-navy border border-white/40 placeholder:text-brand-gray/60 focus:ring-brand-yellow focus:border-transparent"
                      } backdrop-blur-sm shadow-sm transition-all outline-none ring-2 ring-transparent`}
                    />
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Email"
                      className={`w-full rounded-full px-4 py-3 md:px-5 md:py-4 text-sm ${
                        isDark
                          ? "bg-white/10 text-white border border-white/20 placeholder:text-white/50 focus:ring-brand-yellow focus:border-transparent"
                          : "bg-white/60 text-brand-navy border border-white/40 placeholder:text-brand-gray/60 focus:ring-brand-yellow focus:border-transparent"
                      } backdrop-blur-sm shadow-sm transition-all outline-none ring-2 ring-transparent`}
                    />
                  </div>

                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Your message..."
                    className={`w-full rounded-2xl px-4 py-3 md:px-5 md:py-4 text-sm resize-none ${
                      isDark
                        ? "bg-white/10 text-white border border-white/20 placeholder:text-white/50 focus:ring-brand-yellow focus:border-transparent"
                        : "bg-white/60 text-brand-navy border border-white/40 placeholder:text-brand-gray/60 focus:ring-brand-yellow focus:border-transparent"
                    } backdrop-blur-sm shadow-sm transition-all outline-none ring-2 ring-transparent`}
                  />

                  <motion.button
                    type="submit"
                    disabled={sending}
                    whileTap={{ scale: 0.98 }}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-brand-yellow text-white font-semibold shadow-lg hover:bg-yellow-600 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {sending ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}