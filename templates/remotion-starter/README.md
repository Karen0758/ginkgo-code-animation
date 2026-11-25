# Ginkgo Remotion starter

A 12-second, 1920×1080, 30 fps starter in the ginkgo palette. It has three shots and two circle-wipe cuts:

1. 0–4 s: title and resource dots converge.
2. 4–8 s: three nodes connect into a triangle.
3. 8–12 s: end card with three actions, a demo QR and a sample CTA.

The QR and CTA are placeholders. The QR is a demo pattern, not a scannable code; replace both when a real link is supplied.

## Requirements

- Node 18/20/22 LTS and npm. No global Remotion install is required.
- Network access for the first install and browser download. Expect several minutes on a normal connection; the browser download dominates the first run.
- 2 GB free disk minimum, 5 GB comfortable. A full install with both browser caches measured about 1.3 GB in `node_modules`.
- 8 GB RAM practical minimum for 1080p; 16 GB comfortable. No GPU required.
- PingFang SC on macOS, or Noto Sans CJK SC on Windows/Linux.

## Run

~~~bash
npm install
npm run still
npm start
~~~

`npm run still` must produce `out/poster.jpg` before you trust the render path. Then open the Studio URL and check the composition:

~~~bash
npm run render
~~~

The scripts include `--chrome-mode=chrome-for-testing`; the render script starts at `--concurrency=2` for a safer default on 8 GB machines. If that download is blocked, point Remotion at a local Chrome instead:

~~~bash
npx remotion still src/index.ts GinkgoStarter out/poster.jpg --frame=300 \
  --browser-executable="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
~~~

On Windows, use the full path to `chrome.exe`. See `../../references/troubleshooting.md` for Target closed, ports, fonts, proxy and disk problems.

## Edit

- Palette, font and spring: `src/style.ts`
- Composition id, size, shot starts and wipe ranges: `src/timeline.ts`
- All copy and placeholder CTA text: `src/copy.ts`
- Layout and in-frame motion: `src/Scene.tsx`
- Remotion root registration: `src/Root.tsx`

Keep the 3-shot structure for a 12-second test. For a longer film, add one shot per 4–6 seconds rather than stretching these.

## Notes

- The starter uses no external assets. Replace the demo QR and sample CTA only when a real link is supplied.
- Keep the palette to green, deep, cream, yellow and pale. One accent per shot.
- The circle wipes are intentionally simple; use a card morph or hand cover from `references/recipes.md` when the cut needs a stronger handoff.
- The 12 library clips are optional external references. This starter is self-contained; do not require access to the private repo to run it.
- Do not send `node_modules`; the recipient should run `npm install` on their own machine.
- If the recipient only needs to watch, send the rendered MP4 and poster; no Node, npm, Chrome or Remotion install is needed.
