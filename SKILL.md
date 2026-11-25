---
name: ginkgo-code-animation
description: Build editable 2D motion-graphics code animations in the ginkgo / 公益人才图谱 style with Remotion or HyperFrames. Use for product explainers, resource maps, data stories and vertical social clips that need flat green and cream geometry, thick outlines, one clear motion at a time, shape-carried transitions, and a reusable source archive. Not for AI-generated footage, realistic character performance, or editing an existing MP4 timeline.
---

# Ginkgo Code Animation

Make a short, editable code-driven MG film rather than a one-off render. The reference style comes from the 银杏公益人才图谱 promo and the private motion-animation-library.

## When to use

- A product, resource map, data story or diagram explainer with UI, shapes or abstract transitions.
- A vertical social clip in the same flat green and cream language.
- Extending or reusing one of the library clips.

Do not use this for AI video generation, realistic character performance, or cutting an existing footage timeline.

## Defaults

- 16:9 1920×1080 at 30 fps for product promos; 1080×1920 for social. Typical length 15–35 seconds.
- Palette: green #007A3F, deep #07532D, cream #FFFEF1, yellow #FBC724, pale #EAF4DD.
- Type: PingFang SC or Noto Sans CJK. Title 32–72, body 18–24, auxiliary 14–16 on 16:9; scale up for 9:16.
- One main motion per screen. Enter, act, hold, then hand off.
- Keep copy, timing and colors in code constants. Do not bake text into images.

## Environment

- Node 18/20/22 LTS and npm are the practical baseline. Node 22.23.0 and npm 10 were used to verify the starter. No global Remotion install is required; `npm install` brings the pinned version.
- If Node is missing, install Node LTS from nodejs.org or with a version manager such as nvm. npm comes with Node. Do not ask the user to install Remotion separately. There is no local Remotion render path without Node; for review-only delivery, send the MP4/GIF/poster instead.
- First run needs network access: about 240 npm packages, plus Remotion downloads Chrome for Testing (about 190 MB) or the headless shell (about 140 MB). Budget 2 GB free disk; 5 GB is comfortable. A full starter install with both browser caches measured about 1.3 GB in `node_modules`. Expect several minutes on a normal connection; slow or proxied networks can take much longer.
- 8 GB RAM is a practical minimum for 1080p and 16 GB is comfortable. No GPU is required.
- Chinese fonts are required: PingFang SC on macOS, or Noto Sans CJK SC on Windows/Linux. If the font is missing, change `FONT` or install the font before judging the render.
- The starter scripts use `--chrome-mode=chrome-for-testing`. If that download is blocked, point Remotion at a local Chrome with `--browser-executable`.
- Read `references/troubleshooting.md` when install, browser, font, disk or render fails.

## Route

- **Remotion** when reusing the library, building reusable React components, or mixing SVG, CSS and video in one composition. Start from `templates/remotion-starter`. The 12 library clips are optional external references; they are not bundled with this skill.
- **HyperFrames** when the project is already HTML and GSAP, or the composition should stay browser-first. Follow the HyperFrames contract in its own skill. Do not mix engines in one film.

## Workflow

1. Write the one-sentence purpose and 3–4 segments. Name the transition between each pair.
2. Pick 2–4 recipes from references/recipes.md, one per segment. The recipe text is enough to rebuild the motion; the external library is optional. Do not stack every effect.
3. Build static keyframes first. Confirm composition, type size and safe area before animating.
4. Put palette, font, stroke and radii in `style.ts`; put shot starts, durations and holds in `timeline.ts`; parameterize copy in `copy.ts`. The starter has all three files.
5. Animate with interpolate and spring. Keep a single focus. Use the transitions in references/style.md.
6. Preview in Remotion Studio or HyperFrames. Check the cut frames and the mobile size. Use references/revision.md before delivery.
7. Render only when asked. Verify the starter and the final project from a clean install, not only in Studio. Archive source, poster, GIF and MP4 in one folder; update `catalog.json` and the gallery only if the clip actually enters that library.

## Hard rules

- Deterministic: no Date.now(), unseeded random, network fetches or timers in the render.
- One palette per film. Outlines 8–12 on 1080-wide art. Rounded geometry.
- No realistic or AI characters, no decorative piles, no gradients beyond a subtle background field.
- Keep the user's existing edits and timing. Check git status before touching a folder you did not create.
- A transition must be caused by something on screen: a shape grows, a card shrinks, a hand covers, a line connects.
- A starter must render on a clean install. Studio preview alone is not proof that `still` or `render` works.

## References

- references/style.md — palette, type, composition, motion, transitions.
- references/recipes.md — 12 optional library clips and 8 self-contained build recipes.
- references/workflow.md — Remotion and HyperFrames setup, parameters, export, archive.
- references/revision.md — diagnosis, annotated revision prompt, review checklist.
- references/troubleshooting.md — Node, npm, Chrome, disk, font, port and render failures.
- templates/remotion-starter/ — a 12-second editable starter.
