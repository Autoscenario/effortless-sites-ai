import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Ücretsiz",
    period: "",
    highlighted: false,
    description: "Scenario'yu keşfetmek için",
    features: [
      "Fikir üretimi",
      "Temel senaryo oluşturma",
      "Başlık & açıklama aracı",
      "Tüm cihazlarda çalışır",
    ],
    cta: "Ücretsiz Başla",
  },
  {
    name: "Creator",
    price: "$20",
    period: "/ ay",
    highlighted: false,
    description: "Bireysel creator'lar için",
    features: [
      "Tüm Starter özellikleri",
      "RAG destekli gelişmiş senaryo",
      "Thumbnail AI",
      "Montaj önerileri",
    ],
    cta: "Creator'a Geç",
  },
  {
    name: "Premium",
    price: "$32",
    period: "/ ay",
    highlighted: true,
    description: "Pro creator ve ajanslar için",
    features: [
      "Tüm Creator özellikleri",
      "Sponsorluk e-posta aracı",
      "Yeni özelliklere erken erişim",
      "Pro hız modu",
      "Öncelikli destek",
    ],
    cta: "Premium'a Geç",
  },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="relative py-24 bg-gradient-section">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block rounded-full bg-accent-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            Fiyatlandırma
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Sana Uygun{" "}
            <span className="text-gradient-primary">Planı Seç</span>
          </h2>
          <p className="mt-4 text-lg text-text-secondary leading-relaxed">
            Ücretsiz başla, büyüdükçe yükselt. Taahhüt yok.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1 ${
                plan.highlighted
                  ? "border-primary bg-surface shadow-primary"
                  : "border-border bg-surface shadow-card hover:shadow-card-hover"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">
                  En Popüler
                </div>
              )}

              <div>
                <h3 className="text-lg font-bold text-foreground">{plan.name}</h3>
                <p className="mt-1 text-sm text-text-secondary">{plan.description}</p>
              </div>

              <div className="mt-6">
                <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                {plan.period && (
                  <span className="text-base text-text-secondary">{plan.period}</span>
                )}
              </div>

              <ul className="mt-8 flex-1 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success-soft">
                      <Check className="h-3 w-3 text-success" />
                    </span>
                    <span className="text-sm text-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full rounded-xl py-3.5 text-sm font-semibold transition-all ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground shadow-primary hover:brightness-110"
                    : "border border-border bg-surface text-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
