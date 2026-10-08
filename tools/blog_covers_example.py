"""Blog covers, batch 2 (1600x900), same visual system as covers.py."""
import sys, os, math

out = sys.argv[1]
os.makedirs(out, exist_ok=True)
NAVY, NAVY2, GOLD, TEAL = "#0A192F", "#112240", "#E5A93C", "#00B4D8"

NOSE = "M15.2 2 C14.3 4.4 13.8 6.4 13.9 8.4 C14 9.8 11.4 12.9 7.6 15.9 C6.3 16.9 6.5 18.6 8 18.7 C9.4 18.8 10.8 18.7 12 19 C11.9 20.2 11.4 21.2 10.8 22"
NOSTRIL = "M9.3 17.1 C9.9 16.7 10.8 16.9 11.1 17.6"
EYE = "M17 10.2 C17.7 10.7 18.6 10.7 19.3 10.2"
FRONT = ["M10.5 3.5 C10.5 7.5 9.6 10.6 8 13.2", "M13.5 3.5 C13.5 7.5 14.4 10.6 16 13.2",
         "M8 13.2 C6.4 14.8 6.9 17.5 9 17.5 C9.8 17.5 10.4 17.1 10.8 16.6 L13.2 16.6 C13.6 17.1 14.2 17.5 15 17.5 C17.1 17.5 17.6 14.8 16 13.2"]
EAR = ["M7 9 C7 5.1 9.4 2.5 12.5 2.5 C15.9 2.5 18.5 5.2 18.5 8.8 C18.5 12.2 16.5 13.6 15.2 15 C14 16.3 13.8 17.4 13.6 19 C13.4 20.8 12 22 10.3 22 C8.6 22 7.5 20.9 7.2 19.5",
       "M10 9 C10 7 11.2 5.6 12.8 5.6 C14.4 5.6 15.5 6.9 15.5 8.6 C15.5 10 14.6 10.8 13.5 11.2",
       "M10 9 L10 10.5 C10 11.6 10.8 12.2 11.8 12.4"]
SYRINGE = ["M14.5 6.5 L17.5 9.5 L9.5 17.5 L6.5 14.5 Z", "M13.5 5.5 L18.5 10.5", "M16 8 L19.5 4.5", "M18 3 L21 6",
           "M8 16 L3 21", "M12.5 8.5 L14 10", "M10.5 10.5 L12 12", "M8.5 12.5 L10 14"]


def base(inner, gx=1180, gy=300):
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="1600" height="900">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="{NAVY2}"/><stop offset="1" stop-color="{NAVY}"/></linearGradient>
    <radialGradient id="glow" cx="{gx}" cy="{gy}" r="620" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="{GOLD}" stop-opacity="0.10"/><stop offset="1" stop-color="{GOLD}" stop-opacity="0"/></radialGradient>
    <radialGradient id="glow2" cx="220" cy="820" r="520" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="{TEAL}" stop-opacity="0.10"/><stop offset="1" stop-color="{TEAL}" stop-opacity="0"/></radialGradient>
    <pattern id="dots" width="28" height="28" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.1" fill="#ffffff" fill-opacity="0.06"/></pattern>
  </defs>
  <rect width="1600" height="900" fill="url(#bg)"/>
  <rect width="1600" height="900" fill="url(#dots)"/>
  <rect width="1600" height="900" fill="url(#glow)"/>
  <rect width="1600" height="900" fill="url(#glow2)"/>
{inner}
</svg>
'''


def g(paths, cx, cy, scale, color, width, opacity=1.0, rotate=0):
    p = "".join(f'<path d="{d}" vector-effect="non-scaling-stroke"/>' for d in paths)
    x, y = cx - 12 * scale, cy - 12 * scale
    rot = f' rotate({rotate} 12 12)' if rotate else ''
    return (f'  <g transform="translate({x} {y}) scale({scale}){rot}" fill="none" stroke="{color}" stroke-opacity="{opacity}" '
            f'stroke-width="{width}" stroke-linecap="round" stroke-linejoin="round">{p}</g>\n')


def rings(cx, cy, radii, color=GOLD):
    return "".join(f'  <circle cx="{cx}" cy="{cy}" r="{r}" fill="none" stroke="{color}" stroke-opacity="{o}" stroke-width="1.5"/>\n' for r, o in radii)


def arc_arrow(cx, cy, r, a0, a1, color, width=3, opacity=0.9):
    x0, y0 = cx + r * math.cos(math.radians(a0)), cy + r * math.sin(math.radians(a0))
    x1, y1 = cx + r * math.cos(math.radians(a1)), cy + r * math.sin(math.radians(a1))
    large = 1 if (a1 - a0) % 360 > 180 else 0
    # arrowhead
    t = math.radians(a1 + 90)
    hx, hy = math.cos(t), math.sin(t)
    nx, ny = math.cos(math.radians(a1)), math.sin(math.radians(a1))
    s = 18
    p1 = (x1 - hx * s + nx * s * 0.6, y1 - hy * s + ny * s * 0.6)
    p2 = (x1 - hx * s - nx * s * 0.6, y1 - hy * s - ny * s * 0.6)
    return (f'  <path d="M{x0:.1f} {y0:.1f} A{r} {r} 0 {large} 1 {x1:.1f} {y1:.1f}" fill="none" stroke="{color}" stroke-opacity="{opacity}" stroke-width="{width}" stroke-linecap="round"/>\n'
            f'  <path d="M{p1[0]:.1f} {p1[1]:.1f} L{x1:.1f} {y1:.1f} L{p2[0]:.1f} {p2[1]:.1f}" fill="none" stroke="{color}" stroke-opacity="{opacity}" stroke-width="{width}" stroke-linecap="round" stroke-linejoin="round"/>\n')


# 1. Nasal spray addiction: spray bottle inside a cycle of arrows
cx, cy = 800, 450
inner = rings(cx, cy, [(330, 0.12)])
inner += arc_arrow(cx, cy, 270, -60, 50, TEAL)
inner += arc_arrow(cx, cy, 270, 60, 170, TEAL, opacity=0.6)
inner += arc_arrow(cx, cy, 270, 180, 290, TEAL, opacity=0.35)
inner += (f'  <g fill="none" stroke="{GOLD}" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round">'
          f'<path d="M740 350 C740 335 750 325 765 325 L835 325 C850 325 860 335 860 350 L860 600 C860 620 848 630 830 630 L770 630 C752 630 740 620 740 600 Z"/>'
          f'<path d="M775 325 L775 300 L825 300 L825 325"/>'
          f'<path d="M790 300 L790 255 C790 238 810 238 810 255 L810 300"/>'
          f'<path d="M740 420 L860 420" stroke-opacity="0.5"/>'
          f'</g>\n')
for i, (dx, dy) in enumerate([(-30, -60), (0, -75), (30, -60), (-15, -100), (15, -100)]):
    inner += f'  <circle cx="{800 + dx}" cy="{240 + dy}" r="{4 if i < 3 else 3}" fill="{TEAL}" fill-opacity="{0.8 if i < 3 else 0.5}"/>\n'
open(f"{out}/nasal-spray-addiction.svg", "w").write(base(inner, 800, 380))

# 2. Deviated septum: frontal nose, curved septum vs straight reference
inner = rings(800, 450, [(300, 0.4), (350, 0.15)], TEAL)
inner += g(FRONT, 800, 450, 23, "#ffffff", 3, 0.85)
inner += g(["M12 8.2 C11.1 9.6 12.9 11.2 12 12.4 C11.4 13.3 12.4 14 12 14.8"], 800, 450, 23, TEAL, 4.5)
inner += g(["M12 8 L12 15"], 800, 450, 23, GOLD, 2.5, 0.75).replace('stroke-linecap="round"', 'stroke-linecap="round" stroke-dasharray="2 8"')
open(f"{out}/deviated-septum.svg", "w").write(base(inner, 1150, 380))

# 3. Botox facts: syringe + small zinc-like hexagon molecule
inner = rings(700, 450, [(290, 0.4), (340, 0.14)])
inner += g(SYRINGE, 700, 450, 20, GOLD, 3.2)
hx, hy, r = 1180, 420, 70
pts = " ".join(f"{hx + r * math.cos(math.radians(60 * k + 30)):.1f},{hy + r * math.sin(math.radians(60 * k + 30)):.1f}" for k in range(6))
inner += f'  <polygon points="{pts}" fill="none" stroke="{TEAL}" stroke-width="3" stroke-linejoin="round"/>\n'
for k in (0, 2, 4):
    a = math.radians(60 * k + 30)
    x1, y1 = hx + r * math.cos(a), hy + r * math.sin(a)
    x2, y2 = hx + (r + 55) * math.cos(a), hy + (r + 55) * math.sin(a)
    inner += f'  <line x1="{x1:.1f}" y1="{y1:.1f}" x2="{x2:.1f}" y2="{y2:.1f}" stroke="{TEAL}" stroke-opacity="0.6" stroke-width="2.5" stroke-linecap="round"/>\n'
    inner += f'  <circle cx="{x2:.1f}" cy="{y2:.1f}" r="9" fill="{NAVY}" stroke="{TEAL}" stroke-opacity="0.8" stroke-width="2.5"/>\n'
inner += f'  <circle cx="{hx}" cy="{hy}" r="16" fill="{TEAL}" fill-opacity="0.85"/>\n'
open(f"{out}/botox-facts.svg", "w").write(base(inner, 700, 380))

# 4. Earwax: ear + cotton swab kept outside
inner = rings(720, 450, [(300, 0.4), (350, 0.14)])
inner += g(EAR, 720, 450, 23, GOLD, 3.2)
inner += (f'  <g stroke-linecap="round" fill="none">'
          f'<line x1="1060" y1="300" x2="1320" y2="560" stroke="#ffffff" stroke-opacity="0.75" stroke-width="5"/>'
          f'<ellipse cx="1045" cy="285" rx="26" ry="16" transform="rotate(45 1045 285)" fill="#ffffff" fill-opacity="0.12" stroke="#ffffff" stroke-opacity="0.85" stroke-width="3"/>'
          f'<ellipse cx="1335" cy="575" rx="26" ry="16" transform="rotate(45 1335 575)" fill="#ffffff" fill-opacity="0.12" stroke="#ffffff" stroke-opacity="0.85" stroke-width="3"/>'
          f'<circle cx="1190" cy="430" r="190" stroke="{TEAL}" stroke-opacity="0.55" stroke-width="3"/>'
          f'<line x1="1056" y1="564" x2="1324" y2="296" stroke="{TEAL}" stroke-opacity="0.55" stroke-width="3"/>'
          f'</g>\n')
open(f"{out}/earwax.svg", "w").write(base(inner, 720, 380))

# 5. Cold weather: snowflakes and cold air flowing towards the nostril
inner = rings(1000, 450, [(300, 0.4), (350, 0.14)])
inner += g([NOSE, NOSTRIL, EYE], 1000, 450, 24, GOLD, 3.2)
for y, o in ((548, 0.85), (590, 0.55), (632, 0.35)):
    inner += f'  <path d="M330 {y + 40} C450 {y + 10} 600 {y + 50} 840 {y}" fill="none" stroke="{TEAL}" stroke-opacity="{o}" stroke-width="3" stroke-linecap="round" stroke-dasharray="1 12"/>\n'


def flake(x, y, s, o):
    sv = ""
    for k in range(6):
        a = math.radians(60 * k)
        x2, y2 = x + s * math.cos(a), y + s * math.sin(a)
        sv += f'<line x1="{x}" y1="{y}" x2="{x2:.1f}" y2="{y2:.1f}"/>'
        for side in (-1, 1):
            bx, by = x + 0.62 * s * math.cos(a), y + 0.62 * s * math.sin(a)
            b = a + side * math.radians(35)
            sv += f'<line x1="{bx:.1f}" y1="{by:.1f}" x2="{bx + 0.3 * s * math.cos(b):.1f}" y2="{by + 0.3 * s * math.sin(b):.1f}"/>'
    return f'  <g stroke="#ffffff" stroke-opacity="{o}" stroke-width="2.6" stroke-linecap="round">{sv}</g>\n'


inner += flake(430, 300, 70, 0.9) + flake(260, 430, 40, 0.55) + flake(590, 190, 28, 0.4)
open(f"{out}/cold-weather.svg", "w").write(base(inner, 1000, 380))

# 6. History: leaf (Sushruta) beside the profile, connected by an old-dotted arc
inner = rings(1040, 450, [(300, 0.4), (350, 0.14), (400, 0.06)])
inner += g([NOSE, NOSTRIL, EYE], 1040, 450, 24, GOLD, 3.2)
lx, ly = 420, 470
inner += (f'  <g fill="none" stroke="{TEAL}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">'
          f'<path d="M{lx} {ly + 170} C{lx - 150} {ly + 60} {lx - 120} {ly - 140} {lx + 10} {ly - 200} C{lx + 120} {ly - 110} {lx + 130} {ly + 70} {lx} {ly + 170} Z"/>'
          f'<path d="M{lx} {ly + 210} L{lx} {ly + 170} C{lx + 5} {ly + 40} {lx + 8} {ly - 80} {lx + 10} {ly - 200}"/>'
          + "".join(f'<path d="M{lx + 4} {ly + 120 - k * 55} L{lx - 55 + k * 4} {ly + 70 - k * 55}" stroke-opacity="0.6"/>'
                    f'<path d="M{lx + 5} {ly + 110 - k * 55} L{lx + 62 - k * 4} {ly + 62 - k * 55}" stroke-opacity="0.6"/>' for k in range(4))
          + '</g>\n')
inner += f'  <path d="M520 300 C 640 200, 760 200, 840 260" fill="none" stroke="#ffffff" stroke-opacity="0.45" stroke-width="2.5" stroke-dasharray="2 12" stroke-linecap="round"/>\n'
open(f"{out}/history-of-rhinoplasty.svg", "w").write(base(inner, 1040, 380))
print("ok")
