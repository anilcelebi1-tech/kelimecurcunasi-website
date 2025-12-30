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
            className="group flex items-center gap-4 bg-black text-white px-10 py-5 rounded-3xl font-bold transition-all hover:scale-105 active:scale-95 shadow-2xl border border-white/10"
          >
            <svg viewBox="0 0 384 512" className="w-8 h-8 fill-current">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
            </svg>
            <div className="flex flex-col items-start leading-none">
              <span className="text-xs uppercase opacity-70 mb-1">App Store'dan</span>
              <span className="text-2xl">İndirin</span>
            </div>
          </a>
          <a
            href="#"
            className="group flex items-center gap-4 bg-black text-white px-10 py-5 rounded-3xl font-bold transition-all hover:scale-105 active:scale-95 shadow-2xl border border-white/10"
          >
            <svg viewBox="0 0 512 512" className="w-8 h-8 fill-current">
              <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256.6L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
            </svg>
            <div className="flex flex-col items-start leading-none">
              <span className="text-xs uppercase opacity-70 mb-1">Google Play'den</span>
              <span className="text-2xl">Alın</span>
            </div>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
