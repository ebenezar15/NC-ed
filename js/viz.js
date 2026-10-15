/* Speak Giraffe — SVG diagram generators */
(function () {
  "use strict";
  const { esc } = App;
  const PAL = ["var(--o)", "var(--f)", "var(--n)", "var(--r)", "var(--accent)", "var(--second)", "var(--jackal)", "var(--patch)"];
  const col = (i) => PAL[i % PAL.length];

  function wrap(text, max) {
    const words = String(text).split(/\s+/);
    const lines = [];
    let line = "";
    words.forEach((w) => {
      if ((line + " " + w).trim().length > max && line) { lines.push(line); line = w; }
      else line = (line + " " + w).trim();
    });
    if (line) lines.push(line);
    if (lines.length > 3) { lines.length = 3; lines[2] = lines[2].replace(/.{0,2}$/, "…"); }
    return lines;
  }
  function label(x, y, text, opts = {}) {
    const { max = 14, size = 13, weight = 700, anchor = "middle", fill = "var(--ink)", lh = 1.15 } = opts;
    const lines = wrap(text, max);
    const y0 = y - ((lines.length - 1) * size * lh) / 2;
    return `<text x="${x}" y="${y0}" text-anchor="${anchor}" dominant-baseline="middle" font-size="${size}" font-weight="${weight}" style="fill:${fill}">${lines.map((l, i) => `<tspan x="${x}" dy="${i ? size * lh : 0}">${esc(l)}</tspan>`).join("")}</text>`;
  }
  const blob = (cx, cy, r, i) => {
    // irregular giraffe-patch shape around a centre
    const k = [1, .92, 1.06, .95, 1.03, .9];
    const pts = Array.from({ length: 6 }, (_, j) => {
      const a = (j / 6) * Math.PI * 2 + i;
      const rr = r * k[(j + i) % 6];
      return [cx + Math.cos(a) * rr, cy + Math.sin(a) * rr];
    });
    let d = `M${pts[0][0].toFixed(1)},${pts[0][1].toFixed(1)}`;
    pts.forEach((p, j) => {
      const n = pts[(j + 1) % 6];
      const mx = (p[0] + n[0]) / 2, my = (p[1] + n[1]) / 2;
      d += ` Q${p[0].toFixed(1)},${p[1].toFixed(1)} ${mx.toFixed(1)},${my.toFixed(1)}`;
    });
    return d + "Z";
  };
  const arrowDef = (id) => `<defs><marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink-2)"/></marker></defs>`;
  let uid = 0;

  const drawers = {
    flow(steps) {
      const W = 640, H = 300, n = steps.length, id = "a" + uid++;
      const gap = W / n;
      let s = arrowDef(id);
      const pts = steps.map((_, i) => [gap * i + gap / 2, H / 2 + (i % 2 ? 34 : -34)]);
      const r = Math.min(52, gap / 2 - 6);
      for (let i = 0; i < n - 1; i++) {
        const [x1, y1] = pts[i], [x2, y2] = pts[i + 1];
        s += `<path class="dash" d="M${x1 + r * .8},${y1} C${(x1 + x2) / 2},${y1} ${(x1 + x2) / 2},${y2} ${x2 - r * .9},${y2}" fill="none" style="stroke:var(--ink-2)" stroke-width="2" marker-end="url(#${id})"/>`;
      }
      steps.forEach((st, i) => {
        const [x, y] = pts[i];
        s += `<g class="node" data-i="${i}"><path d="${blob(x, y, r, i)}" style="fill:color-mix(in srgb, ${col(i)} 26%, var(--bg-2));stroke:${col(i)}" stroke-width="2"/>${label(x, y, st.label, { max: n > 5 ? 9 : 11, size: n > 6 ? 11 : 13 })}</g>`;
      });
      return [W, H, s];
    },
    cycle(steps) {
      const W = 640, H = 360, cx = W / 2, cy = H / 2, R = 130, n = steps.length, id = "a" + uid++;
      const r = Math.min(46, (Math.PI * R) / n - 6);
      let s = arrowDef(id) + `<circle cx="${cx}" cy="${cy}" r="${R}" fill="none" style="stroke:var(--line)" stroke-width="2" class="dash"/>`;
      steps.forEach((_, i) => {
        const a1 = (i / n) * Math.PI * 2 - Math.PI / 2, a2 = ((i + 1) / n) * Math.PI * 2 - Math.PI / 2;
        const off = (r + 6) / R;
        const p1 = [cx + Math.cos(a1 + off) * R, cy + Math.sin(a1 + off) * R], p2 = [cx + Math.cos(a2 - off) * R, cy + Math.sin(a2 - off) * R];
        s += `<path d="M${p1[0]},${p1[1]} A${R},${R} 0 0 1 ${p2[0]},${p2[1]}" fill="none" style="stroke:var(--ink-2)" stroke-width="2.4" marker-end="url(#${id})"/>`;
      });
      steps.forEach((st, i) => {
        const a = (i / n) * Math.PI * 2 - Math.PI / 2;
        const x = cx + Math.cos(a) * R, y = cy + Math.sin(a) * R;
        s += `<g class="node" data-i="${i}"><path d="${blob(x, y, r, i)}" style="fill:color-mix(in srgb, ${col(i)} 30%, var(--bg-2));stroke:${col(i)}" stroke-width="2"/>${label(x, y, st.label, { max: 9, size: 12 })}</g>`;
      });
      return [W, H, s];
    },
    layers(steps) {
      const W = 640, H = 360, n = steps.length;
      const h = Math.min(64, (H - 20) / n);
      let s = "";
      steps.forEach((st, i) => {
        const y = H - 10 - (i + 1) * h;
        const inset = (i / n) * 180, inset2 = ((i + 1) / n) * 180;
        const x1 = 40 + inset, x2 = W - 40 - inset, x3 = W - 40 - inset2, x4 = 40 + inset2;
        s += `<g class="node" data-i="${i}"><path d="M${x1},${y + h - 3} L${x2},${y + h - 3} L${x3},${y + 3} L${x4},${y + 3} Z" style="fill:color-mix(in srgb, ${col(i)} 32%, var(--bg-2));stroke:${col(i)}" stroke-width="1.6" stroke-linejoin="round"/>${label(W / 2, y + h / 2, st.label, { max: 34, size: n > 6 ? 12 : 14 })}</g>`;
      });
      return [W, H, s];
    },
    triangle(steps) {
      const W = 640, H = 360, id = "a" + uid++;
      const P = [[320, 60], [520, 300], [120, 300]];
      let s = arrowDef(id) + `<path d="M${P[0]} L${P[1]} L${P[2]} Z" fill="none" style="stroke:var(--line)" stroke-width="3" stroke-linejoin="round"/>`;
      for (let i = 0; i < 3; i++) {
        const a = P[i], b = P[(i + 1) % 3];
        const mx = a[0] + (b[0] - a[0]) * .5, my = a[1] + (b[1] - a[1]) * .5;
        s += `<path class="dash" d="M${a[0] + (b[0] - a[0]) * .3},${a[1] + (b[1] - a[1]) * .3} L${mx + (b[0] - a[0]) * .2},${my + (b[1] - a[1]) * .2}" style="stroke:var(--ink-2)" stroke-width="2" marker-end="url(#${id})"/>`;
      }
      steps.slice(0, 3).forEach((st, i) => {
        const [x, y] = P[i];
        s += `<g class="node" data-i="${i}"><path d="${blob(x, y, 56, i)}" style="fill:color-mix(in srgb, ${col(i)} 30%, var(--bg-2));stroke:${col(i)}" stroke-width="2"/>${label(x, y, st.label, { max: 11, size: 13 })}</g>`;
      });
      return [W, H, s];
    },
    matrix(steps) {
      const W = 640, H = 360, pad = 20, cw = (W - pad * 3) / 2, ch = (H - pad * 3) / 2;
      let s = "";
      steps.slice(0, 4).forEach((st, i) => {
        const x = pad + (i % 2) * (cw + pad), y = pad + Math.floor(i / 2) * (ch + pad);
        s += `<g class="node" data-i="${i}"><rect x="${x}" y="${y}" width="${cw}" height="${ch}" rx="22" style="fill:color-mix(in srgb, ${col(i)} 24%, var(--bg-2));stroke:${col(i)}" stroke-width="2"/>${label(x + cw / 2, y + ch / 2 - 14, st.label, { max: 20, size: 16 })}${label(x + cw / 2, y + ch / 2 + 26, st.text || "", { max: 38, size: 10.5, weight: 400, fill: "var(--ink-2)" })}</g>`;
      });
      s += `<circle cx="${W / 2}" cy="${H / 2}" r="9" style="fill:var(--bg);stroke:var(--ink-2)" stroke-width="2"/>`;
      return [W, H, s];
    },
    ladder(steps) {
      const W = 640, H = 380, n = steps.length;
      const step = (H - 40) / n;
      let s = `<line x1="150" y1="14" x2="150" y2="${H - 14}" style="stroke:var(--ink-2)" stroke-width="4" stroke-linecap="round"/><line x1="490" y1="14" x2="490" y2="${H - 14}" style="stroke:var(--ink-2)" stroke-width="4" stroke-linecap="round"/>`;
      steps.forEach((st, i) => {
        const y = H - 24 - i * step - step / 2;
        const hh = Math.min(38, step - 8);
        s += `<g class="node" data-i="${i}"><rect x="140" y="${y - hh / 2}" width="360" height="${hh}" rx="${hh / 2}" style="fill:color-mix(in srgb, ${col(i)} 30%, var(--bg-2));stroke:${col(i)}" stroke-width="1.6"/><text x="120" y="${y}" text-anchor="end" dominant-baseline="middle" font-size="13" font-weight="800" style="fill:var(--ink-2)">${i + 1}</text>${label(320, y, st.label, { max: 40, size: n > 6 ? 11.5 : 13.5 })}</g>`;
      });
      return [W, H, s];
    },
    wheel(steps) {
      const W = 640, H = 360, cx = W / 2, cy = H / 2, R = 160, r0 = 52, n = steps.length;
      let s = "";
      steps.forEach((st, i) => {
        const a1 = (i / n) * Math.PI * 2 - Math.PI / 2, a2 = ((i + 1) / n) * Math.PI * 2 - Math.PI / 2;
        const big = a2 - a1 > Math.PI ? 1 : 0;
        const p = (a, rr) => `${(cx + Math.cos(a) * rr).toFixed(1)},${(cy + Math.sin(a) * rr).toFixed(1)}`;
        const am = (a1 + a2) / 2;
        s += `<g class="node" data-i="${i}"><path d="M${p(a1, r0)} L${p(a1, R)} A${R},${R} 0 ${big} 1 ${p(a2, R)} L${p(a2, r0)} A${r0},${r0} 0 ${big} 0 ${p(a1, r0)} Z" style="fill:color-mix(in srgb, ${col(i)} 34%, var(--bg-2));stroke:var(--bg)" stroke-width="3"/>${label(cx + Math.cos(am) * (R + r0) / 2, cy + Math.sin(am) * (R + r0) / 2, st.label, { max: 10, size: 12 })}</g>`;
      });
      s += `<circle cx="${cx}" cy="${cy}" r="${r0 - 6}" style="fill:var(--bg-2);stroke:var(--line)"/>`;
      return [W, H, s];
    }
  };

  App.viz = {
    framework(fw) {
      const kind = drawers[fw.visual] ? fw.visual : "flow";
      const steps = (fw.steps || []).length ? fw.steps : [{ label: fw.name }];
      const [W, H, body] = drawers[kind](steps);
      return `<svg class="viz" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(fw.name)} diagram: ${esc(steps.map((s) => s.label).join(", "))}">${body}</svg>`;
    },
    wrap, label, blob,
    /* donut chart of groups; returns svg string. groups:[{group,hue,words}] */
    donut(groups, centre) {
      const cx = 250, cy = 250, R = 230, r0 = 92, n = groups.length;
      let s = "";
      groups.forEach((g, i) => {
        const a1 = (i / n) * Math.PI * 2 - Math.PI / 2, a2 = ((i + 1) / n) * Math.PI * 2 - Math.PI / 2;
        const p = (a, rr) => `${(cx + Math.cos(a) * rr).toFixed(1)},${(cy + Math.sin(a) * rr).toFixed(1)}`;
        const am = (a1 + a2) / 2, lr = (R + r0) / 2;
        const hue = g.hue != null ? g.hue : (i * 360) / n;
        s += `<path class="seg" data-i="${i}" tabindex="0" role="button" aria-label="${esc(g.group)}" d="M${p(a1, r0)} L${p(a1, R)} A${R},${R} 0 0 1 ${p(a2, R)} L${p(a2, r0)} A${r0},${r0} 0 0 0 ${p(a1, r0)} Z" style="fill:hsl(${hue} 62% 62%)"/>`;
        const deg = (am * 180) / Math.PI;
        const flip = deg > 90 && deg < 270;
        s += `<text x="${(cx + Math.cos(am) * lr).toFixed(1)}" y="${(cy + Math.sin(am) * lr).toFixed(1)}" text-anchor="middle" dominant-baseline="middle" transform="rotate(${flip ? deg + 180 : deg} ${(cx + Math.cos(am) * lr).toFixed(1)} ${(cy + Math.sin(am) * lr).toFixed(1)})" style="fill:#16120c">${esc(g.group)}</text>`;
      });
      s += `<circle class="hub" cx="${cx}" cy="${cy}" r="${r0 - 8}"/><text class="hub-text" x="${cx}" y="${cy}" text-anchor="middle" dominant-baseline="middle">${esc(centre)}</text>`;
      return `<svg class="wheel" viewBox="0 0 500 500">${s}</svg>`;
    },
    giraffe() {
      return `<svg viewBox="0 0 400 500" role="img" aria-label="A giraffe with a glowing heart and a speech bubble">
  <defs>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%"><stop offset="0" style="stop-color:var(--f)" stop-opacity=".55"/><stop offset="1" style="stop-color:var(--f)" stop-opacity="0"/></radialGradient>
    <clipPath id="gclip"><path d="M150 470 C150 400 160 360 175 330 L200 120 C202 96 214 80 236 76 L262 72 C278 70 290 80 292 96 L294 116 C296 128 288 136 276 136 L252 140 L236 330 C250 360 262 410 262 470 Z"/></clipPath>
  </defs>
  <ellipse cx="205" cy="476" rx="150" ry="14" style="fill:var(--ink)" opacity=".1"/>
  <g class="neck">
    <path d="M150 470 C150 400 160 360 175 330 L200 120 C202 96 214 80 236 76 L262 72 C278 70 290 80 292 96 L294 116 C296 128 288 136 276 136 L252 140 L236 330 C250 360 262 410 262 470 Z" style="fill:var(--patch)"/>
    <g clip-path="url(#gclip)" style="fill:color-mix(in srgb, var(--patch) 45%, #6b3a12)" opacity=".7">
      <path d="${blob(206, 160, 16, 1)}"/><path d="${blob(228, 205, 15, 2)}"/><path d="${blob(200, 240, 17, 3)}"/><path d="${blob(226, 280, 16, 4)}"/>
      <path d="${blob(190, 320, 18, 5)}"/><path d="${blob(234, 340, 15, 0)}"/><path d="${blob(180, 380, 20, 2)}"/><path d="${blob(232, 400, 19, 1)}"/><path d="${blob(200, 440, 20, 3)}"/><path d="${blob(250, 104, 10, 4)}"/>
    </g>
    <path d="M236 76 L232 50 M250 74 L252 48" style="stroke:var(--ink)" stroke-width="5" stroke-linecap="round"/>
    <circle cx="232" cy="46" r="6" style="fill:var(--ink)"/><circle cx="253" cy="44" r="6" style="fill:var(--ink)"/>
    <path d="M226 82 C214 76 204 80 206 90 C214 92 222 90 228 88 Z" style="fill:var(--patch);stroke:var(--ink)" stroke-width="2"/>
    <circle cx="262" cy="96" r="4.5" style="fill:var(--ink)"/>
    <path d="M282 122 C286 126 286 130 280 131" fill="none" style="stroke:var(--ink)" stroke-width="2.4" stroke-linecap="round"/>
    <path d="M200 120 C196 160 186 230 176 320" fill="none" style="stroke:var(--ink)" stroke-width="2" opacity=".25"/>
    <circle cx="214" cy="400" r="60" style="fill:url(#glow)"/>
    <path class="heart" d="M214 418 C186 398 186 376 202 372 C210 370 214 378 214 382 C214 378 218 370 226 372 C242 376 242 398 214 418 Z" style="fill:var(--f)"/>
  </g>
  <g class="bubble">
    <path d="M276 18 h104 a16 16 0 0 1 16 16 v40 a16 16 0 0 1 -16 16 h-62 l-20 18 4 -18 h-26 a16 16 0 0 1 -16 -16 v-40 a16 16 0 0 1 16 -16z" style="fill:var(--bg-2);stroke:var(--ink)" stroke-width="2"/>
    <circle cx="300" cy="54" r="7" style="fill:var(--o)"/><circle cx="324" cy="54" r="7" style="fill:var(--f)"/><circle cx="348" cy="54" r="7" style="fill:var(--n)"/><circle cx="372" cy="54" r="7" style="fill:var(--r)"/>
  </g>
</svg>`;
    }
  };
})();
