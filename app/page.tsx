import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowToPlay from "@/components/HowToPlay";
import DownloadCTA from "@/components/DownloadCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation - Minimal and floating */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-center">
        <div className="bg-background/50 backdrop-blur-md border border-white/10 px-6 py-3 rounded-2xl flex items-center gap-8">
          <a href="#" className="font-bold tracking-tight hover:text-primary transition-colors">
            KELİME CURCUNASI
          </a>
          <div className="hidden md:flex gap-6 text-sm font-medium text-white/60">
            <a href="#features" className="hover:text-white transition-colors">
              Özellikler
            </a>
            <a href="#nasil-oynanir" className="hover:text-white transition-colors">
              Nasıl Oynanır?
            </a>
          </div>
          <a
            href="#indir"
            className="bg-primary text-primary-foreground px-4 py-1.5 rounded-xl text-sm font-bold hover:opacity-90 transition-opacity"
          >
            Hemen İndir
          </a>
        </div>
      </nav>

      <Hero />

      <div id="features">
        <Features />
      </div>

      <div id="nasil-oynanir">
        <HowToPlay />
      </div>

      <div id="indir">
        <DownloadCTA />
      </div>

      <Footer />
    </main>
  );
}
