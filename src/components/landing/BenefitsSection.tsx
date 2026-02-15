import { motion } from "framer-motion";
import { Clock, Brain, Zap, Users, Layers } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Dramatik Zaman Tasarrufu",
    description: "Fikir bulma ve senaryo üretiminde saatler yerine dakikalar. 11 saatlik iş akışını 15 dakikaya indir.",
    metric: "%98 daha hızlı",
  },
  {
    icon: Brain,
    title: "Tükenmişliğe Son",
    description: "Tutarlı yayın akışıyla üretim stresini ortadan kaldır. Boş sayfa sendromunu geçmişe bırak.",
    metric: "Sürdürülebilir üretim",
  },
  {
    icon: Zap,
    title: "Doğal, Senin Sesinde",
    description: "RAG temelli kişiselleştirme ile marka sesine uyum. 'AI gibi' görünmeyen, senin gibi yazan içerikler.",
    metric: "Kişiselleştirilmiş AI",
  },
  {
    icon: Users,
    title: "Ekip Senkronizasyonu",
    description: "Metin, edit, thumbnail süreçlerini tek panelde senkronize et. Ajans ekipleri için rol bazlı agent yapısı.",
    metric: "Rol bazlı çalışma",
  },
  {
    icon: Layers,
    title: "Tek Panel, Sıfır Dağınıklık",
    description: "Çoklu araç kullanımına son. Araştırmadan yayına kadar her şey tek akışta, tek platformda.",
    metric: "Uçtan uca akış",
  },
];

export const BenefitsSection = () => {
  return (
    <section className="relative py-24 bg-gradient-section">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block rounded-full bg-accent-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            Faydalar
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            İçerik Üretiminde{" "}
            <span className="text-gradient-primary">Devrim</span>
          </h2>
          <p className="mt-4 text-lg text-text-secondary leading-relaxed">
            Creator'lar ve ajanslar için ölçülebilir sonuçlar.
          </p>
        </motion.div>

        <div className="mt-20 space-y-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-8 shadow-card transition-all duration-300 hover:shadow-card-hover md:flex md:items-center md:gap-8"
            >
              <div className="mb-4 inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground md:mb-0">
                <benefit.icon className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{benefit.description}</p>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="inline-flex rounded-full bg-accent-soft px-4 py-2 text-xs font-bold text-primary">
                  {benefit.metric}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
