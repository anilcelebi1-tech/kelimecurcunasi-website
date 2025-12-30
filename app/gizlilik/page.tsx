import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen py-24 px-6 max-w-4xl mx-auto">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-white mb-12 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Ana Sayfaya Dön
      </Link>

      <article className="prose prose-invert prose-yellow max-w-none">
        <h1 className="text-4xl font-bold mb-8">Gizlilik Politikası</h1>
        <p className="text-muted-foreground mb-8">Son güncelleme: 30 Aralık 2024</p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">1. Giriş</h2>
          <p>
            Kelime Curcunası olarak gizliliğinize önem veriyoruz. Bu politika, uygulamamızı ve web
            sitemizi kullanırken hangi verileri topladığımızı ve bunları nasıl kullandığımızı
            açıklar.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">2. Toplanan Veriler</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Profil Bilgileri:</strong> Seçtiğiniz kullanıcı adı ve avatar.
            </li>
            <li>
              <strong>Oyun Verileri:</strong> Seviye, kazanılan XP, başarımlar ve oyun
              istatistikleri.
            </li>
            <li>
              <strong>Ses Verileri:</strong> Oyun sırasında sesli iletişim için mikrofon erişimi
              kullanılır, ancak bu veriler sunucularımızda kalıcı olarak depolanmaz.
            </li>
            <li>
              <strong>Çizim Verileri:</strong> Çizim modunda oluşturduğunuz çizimler sadece oyun
              süresince paylaşılır.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">3. Verilerin Kullanımı</h2>
          <p>
            Topladığımız verileri sadece oyun deneyiminizi iyileştirmek, liderlik tablolarını
            yönetmek ve teknik destek sağlamak amacıyla kullanıyoruz.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">4. Üçüncü Taraf Servisler</h2>
          <p>
            Hizmetimizi sunmak için Google Firebase (altyapı), Google AdMob (reklam) ve RevenueCat
            (ödeme yönetimi) servislerini kullanıyoruz.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">5. İletişim</h2>
          <p>
            Gizlilikle ilgili sorularınız için{" "}
            <a href="mailto:destek@kelimecurcunasi.com" className="text-primary underline">
              destek@kelimecurcunasi.com
            </a>{" "}
            adresinden bize ulaşabilirsiniz.
          </p>
        </section>
      </article>
    </main>
  );
}
