# Speak Giraffe

An interactive app for learning **Nonviolent Communication (NVC)**, the approach Marshall Rosenberg developed. It covers observation, feeling, need and request, and contrasts "giraffe" language (speaking from the heart) with "jackal" language (blame and judgment). The app also includes 35 related communication models.

Open `index.html` in a browser. There's no build step, and it can be hosted as-is, for example on GitHub Pages.

## What's inside

| Section | What you can do |
|---|---|
| **Home** | Watch blaming sentences turn into giraffe sentences, with each part colour-coded. |
| **The four steps** | An interactive flow of the four steps, a "peel back the layers" diagram, speaking vs listening, the giraffe pause and key ideas. |
| **Feelings & needs** | Wheels of feelings and needs, a sentence basket, a faux-feelings decoder (40 words) and "need or strategy?" flip cards. |
| **Scenarios** | 264 real situations (22 each across 12 areas of life: family, school, work, love, friends, teens, healthcare, elders, community, digital, public, self-talk). Each shows the jackal line and the giraffe version step by step, and has a practice mode that flags judgment words as you type. |
| **Models & frameworks** | 35 models, each with a diagram you can step through: NVC, Gottman, P.E.T., CPS, Restorative Practices, Thomas–Kilmann, the Drama Triangle and TED, Transactional Analysis, Siegel, DBT DEAR MAN/GIVE/validation, BIFF, Crucial Conversations, Radical Candor, SBI, OARS, LEAP, the Ladder of Inference, Erikson, Neff, Love Languages and more. |
| **Across the lifespan** | 10 life stages, from toddlers to elders with dementia. For each: development, how NVC tends to land compared with shaming and blaming, how to adapt, phrases, examples, how to handle immature vs mature moments, and when to get extra help. |
| **Difficult people** | 8 de-escalation steps, 18 behaviour patterns with scripts by age and maturity, an age × maturity grid and core principles. |
| **Practical tools** | Sentence builder (with live jackal-word, faux-feeling and request checks), jackal detector, animated breathing, anger steps, self-empathy journal, conversation planner, gratitude, saying no & repair, printable pocket cards. |
| **Languages** | Jackal ↔ giraffe flip cards, life-alienating patterns, NVC phrase frames in 14 languages (including Arabic, right to left), the four ways of hearing and word swaps. |
| **Challenges** | 8 quiz decks (169 questions, with an optional speed mode), 12 branching role-plays with a connection meter, a 30-day plan, points, levels, streaks and 12 badges. |

**Look & feel:** 9 colour schemes (including "follow device" and high contrast), 5 font pairings (including dyslexia-friendly Lexend), a text-size slider and a calm mode that turns off animation. The app also respects the device's reduced-motion setting.

Progress, journal entries and badges are saved only in your browser (`localStorage`).

## Structure

```
index.html           page shell
css/styles.css       themes, typography, layout and animation
js/core.js           app shell: routing, saved progress, themes, points and badges, shared helpers
js/viz.js            SVG diagrams (flow, cycle, layers, triangle, matrix, ladder, wheel) and the giraffe
js/views-*.js        one file per group of sections
js/data/*.js         all content, as plain JS objects on window.NVC
```

To add content, edit the files in `js/data/`. The app picks up new items automatically.
