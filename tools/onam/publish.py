#!/usr/bin/env python3
"""Onam formlarını siteye aktarır.

  content/<stem>.<lang>.yaml  ->  public/belgeler/onam/<lang>/<slug>.pdf   (yazdırılabilir form)
                              ->  src/content/consent/<lang>/<slug>.json   (sitede okunan metin)
                              ->  src/content/consent/index.json           (liste, başlıklar, PDF bilgisi)

Kullanım:
  python3 tools/onam/publish.py              # tüm diller, tüm formlar
  python3 tools/onam/publish.py tr botoks    # sadece verilen dil(ler) / form(lar)
  python3 tools/onam/publish.py --no-pdf     # sadece metinleri güncelle
"""
import json, sys, pathlib, yaml
from pypdf import PdfReader
from weasyprint import HTML

from build import CONTENT, ROOT, LANGS, render
from forms import SLUGS

SITE = ROOT.parent.parent
PDF_DIR = SITE / "public" / "belgeler" / "onam"
JSON_DIR = SITE / "src" / "content" / "consent"

# Sitede gösterilmeyen (yalnızca kâğıt formda doldurulan) alanlar
PROC_DROP = {"specific_fields"}
COMMON_KEEP = [
    "meta", "clinic", "labels", "sections", "intro", "refusal_right", "before_common", "risk_intro",
    "risk_tiers", "general_risks_surgical", "general_risks_office", "risk_outro", "emergency_call",
    "lifestyle_common", "intraop", "photo_intro", "photo_options", "kvkk", "declarations",
    "declarations_aesthetic", "decision_options", "minor_text", "final_note",
]


def write_json(path, data):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(data, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")


def main():
    args = sys.argv[1:]
    make_pdf = "--no-pdf" not in args
    args = [a for a in args if a != "--no-pdf"]
    langs = [a for a in args if a in LANGS] or LANGS
    only = [a for a in args if a not in LANGS] or None

    index_path = JSON_DIR / "index.json"
    index = json.loads(index_path.read_text()) if index_path.exists() else {"forms": {}}

    for lang in langs:
        cp = CONTENT / f"common.{lang}.yaml"
        if not cp.exists():
            print("MISSING", cp.name)
            continue
        common = yaml.safe_load(cp.read_text())
        write_json(JSON_DIR / lang / "common.json", {k: common[k] for k in COMMON_KEEP})

        for stem, slug in SLUGS.items():
            if only and slug not in only and stem not in only:
                continue
            p = CONTENT / f"{stem}.{lang}.yaml"
            if not p.exists():
                print("MISSING", p.name)
                continue
            proc = yaml.safe_load(p.read_text())
            write_json(JSON_DIR / lang / f"{slug}.json", {k: v for k, v in proc.items() if k not in PROC_DROP})

            entry = index["forms"].setdefault(slug, {"code": proc["code"], "titles": {}, "pdf": {}})
            entry.update(code=proc["code"], type=proc.get("type", "surgical"), aesthetic=bool(proc.get("aesthetic")))
            entry["titles"][lang] = proc["title"]

            if make_pdf:
                target = PDF_DIR / lang / f"{slug}.pdf"
                target.parent.mkdir(parents=True, exist_ok=True)
                HTML(string=render(proc, common, lang), base_url=str(ROOT)).write_pdf(target)
                entry["pdf"][lang] = {
                    "pages": len(PdfReader(target).pages),
                    "kb": round(target.stat().st_size / 1024),
                }
                print("OK", lang, slug, entry["pdf"][lang])
            else:
                print("OK", lang, slug, "(metin)")

    # Kaynaktaki sıraya göre (01..18) sırala
    order = list(SLUGS.values())
    index["forms"] = {s: index["forms"][s] for s in order if s in index["forms"]}
    index["date"] = yaml.safe_load((CONTENT / "common.tr.yaml").read_text())["meta"]["date"]
    write_json(index_path, index)
    write_data_module()


def write_data_module():
    """Tüm metinleri statik import eden modül: sunucuda okunur, tarayıcıya gönderilmez."""
    imports, langs_out = [], []
    for lang in LANGS:
        d = JSON_DIR / lang
        if not (d / "common.json").exists():
            continue
        v = lambda s: f"{lang}_{s.replace('-', '_')}"
        imports.append(f"import {v('common')} from './{lang}/common.json';")
        forms = []
        for slug in SLUGS.values():
            if (d / f"{slug}.json").exists():
                imports.append(f"import {v(slug)} from './{lang}/{slug}.json';")
                forms.append(f"    '{slug}': {v(slug)},")
        langs_out.append(f"  {lang}: {{\n   common: {v('common')},\n   forms: {{\n" + "\n".join(forms) + "\n   },\n  },")
    body = (
        "// Bu dosya tools/onam/publish.py tarafından üretilir; elle düzenlemeyin.\n"
        + "\n".join(imports)
        + "\n\nexport const RAW = {\n" + "\n".join(langs_out) + "\n};\n"
    )
    (JSON_DIR / "data.generated.ts").write_text(body, encoding="utf-8")


if __name__ == "__main__":
    main()
