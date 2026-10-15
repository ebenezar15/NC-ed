/* Speak Giraffe — Lifespan and Difficult people */
(function () {
  "use strict";
  const { esc, $, $$, head } = App;
  const N = window.NVC;
  const ul = (arr, cls = "ticks") => `<ul class="${cls}">${(arr || []).map((x, i) => `<li style="--d:${i}">${esc(x)}</li>`).join("")}</ul>`;

  /* ================= AGES ================= */
  App.register("ages", {
    title: "Across the lifespan", icon: "🌱", group: "People",
    render(el, params) {
      const ages = N.ages || [];
      let cur = Math.max(0, ages.findIndex((a) => a.id === params[0]));
      el.innerHTML = `${head("Lifespan", "Same four steps, different ears", "A toddler, a teenager and a grandparent all have the same needs, but they hear us differently. Choose a life stage to see how NVC affects it, how jackal talk lands, and how to adapt.")}
      <div class="lifeline" id="lifeline" role="group" aria-label="Life stages">
        ${ages.map((a, i) => `<button class="stage" style="--h:${a.hue}" data-i="${i}" aria-pressed="${i === cur}"><span class="orb" aria-hidden="true">${a.icon}</span><b>${esc(a.label)}</b><small>${esc(a.range)}</small></button>`).join("")}
      </div>
      <div class="row" style="justify-content:center;gap:8px"><button class="btn ghost small" id="prev-age">Younger</button><button class="btn ghost small" id="next-age">Older</button></div>
      <div id="age-panel" class="age-panel"></div>`;
      const panel = $("#age-panel", el);
      function show(i) {
        cur = (i + ages.length) % ages.length;
        const a = ages[cur];
        $$(".stage", el).forEach((s, j) => s.setAttribute("aria-pressed", j === cur));
        const orb = $$(".stage", el)[cur];
        if (orb) orb.scrollIntoView({ behavior: App.calm() ? "auto" : "smooth", inline: "center", block: "nearest" });
        App.setHash(`ages/${a.id}`);
        panel.innerHTML = `
          <div class="panel" style="border-top:6px solid hsl(${a.hue} 55% 50%)">
            <div class="row"><span style="font-size:2.4rem" aria-hidden="true">${a.icon}</span><div><h2 style="margin:0">${esc(a.label)}</h2><span class="muted">Ages ${esc(a.range)}</span></div></div>
            <p style="margin-top:16px">${esc(a.development)}</p>
          </div>
          <section class="section" style="margin-top:28px">
            <div class="section-head"><h2>What our words do</h2><p>Typical effects, not guarantees. Every person is different.</p></div>
            <div class="effects">
              <div class="pos"><h4><span aria-hidden="true">🦒</span> When we use giraffe language</h4>${ul(a.nvcEffects)}</div>
              <div class="neg"><h4><span aria-hidden="true">🐺</span> When we shame, blame or threaten</h4>${ul(a.jackalEffects, "ticks warn")}</div>
            </div>
          </section>
          <section class="section" style="margin-top:36px">
            <div class="grid g2">
              <div><h3>How to adapt NVC</h3>${ul(a.adapt)}</div>
              <div><h3>Phrases that work</h3>${(a.phrases || []).map((p) => `<div class="phrase"><small>${esc(p.when)}</small><q>${esc(p.say)}</q></div>`).join("")}</div>
            </div>
          </section>
          <section class="section" style="margin-top:36px">
            <div class="section-head"><h2>When they’re hard to reach</h2><p>Emotional maturity changes moment to moment, at any age.</p></div>
            <div class="maturity">
              <div class="imm"><h4>😤 Dysregulated or immature in the moment</h4><p class="small">${esc((a.difficult || {}).immature)}</p></div>
              <div class="mat"><h4>🙂 Regulated and mature</h4><p class="small">${esc((a.difficult || {}).mature)}</p></div>
            </div>
          </section>
          <section class="section" style="margin-top:36px">
            <div class="section-head"><h2>Everyday examples</h2><p>${(a.examples || []).length} moments, jackal first, then giraffe.</p></div>
            <div class="compare">${(a.examples || []).map((x) => `<div><p class="small muted" style="margin:8px 0 4px"><b>${esc(x.situation)}</b></p><div class="compare-row"><div class="bad">${esc(x.jackal)}</div><div class="good">${esc(x.giraffe)}</div></div></div>`).join("")}</div>
          </section>
          ${a.watchFor ? `<div class="panel flat" style="margin-top:28px;border-color:var(--second)"><b>When to get extra help:</b> ${esc(a.watchFor)}</div>` : ""}`;
      }
      $("#lifeline", el).addEventListener("click", (e) => { const b = e.target.closest(".stage"); if (b) show(+b.dataset.i); });
      $("#prev-age", el).addEventListener("click", () => show(cur - 1));
      $("#next-age", el).addEventListener("click", () => show(cur + 1));
      show(cur);
    }
  });

  /* ================= DIFFICULT PEOPLE ================= */
  App.register("difficult", {
    title: "Difficult people", icon: "🌪️", group: "People",
    render(el) {
      const D = N.difficult || { principles: [], deescalate: [], types: [], matrix: [] };
      const stages = [...new Set(D.types.flatMap((t) => t.scripts.map((s) => s.stage)))];
      el.innerHTML = `${head("Hard moments", "Difficult people are people with unmet needs", "From a toddler who bites to a parent who won’t stop criticising, behaviour is a strategy to meet a need. Here’s how to stay steady, de-escalate, and set boundaries with care.")}
      <section>
        <div class="section-head"><h2>De-escalation, step by step</h2><p>Select a step, or play them in order.</p></div>
        <div class="grid g2" style="align-items:start">
          <div class="ladder" id="ladder">${D.deescalate.map((s, i) => `<button class="rung" data-i="${i}"><span class="rn">${i + 1}</span><span class="rt"><h4>${esc(s.step)}</h4><p>${esc(s.text)}</p><q>${esc(s.say)}</q></span></button>`).join("")}</div>
          <div class="stack"><button class="btn accent" id="ladder-play">Play all steps</button><p class="muted small">Your calm comes first. A dysregulated brain can borrow calm from a regulated one, but it can’t learn while flooded. Connection comes before correction.</p></div>
        </div>
      </section>

      <section class="section">
        <div class="section-head"><h2>Recognise the pattern</h2><p>${D.types.length} common patterns. Each shows the needs underneath and what to say at different ages.</p></div>
        <div class="types" id="types">${D.types.map((t, i) => `<button class="type-btn" data-i="${i}" aria-pressed="${i === 0}"><span aria-hidden="true">${t.icon}</span><b>${esc(t.name)}</b></button>`).join("")}</div>
        <div id="type-detail" style="margin-top:20px"></div>
      </section>

      <section class="section">
        <div class="section-head"><h2>By age and emotional maturity</h2><p>Select a cell for the approach and a line to try.</p></div>
        <div class="mx" id="mx">
          <div class="mh">Life stage</div><div class="mh">😤 Immature or flooded</div><div class="mh">🙂 Mature and regulated</div>
          ${D.matrix.map((r, i) => `<div class="ms"><span aria-hidden="true">${r.icon}</span>${esc(r.stage)}</div>
            ${["immature", "mature"].map((m) => `<div class="cell" tabindex="0" role="button" aria-expanded="false" data-label="${m === "immature" ? "Immature or flooded" : "Mature and regulated"}"><b>Signs:</b> ${esc(r[m].signs.join(", "))}<div class="more"><ul>${r[m].approach.map((x) => `<li>${esc(x)}</li>`).join("")}</ul><q>${esc(r[m].say)}</q></div></div>`).join("")}`).join("")}
        </div>
      </section>

      <section class="section">
        <div class="section-head"><h2>Principles to hold on to</h2></div>
        <div class="concepts">${D.principles.map((p) => `<div class="concept"><h4>${esc(p.title)}</h4><p>${esc(p.text)}</p></div>`).join("")}</div>
      </section>`;

      const rungs = $$(".rung", el);
      let lt;
      const light = (i) => rungs.forEach((r, j) => r.classList.toggle("lit", j === i));
      $("#ladder", el).addEventListener("click", (e) => { const r = e.target.closest(".rung"); if (r) { clearInterval(lt); light(+r.dataset.i); } });
      $("#ladder-play", el).addEventListener("click", () => {
        clearInterval(lt); let i = 0; light(0);
        lt = setInterval(() => { i++; if (i >= rungs.length) { clearInterval(lt); App.addXP(4, "Walked the de-escalation steps"); return; } light(i); }, 2600);
      });

      const detail = $("#type-detail", el);
      let filt = { stage: "all", mat: "all" };
      function showType(i) {
        const t = D.types[i];
        $$(".type-btn", el).forEach((b, j) => b.setAttribute("aria-pressed", j === i));
        const scripts = t.scripts.filter((s) => (filt.stage === "all" || s.stage === filt.stage) && (filt.mat === "all" || s.maturity === filt.mat));
        detail.innerHTML = `<div class="panel">
          <div class="row"><span style="font-size:2.2rem" aria-hidden="true">${t.icon}</span><h3 style="margin:0;font-size:var(--t-xl)">${esc(t.name)}</h3></div>
          <div class="grid g4" style="margin-top:18px">
            <div><h4>You might notice</h4>${ul(t.signs)}</div>
            <div><h4>Needs underneath</h4><div class="word-cloud">${t.likelyNeeds.map((n, d) => `<span class="word" style="--d:${d};--wc:var(--n)">${esc(n)}</span>`).join("")}</div></div>
            <div><h4>Try</h4>${ul(t.do)}</div>
            <div><h4>Avoid</h4>${ul(t.dont, "ticks warn")}</div>
          </div>
          <div class="panel flat" style="margin-top:18px"><b>A giraffe boundary:</b> <span style="font-family:var(--font-display);font-size:var(--t-l)">“${esc(t.boundary)}”</span></div>
          <h4 style="margin-top:22px">What to say, by age</h4>
          <div class="row" style="margin-bottom:12px">
            <div class="chips" id="st-f">${["all", ...stages].map((s) => `<button class="chip" data-s="${esc(s)}" aria-pressed="${filt.stage === s}">${s === "all" ? "Every age" : esc(s)}</button>`).join("")}</div>
            <div class="chips" id="mt-f">${[["all", "Any maturity"], ["immature", "Immature"], ["mature", "Mature"]].map(([v, l]) => `<button class="chip" data-m="${v}" aria-pressed="${filt.mat === v}">${l}</button>`).join("")}</div>
          </div>
          <div class="grid g2">${scripts.map((s) => `<div class="script"><div class="row"><span class="tag">${esc(s.stage)}</span><span class="tag" style="background:color-mix(in srgb, ${s.maturity === "mature" ? "var(--giraffe)" : "var(--jackal)"} 18%, transparent)">${esc(s.maturity)}</span></div><small>${esc(s.situation)}</small><q>${esc(s.say)}</q><small><b>Why it works:</b> ${esc(s.why)}</small></div>`).join("") || `<p class="muted">No scripts for that combination yet. Try “Every age”.</p>`}</div>
        </div>`;
        detail.dataset.i = i;
      }
      $("#types", el).addEventListener("click", (e) => { const b = e.target.closest(".type-btn"); if (b) showType(+b.dataset.i); });
      detail.addEventListener("click", (e) => {
        const s = e.target.closest("[data-s]"), m = e.target.closest("[data-m]");
        if (s) filt.stage = s.dataset.s;
        if (m) filt.mat = m.dataset.m;
        if (s || m) showType(+detail.dataset.i);
      });
      showType(0);

      const mx = $("#mx", el);
      const toggleCell = (c) => { c.classList.toggle("open"); c.setAttribute("aria-expanded", c.classList.contains("open")); };
      mx.addEventListener("click", (e) => { const c = e.target.closest(".cell"); if (c) toggleCell(c); });
      mx.addEventListener("keydown", (e) => { const c = e.target.closest(".cell"); if (c && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); toggleCell(c); } });
      return () => clearInterval(lt);
    }
  });
})();
