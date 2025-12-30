import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
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
        <h1 className="text-4xl font-bold mb-8 italic">Kullanım Şartları</h1>
        <p className="text-muted-foreground mb-8">Son güncelleme: 1 Ocak 2026</p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-primary">1. Koşulların Kabulü</h2>
          <p>
            Kelime Curcunası mobil uygulamasını ("Hizmet") kullanarak veya bir hesap oluşturarak, bu
            kullanım şartlarını, topluluk kurallarını ve yasal uyarıları peşinen kabul etmiş
            sayılırsınız.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-primary">
            2. Topluluk Kuralları ve "Curcuna!" Mekanizması
          </h2>
          <p>
            Oyunumuz sosyal etkileşim ve eğlence üzerine kuruludur. Aşağıdaki davranışlar
            hesabınızın geçici veya kalıcı olarak kapatılmasına neden olur:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Diğer oyunculara yönelik hakaret, taciz veya nefret söylemi.</li>
            <li>Sesli iletişimde veya çizim modunda genel ahlaka aykırı içerik paylaşımı.</li>
            <li>Hileli yazılım kullanımı veya oyun ekonomisini manipüle etme girişimleri.</li>
            <li>
              <strong>Curcuna! Kuralı:</strong> Oyun içinde arkadaşlarınızın başlattığı "kural
              ihlali" oylamaları (yasaklı kelime kullanımı vb.) sonucunda puan veya enerji kaybı
              yaşayabilirsiniz. Bu oylamalar oyun mekaniğinin bir parçasıdır.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-primary">
            3. Satın Almalar ve Sanal Varlıklar
          </h2>
          <p>
            Uygulama içindeki Coinler, Enerji ve "Curcuna Plus" abonelikleri dijital içerik
            kapsamındadır.
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Tüm ödemeler Apple App Store ve Google Play Store üzerinden gerçekleştirilir.</li>
            <li>
              Kullanılmış sanal para birimleri veya tüketilmiş enerji paketleri için iade yapılmaz.
            </li>
            <li>
              Hizmetin durdurulması durumunda sanal varlıklar için herhangi bir nakdi tazminat talep
              edilemez.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-primary">
            4. Hizmet Değişiklikleri ve Sorumluluk Sınırı
          </h2>
          <p>
            Hizmet "olduğu gibi" sunulmaktadır. Firebase altyapısından veya internet bağlantısından
            kaynaklanan veri kayıpları, gecikmeler veya WebRTC bağlantı kesintilerinden Kelime
            Curcunası ekibi sorumlu tutulamaz. Ekibimiz, oyun dengesini sağlamak için puanlama ve
            fiyatlandırma sistemini dilediği zaman güncelleme hakkını saklı tutar.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-primary">5. Yürürlük</h2>
          <p>
            Bu sözleşme, Kelime Curcunası mobil uygulaması cihazınızda yüklü olduğu sürece
            yürürlüktedir. Sorularınız için{" "}
            <a
              href="mailto:destek@kelimecurcunasi.com"
              className="text-primary underline font-medium"
            >
              destek@kelimecurcunasi.com
            </a>{" "}
            ile iletişime geçebilirsiniz.
          </p>
        </section>
      </article>
    </main>
  );
}
