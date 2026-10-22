import glob, yaml, pathlib, html
from pypdf import PdfReader, PdfWriter
from weasyprint import HTML
from build import CSS, logo_data_uri
ROOT = pathlib.Path(__file__).parent
LANGS = [("TR", "tr", "Türkçe"), ("EN", "en", "English"), ("BG", "bg", "Български")]
stems = [pathlib.Path(f).name[:-8] for f in sorted(glob.glob(str(ROOT / "content/[0-9]*.tr.yaml")))]
titles = {s: yaml.safe_load(open(ROOT / f"content/{s}.tr.yaml"))["title"] for s in stems}

def make(duplex):
    # first pass: compute start pages
    cover_pages = 2 if duplex else 1
    starts, page = {}, cover_pages + 1
    for L, _, _ in LANGS:
        for s in stems:
            n = len(PdfReader(ROOT / f"out/{L}/{s}_{L}.pdf").pages)
            starts[(L, s)] = (page, n)
            page += n + (n % 2 if duplex else 0)
    rows = "".join(
        f"<tr><td>{s[:2]}</td><td>{html.escape(titles[s])}</td>" + "".join(f"<td class='pg'>{starts[(L, s)][0]}</td>" for L, _, _ in LANGS) + "</tr>"
        for s in stems)
    total = page - 1
    cover = f"""<!doctype html><html lang="tr"><head><meta charset="utf-8"><style>
    @page {{ size: A4; margin: 18mm 18mm; }}
    html {{ font-family: Inter; font-size: 9.5pt; color: #1d2329; }}
    img {{ height: 26mm; }} h1 {{ font-size: 20pt; color: #0A192F; margin: 8mm 0 1mm; }}
    .sub {{ color: #0087A6; font-weight: 600; margin-bottom: 6mm; }}
    table {{ width: 100%; border-collapse: collapse; }} th, td {{ padding: 1.6mm 2mm; border-bottom: .5pt solid #C9D6DC; text-align: left; }}
    th {{ font-size: 7.5pt; text-transform: uppercase; letter-spacing: .6pt; color: #5b6770; }} td.pg, th.pg {{ text-align: center; width: 16mm; }}
    .note {{ margin-top: 6mm; font-size: 8pt; color: #5b6770; border-top: 1.2pt solid #E5A93C; padding-top: 2mm; }}
    </style></head><body><img src="{logo_data_uri()}"/>
    <h1>Aydınlatılmış Onam Formları</h1>
    <div class="sub">Baskı seti · 18 işlem × 3 dil (TR / EN / BG) · Yayın: 22.10.2026 · Rev. 00</div>
    <table><tr><th>No</th><th>İşlem</th>{''.join(f"<th class='pg'>{L}<br/>sayfa</th>" for L,_,_ in LANGS)}</tr>{rows}</table>
    <div class="note">Toplam {total} sayfa. {'Çift taraflı baskı için düzenlenmiştir: her form yeni bir yaprağın ön yüzünden başlar (gerekli yerlere boş sayfa eklenmiştir).' if duplex else 'Tek taraflı baskı içindir.'}
    Sayfa numaraları bu birleşik dosyanın PDF sayfa numaralarıdır.</div></body></html>"""
    cover_pdf = ROOT / "out/_cover.pdf"
    HTML(string=cover).write_pdf(cover_pdf)
    w = PdfWriter()
    for p in PdfReader(cover_pdf).pages: w.add_page(p)
    if duplex: w.add_blank_page(width=595.28, height=841.89)
    for L, _, lname in LANGS:
        parent = w.add_outline_item(f"{L} — {lname}", len(w.pages))
        for s in stems:
            r = PdfReader(ROOT / f"out/{L}/{s}_{L}.pdf")
            w.add_outline_item(f"{s[:2]} {titles[s]}", len(w.pages), parent=parent)
            for p in r.pages: w.add_page(p)
            if duplex and len(r.pages) % 2: w.add_blank_page(width=595.28, height=841.89)
    assert len(w.pages) == total, (len(w.pages), total)
    w.compress_identical_objects(remove_identicals=True, remove_orphans=True)
    out = ROOT / ("Onam_Formlari_Baski_Seti_CIFT_TARAFLI.pdf" if duplex else "Onam_Formlari_Baski_Seti_TEK_TARAFLI.pdf")
    with open(out, "wb") as f: w.write(f)
    cover_pdf.unlink()
    print(out.name, total, "pages", round(out.stat().st_size/1e6,1), "MB")

make(False); make(True)
