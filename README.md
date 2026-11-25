# Ginkgo Code Animation Skill

Editable 2D motion-graphics code animations in the Ginkgo / 公益人才图谱 visual language, built with Remotion (or HyperFrames when the project is already browser-first).

This repository is a Codex skill, not a rendered video project. It packages the visual rules, motion recipes, workflow, review checklist and a runnable Remotion starter.

## What is included

| Path | Contents |
| --- | --- |
| `SKILL.md` | Entry instructions, environment requirements, routing, workflow and hard rules |
| `references/style.md` | Palette, type, layout, camera, motion, transitions and vertical adaptation |
| `references/recipes.md` | 12 optional library-clip references and 8 self-contained build recipes |
| `references/workflow.md` | Brief, setup, static frames, parameterization, animation, render and archive |
| `references/revision.md` | Diagnosis, annotated revision prompt, review checklist and delivery checks |
| `references/troubleshooting.md` | Node, npm, Chrome, disk, font, port and render failures |
| `templates/remotion-starter/` | 12-second, 1920×1080, 30fps editable starter |

## Quick start

From the repository root:

```bash
cp -R templates/remotion-starter my-film
cd my-film
npm install
npm run still
npm start
```

`npm run still` must produce `out/poster.jpg` before you trust the render path. Then render:

```bash
npm run render
```

Node 18/20/22 LTS and npm are the practical baseline. No global Remotion install is required. The first run needs network access and downloads a browser; see `SKILL.md` and `references/troubleshooting.md` for disk, font, proxy and Chrome fallbacks.

## Install as a Codex skill

Clone or copy this repository to your Codex skills directory:

```bash
git clone https://github.com/Karen0758/ginkgo-code-animation.git \
  ~/.codex/skills/ginkgo-code-animation
```

Then invoke `$ginkgo-code-animation` in Codex. The starter is inside the skill at `templates/remotion-starter`.

## Verified

- `quick_validate.py` reports `Skill is valid!`
- `npm ci --dry-run` passes for the starter
- `npm run still` produces a poster with the current Chrome setup
- The full 12-second starter renders to 1920×1080, 30fps H.264

## Scope and boundaries

- The 12 library clips and the three external reference repositories are not bundled. They are optional; the starter and recipe text are the self-contained path.
- HyperFrames is documented as a route but no HyperFrames template is included.
- `node_modules`, generated MP4/GIF files and test artifacts are intentionally excluded.
- If a recipient only needs to watch, send the rendered MP4/GIF/poster; no Node, npm, Chrome or Remotion install is required for playback.
- If a recipient needs to edit the source, Node is required on that machine.
