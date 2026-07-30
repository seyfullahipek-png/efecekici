# Kocalar Yol Yardım Web Sitesi

## İşletme bilgileri
- İşletme: Kocalar Yol Yardım
- Telefon: 0535 243 70 16
- Telefon bağlantısı: tel:+905352437016
- WhatsApp: https://wa.me/905352437016
- Hizmet alanı: Ankara geneli

## Kurulum
1. ZIP dosyasını açın.
2. Tüm dosyaları hosting ana dizinine (public_html) yükleyin.
3. SSL aktif olduğundan emin olun.
4. `kocalaryolyardim.example` ifadesini satın aldığınız gerçek alan adıyla tüm dosyalarda değiştirin.
5. Google Search Console'a `sitemap.xml` gönderin.
6. Google İşletme Profili harita bağlantısını `iletisim.html` içindeki harita alanına ekleyin.

## Önemli canlı yayın kontrolleri
- Bu projede sahte adres, sahte yorum ve sahte puan kullanılmadı.
- Canonical, Open Graph ve sitemap için geçici `.example` alan adı kullanıldı. Gerçek domain mutlaka değiştirilmelidir.
- KVKK ve diğer yasal metinler genel taslaktır; resmi işletme bilgileri eklendikten sonra hukuk danışmanı kontrolü önerilir.
- Google Tag Manager / Analytics / Ads kodları için `<head>` içinde açıklama satırı bırakıldı.
- Telefon, WhatsApp ve form tıklamaları `dataLayer` olaylarına hazırdır: `phone_click`, `whatsapp_click`, `quote_request`, `location_share_click`.

## Dosya yapısı
- Ana sayfalar: index, hizmetler, bölgeler, fiyatlar, blog, hakkımızda, iletişim
- 6 detaylı hizmet sayfası
- 10 Ankara ilçe landing page'i
- 12 SEO blog yazısı
- Yasal sayfalar, 404, robots.txt, sitemap.xml, manifest.json, .htaccess
- WebP görseller ve responsive `srcset`

## Performans notu
Bootstrap ve Bootstrap Icons CDN üzerinden yüklenir. En yüksek PageSpeed sonucu için bu dosyalar daha sonra yerel olarak barındırılabilir. Skorlar hosting, CDN, önbellek ve gerçek domain ayarlarına göre değişir; 90/100 veya 100/100 kesin olarak garanti edilemez.
