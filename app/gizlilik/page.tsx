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
        <h1 className="text-4xl font-bold mb-8 italic">Gizlilik Politikası</h1>
        <p className="text-muted-foreground mb-8">Son güncelleme: 1 Ocak 2025</p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-primary">1. Veri Sorumlusu ve Giriş</h2>
          <p>
            Kelime Curcunası ("Uygulama"), kullanıcılarının gizliliğine en üst düzeyde önem verir.
            Bu metin, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) ve Genel Veri Koruma
            Yönetmeliği (GDPR) prensipleri çerçevesinde, hangi verilerin ne amaçla işlendiğini
            açıklar.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-primary">
            2. İşlenen Veri Türleri ve Yöntemleri
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-bold mb-2">A. Hesap ve Profil Bilgileri</h3>
              <p>
                Firebase Authentication üzerinden sağlanan anonim veya kullanıcı tarafından
                belirlenen kullanıcı adı ve seçilen avatar bilgileri. Bu veriler Firestore
                veritabanımızda güvenli bir şekilde saklanır.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">B. Ses ve Mikrofon Verileri (WebRTC)</h3>
              <p>
                Oyunun "Anlatma" modunda sesli iletişim için mikrofon erişimi kullanılır. Ses
                verileri, WebRTC teknolojisi ile anlık olarak diğer oyunculara iletilir.{" "}
                <strong>Ses verileri sunucularımızda kesinlikle kaydedilmez ve depolanmaz.</strong>
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">C. Oyun ve Çizim İstatistikleri</h3>
              <p>
                Oyun içindeki çizim verileri, kazanılan XP, seviye bilgisi, en iyiler listesi ve
                oyun geçmişi, deneyimi iyileştirmek ve liderlik tablolarını yönetmek amacıyla
                otomatik olarak toplanır.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-primary">
            3. Veri Paylaşımı ve Üçüncü Taraflar
          </h2>
          <p>
            Verileriniz, yalnızca aşağıdaki amaçlar doğrultusunda güvenilir iş ortaklarımızla
            paylaşılır:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>
              <strong>Google Firebase:</strong> Altyapı, veritabanı ve kimlik doğrulama hizmetleri
              için.
            </li>
            <li>
              <strong>RevenueCat:</strong> Premium abonelikler ve uygulama içi satın alım (IAP)
              doğrulamaları için.
            </li>
            <li>
              <strong>Google AdMob:</strong> Tamamen anonimleştirilmiş, uygulama içi reklam
              gösterimleri ve performans ölçümü için.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-primary">
            4. Veri Güvenliği ve Kullanıcı Hakları
          </h2>
          <p>
            Kullanıcılar, KVKK 11. madde uyarınca verilerinin silinmesini (Hesap Silme),
            güncellenmesini veya işlenip işlenmediğini öğrenme hakkına sahiptir. Uygulama içindeki
            "Hesabı Sil" seçeneği ile tüm profil verilerinizi anında sistemden kaldırabilirsiniz.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-primary">5. İletişim</h2>
          <p>
            Her türlü gizlilik sorunuz için resmi e-posta adresimiz:{" "}
            <a
              href="mailto:destek@kelimecurcunasi.com"
              className="text-primary underline font-medium"
            >
              destek@kelimecurcunasi.com
            </a>
          </p>
        </section>
      </article>
    </main>
  );
}
