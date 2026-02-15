import { motion } from "framer-motion";
import { Search, PenTool, Type, Image, Film, Mail } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Trend Araştırma Agent'ı",
    description: "Nişine özel trend konuları otomatik bul, rakip içerikleri analiz et ve viral potansiyeli yüksek fikirler keşfet.",
  },
  {
    icon: PenTool,
    title: "İnsansı Senaryo Motoru",
    description: "RAG destekli kişiselleştirme ile marka sesine uyum sağlayan, hook-akış-CTA yapısında profesyonel senaryolar.",
  },
  {
    icon: Type,
    title: "Başlık & Açıklama Optimizasyonu",
    description: "Algoritma uyumlu, tıklanma oranını artıran başlık, açıklama ve etiket önerileri tek tıkla.",
  },
  {
    icon: Image,
    title: "Thumbnail AI Üretimi",
    description: "Dikkat çekici, profesyonel thumbnail'lar otomatik oluştur. Metin, renk ve kompozisyon AI tarafından optimize edilir.",
  },
  {
    icon: Film,
    title: "Montaj Yönlendirmeleri",
    description: "Yaratıcı kurgu fikirleri, B-roll önerileri ve sahne geçişleri ile editörüne hazır brief oluştur.",
  },
  {
    icon: Mail,
    title: "Sponsorluk E-posta Aracı",
    description: "Markalarla işbirliği için profesyonel, kişiselleştirilmiş sponsorluk teklifleri otomatik oluştur.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block rounded-full bg-accent-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            Özellikler
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            6 Akıllı AI Agent,{" "}
            <span className="text-gradient-primary">Tek Platform</span>
          </h2>
          <p className="mt-4 text-lg text-text-secondary leading-relaxed">
            Fikirden yayına kadar tüm içerik üretim sürecini tek panelde yönet.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl border border-border bg-surface p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-foreground">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
