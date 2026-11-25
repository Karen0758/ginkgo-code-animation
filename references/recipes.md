# Recipes

The 12 clips below are optional external references, not files bundled with this skill. If you have access, the private repo is https://github.com/Karen0758/motion-animation-library; each folder is a separate Remotion project with its own package.json and assets. If you do not have access, use the recipe text below to rebuild the motion in `templates/remotion-starter`. The starter already contains a complete three-shot example.

Most library clips are 1080×1920 vertical. The ginkgo film and the starter are 16:9 1920×1080. Recompose the layout for the target ratio; do not crop the vertical frame.

## Library map

| Slug | Length | Best for | Core technique |
| --- | --- | --- | --- |
| typing-hands | 3 s | 人在电脑前工作 | 18-frame entrance + PNG sequence + hold |
| steering-wheel | 3 s | 驾驶、方向、选择 | SVG asset enters, rotates once, settles |
| dialogue-bubbles | 3 s | 对话、反馈 | entrance + PNG sequence |
| hand-cover | 4 s | 遮挡转场、揭幕 | six hands rotate in, cover, leave |
| triangle-assembly | 4 s | 三方关系、资源连接 | nodes pop, lines draw with dash offset |
| rotating-triangle | 6.3 s | 三个维度轮转 | 62-frame segments, rotation, vertical labels |
| puzzle-assembly | 4 s | 多方共建、拼合 | nine tiles spring into a grid |
| resource-search | 4 s | 搜索、查找、匹配 | box grows, types, submits, shrinks, lifts |
| qr-reveal | 4 s | 扫码、结尾 | 25×25 modules with diagonal delay |
| square-exit | 4 s | 卡片收束、转场 | card shrinks, rolls, exits |
| mountain-road-drive | 6.2 s | 路径、旅程 | layered landscape + car path |
| leaf-curl | 6 s | 生长、自然 | SVG paths + curl interpolation |

## 1. Entrance + action + hold (typing / steering / dialogue)

Use when a simple human action carries the shot and a PNG or SVG asset already exists.

- 90 frames at 30 fps. Entrance 0–18, action 18–72, hold 72–90.
- Entrance: translate from -1080 to 0 with a 0.6 s ease; keep the background fixed.
- Steering wheel: rotate 0 → -22 → 17 → 0 over frames 18–61.
- Keep the last frame still for at least 0.5 s so the viewer can read it.
- If using a PNG sequence, name frames 000–091 and switch to a rest frame after the action.

Source: animations/typing-hands, animations/steering-wheel, animations/dialogue-bubbles.

## 2. Triangle assembly

Use when three resources, roles or stages need to become one structure.

- Place three nodes on a loose triangle, not an even grid: (245,760), (835,690), (595,1255) on 1080×1920.
- Lines draw in sequence with strokeDasharray + strokeDashoffset; start each line 12 frames apart.
- Nodes pop with spring damping 12, stiffness 110, mass .7; stagger 13 frames.
- Center pulse: radius 48 → 70, opacity .2 → .45.
- Add one yellow dot per node, not a second icon set.

Source: animations/triangle-assembly/src/Composition.tsx.

## 3. Rotating triangle with labels

Use for three parallel dimensions, such as need / support / actor.

- Three segments of 62 frames. Rotate 120° at the start of segments 2 and 3.
- Each segment keeps the same node layout; only the active node and labels change.
- Labels are vertical pills: writing-mode vertical-rl, 34 px, cream/pale, 15 px gaps.
- Hold each segment for at least 20 frames after the labels appear.
- The final frame returns to the full triangle.

Source: animations/rotating-triangle/src/Composition.tsx.

## 4. Search box

Use for search, matching or “find the right resource”.

- Grow: width 26 → 926, height 26 → 180, radius 80, frames 8–34.
- Type one character every 6 frames after frame 40.
- Submit: background cream → yellow, then a pulse ring.
- Shrink to .13 scale, bounce with a 55 px sine, then lift 900 px and exit.
- Keep the cursor blink deterministic: frame % 24 < 15.

Source: animations/resource-search/src/Composition.tsx.

## 5. Hand cover transition

Use to hide a cut or reveal a new screen.

- Six hands at 0°, 55°, 125°, 180°, 235°, 305°; travel 980 px.
- Enter 28 frames, hold 38 frames, leave 39 frames.
- Draw each hand as a path with an 8 px deep-green outline; sleeves are yellow or pale.
- Cut exactly when the hands fully cover the frame; reveal the next scene already in place.

Source: animations/hand-cover/src/Composition.tsx.

## 6. Puzzle assembly

Use for “many supports form one system”.

- Nine tiles, 3×3, with one shared outline and nine fills from the palette.
- Each tile enters with spring damping 13, stiffness 110, staggered by 4 frames.
- Tiles settle with a small rotation, then lock into the grid.
- Keep text at 42 px and centered; do not add a second title inside the puzzle.

Source: animations/puzzle-assembly/src/PuzzleEnd.tsx.

## 7. QR reveal

Use for a closing scan or a “go to the map” beat. Use a demo pattern, not a real QR, unless a real code is supplied.

- 25×25 modules, tile 30, gap 5.
- Finder patterns: three 7×7 squares; modules on the border and the 3×3 center.
- Reveal diagonally: delay = (x + y) × .18; each module fades over 1.6 frames.
- Rotate 4° → 0° while settling; keep the card square.
- Label it 示意图 · 不含链接 when it is not scannable.

Source: animations/qr-reveal/src/Composition.tsx.

## 8. Gravity aggregation and leaf growth

Use for “scattered resources gather” or “growth over time”.

- Aggregation: 20–40 shapes, varied size 12–48, varied palette, fall with gravity and settle into a pile. Do not line them up.
- Add new shapes by preserving the existing trajectory; only increase count, variant and density.
- Leaf: draw the midrib and veins as paths; interpolate tip curl from 0 to 1; add a small sway after landing.
- Keep one hero cluster; the rest is background texture at 40–60% opacity.

Source: animations/leaf-curl/src/Composition.tsx, the gravity section of the ginkgo promo.

## Copy a library folder (optional)

Only do this when you have access to the external repo. The starter is the self-contained path; do not make a new user depend on a private link.

~~~bash
cp -R animations/triangle-assembly my-film/animations/scene-02
cd my-film/animations/scene-02
npm install
npm start
~~~

Change the composition id in src/Root.tsx, replace the copy, and keep the same duration until the new timing is verified.
