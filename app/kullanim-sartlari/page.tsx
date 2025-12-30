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
        <h1 className="text-4xl font-bold mb-8">Kullanım Şartları</h1>
        <p className="text-muted-foreground mb-8">Son güncelleme: 30 Aralık 2024</p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">1. Koşulların Kabulü</h2>
          <p>
            Kelime Curcunası uygulamasını indirerek veya web sitemizi kullanarak bu kullanım
            şartlarını kabul etmiş sayılırsınız.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">2. Uygun Kullanım</h2>
          <p>
            Oyun sırasında diğer oyunculara karşı saygılı olmanız beklenir. Taciz, küfür, uygunsuz
            kullanıcı adları veya hile yapılması durumunda hesabınız geçici veya kalıcı olarak
            durdurulabilir.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">3. Fikri Mülkiyet</h2>
          <p>
            Kelime Curcunası markası, tasarımı ve tüm içeriği Kelime Curcunası ekibine aittir.
            İzinsiz kopyalanamaz veya dağıtılamaz.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">4. Sorumluluk Sınırı</h2>
          <p>
            Oyunumuz "olduğu gibi" sunulmaktadır. Teknik aksaklıklar veya veri kayıplarından
            kaynaklanabilecek durumlarda sorumluluk kabul edilmemektedir, ancak en iyi deneyimi
            sunmak için çalışıyoruz.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">5. Değişiklikler</h2>
          <p>
            Bu şartları dilediğimiz zaman güncelleme hakkını saklı tutarız. Önemli değişiklikleri
            uygulama içinde bildireceğiz.
          </p>
        </section>
      </article>
    </main>
  );
}
