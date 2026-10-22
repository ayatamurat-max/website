#!/usr/bin/env python3
"""Aydınlatılmış onam formu üretici: content/*.yaml -> out/<lang>/*.pdf"""
import sys, re, html, base64, pathlib, yaml
from weasyprint import HTML

ROOT = pathlib.Path(__file__).parent
CONTENT = ROOT / "content"
OUT = ROOT / "out"
LANGS = ["tr", "en", "ru", "de", "fr", "bg"]
LANG_SUFFIX = {l: l.upper() for l in LANGS}


def logo_data_uri():
    for name in ["logo.png", "logo.svg", "logo.jpg", "logo_placeholder.svg"]:
        p = ROOT / "assets" / name
        if p.exists():
            mime = {"png": "image/png", "svg": "image/svg+xml", "jpg": "image/jpeg"}[p.suffix[1:]]
            return f"data:{mime};base64," + base64.b64encode(p.read_bytes()).decode()


def md(s):
    """Minimal inline markup: **bold**, *italic*; HTML-escaped."""
    s = html.escape(str(s).strip())
    s = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", s)
    s = re.sub(r"(?<!\*)\*(?!\*)(.+?)\*", r"<em>\1</em>", s)
    return s


def paras(items):
    if items is None:
        return ""
    if isinstance(items, str):
        items = [items]
    return "".join(f"<p>{md(p)}</p>" for p in items)


def bullets(items, cls=""):
    if not items:
        return ""
    return f'<ul class="{cls}">' + "".join(f"<li>{md(i)}</li>" for i in items) + "</ul>"


def checks(items):
    return '<ul class="checks">' + "".join(f'<li><span class="box"></span>{md(i)}</li>' for i in items) + "</ul>"


def field_row(label, options=None, blank=True, wide=False):
    opts = ""
    if options:
        opts = " ".join(f'<span class="opt"><span class="box"></span>{md(o)}</span>' for o in options)
    line = '<span class="line"></span>' if blank else ""
    return f'<div class="frow{" wide" if wide else ""}"><span class="flabel">{md(label)}</span>{opts}{line}</div>'


def render(proc, c, lang):
    L = c["labels"]
    cl = c["clinic"]
    is_surg = proc.get("type", "surgical") == "surgical"
    doc_no = f"ONM-{proc['code']}-{LANG_SUFFIX[lang]}"

    header = f"""
    <div id="hdr">
      <div class="hl">
        <div class="brand">
          <img src="{logo_data_uri()}" class="logo"/>
          <div class="btitle">{md(cl['title'])}</div>
        </div>
      </div>
      <div class="hr">
        <div class="cname">{md(cl['name'])}</div>
        <div>{md(cl['address'])}</div>
        <div>{md(L['tel'])}: {md(cl['tel'])} &nbsp;·&nbsp; WhatsApp: {md(cl['whatsapp'])}</div>
        <div>{md(cl['email'])} &nbsp;·&nbsp; {md(cl['web'])}</div>
      </div>
    </div>
    <div id="ftr">
      <div class="fl">{md(L['doc_no'])}: {doc_no} &nbsp;·&nbsp; {md(L['pub_date'])}: {c['meta']['date']} &nbsp;·&nbsp; {md(L['rev'])}: {c['meta']['rev']}</div>
      <div class="fc">{md(L['initials_patient'])}: ______ &nbsp; {md(L['initials_doctor'])}: ______</div>
      <div class="fr">{md(L['page'])} <span class="pn"></span> / <span class="pt"></span></div>
    </div>"""

    # --- Title & intro
    out = [header]
    out.append(f"""
    <div class="titlebar">
      <div class="kicker">{md(L['doc_title'])}</div>
      <h1>{md(proc['title'])}</h1>
      {f'<div class="alt">{md(proc["alt_name"])}</div>' if proc.get('alt_name') else ''}
    </div>""")
    out.append(f'<div class="intro">{paras(c["intro"])}</div>')

    # --- Patient / procedure info
    def cell(lbl):
        return f'<td class="fl">{md(lbl)}</td><td class="ln"></td>'
    pfl = [f for f in c["patient_fields"] if len(f) <= 40]
    long_pf = [f for f in c["patient_fields"] if len(f) > 40]
    trs = []
    for i in range(0, len(pfl), 2):
        a = pfl[i]; b = pfl[i + 1] if i + 1 < len(pfl) else None
        trs.append(f'<tr>{cell(a)}{cell(b) if b else "<td></td><td></td>"}</tr>')
    ptab = f'<table class="ptab"><colgroup><col style="width:23%"/><col style="width:27%"/><col style="width:23%"/><col style="width:27%"/></colgroup>{"".join(trs)}</table>'
    trs = [f'<tr><td class="fl">{md(f)}</td><td class="ln"></td></tr>' for f in long_pf]
    trs.append(f'<tr><td class="fl" colspan="2" style="white-space:normal">{md(L["performing_doctor"])}: <strong>{md(cl["doctor"])}</strong></td></tr>')
    trs.append(f'<tr><td class="fl">{md(L["place"] if is_surg else L["place_office"])}</td><td class="ln" ></td></tr>')
    for f in proc.get("specific_fields", []):
        opts = " ".join(f'<span class="opt"><span class="box"></span>{md(o)}</span>' for o in (f.get("options") or []))
        if f.get("options") and f.get("blank", True):
            opts += ' <span class="opt">______________</span>'
        if f.get("options"):
            trs.append(f'<tr><td class="fl">{md(f["label"])}</td><td class="op" >{opts}</td></tr>')
        else:
            trs.append(f'<tr><td class="fl">{md(f["label"])}</td><td class="ln" ></td></tr>')
    rows = [ptab + f'<table class="ftab"><colgroup><col style="width:33%"/><col style="width:67%"/></colgroup>{"".join(trs)}</table>']
    out.append(f'<div class="box infobox"><div class="boxtitle">{md(L["patient_info"])}</div>{"".join(rows)}</div>')

    n = 0

    def sec(title, body, cls=""):
        nonlocal n
        n += 1
        return f'<section class="{cls}"><h2><span class="num">{n}</span>{md(title)}</h2>{body}</section>'

    S = c["sections"]
    out.append(sec(S["about"], paras(proc["about"])))

    facts = "".join(
        f'<div class="fact"><div class="fk">{md(k)}</div><div class="fv">{md(v)}</div></div>'
        for k, v in [(L["anesthesia"], proc["anesthesia"]), (L["duration"], proc["duration"]), (L["stay"], proc["stay"])]
    )
    body = paras(proc.get("procedure_intro")) + bullets(proc.get("procedure_steps"), "steps") + paras(proc.get("procedure_notes"))
    body += f'<div class="facts">{facts}</div>'
    out.append(sec(S["procedure"], body))

    out.append(sec(S["benefits"], bullets(proc["benefits"]) + paras(proc.get("success"))))
    out.append(sec(S["alternatives"], bullets(proc["alternatives"])))
    out.append(sec(S["no_treatment"], paras(proc["no_treatment"]) + paras(c["refusal_right"])))
    out.append(sec(S["before"], bullets(proc["before"] + c["before_common"])))

    rec = "".join(f'<tr><th>{md(r["when"])}</th><td>{md(r["what"])}</td></tr>' for r in proc["recovery"])
    out.append(sec(S["recovery"], f'<table class="rec">{rec}</table>'))

    # --- Risks
    R = proc["risks"]
    T = c["risk_tiers"]
    rb = paras(c["risk_intro"])
    rb += f'<div class="tier expected"><div class="tt">{md(T["expected"])}</div>{bullets(R["expected"])}</div>'
    for key in ["common", "uncommon", "rare"]:
        items = R.get(key) or []
        if not items:
            continue
        lis = "".join(f'<li><strong>{md(i["name"])}</strong> — {md(i["text"])}</li>' for i in items)
        rb += f'<div class="tier {key}"><div class="tt">{md(T[key])}</div><ul>{lis}</ul></div>'
    gen = c["general_risks_surgical"] if is_surg else c["general_risks_office"]
    rb += f'<div class="tier general"><div class="tt">{md(T["general"])}</div>{bullets(gen)}</div>'
    rb += paras(c["risk_outro"])
    out.append(sec(S["risks"], rb, "risks"))

    em = bullets(proc["emergency"]) + f'<p class="emcall">{md(c["emergency_call"])}</p>'
    out.append(sec(S["emergency"], f'<div class="redbox">{em}</div>'))

    life = bullets((proc.get("lifestyle") or []) + c["lifestyle_common"])
    out.append(sec(S["lifestyle"], life))

    if is_surg:
        out.append(sec(S["intraop"], paras(c["intraop"])))

    out.append(sec(S["photo"], paras(c["photo_intro"]) + checks(c["photo_options"]) + paras(c["kvkk"])))

    lines = "".join('<div class="wline"></div>' for _ in range(5))
    out.append(sec(S["individual"], f'<p class="hint">{md(c["individual_hint"])}</p>{lines}'))

    decl = c["declarations"] + (proc.get("declarations_extra") or [])
    if proc.get("aesthetic"):
        decl += c["declarations_aesthetic"]
    out.append(sec(S["declaration"], checks(decl) + f'<div class="decision">{checks(c["decision_options"])}</div>'
                   + f'<p class="hint">{md(c["handwritten_hint"])}</p><div class="wline"></div><div class="wline"></div>', "decl"))

    # --- Signatures
    sig = "".join(
        f'<tr><th>{md(r)}</th><td></td><td></td><td></td></tr>' for r in c["sign_rows"]
    )
    sigt = f'<table class="sig"><tr class="sh"><th></th><td>{md(L["name"])}</td><td>{md(L["signature"])}</td><td>{md(L["datetime"])}</td></tr>{sig}</table>'
    minors = f'<div class="box minor"><div class="boxtitle">{md(L["minor_title"])}</div>{paras(c["minor_text"])}{checks(c["minor_checks"])}{field_row(L["child_opinion"])}</div>'
    interp = f'<p class="small">{md(c["interpreter_text"])}</p>'
    out.append(sec(S["signatures"], sigt + interp + minors + paras(c["copies"]), "sigs"))

    withdraw = f'<div class="box withdraw"><div class="boxtitle">{md(L["withdraw_title"])}</div>{paras(c["withdraw_text"])}{field_row(L["withdraw_sign"])}</div>'
    out.append(withdraw)
    out.append(f'<p class="foot">{md(c["final_note"])}</p>')

    return f"""<!doctype html><html lang="{lang}"><head><meta charset="utf-8">
    <title>{html.escape(proc['title'])} — {html.escape(L['doc_title'])}</title>
    <style>{CSS}</style></head><body>{''.join(out)}</body></html>"""


CSS = """
@page {
  size: A4; margin: 36mm 15mm 17mm 15mm;
  @top-center { content: element(hdr); width: 100%; vertical-align: bottom; }
  @bottom-center { content: element(ftr); width: 100%; vertical-align: top; }
}
:root { --navy:#0A192F; --teal:#0087A6; --gold:#E5A93C; --tint:#EEF4F6; --line:#C9D6DC; --ink:#1d2329; --muted:#5b6770; --red:#A3302A; }
html { font-family: Inter, sans-serif; font-size: 9.2pt; color: var(--ink); line-height: 1.42; }
body { margin: 0; }
#hdr { position: running(hdr); display: flex; justify-content: space-between; align-items: flex-end;
       border-bottom: 1.6pt solid var(--navy); padding-bottom: 2mm; box-shadow: 0 1.2pt 0 0 var(--gold); }
#hdr .hl { display: flex; align-items: center; gap: 3mm; }
#hdr .logo { height: 20mm; width: auto; display: block; margin-bottom: .6mm; }
#hdr .bname { font-size: 13pt; font-weight: 700; color: var(--navy); letter-spacing: .2pt; }
#hdr .btitle { font-size: 7.4pt; color: var(--teal); font-weight: 500; white-space: nowrap; }
#hdr .hr { text-align: right; font-size: 7pt; color: var(--muted); line-height: 1.35; }
#hdr .hr .cname { font-size: 8.4pt; font-weight: 700; color: var(--navy); }
#ftr { position: running(ftr); display: flex; justify-content: space-between; border-top: .6pt solid var(--line);
       padding-top: 1.6mm; font-size: 6.8pt; color: var(--muted); }
#ftr .pn::after { content: counter(page); } #ftr .pt::after { content: counter(pages); }
.titlebar { margin: 1mm 0 3mm; }
.kicker { font-size: 8pt; font-weight: 700; letter-spacing: 1.2pt; color: var(--teal); text-transform: uppercase; }
h1 { font-size: 17pt; color: var(--navy); margin: .5mm 0 0; line-height: 1.15; }
.alt { font-size: 9pt; color: var(--muted); margin-top: .8mm; }
.intro { background: var(--tint); border-left: 2.4pt solid var(--gold); padding: 2.4mm 3.5mm; margin-bottom: 3mm; }
.intro p { margin: 0 0 1.4mm; } .intro p:last-child { margin: 0; }
p { margin: 0 0 1.8mm; }
.box { border: .7pt solid var(--line); border-radius: 1.5mm; padding: 2.4mm 3.2mm; margin: 2mm 0 3mm; break-inside: avoid; }
.boxtitle { font-weight: 700; color: var(--navy); font-size: 8.4pt; text-transform: uppercase; letter-spacing: .6pt; margin-bottom: 1.6mm; }
table.ftab { width: 100%; border-collapse: separate; border-spacing: 0 1.2mm; table-layout: fixed; }
table.ftab td { vertical-align: top; padding: 0 1.5mm 0 0; }
table.ftab td.fl { color: var(--muted); font-weight: 500; line-height: 1.25; padding-right: 2mm; }
table.ftab td.op .opt { display: inline-block; white-space: normal; }
table.ftab td.ln { border-bottom: .6pt solid #8a979f; height: 4.5mm; }
table.ftab td.op { line-height: 1.7; }
table.ptab { width: 100%; table-layout: fixed; border-collapse: separate; border-spacing: 0 1.2mm; }
table.ptab td { vertical-align: bottom; padding: 0 1.5mm 0 0; }
table.ptab td.fl { color: var(--muted); font-weight: 500; line-height: 1.2; }
table.ptab td.ln { border-bottom: .6pt solid #8a979f; height: 4.5mm; }
table.ptab td.ln + td.fl { padding-left: 4mm; }
.frow { display: flex; align-items: flex-end; gap: 2mm; margin: 1.1mm 0; min-height: 5mm; }
.frow.wide { flex-wrap: wrap; }
.infobox .frow { min-width: 0; }
.frow.wide { width: 100%; }
.frow .flabel { white-space: normal; flex: 0 1 auto; max-width: 68%; font-weight: 500; color: var(--muted); }
.frow.wide .flabel { max-width: none; }
.frow .line { flex: 1; border-bottom: .6pt solid #8a979f; min-width: 15mm; height: 3.5mm; }
.opt { white-space: nowrap; margin-right: 2.4mm; }
.box, .checks .box { }
span.box { display: inline-block; width: 2.8mm; height: 2.8mm; border: .7pt solid var(--navy); border-radius: .5mm;
           margin: 0 1.4mm -.4mm 0; padding: 0; vertical-align: baseline; }
section { margin-top: 3.2mm; }
h2 { font-size: 10.6pt; color: var(--navy); margin: 0 0 1.6mm; padding-bottom: .8mm; border-bottom: .6pt solid var(--line);
     break-after: avoid; display: flex; align-items: center; gap: 2mm; }
h2 .num { display: inline-block; min-width: 5mm; height: 5mm; line-height: 5mm; text-align: center; border-radius: 50%;
          background: var(--navy); color: #fff; font-size: 7.6pt; }
ul { margin: 0 0 1.8mm; padding-left: 4.4mm; } li { margin-bottom: .9mm; }
ul.steps { list-style: none; padding-left: 0; counter-reset: st; }
ul.steps li { counter-increment: st; padding-left: 6mm; position: relative; }
ul.steps li::before { content: counter(st); position: absolute; left: 0; top: .2mm; width: 4mm; height: 4mm; line-height: 4mm;
          text-align: center; font-size: 6.8pt; font-weight: 700; color: var(--teal); border: .7pt solid var(--teal); border-radius: 50%; }
.facts { display: flex; gap: 2mm; margin: 2mm 0 1mm; break-inside: avoid; }
.fact { flex: 1; background: var(--tint); border-radius: 1.2mm; padding: 1.8mm 2.4mm; }
.fk { font-size: 6.9pt; text-transform: uppercase; letter-spacing: .6pt; color: var(--teal); font-weight: 700; }
.fv { font-size: 8.4pt; }
table.rec { width: 100%; border-collapse: collapse; }
table.rec th, table.rec td { border-bottom: .5pt solid var(--line); padding: 1.3mm 2mm; vertical-align: top; text-align: left; }
table.rec th { width: 29mm; color: var(--navy); font-weight: 600; background: var(--tint); }
.tier { margin: 2mm 0; border-radius: 1.4mm; padding: 2mm 3mm 1mm; break-inside: auto; }
.tier .tt { font-weight: 700; font-size: 8.6pt; margin-bottom: 1.2mm; break-after: avoid; }
.tier.expected { background: #F1F6EF; } .tier.expected .tt { color: #3E6B35; }
.tier.common { background: var(--tint); } .tier.common .tt { color: var(--teal); }
.tier.uncommon { background: #F7F4EC; } .tier.uncommon .tt { color: #7A5C1E; }
.tier.rare { background: #F8EFEE; } .tier.rare .tt { color: var(--red); }
.tier.general { background: #F3F4F6; } .tier.general .tt { color: var(--muted); }
.tier li { break-inside: avoid; }
.redbox { border: 1pt solid var(--red); border-radius: 1.5mm; padding: 2.2mm 3mm .6mm; background: #FDF7F6; break-inside: avoid; }
.emcall { font-weight: 700; color: var(--red); }
ul.checks { list-style: none; padding-left: 0; }
ul.checks li { padding-left: 4.8mm; text-indent: -4.8mm; margin-bottom: 1.2mm; break-inside: avoid; }
.decision { border-top: .6pt dashed var(--line); padding-top: 1.6mm; margin-top: 1.6mm; font-weight: 600; }
.hint { color: var(--muted); font-size: 8pt; font-style: italic; }
.wline { border-bottom: .6pt solid #8a979f; height: 6.5mm; }
table.sig { width: 100%; border-collapse: collapse; margin-top: 1mm; break-inside: avoid; }
table.sig th, table.sig td { border: .6pt solid var(--line); padding: 1.4mm 2mm; height: 10mm; vertical-align: top; text-align: left; }
table.sig th { width: 44mm; font-weight: 600; color: var(--navy); background: var(--tint); font-size: 8pt; }
table.sig tr.sh td { height: auto; font-size: 7.2pt; text-transform: uppercase; letter-spacing: .5pt; color: var(--muted); font-weight: 700; }
table.sig tr.sh th { background: none; border: none; height: auto; }
table.sig td:nth-child(3) { width: 38mm; } table.sig td:nth-child(4) { width: 30mm; }
.small { font-size: 7.8pt; color: var(--muted); }
.minor .frow, .withdraw .frow { width: 100%; }
.foot { font-size: 7.4pt; color: var(--muted); margin-top: 3mm; text-align: center; }
section.sigs { break-before: auto; }
strong { font-weight: 650; }
"""


def build(only=None, langs=LANGS):
    commons = {l: yaml.safe_load((CONTENT / f"common.{l}.yaml").read_text()) for l in langs}
    files = sorted(CONTENT.glob("[0-9][0-9]_*.tr.yaml"))
    done = []
    for f in files:
        stem = f.name[: -len(".tr.yaml")]
        if only and not any(o in stem for o in only):
            continue
        for l in langs:
            p = CONTENT / f"{stem}.{l}.yaml"
            if not p.exists():
                print("MISSING", p.name); continue
            proc = yaml.safe_load(p.read_text())
            doc = render(proc, commons[l], l)
            od = OUT / LANG_SUFFIX[l]; od.mkdir(parents=True, exist_ok=True)
            target = od / f"{stem}_{LANG_SUFFIX[l]}.pdf"
            HTML(string=doc, base_url=str(ROOT)).write_pdf(target)
            done.append(target)
            print("OK", target.relative_to(ROOT))
    return done


if __name__ == "__main__":
    args = sys.argv[1:]
    langs = [a for a in args if a in LANGS] or LANGS
    only = [a for a in args if a not in LANGS] or None
    build(only, langs)
