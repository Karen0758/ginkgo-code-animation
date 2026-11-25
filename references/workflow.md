# Workflow

## 1. Brief in one page

Write these before opening the editor:

- One sentence: what should the viewer understand or feel?
- Audience and platform: 16:9 product page, 9:16 social, or both.
- 3–4 segments, each with one job and one main motion.
- The transition between each pair of segments.
- Whether music is required. If yes, lock the track before timing the shots.

A 30-second film with five segments is usually five 5–7 second shots, not thirty one-second cuts.

## Reference projects (optional, not bundled)

These are external references. Access may be required; the starter and recipes are the self-contained path.

- motion-animation-library: https://github.com/Karen0758/motion-animation-library — 12 editable Remotion clips, mostly 9:16.
- ginkgo-animation-workbench: https://github.com/Karen0758/ginkgo-animation-workbench — the 31-second 16:9 promo and the storyboard workbench. Read PROMO_MOTION_SPEC.md for the camera and timing.
- mg-three-panels-remotion: https://github.com/Karen0758/mg-three-panels-remotion — the three-panel composition, useful for one-focus split screens.

## 2. Choose the engine

**Remotion** is the default for the library templates, React components, SVG and CSS. It is deterministic and easy to parameterize.

**HyperFrames** is for an existing HTML/GSAP project or a browser-first build. It has its own contract; read the HyperFrames skill before writing. Do not mix engines in one film.

## 3. Start a Remotion project

Node 18/20/22 LTS and npm are the practical baseline. If Node is missing, install Node LTS first; npm comes with it. Do not install Remotion globally. The first `npm install` needs network access and brings about 240 packages.

Copy templates/remotion-starter:

~~~bash
cp -R templates/remotion-starter my-film
cd my-film
npm install
npm start
~~~

Open the Studio URL. Verify the composition loads before changing timing. Do not render an MP4 until the preview is approved.

The first render also downloads a browser: Chrome for Testing (about 190 MB) or the headless shell (about 140 MB). Budget 2 GB free disk, with 5 GB comfortable. A full starter install with both browser caches measured about 1.3 GB in `node_modules`.

If you have access to a library folder, copying it is optional; keep its package.json and src/ intact, then rename the composition id and the copy. Users without access can build from `references/recipes.md` and the starter.

## 4. Build static keyframes first

- Put the hero object, the supporting object and the text on screen at the three key moments: enter, act, hold.
- Check the 90% action-safe box and the 80% title-safe box.
- Check the mobile version at 390 px wide before animating.
- Only after the still frames read correctly, add motion.

This prevents the most expensive rework: animating a composition that was never right.

## 5. Parameterize

Keep these in `style.ts`, `timeline.ts` and `copy.ts`:

- Palette, font family, stroke width, radii.
- Shot starts, durations, holds.
- Copy strings, numbers, names.
- Whether the QR is a demo pattern or a real code.

Use Remotion defaultProps or inputProps so the same composition can render a second version without editing the scene.

## 6. Animate

- One main motion per screen.
- Enter 0.5–0.7 s, act 0.8–1.4 s, hold 0.4–0.7 s, exit 0.4–0.6 s.
- Use interpolate with clamp for position, opacity and progress; use spring only for physical entrances.
- Never animate display or visibility. Animate opacity and transform.
- Check the cut frames at 0.5× speed. A seam is visible even when the timeline looks fine.

## 7. Review

Use references/revision.md. Preview the whole film once without pausing, then check the seams, text, audio and files.

## 8. Render

Only when the person asks for an export.

~~~bash
npx remotion render src/index.ts GinkgoStarter out/film.mp4 --codec h264 --crf 20 --concurrency=2 --chrome-mode=chrome-for-testing
~~~

- 30 fps, H.264, CRF 20; 1920×1080 or 1080×1920.
- Export a poster JPG and a GIF under 5 MB for the archive.
- If music is used, keep the audio as a separate track and check the final mix.

If `chrome-for-testing` cannot be downloaded, point Remotion at a local Chrome instead:

~~~bash
npx remotion render src/index.ts GinkgoStarter out/film.mp4 \
  --codec h264 --crf 20 \
  --browser-executable="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
~~~

On Windows, use the path to `chrome.exe`. The starter package scripts already include `--chrome-mode=chrome-for-testing`.

GIF export needs FFmpeg. This keeps a 21-second 1080p film near 2–3 MB at 960×540 / 12fps:

~~~bash
ffmpeg -i out/film.mp4 \
  -vf "fps=12,scale=960:540:flags=lanczos,split[s0][s1];[s0]palettegen=max_colors=128:stats_mode=diff[p];[s1][p]paletteuse=dither=bayer:bayer_scale=4" \
  -loop 0 out/preview.gif
~~~

Remotion can output full-range `yuvj420p`. If the destination requires standard `yuv420p` / BT.709, normalize the file with the FFmpeg command in `references/troubleshooting.md`.

## 9. Archive

One folder per clip:

~~~
animations/<slug>/
  src/
  package.json
  previews/<slug>.mp4
  previews/<slug>.gif
  previews/<slug>.jpg
  README.md
~~~

Record the composition id, duration, resolution, palette, what was tested, and what remains a demo. Update `catalog.json` and the gallery only if the clip actually enters that library; they are not part of this skill.

## 10. Version discipline

- Run git status before editing. If there are changes you did not make, keep them.
- Back up the current composition before a structural change.
- Keep failed versions in a separate folder; do not overwrite the approved cut.
- If a local change breaks a liked effect, restore the previous timing and reapply only the requested delta.
