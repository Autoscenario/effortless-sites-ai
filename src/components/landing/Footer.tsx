import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

const footerColumns = [
  {
    title: "Ürün",
    items: ["Özellikler", "Fiyatlandırma", "Agent'lar", "Entegrasyonlar"],
  },
  {
    title: "Keşfet",
    items: ["Scenario Nedir?", "SSS", "Eğitimler", "Blog"],
  },
  {
    title: "Yasal",
    items: ["Gizlilik Politikası", "Kullanım Şartları"],
  },
  {
    title: "İletişim",
    items: ["Destek", "İş Ortağı Ol", "Affiliate"],
  },
];

const socials = [
  { icon: Youtube, label: "YouTube" },
  { icon: Instagram, label: "Instagram" },
  { icon: Twitter, label: "Twitter" },
  { icon: Facebook, label: "Facebook" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-surface py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          {/* Brand */}
          <div className="max-w-sm">
            <a href="/" className="flex items-center gap-2">
              <img src={logo} alt="Scenario" className="h-7" />
            </a>
            <p className="mt-5 text-sm leading-relaxed text-text-secondary">
              Scenario, influencer'a özel eğitilmiş motoruyla seni kopyalamadan senin gibi yazan, 
              trend uyumlu ve yayına hazır içerik akışı sunar.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-border text-text-secondary transition-all hover:border-primary hover:bg-accent-soft hover:text-primary"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid flex-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:pl-20">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h3 className="text-sm font-bold text-foreground">{col.title}</h3>
                <ul className="mt-4 space-y-3">
                  {col.items.map((item) => (
                    <li key={item}>
                      <a href="#" className="text-sm text-text-secondary transition-colors hover:text-primary">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-border pt-8 text-center">
          <p className="text-xs text-text-tertiary">
            © 2025 Scenario. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};
