"use client";

import { motion } from "framer-motion";
import { Apple, Play } from "lucide-react";

export default function DownloadCTA() {
  return (
    <section className="w-full py-32 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto p-12 md:p-24 rounded-[3rem] bg-gradient-to-br from-secondary/40 via-secondary/10 to-accent/20 border border-white/10 text-center relative overflow-hidden"
      >
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -z-10" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-[80px] -z-10" />

        <h2 className="text-4xl md:text-6xl font-bold mb-8">Eğlenceye Hazır Mısın?</h2>
        <p className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto">
          Hemen ücretsiz indir, arkadaşlarınla takımları kur ve kelimelerin dünyasında yarışmaya
          başla!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="#"
            className="group flex items-center gap-4 bg-white text-black px-10 py-5 rounded-3xl font-bold text-xl transition-all hover:bg-white/90 hover:scale-105 active:scale-95 shadow-xl shadow-white/5"
          >
            <Apple className="w-8 h-8" />
            <span>App Store</span>
          </a>
          <a
            href="#"
            className="group flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-3xl font-bold text-xl transition-all hover:bg-white/20 hover:scale-105 active:scale-95"
          >
            <Play className="w-8 h-8 fill-current" />
            <span>Google Play</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
