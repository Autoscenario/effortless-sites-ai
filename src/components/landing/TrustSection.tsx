import { motion } from "framer-motion";
import { Shield, Eye, Lock } from "lucide-react";

export const TrustSection = () => {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block rounded-full bg-accent-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            Güven & Güvenlik
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            İçeriklerinde{" "}
            <span className="text-gradient-primary">Güven</span>
          </h2>
          <p className="mt-4 text-lg text-text-secondary leading-relaxed">
            Scenario, şeffaflık ve uyumluluk öncelikli bir AI platformudur.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Shield,
              title: "EU AI Act Uyumu",
              description: "Avrupa AI düzenlemelerine uyumlu altyapı ve şeffaf AI kullanım politikaları.",
            },
            {
              icon: Eye,
              title: "İçerik Şeffaflığı",
              description: "FTC ve platform etiketleme kurallarına uyumlu, şeffaf AI destekli içerik üretimi.",
            },
            {
              icon: Lock,
              title: "Veri Güvenliği",
              description: "Verileriniz şifreli olarak saklanır. C2PA uyumluluk yol haritası ile geleceğe hazır altyapı.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-surface p-8 text-center shadow-card transition-all hover:shadow-card-hover"
            >
              <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-success-soft text-success">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
