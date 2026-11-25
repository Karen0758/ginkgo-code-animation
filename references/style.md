# Ginkgo style

Use this as the visual contract. The goal is a calm, flat, editorial MG look that still feels designed.

## Palette

| Token | Hex | Use |
| --- | --- | --- |
| green | #007A3F | Main field, primary shapes, titles on cream |
| deep | #07532D | Outlines, text on light green, shadows |
| cream | #FFFEF1 | Page background, cards, text on green |
| yellow | #FBC724 | One accent per shot: highlight, CTA, active node |
| pale | #EAF4DD | Secondary cards, inactive nodes, soft fields |

Use one accent per shot. Do not introduce a second green or a second yellow. The eight-path illustration keeps its original colors when it is the subject.

## Type

- Family: PingFang SC, Noto Sans CJK SC, Source Han Sans SC, sans-serif.
- 16:9: title 56–72, section title 32–44, body 20–24, auxiliary 14–16.
- 9:16: title 64–84, body 28–34, auxiliary 20–24.
- Weight: 700–800 for titles, 500–600 for body, 400 for captions. Avoid thin weights; they disappear on video.
- Keep Chinese text on one or two lines. Break by meaning, not by character count.
- No text baked into PNG or JPG when it may need editing.

## Layout

- 16:9: 1920×1080, 90% action-safe box; keep key text inside 80%.
- 9:16: 1080×1920, keep key text inside 900×1500.
- One main object plus one supporting layer. The background field is a circle, a soft rounded rectangle or a flat color.
- Rounded radii: 18–32 for cards, 40–90 for pills, 50% for fields.
- Outlines: 8–12 px at 1080 width; 12–16 at 1920 width. Use deep green, not black.
- Shadows: one soft shadow per card, low opacity. No glassmorphism, no glow.

## Four control angles

Decide four things for every shot, and write one line for each in the shot card:

1. **Static frame** — composition, character or object, palette, type. This is what the viewer sees before anything moves.
2. **In-frame motion** — what actually changes inside the frame: a hand types, a card opens, particles gather.
3. **Camera** — fixed or moving. State the start, direction and end if the camera moves.
4. **Transition** — how this shot hands off to the next: circle wipe, card morph, line connect, hand cover, QR reveal.

Default to a fixed camera and a direct cut when the shot does not need more. The four angles are a checklist, not a requirement to add an effect to every one.

## Motion

| Beat | Duration | Rule |
| --- | --- | --- |
| Enter | 0.5–0.7 s | Move 40–120 px and fade or spring in. Do not spin and zoom at the same time. |
| Act | 0.8–1.4 s | One main action: type, turn, connect, reveal, assemble. |
| Hold | 0.4–0.7 s | Let the result be readable. Stop all non-essential motion. |
| Exit | 0.4–0.6 s | Leave by the same shape or direction that carries the next shot. |

Eases: Easing.bezier(.2,.8,.25,1) for arrivals; .55,0,.2,1 for exits; spring damping 12–15, stiffness 90–130, mass .7–.9. Physical objects may overshoot; text and UI never overshoot.

## Transitions

Use 3–5 kinds in a film, each where it fits.

1. **Circle wipe**: a green or cream circle grows from the focal point, covers the cut, then shrinks to reveal the next shot. This is the default for a clean section change.
2. **Card morph**: a card shrinks into a square or grows into the next card. Keep the corner radius and center continuous.
3. **Line connect**: a line from the previous shot becomes the edge of the next diagram.
4. **Hand cover**: six hands or one hand covers the frame; cut under the cover; reveal the next shot already in place.
5. **QR or grid reveal**: modules appear diagonally, then the frame cuts on the settled grid.
6. **Square exit**: the hero card shrinks, rotates and leaves toward the next scene.

Never dissolve between two unrelated scenes. A cut on motion is stronger than a fade.

## Vertical adaptation

- Recompose, do not crop the 16:9 frame.
- Put the hero object in the upper 60%; put the caption and CTA in the lower 25%.
- Turn horizontal three-column layouts into three stacked rows with 24–32 px gaps.
- Keep the same palette and stroke language; reduce decorative shapes by half.

## Don'ts

- No realistic people, AI-looking faces, detailed hands or photographic textures.
- No regular grid of identical falling shapes; vary size, color and rotation.
- No more than one unrelated motion at a time.
- No thin outlines, pure black, or more than two background colors.
- No text smaller than 14 px at 1080 width.
