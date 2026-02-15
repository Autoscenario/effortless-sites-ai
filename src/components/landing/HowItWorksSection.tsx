import { motion } from "framer-motion";
import { Search, PenTool, Rocket } from "lucide-react";
import workflowIllustration from "@/assets/workflow-illustration.png";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Niş & Trend Analizi",
    description: "AI agent'ın nişine uygun trend konuları otomatik araştırır, rakipleri analiz eder ve en yüksek potansiyelli fikirleri sunar.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "İnsansı Senaryo Üretimi",
    description: "Seçtiğin fikir, senin marka sesinde profesyonel bir senaryoya dönüşür. Hook, akış ve CTA yapısı otomatik oluşturulur.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Yayına Hazır Paket",
    description: "Başlık, açıklama, etiketler, thumbnail ve montaj brief'i tek tıkla hazır. Sadece yayınla.",
  },
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block rounded-full bg-accent-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            Nasıl Çalışır
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            3 Adımda{" "}
            <span className="text-gradient-primary">Fikirden Yayına</span>
          </h2>
          <p className="mt-4 text-lg text-text-secondary leading-relaxed">
            İlk 5 dakikada nişine uygun ilk senaryonu üret.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group relative flex gap-6"
              >
                <div className="flex flex-col items-center">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-primary">
                    <step.icon className="h-6 w-6" />
                  </div>
                  {i < steps.length - 1 && (
                    <div className="mt-3 h-full w-px bg-border" />
                  )}
                </div>
                <div className="pb-8">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">
                    Adım {step.number}
                  </span>
                  <h3 className="mt-2 text-xl font-bold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-3xl bg-primary/5 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-8 shadow-card-hover">
              <img
                src={workflowIllustration}
                alt="Scenario iş akışı: Araştırma → Senaryo → Yayın"
                className="w-full rounded-2xl"
                loading="lazy"
              />
              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                {["Araştır", "Yaz", "Yayınla"].map((label, i) => (
                  <div key={label} className="rounded-xl bg-accent p-3">
                    <p className="text-xs font-bold text-primary">0{i + 1}</p>
                    <p className="text-sm font-semibold text-foreground">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
