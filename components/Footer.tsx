import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-16 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/icon.png"
              alt="Kelime Curcunası Icon"
              width={40}
              height={40}
              className="rounded-xl"
            />
            <span className="text-xl font-bold tracking-tight">KELİME CURCUNASI</span>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs text-center md:text-left">
            Eğlenceyi sesinde ve çizimlerinde hisset. Arkadaşlarınla en keyifli anları paylaş.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
          <div className="flex flex-col items-center md:items-start gap-3">
            <h4 className="font-bold text-sm uppercase tracking-widest text-white/40">Yasal</h4>
            <Link
              href="/gizlilik"
              className="text-muted-foreground hover:text-white transition-colors"
            >
              Gizlilik Politikası
            </Link>
            <Link
              href="/kullanim-sartlari"
              className="text-muted-foreground hover:text-white transition-colors"
            >
              Kullanım Şartları
            </Link>
          </div>

          <div className="flex flex-col items-center md:items-start gap-3">
            <h4 className="font-bold text-sm uppercase tracking-widest text-white/40">Destek</h4>
            <Link
              href="mailto:destek@kelimecurcunasi.com"
              className="text-muted-foreground hover:text-white transition-colors"
            >
              Bize Ulaşın
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-16 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Kelime Curcunası. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
