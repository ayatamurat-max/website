# Hasta yorumları (Google + Doktor Takvimi)

Yorumlar **yalnızca yabancı dil sayfalarında** (en, ru, de, fr, bg) görünür. Türkçe sayfalarda
hiçbir yorum, puan ya da bağlantı yoktur; `/reviews` Türkçede 404 döner (sağlık tanıtım mevzuatı).
Kural tek yerde: `src/content/reviews/index.ts` → `reviewsAllowed()`.

## Nerede görünür
| Yer | Bileşen |
|---|---|
| Ana sayfa ve Uluslararası Hastalar hero'su, butonların altı | `ReviewsBadge variant="hero"` |
| Ana sayfa, "Hakkımda" bölümünden sonra | `ReviewsSection soft` |
| Uluslararası Hastalar, SSS'den önce | `ReviewsSection` |
| Rinoplasti ve tüm işlem sayfaları, SSS'den sonra | `ReviewsSection tag="…"` (önce o işlemin yorumları) |
| İletişim sayfası başlığı | `ReviewsBadge` |
| Tüm yorumlar, filtreli | `/[locale]/reviews` (footer'dan bağlantı) |

## Otomatik güncelleme
`.github/workflows/reviews.yml` her gün 06:17'de (TR) `node tools/reviews/update-reviews.mjs` çalıştırır:
1. Google Business Profile API'den yorumları ve puanı çeker.
2. `src/content/reviews/doktortakvimi.json` dosyasındaki yorumları okur.
3. Yeni ya da değişen her yorumu **bir kez** Claude API ile 5 dile çevirir, işlem etiketi atar.
4. `reviews.json` değiştiyse main'e işler → Vercel siteyi yeniden yayınlar.

Çevirisi henüz hazır olmayan yorum o dilde gösterilmez (yabancı sayfada Türkçe metin çıkmaz).
İş, GitHub'da Actions → "Yorumları güncelle" → Run workflow ile elle de çalıştırılabilir.

## Gerekli GitHub Secrets (Settings → Secrets and variables → Actions)
- `ANTHROPIC_API_KEY` — çeviri için (console.anthropic.com).
- `GBP_CLIENT_ID`, `GBP_CLIENT_SECRET`, `GBP_REFRESH_TOKEN` — Google Cloud'da OAuth istemcisi,
  profil sahibi hesapla `https://www.googleapis.com/auth/business.manage` kapsamında alınmış yenileme jetonu.
- `GBP_ACCOUNT_ID`, `GBP_LOCATION_ID` — Business Profile hesap ve konum numaraları.
  Not: Google Business Profile API'ye erişim için Google'a bir kez başvuru yapılır (onay birkaç gün sürebilir).

Secrets yoksa ilgili adım atlanır, site mevcut veriyle çalışmaya devam eder.

## Doktor Takvimi yorumu ekleme
Doktor Takvimi'nin herkese açık API'si yok. `src/content/reviews/doktortakvimi.json` içine ekleyin:
```json
{ "id": "2026-10-27-1", "author": "Ayşe Yılmaz", "rating": 5, "date": "2026-10-27", "text": "Yorum metni, olduğu gibi" }
```
`rating` ve `count` alanlarını profildeki toplam puan/yorum sayısıyla güncelleyin. Dosya main'e
girince iş kendiliğinden çalışır. Ad, sitede "Ayşe Y." olarak kısaltılır.

## Yorum gizleme ve ayarlar
`src/content/reviews/settings.json`
- `hidden`: gösterilmeyecek yorum id'leri (ör. kişisel bilgi içeren bir yorum).
- `featuredMinRating`: ana sayfa ve işlem sayfalarındaki kartlar için en düşük yıldız (tam liste hepsini gösterir).
- `links.google`: Google yorumlarının bağlantısı (yorumlar sayfasındaki "Google'da oku").
