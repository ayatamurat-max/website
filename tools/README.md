# Blog araçları

- `pages2txt.py` — Apple Pages (.pages) senaryo dosyalarından metni çıkarır (ek kütüphane gerekmez).
  `python3 -I tools/pages2txt.py "dosya.pages"`
- `blog_covers_example.py` — Blog kapaklarının görsel sistemi (lacivert/altın/turkuaz, çizgisel). Yeni kapak çizerken örnek alın.
  `python3 tools/blog_covers_example.py cikti_klasoru` → SVG üretir. PNG/JPG için headless Chromium ile ekran görüntüsü alınır,
  1200x675 JPG olarak `public/blog/` altına konur (sosyal medya paylaşım görseli).
- Yazılar: `src/content/blog/posts/*.ts`, kayıt: `src/content/blog/index.ts`
- İşlenen senaryolar: `src/content/blog/sources.json`
