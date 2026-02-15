import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Elif Yılmaz",
    role: "YouTube İçerik Üreticisi",
    quote: "Scenario ile senaryo yazmak tamamen değişti. Artık saatler yerine dakikalar içinde yayına hazır içerikler üretebiliyorum. Boş sayfa stresi tarihe karıştı.",
    rating: 5,
  },
  {
    name: "Ahmet Kaya",
    role: "Dijital Ajans Yöneticisi",
    quote: "Ajans olarak 15+ müşteriye hizmet veriyoruz. Scenario'nun AI agent sistemi bizim için adeta bir ekip üyesi oldu. Ekip verimliliğimiz %200 arttı.",
    rating: 5,
  },
  {
    name: "Zeynep Arslan",
    role: "Instagram Influencer",
    quote: "Seyahat içerikleri oluştururken inanılmaz zaman kazandırıyor. Fikirler, başlıklar, thumbnail… Hepsi tek yerde ve hepsi benim sesimde!",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="relative py-24 bg-gradient-section">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block rounded-full bg-accent-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            Referanslar
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Creator'ların{" "}
            <span className="text-gradient-primary">Tercihi</span>
          </h2>
          <p className="mt-4 text-lg text-text-secondary leading-relaxed">
            İçerik üreticileri Scenario ile nasıl dönüşüm yaşadı?
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex flex-col gap-6 rounded-2xl border bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover ${
                i === 0 ? "border-primary shadow-card-hover" : "border-border shadow-card"
              }`}
            >
              {/* Rating */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="flex-1 text-sm leading-relaxed text-text-secondary">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-border pt-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft text-sm font-bold text-primary">
                  {t.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-text-secondary">{t.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
