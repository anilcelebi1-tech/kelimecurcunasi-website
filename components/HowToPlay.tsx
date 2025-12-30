"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Oda Kur veya Katıl",
    description: "Hızlıca bir odaya gir veya kendi kurallarını belirlediğin özel bir oda oluştur.",
  },
  {
    number: "02",
    title: "Arkadaşlarını Çağır",
    description: "Arkadaşlarını davet et, sesli sohbeti aç ve takımlara ayrılın.",
  },
  {
    number: "03",
    title: "Rolünü Belirle",
    description:
      "Anlatan mısın yoksa tahmin eden mi? Her turda heyecan dolu bir görev seni bekliyor.",
  },
  {
    number: "04",
    title: "Kazanmaya Başla",
    description: "Yasaklara dikkat et, en hızlı tahmini yap ve takımını zafere taşı!",
  },
];

export default function HowToPlay() {
  return (
    <section className="w-full py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 italic tracking-tight underline decoration-primary decoration-4 underline-offset-8">
              NASIL OYNANIR?
            </h2>
            <p className="text-muted-foreground text-lg">
              Sadece 4 basit adımda curcunaya hazır ol. Karmaşık kurallar yok, sadece eğlence var!
            </p>
          </div>
          <div className="hidden lg:block">
            <div className="px-6 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium">
              Saniyeler içinde başla ✨
            </div>
          </div>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-[60px] left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="flex flex-col gap-6"
            >
              <div className="text-6xl font-black text-white/5 select-none leading-none">
                {step.number}
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
