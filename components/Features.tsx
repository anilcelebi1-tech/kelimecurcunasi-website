"use client";

import { motion } from "framer-motion";
import { Mic, Palette, Users2, Zap, Crown, BarChart3 } from "lucide-react";

const features = [
  {
    icon: <Mic className="w-8 h-8 text-primary" />,
    title: "Sesli Anlatım",
    description: "Yasaklı kelimeleri kullanmadan, sadece sesini kullanarak takımına anlat.",
  },
  {
    icon: <Palette className="w-8 h-8 text-secondary" />,
    title: "Çizim Modu",
    description: "Kelimeleri dijital tuval üzerine çizerek anlat, sessizlikte eğlenceyi yakala.",
  },
  {
    icon: <Users2 className="w-8 h-8 text-accent" />,
    title: "Takım Oyunu",
    description: "Kırmızı ve Mavi takımlar halinde mücadele et, stratejini belirle.",
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    title: "Kısa Turlar",
    description: "10-25 dakikalık hızlı oyunlarla molalarına renk kat.",
  },
  {
    icon: <Crown className="w-8 h-8 text-primary" />,
    title: "Curcuna Plus",
    description: "Premium avatarlar, sınırsız enerji ve özel odalarla ayrıcalıklı ol.",
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-indigo-400" />,
    title: "İstatistikler",
    description: "Seviye atla, başarımları topla ve liderlik tablosunda yüksel.",
  },
];

export default function Features() {
  return (
    <section className="w-full py-24 px-6 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Neler Var?</h2>
          <p className="text-muted-foreground text-lg">
            Kelime Curcunası'nı farklı kılan özellikler.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-card border border-white/5 hover:border-white/10 transition-colors"
            >
              <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
