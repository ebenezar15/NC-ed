# Data file conventions (for content writers)

Every data file is plain browser JavaScript (NOT JSON, NOT a module). It must start with:

    window.NVC = window.NVC || {};

and then assign ONE key (listed per file). No imports/exports. Use double-quoted strings,
escape inner quotes, use the real Unicode characters for ’ “ ” — and emoji. Keep each string
concise (1–3 sentences) — this is an app, not a book. All content must be realistic,
warm, practical, culturally broad (names from many cultures), and must NOT invent fake
statistics or fake citations. Where an idea comes from a known author, name them
(e.g. Marshall Rosenberg, John Gottman, Ross Greene,
Thomas Gordon, Marsha Linehan, Dan Siegel, Bill Eddy, Kim Scott, Xavier Amador).

The app is about Nonviolent Communication (NVC: Observation, Feeling, Need, Request,
"giraffe" vs "jackal" language, Marshall Rosenberg) plus related communication models.
DO NOT include anything from Becky Bailey's "Conscious Discipline" (no 7 Powers, no
7 Skills, no Brain State Model, no S.T.A.R., no School Family, no Safe Place, no
"positive intent" attributed to it). Generic ideas like breathing or Siegel's hand model are fine.

Validate your file with:  node -e "global.window={};require('./path/to/file.js');console.log(Object.keys(window.NVC))"
