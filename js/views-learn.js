/* Speak Giraffe — Home, Learn, Feelings & Needs */
(function () {
  "use strict";
  const { esc, $, $$, head, ofnrChip, calm } = App;
  const N = window.NVC;

  /* ================= HOME ================= */
  const HERO = [
    { jackal: "You never listen to me!", g: [["o", "When I see you scrolling while I’m talking,"], ["f", "I feel lonely,"], ["n", "because I really want connection."], ["r", "Would you put the phone down for five minutes?"]] },
    { jackal: "This report is sloppy. Again.", g: [["o", "I found four numbers that don’t match the source data."], ["f", "I’m worried,"], ["n", "because accuracy matters to our clients."], ["r", "Could we check them together at three?"]] },
    { jackal: "Stop being such a brat!", g: [["o", "You threw the blocks when we said bedtime."], ["f", "Are you frustrated"], ["n", "because you wanted more play?"], ["r", "Want to choose one last tower first?"]] },
    { jackal: "Mum, you’re impossible about driving.", g: [["o", "You scraped the gate twice this month."], ["f", "I feel scared,"], ["n", "because your safety means the world to me."], ["r", "Would you try a driving check with me on Friday?"]] }
  ];

  App.register("home", {
    title: "Home", icon: "🦒", group: "Start",
    render(el) {
      const counts = {
        cases: (N.scenarios || []).reduce((a, c) => a + c.cases.length, 0),
        cats: (N.scenarios || []).length,
        fw: (N.frameworks || []).length,
        types: ((N.difficult || {}).types || []).length,
        quiz: ((N.challenges || {}).quizzes || []).reduce((a, q) => a + q.items.length, 0),
        langs: ((N.languages || {}).phraseFrames || []).length
      };
      el.innerHTML = `
      <section class="hero">
        <div class="hero-say">
          <div class="hero-label" id="hero-label"><span class="dot"></span><span id="hero-label-text">Jackal language: blame, labels and demands</span></div>
          <p class="hero-line jackal" id="hero-line" aria-live="polite"></p>
          <div class="hero-legend" id="hero-legend">${App.OFNR.map((c) => `<span data-k="${c.k}">${ofnrChip(c.k)} ${c.name}</span>`).join("")}</div>
          <div class="hero-controls">
            <button class="btn ghost small" id="hero-toggle" aria-pressed="false">Pause</button>
            <button class="btn ghost small" id="hero-next">Next example</button>
          </div>
          <div class="hero-cta">
            <a class="btn accent" href="#learn">Learn the four steps</a>
            <a class="btn ghost" href="#scenarios">Browse ${counts.cases} real situations</a>
          </div>
        </div>
        <div class="giraffe-art">${App.viz.giraffe()}</div>
      </section>

      <p class="lede">Nonviolent Communication, developed by Marshall Rosenberg, turns blame into four clear moves: say what happened, how you feel, what you need, and what you’d like. Choose where to start.</p>
      <div class="paths">
        ${[
          ["learn", "🧭", "The four steps", "See how observation, feeling, need and request fit together.", "Start here"],
          ["feelings", "🎨", "Feelings & needs", "Explore the feelings and needs wheels and decode faux feelings.", `${(N.fauxFeelings || []).length} faux feelings decoded`],
          ["scenarios", "🗺️", "Real-life scenarios", "Jackal vs giraffe for home, work, school, love, care and more.", `${counts.cats} areas · ${counts.cases} situations`],
          ["frameworks", "🧩", "Models & frameworks", "NVC side by side with Gottman, DBT, P.E.T., BIFF and more.", `${counts.fw} models with diagrams`],
          ["ages", "🌱", "Across the lifespan", "What NVC does for toddlers through to elders — and how to adapt it.", "10 life stages"],
          ["difficult", "🌪️", "Difficult people", "De-escalate and set boundaries with immature and mature people of any age.", `${counts.types} patterns`],
          ["tools", "🛠️", "Practical tools", "Sentence builder, jackal detector, breathing, journal, pocket cards.", "9 tools"],
          ["languages", "🌍", "Languages", "Jackal vs giraffe phrases, life-alienating patterns, NVC in other languages.", `${counts.langs} languages`],
          ["challenges", "🏆", "Challenges", "Quizzes, branching role-plays, a 30-day plan and badges.", `${counts.quiz} quiz questions`]
        ].map(([id, i, t, d, m]) => `<a class="path" href="#${id}"><span class="pi" aria-hidden="true">${i}</span><h3>${t}</h3><p>${d}</p><span class="meta">${m}</span></a>`).join("")}
      </div>
      <div class="stats-strip">
        <div><b>${counts.cases}</b>situations to practise</div>
        <div><b>${counts.fw}</b>communication models</div>
        <div><b>10</b>life stages</div>
        <div><b>${App.state.xp}</b>points earned so far</div>
      </div>`;

      const line = $("#hero-line", el), lab = $("#hero-label", el), labText = $("#hero-label-text", el), legend = $("#hero-legend", el);
      let idx = 0, phase = "jackal", timer = null, paused = false;
      const words = (txt, cls = "") => txt.split(" ").map((w, i) => `<span class="w ${cls}" style="transition-delay:${i * 40}ms">${esc(w)} </span>`).join("");
      function show() {
        const ex = HERO[idx];
        if (phase === "jackal") {
          line.className = "hero-line jackal";
          line.innerHTML = words(ex.jackal, "out");
          lab.classList.remove("giraffe");
          labText.textContent = "Jackal language: blame, labels and demands";
          $$("span[data-k]", legend).forEach((s) => s.classList.remove("on"));
        } else {
          line.className = "hero-line";
          line.innerHTML = ex.g.map(([k, t]) => `<span class="seg ${k}">${words(t, "out")}</span>`).join("");
          lab.classList.add("giraffe");
          labText.textContent = "Giraffe language: from the heart";
          ex.g.forEach(([k], i) => setTimeout(() => { const s = $(`span[data-k="${k}"]`, legend); s && s.classList.add("on"); }, calm() ? 0 : 400 + i * 500));
        }
        requestAnimationFrame(() => requestAnimationFrame(() => $$(".w", line).forEach((w) => w.classList.remove("out"))));
      }
      function advance() {
        if (phase === "jackal") phase = "giraffe"; else { phase = "jackal"; idx = (idx + 1) % HERO.length; }
        const ws = $$(".w", line);
        if (calm()) { show(); return; }
        ws.forEach((w) => w.classList.add("out"));
        setTimeout(show, 450);
      }
      function loop() { clearTimeout(timer); if (!paused) timer = setTimeout(() => { advance(); loop(); }, phase === "jackal" ? 2800 : 6200); }
      show(); loop();
      $("#hero-toggle", el).addEventListener("click", (e) => {
        paused = !paused; e.target.textContent = paused ? "Play" : "Pause"; e.target.setAttribute("aria-pressed", paused); loop();
      });
      $("#hero-next", el).addEventListener("click", () => { advance(); loop(); });
      return () => clearTimeout(timer);
    }
  });

  /* ================= LEARN ================= */
  const PEEL = [
    { said: "You’re so selfish!", layers: ["“You’re so selfish!” — what came out", "Judgment: “They only think of themselves.”", "Observation: you ate the last of the leftovers I’d saved for lunch.", "Feeling: disappointed and hungry.", "Need: consideration and to be able to count on plans.", "Request: “Would you text me before finishing shared food?”"] },
    { said: "Teachers here don’t care.", layers: ["“Teachers here don’t care.” — what came out", "Judgment: “Nobody notices my kid.”", "Observation: three emails about Sam’s reading haven’t had a reply.", "Feeling: anxious and discouraged.", "Need: partnership and support for Sam’s learning.", "Request: “Could we book a 15-minute call this week?”"] },
    { said: "Whatever. I don’t care.", layers: ["“Whatever. I don’t care.” — what came out", "Judgment: “They won’t listen anyway.”", "Observation: my idea was skipped twice in the meeting.", "Feeling: hurt and deflated.", "Need: to be heard and to contribute.", "Request: “Can I take two minutes to finish my point?”"] }
  ];
  const LAYER_CLASS = ["", "", "o", "f", "n", "r"];

  App.register("learn", {
    title: "The four steps", icon: "🧭", group: "Learn",
    render(el) {
      const comps = N.components || [];
      el.innerHTML = `${head("Learn", "Four steps from blame to understanding", "Each giraffe sentence has the same shape. Select a step to see what it means, common traps and before-and-after examples.")}
      <div class="panel flat">
        <div class="flow" role="tablist" aria-label="The four components">
          <div class="flow-line" aria-hidden="true"><i id="flow-fill"></i><span class="flow-pulse"></span></div>
          ${comps.map((c, i) => `<button class="flow-step ${c.key}" role="tab" aria-selected="${i === 0}" data-i="${i}"><span class="bubble-num">${c.key.toUpperCase()}</span><h3>${esc(c.name)}</h3><p>${esc(c.short)}</p></button>`).join("")}
        </div>
        <div id="comp-detail" class="component-detail" role="tabpanel"></div>
      </div>

      <section class="section">
        <div class="section-head"><h2>Peel back a jackal sentence</h2><p>Underneath every harsh line is a judgment, then a feeling, a need and a request waiting to be said. Select each layer to open it.</p></div>
        <div class="chips" id="peel-pick">${PEEL.map((p, i) => `<button class="chip" aria-pressed="${i === 0}" data-i="${i}">${esc(p.said)}</button>`).join("")}</div>
        <div class="layers" id="layers"></div>
      </section>

      <section class="section">
        <div class="section-head"><h2>Two directions, same four steps</h2><p>NVC is half speaking and half listening. When you express, you share your own OFNR. When you receive, you guess theirs.</p></div>
        <div class="two-way">
          <div class="lane"><h3>Expressing honestly</h3><ol>
            ${App.OFNR.map((c) => `<li>${ofnrChip(c.k)}<span><b>${c.name}.</b> ${["“When I see…”", "“I feel…”", "“…because I need…”", "“Would you be willing to…?”"][App.OFNR.indexOf(c)]}</span></li>`).join("")}
          </ol></div>
          <div class="mid" aria-hidden="true"><svg viewBox="0 0 60 120"><path class="dash" d="M10 30 H50 M40 20 L50 30 L40 40" fill="none" style="stroke:var(--accent)" stroke-width="3"/><path class="dash" d="M50 90 H10 M20 80 L10 90 L20 100" fill="none" style="stroke:var(--second)" stroke-width="3"/></svg></div>
          <div class="lane"><h3>Receiving empathically</h3><ol>
            ${App.OFNR.map((c) => `<li>${ofnrChip(c.k)}<span><b>${c.name}.</b> ${["“When you see/hear…”", "“Are you feeling…?”", "“…because you need…?”", "“Would you like me to…?”"][App.OFNR.indexOf(c)]}</span></li>`).join("")}
          </ol></div>
        </div>
      </section>

      ${N.tools && N.tools.pause ? `<section class="section">
        <div class="section-head"><h2>${esc(N.tools.pause.name)}</h2><p>${esc(N.tools.pause.note)}</p></div>
        <div class="flow" id="pause-flow">${N.tools.pause.steps.map((s, i) => `<button class="flow-step ${["o", "f", "n", "r"][i % 4]}" data-i="${i}" aria-selected="false"><span class="bubble-num">${i + 1}</span><h3>${esc(s)}</h3></button>`).join("")}</div>
        <div class="row"><button class="btn ghost small" id="pause-run">Walk me through it</button></div>
      </section>` : ""}

      <section class="section">
        <div class="section-head"><h2>Key ideas</h2><p>The principles that hold the four steps together.</p></div>
        <div class="concepts">${(N.concepts || []).map((c) => `<div class="concept"><span class="ci" aria-hidden="true">${c.icon}</span><h4>${esc(c.title)}</h4><p>${esc(c.text)}</p></div>`).join("")}</div>
      </section>`;

      const detail = $("#comp-detail", el), fill = $("#flow-fill", el);
      function showComp(i) {
        const c = comps[i];
        if (!c) return;
        $$(".flow > .flow-step", el).forEach((b, j) => b.setAttribute("aria-selected", j === i));
        fill.style.width = `${((i + 1) / comps.length) * 100}%`;
        detail.innerHTML = `
          <div class="stack ${c.key}">
            <h3 style="color:var(--c)">${esc(c.icon || "")} ${esc(c.name)}</h3>
            <p>${esc(c.long)}</p>
            <p><b>Ask yourself:</b> ${esc(c.ask)}</p>
            <h4>Common traps</h4><ul class="ticks warn">${(c.traps || []).map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
          </div>
          <div class="compare">${(c.examples || []).map((e) => `<div class="compare-row"><div class="bad">${esc(e.bad)}</div><div class="good">${esc(e.good)}</div></div>`).join("")}</div>`;
      }
      $(".flow", el).addEventListener("click", (e) => { const b = e.target.closest(".flow-step"); if (b) showComp(+b.dataset.i); });
      showComp(0);

      const layersEl = $("#layers", el);
      function showPeel(i) {
        const p = PEEL[i];
        layersEl.innerHTML = p.layers.map((t, j) => {
          const [k, ...rest] = t.split(":");
          const hasKey = rest.length && j > 0;
          return `<button class="layer ${LAYER_CLASS[j] || ""}" style="--i:${j};${j < 2 ? `--c:${j === 0 ? "var(--jackal)" : "var(--ink-2)"}` : ""}" data-j="${j}" aria-expanded="false">${j > 1 ? ofnrChip(LAYER_CLASS[j]) : `<span aria-hidden="true">${j === 0 ? "🐺" : "💭"}</span>`}<span><h4>${esc(hasKey ? k : "What was said")}</h4><small>${esc(hasKey ? rest.join(":").trim() : t)}</small></span></button>`;
        }).join("");
      }
      layersEl.addEventListener("click", (e) => {
        const b = e.target.closest(".layer"); if (!b) return;
        const open = !b.classList.contains("open");
        $$(".layer", layersEl).forEach((x) => { x.classList.remove("open"); x.setAttribute("aria-expanded", "false"); });
        if (open) { b.classList.add("open"); b.setAttribute("aria-expanded", "true"); }
      });
      $("#peel-pick", el).addEventListener("click", (e) => {
        const b = e.target.closest(".chip"); if (!b) return;
        $$("#peel-pick .chip", el).forEach((x) => x.setAttribute("aria-pressed", x === b));
        showPeel(+b.dataset.i);
      });
      showPeel(0);

      let pauseTimer;
      const pr = $("#pause-run", el);
      if (pr) pr.addEventListener("click", () => {
        const steps = $$("#pause-flow .flow-step", el);
        let i = 0;
        clearInterval(pauseTimer);
        const tick = () => { steps.forEach((s, j) => s.setAttribute("aria-selected", j === i)); i++; if (i > steps.length) { clearInterval(pauseTimer); steps.forEach((s) => s.setAttribute("aria-selected", "false")); App.addXP(5, "Practised the giraffe pause"); } };
        tick(); pauseTimer = setInterval(tick, 2200);
      });
      return () => clearInterval(pauseTimer);
    }
  });

  /* ================= FEELINGS & NEEDS ================= */
  App.register("feelings", {
    title: "Feelings & needs", icon: "🎨", group: "Learn",
    render(el) {
      const F = N.feelings || { met: [], unmet: [] };
      const sets = { met: { label: "Feelings when needs are met", groups: F.met, centre: "😊" }, unmet: { label: "Feelings when needs are not met", groups: F.unmet, centre: "😔" }, needs: { label: "Universal needs", groups: N.needs || [], centre: "💛" } };
      const basket = { feel: new Set(), need: new Set() };
      el.innerHTML = `${head("Vocabulary", "Name it to tame it", "A precise feeling word points straight to a need. Spin the wheels, collect words, and build a sentence that sounds like you.")}
      <div class="row" style="margin-bottom:16px"><div class="tabs" role="tablist" id="wheel-tabs">
        <button role="tab" aria-selected="true" data-set="unmet">Needs not met</button>
        <button role="tab" aria-selected="false" data-set="met">Needs met</button>
        <button role="tab" aria-selected="false" data-set="needs">Needs</button>
      </div></div>
      <div class="wheel-wrap">
        <div id="wheel-holder"></div>
        <div class="stack">
          <h3 id="group-title">Pick a slice of the wheel</h3>
          <div class="word-cloud" id="words"><p class="muted">Each slice opens a family of words. Select words to add them to your sentence.</p></div>
          <div class="panel flat" style="margin-top:18px">
            <h4>Your sentence</h4>
            <p id="basket-line" style="font-family:var(--font-display);font-size:var(--t-l);margin:0">I feel <em class="muted">…</em> because I need <em class="muted">…</em></p>
            <div class="row" style="margin-top:12px"><button class="btn ghost small" id="basket-clear">Clear</button><button class="btn small" id="basket-copy">Copy sentence</button></div>
          </div>
        </div>
      </div>

      <section class="section">
        <div class="section-head"><h2>Faux-feelings decoder</h2><p>Words like “ignored” or “manipulated” describe what we think others did to us. Decode them into real feelings and needs.</p></div>
        <div class="decoder panel flat">
          <div class="search"><input class="input" id="faux-in" list="faux-list" placeholder="Type a word like “ignored”, “used”, “judged”…" aria-label="Faux feeling"></div>
          <datalist id="faux-list">${(N.fauxFeelings || []).map((f) => `<option value="${esc(f.word)}">`).join("")}</datalist>
          <div class="faux-list">${(N.fauxFeelings || []).slice(0, 40).map((f) => `<button class="chip" data-faux="${esc(f.word)}">${esc(f.word)}</button>`).join("")}</div>
          <div id="faux-out"></div>
        </div>
      </section>

      <section class="section">
        <div class="section-head"><h2>Need or strategy?</h2><p>“I need you to…” is usually a strategy. Flip each card to find the universal need underneath.</p></div>
        <div class="grid g3">${(N.strategyVsNeed || []).map((s, i) => `<div class="flipper"><div class="flip-card" tabindex="0" role="button" aria-pressed="false" data-i="${i}"><div class="flip-face front"><small>Strategy</small><span>${esc(s.strategy)}</span></div><div class="flip-face back"><small>Needs underneath</small><span>${esc(s.needs.join(", "))}</span></div></div></div>`).join("")}</div>
      </section>`;

      const holder = $("#wheel-holder", el), wordsEl = $("#words", el), gt = $("#group-title", el);
      let curSet = "unmet";
      function drawWheel() {
        const s = sets[curSet];
        holder.innerHTML = App.viz.donut(s.groups, s.centre);
        gt.textContent = s.label;
        wordsEl.innerHTML = `<p class="muted">Pick a slice to see its words.</p>`;
      }
      function openGroup(i) {
        const g = sets[curSet].groups[i];
        $$(".seg", holder).forEach((p, j) => { p.classList.toggle("active", j === i); p.classList.toggle("dim", j !== i); });
        gt.textContent = `${g.icon ? g.icon + " " : ""}${g.group}`;
        const kind = curSet === "needs" ? "need" : "feel";
        wordsEl.innerHTML = g.words.map((w, d) => `<button class="word" style="--d:${d};--wc:hsl(${g.hue != null ? g.hue : 200} 60% 45%)" data-w="${esc(w)}" data-kind="${kind}" aria-pressed="${basket[kind].has(w)}">${esc(w)}</button>`).join("");
      }
      holder.addEventListener("click", (e) => { const p = e.target.closest(".seg"); if (p) openGroup(+p.dataset.i); });
      holder.addEventListener("keydown", (e) => { const p = e.target.closest(".seg"); if (p && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); openGroup(+p.dataset.i); } });
      $("#wheel-tabs", el).addEventListener("click", (e) => {
        const b = e.target.closest("[data-set]"); if (!b) return;
        $$("#wheel-tabs button", el).forEach((x) => x.setAttribute("aria-selected", x === b));
        curSet = b.dataset.set; drawWheel();
      });
      const joinNice = (arr) => arr.length < 2 ? arr.join("") : arr.slice(0, -1).join(", ") + " and " + arr[arr.length - 1];
      function sentence() {
        const f = [...basket.feel], n = [...basket.need];
        return `I feel ${f.length ? joinNice(f) : "…"} because I need ${n.length ? joinNice(n) : "…"}.`;
      }
      function drawBasket() {
        const f = [...basket.feel], n = [...basket.need];
        $("#basket-line", el).innerHTML = `I feel ${f.length ? `<span class="hl f">${esc(joinNice(f))}</span>` : '<em class="muted">…</em>'} because I need ${n.length ? `<span class="hl n">${esc(joinNice(n))}</span>` : '<em class="muted">…</em>'}.`;
      }
      wordsEl.addEventListener("click", (e) => {
        const b = e.target.closest(".word"); if (!b) return;
        const set = basket[b.dataset.kind], w = b.dataset.w;
        if (set.has(w)) set.delete(w); else set.add(w);
        b.setAttribute("aria-pressed", set.has(w));
        drawBasket();
      });
      $("#basket-clear", el).addEventListener("click", () => { basket.feel.clear(); basket.need.clear(); drawBasket(); $$(".word", wordsEl).forEach((w) => w.setAttribute("aria-pressed", "false")); });
      $("#basket-copy", el).addEventListener("click", () => {
        const t = sentence();
        (navigator.clipboard ? navigator.clipboard.writeText(t) : Promise.reject()).then(() => App.toast("Sentence copied", "📋"), () => App.toast(t, "📋"));
        if (basket.feel.size && basket.need.size) App.addXP(3, "Named a feeling and a need");
      });
      drawWheel();

      const out = $("#faux-out", el);
      function decode(word) {
        const w = word.trim().toLowerCase();
        if (!w) { out.innerHTML = ""; return; }
        const f = (N.fauxFeelings || []).find((x) => x.word.toLowerCase() === w) || (N.fauxFeelings || []).find((x) => x.word.toLowerCase().startsWith(w));
        out.innerHTML = f ? `<div class="decode-result" style="margin-top:8px">
          <span class="k">You said</span><span><s style="color:var(--jackal)">I feel ${esc(f.word)}</s> <span class="muted small">(a thought about what someone did)</span></span>
          <span class="k f" style="color:var(--f)">You may feel</span><span class="word-cloud">${f.feelings.map((x, d) => `<span class="word" style="--d:${d};--wc:var(--f)">${esc(x)}</span>`).join("")}</span>
          <span class="k" style="color:var(--n)">Needs</span><span class="word-cloud">${f.needs.map((x, d) => `<span class="word" style="--d:${d + 3};--wc:var(--n)">${esc(x)}</span>`).join("")}</span>
          <span class="k" style="color:var(--giraffe)">Try</span><span><b>“I feel ${esc(f.feelings[0])} because I need ${esc(f.needs[0])}.”</b></span>
        </div>` : `<p class="muted" style="margin-top:8px">“${esc(word)}” isn’t in the decoder yet. Ask: is it something someone did to me? If so, look for the feeling underneath it.</p>`;
      }
      $("#faux-in", el).addEventListener("input", App.debounce((e) => decode(e.target.value), 200));
      el.addEventListener("click", (e) => {
        const c = e.target.closest("[data-faux]");
        if (c) { $("#faux-in", el).value = c.dataset.faux; decode(c.dataset.faux); }
        const card = e.target.closest(".flip-card");
        if (card) { card.classList.toggle("flipped"); card.setAttribute("aria-pressed", card.classList.contains("flipped")); }
      });
      el.addEventListener("keydown", (e) => { const card = e.target.closest(".flip-card"); if (card && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); card.click(); } });
    }
  });
})();
