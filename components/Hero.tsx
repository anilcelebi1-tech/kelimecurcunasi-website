"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Apple, Play } from "lucide-react";
import { cn } from "./utils";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center text-center max-w-4xl"
      >
        <div className="relative w-32 h-32 md:w-48 md:h-48 mb-8 drop-shadow-2xl">
          <Image
            src="/logo.png"
            alt="Kelime Curcunası Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
          Anlatmak Cesaret,
          <br />
          <span className="text-primary italic">Tahmin Etmek Eğlence!</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
          Arkadaşlarınla sesli iletişim kurarak veya çizerek kelime anlat! Takım bazlı, yüksek
          enerjili ve kahkaha dolu bu curcunaya hemen katıl.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <DownloadButton
            href="#"
            icon={<Apple className="w-6 h-6" />}
            label="App Store'dan İndir"
            sublabel="App Store"
          />
          <DownloadButton
            href="#"
            icon={<Play className="w-6 h-6 fill-current" />}
            label="Google Play'den Alın"
            sublabel="Google Play"
            variant="outline"
          />
        </div>
      </motion.div>

      {/* Social Proof Placeholder / Floating Icons could go here */}
    </section>
  );
}

function DownloadButton({
  href,
  icon,
  label,
  sublabel,
  variant = "primary",
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  sublabel: string;
  variant?: "primary" | "outline";
}) {
  return (
    <a
      href={href}
      className={cn(
        "flex items-center gap-3 px-6 py-3 rounded-2xl transition-all hover:scale-105 active:scale-95",
        variant === "primary"
          ? "bg-white text-black hover:bg-white/90"
          : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
      )}
    >
      {icon}
      <div className="flex flex-col items-start leading-none gap-0.5">
        <span className="text-[10px] uppercase font-bold opacity-60 tracking-wider">
          {sublabel}
        </span>
        <span className="text-base font-bold whitespace-nowrap">
          {label.split(" ").slice(-1)[0]}
        </span>
      </div>
    </a>
  );
}
