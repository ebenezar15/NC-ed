/* Speak Giraffe — Tools and Challenges */
(function () {
  "use strict";
  const { esc, $, $$, head, ofnrChip, debounce, shuffle } = App;
  const N = window.NVC;
  const T = N.tools || {};
  const copy = (t) => (navigator.clipboard ? navigator.clipboard.writeText(t) : Promise.reject()).then(() => App.toast("Copied to clipboard", "📋"), () => App.toast("Copy isn’t available in this browser", "⚠️"));

  /* ================= TOOLS ================= */
  const TOOLS = [
    ["builder", "🧱", "Sentence builder"],
    ["detector", "🔎", "Jackal detector"],
    ["breathe", "🌬️", "Breathing"],
    ["anger", "🔥", "Anger, fully expressed"],
    ["journal", "📓", "Self-empathy journal"],
    ["planner", "🗒️", "Conversation planner"],
    ["gratitude", "🙏", "Gratitude"],
    ["no", "✋", "Saying no & repair"],
    ["cards", "🃏", "Pocket cards"]
  ];

  function checkRequest(r) {
    const t = r.toLowerCase();
    return {
      positive: !!t && !/\b(don'?t|do not|stop|never|quit|no more|not)\b/.test(t),
      concrete: !!t && !/\b(respect|more|better|appreciate me|be nice|care|understand me|support me)\b/.test(t) && t.split(/\s+/).length >= 4,
      present: /\b(would you|could you|are you willing|can you|will you|now|today|tonight|right now)\b/.test(t),
      genuine: !!t && !/\b(or else|you must|you have to|you should|you need to|otherwise)\b/.test(t),
      action: /\?$/.test(r.trim())
    };
  }

  const toolRender = {
    builder(box) {
      const allFeel = [...(N.feelings ? N.feelings.met.concat(N.feelings.unmet) : [])].flatMap((g) => g.words);
      const allNeeds = (N.needs || []).flatMap((g) => g.words);
      box.innerHTML = `<div class="builder">
        <div class="stack">
          ${[["o", "Observation", "When I see / hear…", "When I saw the dishes in the sink this morning"], ["f", "Feeling", "I feel…", "frustrated"], ["n", "Need", "…because I need / value…", "order and shared effort"], ["r", "Request", "Would you be willing to…?", "Would you wash them before dinner tonight?"]].map(([k, l, hint, ph]) => `
            <div class="field ${k}"><label for="b-${k}">${ofnrChip(k)} ${l}</label><input class="input" id="b-${k}" data-k="${k}" placeholder="${esc(ph)}" ${k === "f" ? 'list="feel-list"' : k === "n" ? 'list="need-list"' : ""} autocomplete="off"><span class="muted small">${hint}</span></div>`).join("")}
          <datalist id="feel-list">${allFeel.map((w) => `<option value="${esc(w)}">`).join("")}</datalist>
          <datalist id="need-list">${allNeeds.map((w) => `<option value="${esc(w)}">`).join("")}</datalist>
          <div class="panel flat"><h4>Is your request…</h4><div class="checklist" id="req-check">${(T.requestChecklist || []).map((c) => `<label><input type="checkbox" disabled data-key="${c.key}"> ${esc(c.label)}</label>`).join("")}</div></div>
        </div>
        <div class="preview" aria-live="polite"><div class="pv" id="pv"></div><div class="warnings" id="warns"></div>
          <div class="row" style="margin-top:18px"><button class="btn accent small" id="b-copy">Copy</button><button class="btn ghost small" id="b-save" style="color:var(--bg);border-color:currentColor">Save to journal</button><button class="btn ghost small" id="b-clear" style="color:var(--bg);border-color:currentColor">Clear</button></div>
        </div>
      </div>`;
      const v = (k) => $(`#b-${k}`, box).value.trim();
      function sentence() {
        const o = v("o"), f = v("f"), n = v("n"), r = v("r");
        const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
        const oo = o ? cap(o.replace(/[.,]$/, "")) : "", ff = f.replace(/^i feel\s*/i, ""), nn = n.replace(/^(because )?i need\s*/i, "");
        return { o: oo, f: ff, n: nn, r, text: `${oo ? oo + ", " : ""}${ff ? `I feel ${ff}` : ""}${nn ? ` because I need ${nn}.` : ff ? "." : ""} ${r}`.trim() };
      }
      function update() {
        const s = sentence();
        const part = (k, txt, empty) => (txt ? `<span class="${k}">${esc(txt)}</span>` : `<em>${empty}</em>`);
        $("#pv", box).innerHTML = `${part("o", s.o, "When I see…")}, I feel ${part("f", s.f, "…")} because I need ${part("n", s.n, "…")}. ${part("r", s.r, "Would you…?")}`;
        const warns = [];
        App.scan(v("o")).forEach((h) => warns.push(`Observation: “${h.jw.w}” may sound like a judgment. ${h.jw.hint}`));
        const fl = v("f").toLowerCase();
        if (/^(that|like|as if)\b|\byou\b/.test(fl.replace(/^i feel\s*/, ""))) warns.push("Feeling: “I feel that / like / you…” usually introduces a thought, not a feeling. Try one word such as worried, sad or relieved.");
        const faux = (N.fauxFeelings || []).find((x) => fl.includes(x.word.toLowerCase()));
        if (faux) warns.push(`Feeling: “${faux.word}” is a faux feeling. Try ${faux.feelings.slice(0, 3).join(", ")}, and look at the need for ${faux.needs[0]}.`);
        const nl = v("n").toLowerCase();
        if (/\b(you|him|her|them)\b/.test(nl) || /\bto (stop|call|do|be|get)\b/.test(nl)) warns.push("Need: this sounds like a strategy involving a specific person. Universal needs don’t depend on one person, e.g. support, rest, respect.");
        App.scan(v("r")).forEach((h) => warns.push(`Request: “${h.jw.w}” can sound like a demand. ${h.jw.hint}`));
        const rc = checkRequest(v("r"));
        $$("#req-check input", box).forEach((c) => (c.checked = !!rc[c.dataset.key]));
        const complete = s.o && s.f && s.n && s.r;
        $("#warns", box).innerHTML = warns.map((w) => `<div class="warn-item">${esc(w)}</div>`).join("") + (complete && !warns.length ? `<div class="ok-item">This reads like giraffe. Say it slowly, then listen.</div>` : "");
      }
      box.addEventListener("input", debounce(update, 120));
      $("#b-copy", box).addEventListener("click", () => {
        copy(sentence().text);
        const s = sentence();
        if (s.o && s.f && s.n && s.r) { App.state.translations = (App.state.translations || 0) + 1; App.addXP(5, "Built a giraffe sentence"); if (App.state.translations >= 5) App.award("translator"); }
      });
      $("#b-save", box).addEventListener("click", () => { const s = sentence(); if (!s.f && !s.o) return App.toast("Fill in at least an observation and a feeling first", "✏️"); App.state.journal.unshift({ at: Date.now(), prompt: "Sentence builder", text: s.text }); App.save(); App.toast("Saved to your journal", "📓"); });
      $("#b-clear", box).addEventListener("click", () => { $$("input.input", box).forEach((i) => (i.value = "")); update(); });
      update();
    },

    detector(box) {
      box.innerHTML = `<div class="grid g2" style="align-items:start">
        <div class="field"><label for="det-in">Paste a message, email or text you’re about to send</label><textarea class="input" id="det-in" style="min-height:220px" placeholder="e.g. You always leave things to the last minute and it’s honestly ridiculous. You should know better by now."></textarea>
        <div class="row"><button class="btn ghost small" id="det-sample">Try an example</button></div></div>
        <div><div class="lab small" style="font-weight:700;margin-bottom:6px">What a listener may hear</div><div class="marked" id="det-out"><span class="muted">Highlighted words may sound like judgment, blame or demands. Hover or tap them for a hint.</span></div><div id="det-sum" class="stack" style="margin-top:12px"></div></div>
      </div>`;
      const run = () => {
        const t = $("#det-in", box).value;
        if (!t.trim()) { $("#det-out", box).innerHTML = '<span class="muted">Paste some text to scan it.</span>'; $("#det-sum", box).innerHTML = ""; return; }
        const { html, hits } = App.markText(t);
        $("#det-out", box).innerHTML = html;
        const kinds = {};
        hits.forEach((h) => (kinds[h.jw.kind] = (kinds[h.jw.kind] || 0) + 1));
        $("#det-sum", box).innerHTML = hits.length ? `<div class="chips">${Object.entries(kinds).map(([k, n]) => `<span class="tag">${esc(k)} × ${n}</span>`).join("")}</div><p class="small muted">Try rewriting with the sentence builder, starting from what a camera would record.</p>` : `<div class="ok-item">No jackal words spotted. Tone still matters, so read it aloud once.</div>`;
      };
      $("#det-in", box).addEventListener("input", debounce(run, 200));
      $("#det-sample", box).addEventListener("click", () => { $("#det-in", box).value = "You always leave things to the last minute and it’s honestly ridiculous. You should know better by now. Whatever — do what you want, as usual."; run(); });
    },

    breathe(box) {
      const ex = (T.breathing || []).length ? T.breathing : [{ name: "Box breathing", how: "In, hold, out, hold — four counts each.", inhale: 4, hold: 4, exhale: 4, ages: "All" }];
      let cur = 0, timer = null, running = false;
      box.innerHTML = `<div class="grid g2" style="align-items:center">
        <div class="breath"><div class="breath-orb" id="orb"><span class="ring r2"></span><span class="ring"></span><span class="bt" id="bt">Ready<small>press start</small></span></div>
          <div class="row"><button class="btn accent" id="b-start">Start</button><span class="muted small" id="b-count"></span></div></div>
        <div class="stack"><div class="chips" id="b-ex">${ex.map((e, i) => `<button class="chip" data-i="${i}" aria-pressed="${i === 0}">${esc(e.name)}</button>`).join("")}</div><div id="b-how"></div>
          ${T.pause ? `<div class="panel flat"><h4>${esc(T.pause.name)}</h4><div class="chips">${T.pause.steps.map((s, i) => `<span class="tag">${i + 1}. ${esc(s)}</span>`).join("")}</div></div>` : ""}</div>
      </div>`;
      const orb = $("#orb", box), bt = $("#bt", box);
      const how = () => { const e = ex[cur]; $("#b-how", box).innerHTML = `<h3>${esc(e.name)}</h3><p>${esc(e.how)}</p><p class="muted small">In ${e.inhale}s${e.hold ? ` · hold ${e.hold}s` : ""} · out ${e.exhale}s · ${esc(e.ages || "")}</p>`; };
      function stop() { clearTimeout(timer); running = false; orb.className = "breath-orb"; bt.innerHTML = "Ready<small>press start</small>"; $("#b-start", box).textContent = "Start"; }
      function cycle(n) {
        if (!running) return;
        const e = ex[cur];
        $("#b-count", box).textContent = `Breath ${n} of 6`;
        const phases = [["inhale", "Breathe in", e.inhale], ...(e.hold ? [["hold", "Hold", e.hold]] : []), ["exhale", "Breathe out", e.exhale], ...(e.hold && /box/i.test(e.name) ? [["hold-out", "Hold", e.hold]] : [])];
        let p = 0;
        const step = () => {
          if (!running) return;
          if (p >= phases.length) { if (n >= 6) { stop(); App.addXP(5, "Finished a breathing round"); bt.innerHTML = "Well done<small>notice how you feel</small>"; return; } return cycle(n + 1); }
          const [cls, label, secs] = phases[p++];
          orb.style.setProperty("--dur", secs + "s");
          orb.className = "breath-orb " + (cls === "inhale" ? "inhale" : cls === "hold" ? "hold inhale" : "");
          let left = secs;
          bt.innerHTML = `${label}<small>${left}</small>`;
          const tick = () => { left--; if (left > 0 && running) { bt.innerHTML = `${label}<small>${left}</small>`; timer = setTimeout(tick, 1000); } else step(); };
          timer = setTimeout(tick, 1000);
        };
        step();
      }
      $("#b-start", box).addEventListener("click", (e) => { if (running) return stop(); running = true; e.target.textContent = "Stop"; cycle(1); });
      $("#b-ex", box).addEventListener("click", (e) => { const b = e.target.closest(".chip"); if (!b) return; $$("#b-ex .chip", box).forEach((x) => x.setAttribute("aria-pressed", x === b)); cur = +b.dataset.i; stop(); how(); });
      how();
      return stop;
    },

    anger(box) {
      const steps = T.anger || [];
      box.innerHTML = `<p class="lede">Marshall Rosenberg taught that anger points to an unmet need hidden behind judgment thoughts. Work through each step for a situation that’s bothering you.</p>
      <ol class="steps-list" style="margin-top:20px">${steps.map((s, i) => `<li><span><b>${esc(s.step)}.</b> ${esc(s.text)}<br><span class="muted small">For example: ${esc(s.example)}</span><textarea class="input" data-i="${i}" style="margin-top:8px;min-height:70px" aria-label="${esc(s.step)}"></textarea></span></li>`).join("")}</ol>
      <div class="row" style="margin-top:16px"><button class="btn accent" id="ang-save">Save to journal</button></div>`;
      $("#ang-save", box).addEventListener("click", () => {
        const txt = $$("textarea", box).map((t, i) => (t.value.trim() ? `${steps[i].step}: ${t.value.trim()}` : "")).filter(Boolean).join("\n");
        if (!txt) return App.toast("Write something in at least one step first", "✏️");
        App.state.journal.unshift({ at: Date.now(), prompt: "Anger, fully expressed", text: txt }); App.save();
        App.addXP(6, "Transformed anger into needs"); checkJournal();
      });
    },

    journal(box) {
      const prompts = T.selfEmpathyPrompts || ["What am I feeling and needing right now?"];
      let p = App.pick(prompts);
      box.innerHTML = `<div class="grid g2" style="align-items:start">
        <div class="stack"><div class="panel flat"><small class="muted">Today’s prompt</small><p id="j-prompt" style="font-family:var(--font-display);font-size:var(--t-l);margin:6px 0 0">${esc(p)}</p><button class="btn ghost small" id="j-new" style="margin-top:10px">Another prompt</button></div>
          <textarea class="input" id="j-text" style="min-height:180px" placeholder="Write freely. Entries stay in this browser only." aria-label="Journal entry"></textarea>
          <button class="btn accent" id="j-save">Save entry</button></div>
        <div><h3>Your entries</h3><div id="j-list"></div></div>
      </div>`;
      const draw = () => {
        $("#j-list", box).innerHTML = App.state.journal.length ? App.state.journal.slice(0, 30).map((e, i) => `<div class="journal-entry"><time>${new Date(e.at).toLocaleString()}</time><b class="small">${esc(e.prompt)}</b><p>${esc(e.text).replace(/\n/g, "<br>")}</p><button class="btn ghost small danger" data-del="${i}" style="justify-self:start">Delete</button></div>`).join("") : `<p class="muted">No entries yet. Pick a prompt and write a few lines. Even one sentence counts.</p>`;
      };
      $("#j-new", box).addEventListener("click", () => { p = App.pick(prompts); $("#j-prompt", box).textContent = p; });
      $("#j-save", box).addEventListener("click", () => {
        const t = $("#j-text", box).value.trim();
        if (!t) return App.toast("Write something first", "✏️");
        App.state.journal.unshift({ at: Date.now(), prompt: p, text: t }); App.save();
        $("#j-text", box).value = ""; draw(); App.addXP(5, "Journal entry saved"); checkJournal();
      });
      $("#j-list", box).addEventListener("click", (e) => {
        const d = e.target.closest("[data-del]"); if (!d) return;
        if (d.dataset.armed) { App.state.journal.splice(+d.dataset.del, 1); App.save(); draw(); App.toast("Entry deleted", "🗑️"); return; }
        d.dataset.armed = "1"; d.textContent = "Tap again to delete";
        setTimeout(() => { if (d.isConnected) { delete d.dataset.armed; d.textContent = "Delete"; } }, 4000);
      });
      draw();
    },

    planner(box) {
      const qs = T.conversationPlanner || [];
      box.innerHTML = `<p class="lede">Before a hard conversation, a few minutes of preparation helps you start from connection rather than defence.</p>
      <div class="stack" style="margin-top:18px">${qs.map((q, i) => `<div class="field"><label for="pl-${i}">${i + 1}. ${esc(q)}</label><textarea class="input" id="pl-${i}" style="min-height:64px"></textarea></div>`).join("")}</div>
      <div class="row" style="margin-top:16px"><button class="btn accent" id="pl-copy">Copy my plan</button><button class="btn ghost print-only" id="pl-print">Print</button></div>`;
      const plan = () => qs.map((q, i) => `${q}\n${$(`#pl-${i}`, box).value.trim() || "—"}`).join("\n\n");
      $("#pl-copy", box).addEventListener("click", () => { copy(plan()); App.addXP(4, "Prepared a conversation"); });
      $("#pl-print", box).addEventListener("click", () => window.print());
    },

    gratitude(box) {
      const g = T.gratitude || { steps: [], examples: [] };
      box.innerHTML = `<div class="grid g2" style="align-items:start">
        <div class="stack"><p>NVC gratitude says more than “thanks, great job”. It names three things:</p><ol class="steps-list">${g.steps.map((s) => `<li><span>${esc(s)}</span></li>`).join("")}</ol>
          <div class="field"><label for="gr-a">What they did</label><input class="input" id="gr-a" placeholder="When you stayed late to help me set up"></div>
          <div class="field"><label for="gr-n">The needs it met</label><input class="input" id="gr-n" list="need-list2" placeholder="support and ease"></div>
          <div class="field"><label for="gr-f">How you feel</label><input class="input" id="gr-f" placeholder="relieved and grateful"></div>
          <datalist id="need-list2">${(N.needs || []).flatMap((x) => x.words).map((w) => `<option value="${esc(w)}">`).join("")}</datalist>
          <button class="btn accent" id="gr-copy">Copy my thank-you</button></div>
        <div><div class="preview"><div class="pv" id="gr-pv"></div></div><h4 style="margin-top:20px">Examples</h4>${ul(g.examples)}</div>
      </div>`;
      const txt = () => { const a = $("#gr-a", box).value.trim(), n = $("#gr-n", box).value.trim(), f = $("#gr-f", box).value.trim(); return `${a || "When you…"}, it met my need for ${n || "…"}, and I feel ${f || "…"}. Thank you.`; };
      const upd = () => ($("#gr-pv", box).textContent = txt());
      box.addEventListener("input", upd); upd();
      $("#gr-copy", box).addEventListener("click", () => { copy(txt()); App.addXP(4, "Expressed gratitude the giraffe way"); });
    },

    no(box) {
      box.innerHTML = `<div class="grid g2" style="align-items:start">
        <div><h3>A giraffe “no”</h3><p class="muted small">Every “no” is a “yes” to another need. Say which one.</p>${(T.sayingNo || []).map((s) => `<div class="phrase"><small>Asked: ${esc(s.request)}</small><q>${esc(s.no)}</q></div>`).join("")}</div>
        <div><h3>Repair after a rupture</h3><ol class="steps-list">${(T.repair || []).map((r) => `<li><span><b>${esc(r.step)}.</b> ${esc(r.text)}<br><span class="muted small">${esc(r.example)}</span></span></li>`).join("")}</ol></div>
      </div>`;
    },

    cards(box) {
      box.innerHTML = `<div class="row no-print" style="margin-bottom:16px"><p class="muted" style="margin:0">Print or copy these and keep them in a wallet, on the fridge or by your desk.</p><span class="spacer"></span><button class="btn accent print-only" id="pc-print">Print cards</button><button class="btn ghost" id="pc-copy">Copy all cards</button></div>
      <div class="pocket">${(T.pocketCards || []).map((c) => `<div class="pcard"><h4>${esc(c.title)}</h4><ul>${c.lines.map((l) => `<li>${esc(l)}</li>`).join("")}</ul></div>`).join("")}</div>`;
      $("#pc-print", box).addEventListener("click", () => window.print());
      $("#pc-copy", box).addEventListener("click", () => copy((T.pocketCards || []).map((c) => `${c.title}\n${c.lines.map((l) => "• " + l).join("\n")}`).join("\n\n")));
    }
  };
  function ul(arr) { return `<ul class="ticks">${(arr || []).map((x) => `<li>${esc(x)}</li>`).join("")}</ul>`; }
  function checkJournal() { if (App.state.journal.length >= 5) App.award("journal-5"); }

  App.register("tools", {
    title: "Practical tools", icon: "🛠️", group: "Practise",
    render(el, params) {
      let cur = TOOLS.some((t) => t[0] === params[0]) ? params[0] : "builder", stopFn = null;
      el.innerHTML = `${head("Toolbox", "Tools for the moment it matters", "Build a sentence before you send it, scan a message for judgment, calm your breathing, and keep a private self-empathy journal.")}
      <div class="tool-nav chips" id="tool-nav">${TOOLS.map(([id, i, t]) => `<button class="chip" data-tool="${id}" aria-pressed="${id === cur}"><span aria-hidden="true">${i}</span>${t}</button>`).join("")}</div>
      <div id="tool-box" class="view-enter"></div>`;
      const box = $("#tool-box", el);
      function show(id) {
        if (stopFn) stopFn();
        cur = id;
        $$("#tool-nav .chip", el).forEach((b) => b.setAttribute("aria-pressed", b.dataset.tool === id));
        App.setHash(`tools/${id}`);
        box.classList.remove("view-enter"); void box.offsetWidth; box.classList.add("view-enter");
        stopFn = toolRender[id](box) || null;
      }
      $("#tool-nav", el).addEventListener("click", (e) => { const b = e.target.closest("[data-tool]"); if (b) show(b.dataset.tool); });
      show(cur);
      return () => stopFn && stopFn();
    }
  });

  /* ================= CHALLENGES ================= */
  const C = N.challenges || { quizzes: [], dialogues: [], daily: [], badges: [] };

  function overview(el) {
    const s = App.state;
    const doneDays = Object.keys(s.days).length;
    const nextDay = (C.daily.find((d) => !s.days[d.day]) || {}).day;
    el.innerHTML = `${head("Challenges", "Practise until it feels like you", "Quick quizzes sharpen your ear, role-plays let you rehearse real conversations, and the 30-day plan turns it into a habit.")}
      <section>
        <div class="section-head"><h2>Quizzes</h2><p>10 random questions per round. Turn on speed mode for 15 seconds per question.</p><label class="toggle small"><input type="checkbox" id="speed"> Speed mode</label></div>
        <div class="deck-grid">${C.quizzes.map((q) => `<button class="deck" data-quiz="${q.id}"><span class="di" aria-hidden="true">${q.icon}</span><h3>${esc(q.name)}</h3><p>${esc(q.description)}</p><span class="best">${s.quiz[q.id] != null ? `Best ${s.quiz[q.id]}%` : `${q.items.length} questions`}</span></button>`).join("")}</div>
      </section>
      <section class="section">
        <div class="section-head"><h2>Role-plays</h2><p>Branching conversations. Your words move the connection meter.</p></div>
        <div class="deck-grid">${C.dialogues.map((d) => `<button class="deck" data-dlg="${d.id}"><span class="di" aria-hidden="true">${d.icon}</span><h3>${esc(d.title)}</h3><p>${esc(d.context)}</p><span class="best">${s.dialogues[d.id] ? `Best ending: ${esc(s.dialogues[d.id])}` : `You: ${esc(d.you)}`}</span></button>`).join("")}</div>
      </section>
      <section class="section">
        <div class="section-head"><h2>30-day practice</h2><p>${doneDays} of ${C.daily.length} days done${nextDay ? ` · day ${nextDay} is next` : " · all done!"}</p></div>
        <div class="days" id="days">${C.daily.map((d) => `<button class="day ${s.days[d.day] ? "done" : ""} ${d.day === nextDay ? "current" : ""}" data-day="${d.day}" aria-label="Day ${d.day}: ${esc(d.title)}${s.days[d.day] ? " (done)" : ""}">${d.day}</button>`).join("")}</div>
      </section>
      <section class="section">
        <div class="section-head"><h2>Badges</h2><p>${Object.keys(s.badges).length} of ${C.badges.length} earned</p></div>
        <div class="badges">${C.badges.map((b) => `<div class="badge ${s.badges[b.id] ? "earned" : ""}"><span class="bi" aria-hidden="true">${b.icon}</span><b>${esc(b.name)}</b><small>${esc(s.badges[b.id] ? b.desc : b.rule)}</small></div>`).join("")}</div>
      </section>`;
    el.addEventListener("click", (e) => {
      const q = e.target.closest("[data-quiz]"), d = e.target.closest("[data-dlg]"), day = e.target.closest("[data-day]");
      if (q) { App.speed = $("#speed", el).checked; location.hash = `#challenges/quiz/${q.dataset.quiz}`; }
      if (d) location.hash = `#challenges/dialogue/${d.dataset.dlg}`;
      if (day) openDay(+day.dataset.day, () => App.go("#challenges", true));
    });
  }

  function openDay(n, after) {
    const d = C.daily.find((x) => x.day === n);
    const done = !!App.state.days[n];
    App.drawer(`<span class="tag">Day ${d.day} of ${C.daily.length}</span><h2 style="margin-top:12px">${esc(d.title)}</h2>
      <h3>Today’s practice</h3><p style="font-size:var(--t-l)">${esc(d.task)}</p>
      <h3>Reflect</h3><p>${esc(d.reflect)}</p>
      <textarea class="input" id="day-note" placeholder="Optional: jot your reflection (saved to your journal)"></textarea>
      <div class="row" style="margin-top:14px"><button class="btn accent" id="day-done">${done ? "Mark as not done" : "Mark day as done"}</button></div>`, (body, close) => {
      $("#day-done", body).addEventListener("click", () => {
        if (done) delete App.state.days[n];
        else {
          App.state.days[n] = Date.now();
          const note = $("#day-note", body).value.trim();
          if (note) { App.state.journal.unshift({ at: Date.now(), prompt: `Day ${n}: ${d.reflect}`, text: note }); checkJournal(); }
          App.addXP(10, `Day ${n} complete`);
          if (Object.keys(App.state.days).length >= C.daily.length) App.award("day-30");
        }
        App.save(); close(); after && after();
      });
    });
  }

  function runQuiz(el, id) {
    const deck = C.quizzes.find((q) => q.id === id);
    if (!deck) return overview(el);
    const items = shuffle(deck.items).slice(0, 10);
    const speed = !!App.speed;
    let i = 0, score = 0, timer = null, left = 15;
    el.innerHTML = `<div class="quiz"><div class="quiz-top"><a class="btn ghost small" href="#challenges">Back</a><div class="quiz-progress"><i id="qp" style="width:0"></i></div><span class="timer" id="qt"></span></div><div id="qbox"></div></div>`;
    const box = $("#qbox", el);
    function show() {
      clearInterval(timer);
      const it = items[i];
      $("#qp", el).style.width = `${(i / items.length) * 100}%`;
      box.innerHTML = `<div class="q-card"><p class="muted small">${esc(deck.icon)} ${esc(deck.name)} · question ${i + 1} of ${items.length}</p><div class="q">${esc(it.q)}</div><div class="options">${it.options.map((o, k) => `<button class="opt" data-k="${k}">${esc(o)}</button>`).join("")}</div><div id="qx"></div></div>`;
      if (speed) {
        left = 15; $("#qt", el).textContent = `${left}s`;
        timer = setInterval(() => { left--; $("#qt", el).textContent = `${left}s`; if (left <= 0) { clearInterval(timer); answer(-1); } }, 1000);
      }
    }
    function answer(k) {
      clearInterval(timer);
      const it = items[i], ok = k === it.answer;
      if (ok) score++;
      $$(".opt", box).forEach((b) => { b.disabled = true; if (+b.dataset.k === it.answer) b.classList.add("right"); else if (+b.dataset.k === k) b.classList.add("wrong"); });
      $("#qx", box).innerHTML = `<div class="explain"><b>${ok ? "Yes! " : k === -1 ? "Time’s up. " : "Not quite. "}</b>${esc(it.explain)}</div><div class="row" style="margin-top:14px"><button class="btn accent" id="qn">${i + 1 < items.length ? "Next question" : "See my score"}</button></div>`;
      $("#qn", box).focus();
    }
    function finish() {
      const pct = Math.round((score / items.length) * 100);
      $("#qp", el).style.width = "100%"; $("#qt", el).textContent = "";
      const s = App.state;
      const prev = s.quiz[id];
      s.quiz[id] = Math.max(prev || 0, pct); App.save();
      App.addXP(score * 3 + (speed ? 5 : 0), `Quiz: ${score}/${items.length}`);
      App.award("first-quiz");
      if (pct === 100) { App.award("perfect-quiz"); App.confetti(); }
      if (C.quizzes.every((q) => s.quiz[q.id] != null)) App.award("all-quizzes");
      box.innerHTML = `<div class="q-card" style="text-align:center"><div class="score-big">${score}/${items.length}</div><p class="lede" style="margin:12px auto">${pct === 100 ? "Perfect giraffe ears." : pct >= 70 ? "Strong. A few more rounds and it’ll be automatic." : "Every round tunes your ear. Read the explanations and try again."}</p><div class="row" style="justify-content:center"><button class="btn accent" id="again">Play again</button><a class="btn ghost" href="#challenges">All challenges</a></div></div>`;
      $("#again", box).addEventListener("click", () => runQuiz(el, id));
    }
    box.addEventListener("click", (e) => {
      const o = e.target.closest(".opt:not([disabled])"); if (o) return answer(+o.dataset.k);
      if (e.target.closest("#qn")) { i++; i < items.length ? show() : finish(); }
    });
    show();
    return () => clearInterval(timer);
  }

  function runDialogue(el, id) {
    const d = C.dialogues.find((x) => x.id === id);
    if (!d) return overview(el);
    let node = d.start, total = 0, steps = 0, timers = [];
    el.innerHTML = `<div class="dialogue"><div class="row" style="margin-bottom:12px"><a class="btn ghost small" href="#challenges">Back</a><span class="spacer"></span><button class="btn ghost small" id="restart">Start over</button></div>
      <h2>${esc(d.icon)} ${esc(d.title)}</h2><p class="muted">${esc(d.context)} You are <b>${esc(d.you)}</b>; talking with <b>${esc(d.them)}</b>.</p>
      <div class="meter"><div class="ends"><span>Disconnected</span><span>Connection</span><span>Connected</span></div><div class="track"><span class="knob" id="knob" style="left:50%">🦒</span></div></div>
      <div class="chat" id="chat"></div><div class="options" id="choices"></div></div>`;
    const chat = $("#chat", el), choices = $("#choices", el);
    const later = (fn, ms) => timers.push(setTimeout(fn, App.calm() ? 0 : ms));
    const add = (cls, who, text) => { const m = document.createElement("div"); m.className = `msg ${cls}`; m.innerHTML = who ? `<span class="who">${esc(who)}</span>${esc(text)}` : esc(text); chat.appendChild(m); m.scrollIntoView({ block: "nearest", behavior: App.calm() ? "auto" : "smooth" }); };
    const meter = () => { const pct = Math.max(4, Math.min(96, 50 + (steps ? total / (steps * 2) : 0) * 46)); $("#knob", el).style.left = pct + "%"; };
    function say() {
      const n = d.nodes[node];
      choices.innerHTML = "";
      const typing = document.createElement("div"); typing.className = "typing"; typing.innerHTML = "<i></i><i></i><i></i>"; chat.appendChild(typing);
      later(() => {
        typing.remove();
        add("them", d.them, n.them);
        if (n.end) return ending(n);
        choices.innerHTML = shuffle(n.choices.map((c, k) => Object.assign({ k }, c))).map((c) => `<button class="opt" data-k="${c.k}">${esc(c.text)}</button>`).join("");
      }, 900);
    }
    function ending(n) {
      const label = { good: "Connected ending", mixed: "Partly connected ending", bad: "Disconnected ending" }[n.end] || "Ending";
      add("note", "", `${label}. ${n.summary || ""}`);
      const rank = { bad: 0, mixed: 1, good: 2 }, prev = App.state.dialogues[d.id];
      if (!prev || rank[n.end] > rank[prev]) App.state.dialogues[d.id] = n.end;
      App.save();
      App.addXP(n.end === "good" ? 20 : n.end === "mixed" ? 10 : 5, label);
      App.award("first-dialogue");
      if (n.end === "good") { App.award("good-ending"); App.confetti(); }
      if (C.dialogues.every((x) => App.state.dialogues[x.id])) App.award("all-dialogues");
      choices.innerHTML = `<div class="row"><button class="btn accent" id="again">Try another path</button><a class="btn ghost" href="#challenges">All challenges</a></div>`;
    }
    choices.addEventListener("click", (e) => {
      if (e.target.closest("#again")) return start();
      const b = e.target.closest(".opt"); if (!b) return;
      const c = d.nodes[node].choices[+b.dataset.k];
      add("you", "You", c.text.replace(/^“|”$/g, ""));
      total += c.score; steps++; meter();
      later(() => add("note", "", `${c.score > 0 ? "🦒" : c.score < 0 ? "🐺" : "🤔"} ${c.note}`), 300);
      node = c.to; choices.innerHTML = "";
      later(say, 900);
    });
    function start() { timers.forEach(clearTimeout); timers = []; node = d.start; total = 0; steps = 0; chat.innerHTML = ""; meter(); say(); }
    $("#restart", el).addEventListener("click", start);
    start();
    return () => timers.forEach(clearTimeout);
  }

  App.register("challenges", {
    title: "Challenges", icon: "🏆", group: "Practise",
    render(el, params) {
      if (params[0] === "quiz") return runQuiz(el, params[1]);
      if (params[0] === "dialogue") return runDialogue(el, params[1]);
      overview(el);
    }
  });
})();
