import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.png";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-hero pt-32 pb-20">
      {/* Decorative blurs */}
      <div className="absolute top-20 right-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute -left-40 top-60 h-[300px] w-[300px] rounded-full bg-primary/8 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 shadow-card"
          >
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse-soft" />
            <span className="text-xs font-semibold text-text-secondary tracking-wide uppercase">
              AI İçerik İşletim Sistemi
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          >
            11 Saatlik İçerik Yükünü{" "}
            <span className="text-gradient-primary">15 Dakikaya</span> İndir.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary md:text-xl"
          >
            Scenario, influencer'lar için trend uyumlu ve insansı senaryolar üretir; 
            fikirden yayına tek akışta ilerlersin.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2 rounded-2xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-primary transition-all hover:brightness-110"
            >
              Ücretsiz Başla
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 rounded-2xl border border-border bg-surface px-8 py-4 text-base font-semibold text-foreground shadow-card transition-all hover:shadow-card-hover"
            >
              <Play className="h-4 w-4 text-primary" />
              Nasıl Çalışır?
            </a>
          </motion.div>

          {/* Metrics row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-14 flex flex-wrap items-center justify-center gap-8 md:gap-14"
          >
            {[
              { value: "%98", label: "Zaman Tasarrufu" },
              { value: "5 dk", label: "İlk Senaryo" },
              { value: "%80+", label: "Performans Artışı" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-foreground md:text-4xl">{stat.value}</p>
                <p className="mt-1 text-sm font-medium text-text-secondary">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Dashboard Screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="relative mx-auto mt-20 max-w-5xl"
        >
          <div className="absolute inset-0 -m-4 rounded-3xl bg-gradient-to-b from-primary/10 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-border bg-surface shadow-card-hover">
            <img
              src={heroDashboard}
              alt="Scenario AI Dashboard — senaryo editörü, trend analizi ve AI agent paneli"
              className="w-full"
              loading="eager"
            />
          </div>
          {/* Floating elements */}
          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-6 top-1/3 rounded-2xl border border-border bg-surface p-4 shadow-card-hover"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-accent-soft flex items-center justify-center">
                <span className="text-lg">🎯</span>
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground">Trend Uyumlu</p>
                <p className="text-xs text-text-secondary">Otomatik Analiz</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            animate={{ y: [8, -8, 8] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-4 top-1/4 rounded-2xl border border-border bg-surface p-4 shadow-card-hover"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-success-soft flex items-center justify-center">
                <span className="text-lg">✨</span>
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground">İnsansı Yazım</p>
                <p className="text-xs text-text-secondary">RAG Motorlu</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
