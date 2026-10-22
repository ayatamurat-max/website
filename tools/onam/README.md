# Onam formları

Sitedeki **Belgeler > Onam Formları** bölümünün kaynağı bu klasördür.

- `content/<no>_<işlem>.<dil>.yaml`: formun metni (tr, en, ru, de, fr, bg). Türkçe metin asıl metindir.
- `content/common.<dil>.yaml`: tüm formlarda ortak bölümler (klinik bilgileri, genel riskler, beyanlar, imzalar).
- `forms.py`: form dosyası → sitedeki adres eşlemesi (ör. `14_Botoks` → `/belgeler/onam-formlari/botoks`).
- `build.py`: PDF tasarımı (A4, başlık/altbilgi, imza alanları).
- `merge.py`: muayenehane için tek dosyada baskı seti (TR/EN/BG).

## Bir formu değiştirmek / yeni form eklemek

1. İlgili `content/*.yaml` dosyalarını düzenleyin (yeni formda `forms.py`'ye de bir satır ekleyin).
2. Siteyi güncelleyin:

```bash
pip install weasyprint pypdf pyyaml
python3 tools/onam/publish.py              # tüm diller ve formlar
python3 tools/onam/publish.py tr botoks    # yalnızca bir dil / form
```

Bu komut PDF'leri `public/belgeler/onam/<dil>/` altına, sitede okunan metinleri `src/content/consent/` altına yazar.
Revizyonda `common.*.yaml` içindeki `meta.date` ve `meta.rev` değerlerini güncellemeyi unutmayın.
