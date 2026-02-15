import { motion } from "framer-motion";
import { Youtube, Instagram, Music4, Twitter } from "lucide-react";

const platforms = [
  { name: "YouTube", icon: Youtube },
  { name: "Instagram", icon: Instagram },
  { name: "TikTok", icon: Music4 },
  { name: "Twitter / X", icon: Twitter },
];

export const TrustedBySection = () => {
  return (
    <section className="relative py-20 bg-gradient-section">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-text-tertiary">
            Creator'ların tercihi
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-8 md:gap-14"
        >
          {platforms.map((platform, i) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
              className="flex items-center gap-3 rounded-2xl border border-border bg-surface px-6 py-3 shadow-card transition-all hover:shadow-card-hover"
            >
              <platform.icon className="h-5 w-5 text-text-secondary" />
              <span className="text-sm font-semibold text-foreground">{platform.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-16 max-w-4xl rounded-3xl border border-border bg-surface p-8 shadow-card md:p-10"
        >
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              { value: "11 saat → 15 dk", label: "İçerik Hazırlık Süresi", icon: "⚡" },
              { value: "5 dakikada", label: "İlk Senaryonu Üret", icon: "🚀" },
              { value: "Tek Panel", label: "Uçtan Uca Akış", icon: "🎯" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`text-center ${
                  i !== 0 ? "border-t border-border pt-6 sm:border-l sm:border-t-0 sm:pt-0 sm:pl-8" : ""
                }`}
              >
                <span className="text-2xl">{stat.icon}</span>
                <p className="mt-2 text-xl font-bold text-foreground md:text-2xl">{stat.value}</p>
                <p className="mt-1 text-sm font-medium text-text-secondary">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
