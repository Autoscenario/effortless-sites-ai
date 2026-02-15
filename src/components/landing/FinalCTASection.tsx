import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const FinalCTASection = () => {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-border bg-surface p-12 shadow-card-hover md:p-20"
        >
          {/* Decorative elements */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-[80px]" />
          <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-primary/5 blur-[60px]" />

          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              İçerik Üretimini{" "}
              <span className="text-gradient-primary">Dönüştürmeye</span>{" "}
              Hazır mısın?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-text-secondary leading-relaxed">
              Ücretsiz başla, ilk 5 dakikada nişine uygun ilk senaryonu üret. 
              Kredi kartı gerekmez.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#pricing"
                className="group inline-flex items-center gap-2 rounded-2xl bg-primary px-10 py-4 text-base font-semibold text-primary-foreground shadow-primary transition-all hover:brightness-110"
              >
                Ücretsiz Başla
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
