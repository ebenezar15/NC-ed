/* Speak Giraffe — app core: helpers, store, router, themes, rewards */
(function () {
  "use strict";
  const App = (window.App = { views: {}, order: [] });
  const N = (window.NVC = window.NVC || {});

  /* ---------- tiny helpers ---------- */
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const shuffle = (arr) => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const debounce = (fn, ms = 160) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
  const list = (v) => (Array.isArray(v) ? v : v ? [v] : []);
  const calm = () => document.documentElement.classList.contains("calm") || matchMedia("(prefers-reduced-motion: reduce)").matches;
  Object.assign(App, { esc, $, $$, shuffle, pick, debounce, list, calm });

  /* ---------- persistent store (fails soft) ---------- */
  const KEY = "speak-giraffe:v1";
  const defaults = { theme: "auto", type: "expressive", scale: 1, calm: false, xp: 0, seen: {}, quiz: {}, dialogues: {}, days: {}, journal: [], badges: {}, streak: { last: "", count: 0 }, translations: 0, practised: {} };
  let state;
  try { state = Object.assign({}, defaults, JSON.parse(localStorage.getItem(KEY) || "{}")); } catch (e) { state = Object.assign({}, defaults); }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* private mode */ } };
  App.state = state;
  App.save = save;
  App.reset = () => { state = App.state = Object.assign({}, defaults, { theme: state.theme, type: state.type, scale: state.scale, calm: state.calm }); save(); renderXP(); App.go(location.hash || "#home", true); };

  /* two-step confirmation built into the button (no browser dialogs) */
  App.confirmClick = (btn, askText, fn) => {
    let armed = null;
    const label = btn.textContent;
    btn.addEventListener("click", () => {
      if (armed) { clearTimeout(armed); armed = null; btn.textContent = label; fn(); return; }
      btn.textContent = askText;
      armed = setTimeout(() => { armed = null; btn.textContent = label; }, 4000);
    });
  };
  // printing is unavailable when the app runs inside a frame
  try { if (window.self !== window.top) document.documentElement.classList.add("framed"); } catch (e) { document.documentElement.classList.add("framed"); }

  /* ---------- toasts & confetti ---------- */
  App.toast = (text, icon = "🦒") => {
    const zone = $("#toasts");
    const t = document.createElement("div");
    t.className = "toast";
    t.innerHTML = `<span class="ti" aria-hidden="true">${icon}</span><span>${esc(text)}</span>`;
    zone.appendChild(t);
    setTimeout(() => { t.classList.add("leave"); setTimeout(() => t.remove(), 450); }, 3200);
  };
  App.confetti = () => {
    if (calm()) return;
    const c = document.createElement("canvas");
    c.className = "confetti";
    const dpr = Math.min(devicePixelRatio || 1, 2);
    c.width = innerWidth * dpr; c.height = innerHeight * dpr;
    document.body.appendChild(c);
    const ctx = c.getContext("2d");
    const cs = getComputedStyle(document.documentElement);
    const cols = ["--o", "--f", "--n", "--r", "--accent", "--patch"].map((v) => cs.getPropertyValue(v).trim());
    const bits = Array.from({ length: 110 }, () => ({ x: innerWidth / 2 + (Math.random() - .5) * 200, y: innerHeight * .55, vx: (Math.random() - .5) * 14, vy: -Math.random() * 16 - 6, r: Math.random() * 7 + 4, c: pick(cols), a: Math.random() * 6, s: Math.random() * .3 - .15 }));
    let f = 0;
    (function loop() {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      bits.forEach((b) => {
        b.vy += .45; b.x += b.vx; b.y += b.vy; b.a += b.s; b.vx *= .99;
        ctx.save(); ctx.translate(b.x, b.y); ctx.rotate(b.a); ctx.fillStyle = b.c;
        ctx.beginPath(); ctx.ellipse(0, 0, b.r, b.r * .7, 0, 0, Math.PI * 2); ctx.fill(); ctx.restore();
      });
      if (++f < 140) requestAnimationFrame(loop); else c.remove();
    })();
  };

  /* ---------- XP, streaks and badges ---------- */
  const LEVELS = [0, 60, 160, 320, 560, 900, 1400, 2100, 3000];
  const LEVEL_NAMES = ["Jackal pup", "Curious listener", "Feelings finder", "Needs noticer", "Request maker", "Empathy guide", "Bridge builder", "Peace weaver", "Big-hearted giraffe"];
  function levelOf(xp) { let l = 0; LEVELS.forEach((v, i) => { if (xp >= v) l = i; }); return l; }
  function renderXP() {
    const xp = state.xp, l = levelOf(xp);
    const next = LEVELS[l + 1] || LEVELS[l] + 1000;
    const pct = Math.min(100, ((xp - LEVELS[l]) / (next - LEVELS[l])) * 100);
    $("#xp").innerHTML = `<b>${xp}</b> points · ${esc(LEVEL_NAMES[l])}${state.streak.count > 1 ? ` · 🔥 ${state.streak.count}-day streak` : ""}<div class="bar"><i style="width:${pct}%"></i></div>`;
  }
  App.renderXP = renderXP;
  App.addXP = (n, why) => {
    const before = levelOf(state.xp);
    state.xp += n;
    touchStreak();
    save(); renderXP();
    const after = levelOf(state.xp);
    if (after > before) { App.toast(`Level up — you’re now a ${LEVEL_NAMES[after]}!`, "🌟"); App.confetti(); }
    else if (why) App.toast(`+${n} · ${why}`, "✨");
  };
  function today() { return new Date().toISOString().slice(0, 10); }
  function touchStreak() {
    const t = today();
    if (state.streak.last === t) return;
    const y = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
    state.streak.count = state.streak.last === y ? state.streak.count + 1 : 1;
    state.streak.last = t;
    if (state.streak.count >= 3) App.award("streak-3");
    if (state.streak.count >= 7) App.award("streak-7");
  }
  App.award = (id) => {
    if (state.badges[id]) return;
    const b = ((N.challenges && N.challenges.badges) || []).find((x) => x.id === id);
    state.badges[id] = today();
    save();
    if (b) { App.toast(`Badge earned: ${b.name}`, b.icon || "🏅"); App.confetti(); }
  };

  /* ---------- themes & typography ---------- */
  App.themes = [
    { id: "auto", name: "Follow device", bg: "linear-gradient(135deg,#eef2e6 50%,#161a2c 50%)", ink: "#1c2a22", dots: ["#2f6f5e", "#f2b544", "#c2416b"] },
    { id: "acacia", name: "Acacia", bg: "#eef2e6", ink: "#1c2a22", dots: ["#2f6f5e", "#c98a12", "#d9b25c"] },
    { id: "dusk", name: "Savanna dusk", bg: "#161a2c", ink: "#ede7d7", dots: ["#f2b544", "#7fc4d9", "#ff8fb3"] },
    { id: "jacaranda", name: "Jacaranda", bg: "#f3effa", ink: "#261a3a", dots: ["#6b3fc9", "#d23f77", "#9f7ae6"] },
    { id: "lagoon", name: "Lagoon", bg: "#e7f3f4", ink: "#0e2a35", dots: ["#116e8f", "#e0702f", "#57a9b8"] },
    { id: "ember", name: "Ember", bg: "#1d1311", ink: "#f7e8da", dots: ["#ff8a5b", "#f5c76b", "#9de3a6"] },
    { id: "matcha", name: "Matcha", bg: "#f4f1e2", ink: "#23301b", dots: ["#5b7f1e", "#a14d8d", "#9cb35a"] },
    { id: "contrast", name: "High contrast", bg: "#ffffff", ink: "#000000", dots: ["#0033cc", "#b30000", "#000000"] },
    { id: "ink", name: "Ink & paper", bg: "#e9e7e3", ink: "#15140f", dots: ["#15140f", "#6d6a60", "#bdb9b0"] }
  ];
  App.types = [
    { id: "expressive", name: "Expressive", note: "Fraunces + Atkinson Hyperlegible", display: "Fraunces", css: "family=Fraunces:opsz,wght,SOFT,WONK@9..144,300..900,0..100,0..1&family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400" },
    { id: "editorial", name: "Editorial", note: "Instrument Serif + Figtree", display: "Instrument Serif", css: "family=Instrument+Serif:ital@0;1&family=Figtree:wght@400;600;800" },
    { id: "playful", name: "Playful", note: "Bricolage Grotesque + Nunito", display: "Bricolage Grotesque", css: "family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Nunito:wght@400;700;800" },
    { id: "geometric", name: "Geometric", note: "Unbounded + Manrope", display: "Unbounded", css: "family=Unbounded:wght@400..800&family=Manrope:wght@400;600;800" },
    { id: "readable", name: "Easy reading", note: "Lexend — designed to reduce reading strain", display: "Lexend", css: "family=Lexend:wght@300..800" }
  ];
  const loadedFonts = new Set(["expressive"]);
  function loadFont(id) {
    if (loadedFonts.has(id)) return;
    const t = App.types.find((x) => x.id === id);
    if (!t) return;
    const l = document.createElement("link");
    l.rel = "stylesheet";
    l.href = `https://fonts.googleapis.com/css2?${t.css}&display=swap`;
    document.head.appendChild(l);
    loadedFonts.add(id);
  }
  App.applyLook = () => {
    const root = document.documentElement;
    root.dataset.scheme = state.theme;
    root.dataset.type = state.type;
    root.style.setProperty("--scale", state.scale);
    root.classList.toggle("calm", !!state.calm);
    loadFont(state.type);
    const bg = getComputedStyle(root).getPropertyValue("--bg").trim();
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta && bg) meta.content = bg;
  };

  function buildSettings() {
    const sw = $("#theme-swatches");
    sw.innerHTML = App.themes.map((t) => `<button type="button" class="swatch" data-theme-id="${t.id}" aria-pressed="${state.theme === t.id}" style="--sb:${t.bg};--si:${t.ink}">${esc(t.name)}<span class="sw-dots">${t.dots.map((d) => `<i style="background:${d}"></i>`).join("")}</span></button>`).join("");
    const tp = $("#type-picks");
    tp.innerHTML = App.types.map((t) => `<button type="button" class="typepick" data-type-id="${t.id}" aria-pressed="${state.type === t.id}"><span class="tp-d" style="font-family:'${t.display}',serif">Aa — I feel…</span><small>${esc(t.name)}<br>${esc(t.note)}</small></button>`).join("");
    // preload display faces lightly so previews render
    tp.addEventListener("pointerenter", () => App.types.forEach((t) => loadFont(t.id)), { once: true });
    $("#text-size").value = state.scale;
    $("#motion-toggle").checked = !!state.calm;

    sw.addEventListener("click", (e) => {
      const b = e.target.closest("[data-theme-id]"); if (!b) return;
      state.theme = b.dataset.themeId; save(); App.applyLook();
      $$("[data-theme-id]", sw).forEach((x) => x.setAttribute("aria-pressed", x === b));
    });
    tp.addEventListener("click", (e) => {
      const b = e.target.closest("[data-type-id]"); if (!b) return;
      state.type = b.dataset.typeId; save(); App.applyLook();
      $$("[data-type-id]", tp).forEach((x) => x.setAttribute("aria-pressed", x === b));
    });
    $("#text-size").addEventListener("input", (e) => { state.scale = +e.target.value; save(); App.applyLook(); });
    $("#motion-toggle").addEventListener("change", (e) => { state.calm = e.target.checked; save(); App.applyLook(); });
    App.confirmClick($("#reset-progress"), "Tap again to reset everything", () => { App.reset(); App.toast("Progress reset", "🧹"); });
    $("#settings-btn").addEventListener("click", () => {
      const d = $("#settings");
      if (d.showModal) d.showModal(); else d.setAttribute("open", "");
      closeMenu();
    });
  }

  /* ---------- router ---------- */
  App.register = (id, def) => { App.views[id] = def; App.order.push(id); };
  function buildNav() {
    let html = "", group = "";
    App.order.forEach((id) => {
      const v = App.views[id];
      if (v.group && v.group !== group) { group = v.group; html += `<div class="nav-group">${esc(group)}</div>`; }
      html += `<a href="#${id}" data-view="${id}"><span class="ni" aria-hidden="true">${v.icon}</span>${esc(v.title)}${state.seen[id] ? '<span class="seen" title="Visited"></span>' : ""}</a>`;
    });
    $("#nav").innerHTML = html;
  }
  App.buildNav = buildNav;

  let current = null, currentRaw = null, cleanup = null;
  App.go = (hash, force) => {
    const raw = (hash || "#home").replace(/^#/, "");
    const [id, ...rest] = raw.split("/");
    const view = App.views[id] ? id : "home";
    const params = rest.map(decodeURIComponent);
    if (raw === currentRaw && !force) return;
    currentRaw = raw;
    if (typeof cleanup === "function") { try { cleanup(); } catch (e) { /* ignore */ } }
    cleanup = null;
    current = view;
    const main = $("#main");
    const wrap = document.createElement("div");
    wrap.className = "view view-enter";
    main.replaceChildren(wrap);
    try { cleanup = App.views[view].render(wrap, params) || null; }
    catch (err) { console.error(err); wrap.innerHTML = `<div class="view-head"><h1>This section didn’t load</h1><p>${esc(err.message)}</p><p><a href="#home">Go back home</a></p></div>`; }
    document.title = view === "home" ? "Speak Giraffe" : `${App.views[view].title} · Speak Giraffe`;
    if (!state.seen[view]) {
      state.seen[view] = 1; save(); buildNav();
      if (App.order.every((v) => state.seen[v])) App.award("explorer");
    }
    $$("#nav a").forEach((a) => (a.dataset.view === view ? a.setAttribute("aria-current", "page") : a.removeAttribute("aria-current")));
    if (!force) { window.scrollTo({ top: 0, behavior: calm() ? "auto" : "smooth" }); main.focus({ preventScroll: true }); }
    closeMenu();
  };

  /* views call this to reflect in-view state (filters, selections) in the URL without re-rendering */
  App.setHash = (raw) => { currentRaw = raw; history.replaceState(null, "", "#" + raw); };

  function closeMenu() { $("#rail").classList.remove("open"); $("#menu-btn").setAttribute("aria-expanded", "false"); }
  function initMenu() {
    $("#menu-btn").addEventListener("click", () => {
      const open = $("#rail").classList.toggle("open");
      $("#menu-btn").setAttribute("aria-expanded", String(open));
    });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeMenu(); });
  }

  /* ---------- reusable renderers ---------- */
  App.head = (kicker, title, lede) => `<header class="view-head"><div class="kicker">${esc(kicker)}</div><h1>${esc(title)}</h1>${lede ? `<p class="lede">${esc(lede)}</p>` : ""}</header>`;
  App.ofnrChip = (k) => `<span class="ofnr-chip ${k}" aria-hidden="true">${k.toUpperCase()}</span>`;
  App.OFNR = [
    { k: "o", name: "Observation", ask: "What did I see or hear?" },
    { k: "f", name: "Feeling", ask: "What am I feeling?" },
    { k: "n", name: "Need", ask: "What do I need or value?" },
    { k: "r", name: "Request", ask: "What exactly would I like?" }
  ];
  App.drawer = (html, onMount) => {
    const d = document.createElement("div");
    d.className = "drawer";
    d.setAttribute("role", "dialog");
    d.setAttribute("aria-modal", "true");
    d.innerHTML = `<div class="drawer-scrim" data-close></div><div class="drawer-body" tabindex="-1"><div class="row" style="justify-content:flex-end"><button class="icon-btn" data-close aria-label="Close">×</button></div>${html}</div>`;
    const prev = document.activeElement;
    const close = () => { d.remove(); document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; prev && prev.focus && prev.focus(); };
    const onKey = (e) => { if (e.key === "Escape") close(); };
    d.addEventListener("click", (e) => { if (e.target.closest("[data-close]")) close(); });
    document.addEventListener("keydown", onKey);
    document.body.appendChild(d);
    document.body.style.overflow = "hidden";
    $(".drawer-body", d).focus();
    if (onMount) onMount($(".drawer-body", d), close);
    return close;
  };

  /* jackal-word scanner shared by tools and practice boxes */
  App.scan = (text) => {
    const words = (N.jackalWords || []).slice().sort((a, b) => b.w.length - a.w.length);
    const hits = [];
    const lower = text.toLowerCase();
    words.forEach((jw) => {
      const re = new RegExp(`(^|[^a-z’'])(${jw.w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})(?=$|[^a-z])`, "gi");
      let m;
      while ((m = re.exec(lower))) {
        const start = m.index + m[1].length, end = start + m[2].length;
        if (!hits.some((h) => start < h.end && end > h.start)) hits.push({ start, end, jw });
      }
    });
    return hits.sort((a, b) => a.start - b.start);
  };
  App.markText = (text) => {
    const hits = App.scan(text);
    let out = "", i = 0;
    hits.forEach((h) => { out += esc(text.slice(i, h.start)) + `<mark title="${esc(h.jw.kind + ": " + h.jw.hint)}">${esc(text.slice(h.start, h.end))}</mark>`; i = h.end; });
    return { html: out + esc(text.slice(i)), hits };
  };

  /* ---------- boot ---------- */
  App.boot = () => {
    // inline the patch field (a <use> shadow tree doesn't always repaint when theme variables change)
    const sym = $("#patch-field"), field = $(".patches");
    if (sym && field) { field.setAttribute("viewBox", sym.getAttribute("viewBox")); field.setAttribute("preserveAspectRatio", "xMidYMid slice"); field.innerHTML = sym.innerHTML; }
    App.applyLook();
    buildSettings();
    buildNav();
    initMenu();
    renderXP();
    window.addEventListener("hashchange", () => App.go(location.hash));
    App.go(location.hash || "#home", true);
  };
})();
