/* Speak Giraffe — Scenarios, Frameworks, Languages */
(function () {
  "use strict";
  const { esc, $, $$, head, ofnrChip, debounce } = App;
  const N = window.NVC;
  const WHO = { child: "Child", teen: "Teen", adult: "Adult", older: "Older adult", peer: "Peer", self: "Self", group: "Group" };
  const lvl = (n) => `<span class="lvl" title="Difficulty ${n} of 3">${[1, 2, 3].map((i) => `<i class="${i <= n ? "on" : ""}"></i>`).join("")}</span>`;

  /* ================= SCENARIOS ================= */
  App.register("scenarios", {
    title: "Scenarios", icon: "🗺️", group: "Explore",
    render(el, params) {
      const cats = N.scenarios || [];
      const all = cats.flatMap((c) => c.cases.map((x) => Object.assign({ cat: c }, x)));
      const st = { cat: params[0] && cats.some((c) => c.id === params[0]) ? params[0] : "all", who: "all", level: 0, q: "", practice: false, shown: 24 };
      el.innerHTML = `${head("Real life", "Jackal or giraffe? Practise on real moments", `${all.length} situations across ${cats.length} areas of life. Read the jackal line, then translate it yourself or reveal the giraffe version step by step.`)}
      <div class="cat-strip" id="cats" role="group" aria-label="Areas of life">
        <button class="cat" data-cat="all" style="--h:40" aria-pressed="${st.cat === "all"}"><span class="cicon">✨</span><b>Everything</b><small>${all.length} situations</small></button>
        ${cats.map((c) => `<button class="cat" data-cat="${c.id}" style="--h:${c.hue}" aria-pressed="${st.cat === c.id}"><span class="cicon">${c.icon}</span><b>${esc(c.name)}</b><small>${c.cases.length} situations</small></button>`).join("")}
      </div>
      <p class="muted small" id="cat-blurb"></p>
      <div class="filters">
        <div class="search"><input class="input" id="sc-q" type="search" placeholder="Search situations, e.g. “phone”, “curfew”, “deadline”" aria-label="Search situations"></div>
        <div class="chips" id="who">${["all", ...Object.keys(WHO)].map((w) => `<button class="chip" data-who="${w}" aria-pressed="${w === "all"}">${w === "all" ? "Anyone" : WHO[w]}</button>`).join("")}</div>
        <div class="chips" id="level">${[[0, "Any level"], [1, "Gentle"], [2, "Tricky"], [3, "Hard"]].map(([v, l]) => `<button class="chip" data-level="${v}" aria-pressed="${v === 0}">${l}</button>`).join("")}</div>
        <label class="toggle small"><input type="checkbox" id="practice"> Practice mode (write yours first)</label>
        <button class="btn ghost small" id="random">Surprise me</button>
      </div>
      <p class="result-count" id="count" aria-live="polite"></p>
      <div class="cases" id="cases"></div>
      <div class="row" style="justify-content:center;margin-top:24px"><button class="btn ghost" id="more">Show more</button></div>`;

      const casesEl = $("#cases", el);
      function filtered() {
        const q = st.q.toLowerCase();
        return all.filter((x) => (st.cat === "all" || x.cat.id === st.cat) && (st.who === "all" || x.who === st.who) && (!st.level || x.level === st.level) &&
          (!q || [x.title, x.context, x.jackal, x.say, x.cat.name].join(" ").toLowerCase().includes(q)));
      }
      function card(x) {
        const g = x.giraffe || {};
        return `<article class="case" data-id="${esc(x.id)}" style="--h:${x.cat.hue}">
          <div class="case-top">
            <div class="row"><span class="tag" style="background:hsl(${x.cat.hue} 60% 50% / .16)">${x.cat.icon} ${esc(x.cat.name)}</span><span class="tag">${esc(WHO[x.who] || x.who)}</span>${lvl(x.level)}${App.state.practised[x.id] ? '<span class="tag" title="You practised this">✓ practised</span>' : ""}</div>
            <h3>${esc(x.title)}</h3>
            <p class="ctx">${esc(x.context)}</p>
          </div>
          <p class="jk">“${esc(x.jackal)}”</p>
          <div class="practice-box">
            <label class="small" for="p-${esc(x.id)}"><b>Your giraffe version</b></label>
            <textarea class="input" id="p-${esc(x.id)}" placeholder="When I see… I feel… because I need… Would you…?"></textarea>
            <div class="marked small" hidden></div>
          </div>
          <div class="gf-wrap"><div class="gf-inner">
            <div class="gf">${App.OFNR.map((c) => `<div class="gf-line">${ofnrChip(c.k)}<span>${esc(g[c.k] || "")}</span></div>`).join("")}</div>
            <p class="say">${esc(x.say)}</p>
            <div class="extra"><span><b>Empathy for them:</b> ${esc(x.empathy)}</span><span><b>Tip:</b> ${esc(x.tip)}</span></div>
          </div></div>
          <div class="case-actions">
            <button class="btn small" data-act="reveal" aria-expanded="false">Show giraffe</button>
            <button class="btn ghost small" data-act="practise">Practise</button>
            <button class="btn ghost small" data-act="copy">Copy</button>
          </div>
        </article>`;
      }
      function draw(reset) {
        if (reset) st.shown = 24;
        const list = filtered();
        $("#count", el).textContent = list.length ? `${list.length} situation${list.length > 1 ? "s" : ""}` : "";
        casesEl.innerHTML = list.length ? list.slice(0, st.shown).map(card).join("") : `<div class="panel flat"><h3>No situations match</h3><p class="muted">Try a shorter search word or set the filters back to “Anyone” and “Any level”.</p></div>`;
        $("#more", el).hidden = list.length <= st.shown;
        const c = cats.find((k) => k.id === st.cat);
        $("#cat-blurb", el).textContent = c ? c.blurb : "";
        if (st.practice) $$(".case", casesEl).forEach((k) => k.classList.add("practising"));
      }
      const press = (group, b) => $$("button", group).forEach((x) => x.setAttribute("aria-pressed", x === b));
      $("#cats", el).addEventListener("click", (e) => { const b = e.target.closest(".cat"); if (!b) return; press($("#cats", el), b); st.cat = b.dataset.cat; App.setHash(st.cat === "all" ? "scenarios" : `scenarios/${st.cat}`); draw(true); });
      $("#who", el).addEventListener("click", (e) => { const b = e.target.closest(".chip"); if (!b) return; press($("#who", el), b); st.who = b.dataset.who; draw(true); });
      $("#level", el).addEventListener("click", (e) => { const b = e.target.closest(".chip"); if (!b) return; press($("#level", el), b); st.level = +b.dataset.level; draw(true); });
      $("#sc-q", el).addEventListener("input", debounce((e) => { st.q = e.target.value.trim(); draw(true); }, 180));
      $("#practice", el).addEventListener("change", (e) => { st.practice = e.target.checked; $$(".case", casesEl).forEach((k) => k.classList.toggle("practising", st.practice)); });
      $("#more", el).addEventListener("click", () => { st.shown += 24; draw(); });
      $("#random", el).addEventListener("click", () => {
        const list = filtered(); if (!list.length) return;
        const x = App.pick(list);
        casesEl.innerHTML = card(x);
        $("#count", el).textContent = "One random situation · change a filter to see the full list again";
        $("#more", el).hidden = true;
        if (st.practice) $(".case", casesEl).classList.add("practising");
      });
      casesEl.addEventListener("input", debounce((e) => {
        const ta = e.target.closest("textarea"); if (!ta) return;
        const box = ta.nextElementSibling, { html, hits } = App.markText(ta.value);
        box.hidden = !ta.value.trim();
        box.innerHTML = hits.length ? `${html}<br><span class="muted">${hits.length} word${hits.length > 1 ? "s" : ""} may sound like judgment. Hover them for a hint.</span>` : `${html}<br><span style="color:var(--giraffe)">No jackal words spotted.</span>`;
      }, 250));
      casesEl.addEventListener("click", (e) => {
        const b = e.target.closest("[data-act]"); if (!b) return;
        const c = b.closest(".case"), id = c.dataset.id, x = all.find((k) => k.id === id);
        if (b.dataset.act === "reveal") {
          const open = c.classList.toggle("open");
          b.textContent = open ? "Hide giraffe" : "Show giraffe";
          b.setAttribute("aria-expanded", open);
          const ta = $("textarea", c);
          if (open && !App.state.practised[id] && (!c.classList.contains("practising") || (ta && ta.value.trim().length > 15))) {
            App.state.practised[id] = 1; App.addXP(c.classList.contains("practising") ? 6 : 2, c.classList.contains("practising") ? "Translated a situation" : "Studied a situation");
          }
        } else if (b.dataset.act === "practise") {
          c.classList.toggle("practising"); const ta = $("textarea", c); if (ta && c.classList.contains("practising")) ta.focus();
        } else if (b.dataset.act === "copy") {
          const t = `${x.title}\nJackal: ${x.jackal}\nGiraffe: ${x.say}`;
          (navigator.clipboard ? navigator.clipboard.writeText(t) : Promise.reject()).then(() => App.toast("Copied to clipboard", "📋"), () => App.toast("Copy isn’t available in this browser", "⚠️"));
        }
      });
      draw(true);
    }
  });

  /* ================= FRAMEWORKS ================= */
  function openFramework(fw) {
    const byId = (id) => (N.frameworks || []).find((f) => f.id === id);
    App.drawer(`
      <div class="kicker small" style="color:var(--accent);font-weight:800">${esc(fw.family)}</div>
      <h2>${esc(fw.name)}</h2>
      <p class="muted">${esc(fw.author || "")}${fw.year ? `, ${esc(fw.year)}` : ""}</p>
      <p class="lede" style="max-width:none">${esc(fw.tagline || "")}</p>
      <div class="viz-big" id="fw-viz">${App.viz.framework(fw)}</div>
      <div class="row no-print"><button class="btn small" id="fw-play">Play the steps</button><span class="muted small">or select a step below</span></div>
      <p style="margin-top:16px">${esc(fw.summary)}</p>
      <h3>Steps</h3>
      <ol class="steps-list" id="fw-steps">${(fw.steps || []).map((s, i) => `<li data-i="${i}" tabindex="0"><span><b>${esc(s.label)}.</b> ${esc(s.text)}</span></li>`).join("")}</ol>
      ${fw.example ? `<h3 style="margin-top:24px">How it sounds</h3><div class="panel flat"><p class="muted small" style="margin:0 0 6px">${esc(fw.example.situation)}</p><p style="margin:0;font-family:var(--font-display);font-size:var(--t-l)">${esc(fw.example.applied)}</p></div>` : ""}
      <h3 style="margin-top:24px">Real-life uses</h3>
      <ul class="ticks">${(fw.useCases || []).map((u) => `<li>${esc(u)}</li>`).join("")}</ul>
      ${fw.ages ? `<h3 style="margin-top:24px">Works well with</h3><div class="chips">${fw.ages.map((a) => `<span class="tag">${esc(a)}</span>`).join("")}</div>` : ""}
      ${fw.pitfalls ? `<h3 style="margin-top:24px">Watch out for</h3><p>${esc(fw.pitfalls)}</p>` : ""}
      ${(fw.pairsWith || []).length ? `<h3 style="margin-top:24px">Pairs well with</h3><div class="chips">${fw.pairsWith.map(byId).filter(Boolean).map((p) => `<button class="chip" data-pair="${p.id}">${esc(p.name)}</button>`).join("")}</div>` : ""}
    `, (body, close) => {
      const nodes = $$(".node", body), lis = $$("#fw-steps li", body);
      const hot = (i) => { nodes.forEach((n) => n.classList.toggle("hot", +n.dataset.i === i)); lis.forEach((l) => l.classList.toggle("active", +l.dataset.i === i)); };
      let t;
      $("#fw-steps", body).addEventListener("click", (e) => { const li = e.target.closest("li"); if (li) { clearInterval(t); hot(+li.dataset.i); } });
      $("#fw-steps", body).addEventListener("keydown", (e) => { const li = e.target.closest("li"); if (li && e.key === "Enter") { clearInterval(t); hot(+li.dataset.i); } });
      $("#fw-viz", body).addEventListener("click", (e) => { const n = e.target.closest(".node"); if (n) { clearInterval(t); hot(+n.dataset.i); } });
      $("#fw-play", body).addEventListener("click", () => {
        clearInterval(t); let i = 0; hot(0);
        t = setInterval(() => { i++; if (i >= lis.length) { clearInterval(t); hot(-1); return; } hot(i); }, 1600);
      });
      body.addEventListener("click", (e) => { const p = e.target.closest("[data-pair]"); if (p) { clearInterval(t); close(); openFramework(byId(p.dataset.pair)); } });
      App.state.seenFw = App.state.seenFw || {};
      if (!App.state.seenFw[fw.id]) { App.state.seenFw[fw.id] = 1; App.addXP(2); }
    });
  }

  App.register("frameworks", {
    title: "Models & frameworks", icon: "🧩", group: "Explore",
    render(el, params) {
      const fws = N.frameworks || [];
      const fams = [...new Set(fws.map((f) => f.family))];
      let fam = "all", q = "";
      el.innerHTML = `${head("Toolkit", "Many maps, one territory", `${fws.length} models from communication, conflict, emotion regulation, parenting and feedback. Each has a diagram you can step through, real-life uses, and links to models that pair well with it.`)}
      <div class="filters">
        <div class="search"><input class="input" id="fw-q" type="search" placeholder="Search models or authors" aria-label="Search models"></div>
        <div class="chips" id="fams"><button class="chip" data-fam="all" aria-pressed="true">All <span class="count">${fws.length}</span></button>${fams.map((f) => `<button class="chip" data-fam="${esc(f)}" aria-pressed="false">${esc(f)} <span class="count">${fws.filter((x) => x.family === f).length}</span></button>`).join("")}</div>
      </div>
      <div class="fw-grid" id="fw-grid"></div>`;
      const grid = $("#fw-grid", el);
      function draw() {
        const ql = q.toLowerCase();
        const list = fws.filter((f) => (fam === "all" || f.family === fam) && (!ql || [f.name, f.author, f.tagline, f.summary].join(" ").toLowerCase().includes(ql)));
        grid.innerHTML = list.map((f) => `<button class="fw" data-id="${f.id}"><div class="fw-viz" aria-hidden="true">${App.viz.framework(f)}</div><div class="fw-body"><small>${esc(f.family)} · ${esc(f.author || "")}</small><h3>${esc(f.name)}</h3><p>${esc(f.tagline || "")}</p></div></button>`).join("") || `<p class="muted">No models match “${esc(q)}”. Try an author’s surname.</p>`;
      }
      $("#fams", el).addEventListener("click", (e) => { const b = e.target.closest(".chip"); if (!b) return; $$("#fams .chip", el).forEach((x) => x.setAttribute("aria-pressed", x === b)); fam = b.dataset.fam; draw(); });
      $("#fw-q", el).addEventListener("input", debounce((e) => { q = e.target.value.trim(); draw(); }));
      grid.addEventListener("click", (e) => { const b = e.target.closest(".fw"); if (b) openFramework(fws.find((f) => f.id === b.dataset.id)); });
      draw();
      if (params[0]) { const f = fws.find((x) => x.id === params[0]); if (f) openFramework(f); }
    }
  });

  /* ================= LANGUAGES ================= */
  App.register("languages", {
    title: "Languages", icon: "🌍", group: "Explore",
    render(el) {
      const L = N.languages || {};
      const frames = L.phraseFrames || [];
      const FK = [["observe", "Observe", "o"], ["feel", "Feel", "f"], ["need", "Need", "n"], ["request", "Request", "r"], ["empathy", "Empathy", ""], ["gratitude", "Gratitude", ""]];
      el.innerHTML = `${head("Languages", "Learn to hear jackal, speak giraffe", "Rosenberg described two languages: jackal, which judges, and giraffe, which speaks from the heart. Learn both, then take the giraffe frames into other languages.")}
      <div class="tabs" role="tablist" id="lang-tabs" style="flex-wrap:wrap">
        <button role="tab" aria-selected="true" data-t="pairs">Jackal ↔ Giraffe</button>
        <button role="tab" aria-selected="false" data-t="patterns">Jackal patterns</button>
        <button role="tab" aria-selected="false" data-t="frames">In ${frames.length} languages</button>
        <button role="tab" aria-selected="false" data-t="ears">Ways of hearing</button>
        <button role="tab" aria-selected="false" data-t="swaps">Word swaps</button>
      </div>
      <div id="lang-body" style="margin-top:24px"></div>`;
      const body = $("#lang-body", el);
      const tabs = {
        pairs() {
          body.innerHTML = `<p class="muted">Select a card to flip it into giraffe.</p><div class="grid g3">${(L.jackalGiraffe || []).map((p, i) => `<div class="flipper"><div class="flip-card" tabindex="0" role="button" aria-pressed="false" style="min-height:220px"><div class="flip-face front"><small>Jackal · ${esc(p.pattern || "")}</small><span style="font-family:var(--font-display);font-size:var(--t-l)">${esc(p.jackal)}</span></div><div class="flip-face back"><small>Giraffe</small><span class="small">${esc(p.giraffe)}</span></div></div></div>`).join("")}</div>`;
        },
        patterns() {
          body.innerHTML = `<div class="grid g2">${(L.lifeAlienating || []).map((p) => `<div class="panel flat"><h3>${esc(p.type)}</h3><p class="muted small">${esc(p.description)}</p><ul class="ticks warn">${(p.examples || []).map((x) => `<li>${esc(x)}</li>`).join("")}</ul><p class="small" style="margin:12px 0 0"><b style="color:var(--giraffe)">Translate it:</b> ${esc(p.transform)}</p></div>`).join("")}</div>`;
        },
        frames() {
          body.innerHTML = `<div class="lang-strip" id="langs">${frames.map((f, i) => `<button class="chip" data-i="${i}" aria-pressed="${i === 0}" lang="${esc(f.code)}">${esc(f.lang)}${f.english && f.english !== f.lang ? ` <span class="count">${esc(f.english)}</span>` : ""}</button>`).join("")}</div>
          <div class="frames" id="frames" style="margin-top:18px"></div>
          <p class="muted small" style="margin-top:14px">Translations are a starting point. Check them with a native speaker, who can make them sound more natural in your community.</p>`;
          const show = (i) => {
            const f = frames[i];
            $("#frames", body).innerHTML = FK.map(([k, l, c]) => `<div class="frame ${c}"><span class="fk">${l}</span><span class="fv" lang="${esc(f.code)}" dir="${esc(f.dir || "ltr")}">${esc(f.frames[k] || "")}</span></div>`).join("");
          };
          $("#langs", body).addEventListener("click", (e) => { const b = e.target.closest(".chip"); if (!b) return; $$("#langs .chip", body).forEach((x) => x.setAttribute("aria-pressed", x === b)); show(+b.dataset.i); });
          show(0);
        },
        ears() {
          body.innerHTML = `<div class="grid g2">${(L.registers || []).map((r) => `<div class="panel flat"><h3>${esc(r.name)}</h3><p class="muted small">${esc(r.description)}</p><ul class="ticks">${(r.examples || []).map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div>`).join("")}</div>`;
        },
        swaps() {
          body.innerHTML = `<div class="search" style="max-width:420px;margin-bottom:12px"><input class="input" id="swap-q" type="search" placeholder="Filter swaps" aria-label="Filter word swaps"></div><div id="swaps"></div>`;
          const draw = (q = "") => { $("#swaps", body).innerHTML = (L.wordSwaps || []).filter((s) => !q || (s.from + s.to + s.why).toLowerCase().includes(q)).map((s) => `<div class="swap"><s>${esc(s.from)}</s><span class="arrow" aria-hidden="true">⟶</span><b>${esc(s.to)}</b><span class="why">${esc(s.why)}</span></div>`).join(""); };
          $("#swap-q", body).addEventListener("input", debounce((e) => draw(e.target.value.toLowerCase())));
          draw();
        }
      };
      $("#lang-tabs", el).addEventListener("click", (e) => { const b = e.target.closest("[data-t]"); if (!b) return; $$("#lang-tabs button", el).forEach((x) => x.setAttribute("aria-selected", x === b)); tabs[b.dataset.t](); });
      body.addEventListener("click", (e) => { const c = e.target.closest(".flip-card"); if (c) { c.classList.toggle("flipped"); c.setAttribute("aria-pressed", c.classList.contains("flipped")); } });
      body.addEventListener("keydown", (e) => { const c = e.target.closest(".flip-card"); if (c && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); c.click(); } });
      tabs.pairs();
    }
  });
})();
