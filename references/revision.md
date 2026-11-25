# Revision and review

## Diagnose first

| Layer | What you see | First move |
| --- | --- | --- |
| Content | The viewer cannot follow, a sentence is too long, the order buries the point. | Delete a sentence or change the order. Animation cannot hide a copy problem. |
| Visual | A face changes, a hand passes through an object, an outline breaks, a layer is wrong. | Fix the still frame first. Simplify a complex character to a hand, a prop or an abstract shape. |
| Motion | Several objects move at once, the subject and background do not enter as one unit, a turn is stiff. | Keep one main motion. Group the subject and its background into one moving unit. |
| Sound | The voice changes, lip sync drifts, music covers the line. | Lock the voice first, then align the shots to the real sentence timing. |

## Annotated revision prompt

Write one paragraph, not a form. Mark each sentence with an arrow label so the model knows what the sentence is doing.

~~~text
→ 对象｜只改 00:18–00:24 第二屏的方向盘和对话框。
→ 现象｜现在方向盘放大后边缘发虚，顶部描边有缺口，对话框又挡住了椭圆背景。
→ 判断｜这是画面层的问题，原图形结构和图层顺序都要查。
→ 改法｜回到原图形修线和轮廓，缩小主体，让椭圆完整露出。
→ 保留｜已经确认的转向节奏和椭圆背景不要动。
→ 验收｜改完先给我 1:1 放大和手机尺寸两张对照。
→ 版本｜动手前先备份当前工程，确认不是旧版本。
~~~

Use the labels that fit the case: 对象, 现象, 判断, 改法, 保留, 验收, 版本. Keep the paragraph editable; do not turn it into a form unless the project needs one.

## Review: first watch

Do not pause and do not take notes. After one viewing, answer:

- Did the theme appear in the first three seconds?
- Did the middle ever make you lost?
- Did the ending tell you what to do next?

If any answer is no, fix the story before checking details.

## Review: second pass

| Check | Purpose | How |
| --- | --- | --- |
| First hook | The first three seconds tell the viewer what this is. | Play the first three seconds muted; the picture and subtitle alone should explain the topic. If it needs the voiceover, add a visual cue. |
| Shot purpose | Every shot has one clear intention. | Write one sentence per shot: “this shot lets the viewer know or feel ___.” If you cannot, or there are two intentions, split or delete. |
| Character continuity | The character looks and moves continuously, with no face, outfit or frame jump. | Compare the first and last frame of each shot side by side; check face, hair, clothing and hand position. For continuous action, also check the middle frames. |
| Transition continuity | The two shots connect in space, direction and speed. | Watch the seam at 0.5× speed; check subject position, eyeline and object direction. If it breaks, use an action, an occlusion or a matching composition. |
| Sound hierarchy | The voice stays clear; music and effects do not cover it. | Listen on a phone speaker without headphones. If the voice is buried, lower the music or duck it under the line. |
| Text readability | Subtitles, buttons and chart labels are readable on the target screen. | View the film at the phone's actual size; check minimum font, line breaks, margins and safe area. Do not judge from the desktop preview alone. |
| Fact consistency | Screenshots, numbers, names and subtitles match the latest source. | Compare against the source document and screenshot; spot-check numbers, names, dates and links. Confirm the screenshot is not an old version. |
| File delivery | The recipient can open and use the files without your machine. | Open the preview and final on a device that has never opened the project; confirm source, fonts, assets and version are included. |

## Code-animation checks

- Preview and final render match: compare three frames.
- Chinese fonts load: no tofu boxes or fallback family.
- Text does not overflow: long lines have a break strategy.
- Audio stays aligned after export.
- The composition opens at the right id and duration.
- The project path and timeline match the latest screenshot.

## Common pitfalls from the ginkgo project

- Editing an old project, so deleted content returns. Check the path, timeline and latest screenshot before changing anything.
- A local change breaks a liked effect. Write the keep list and the change list for every round.
- Animating before the still frame is right. Fix character perspective, road direction and end-card layout in the still.
- Blurry shapes and broken outlines after scaling. Fix the original path and stroke; do not patch with a new line.
- Several screens move at once. Let one screen enter, act and stop before the next one starts.
- A transition that understands the picture but not the space. Say what becomes what, where it starts, where it goes, and when it is covered.
- A product promo that turns into a tutorial. Keep the result; compress the steps.
- Text that is unreadable on a phone. Set one family, adjust the box, and check the real phone size.

## Delivery

- Preview, final MP4, source project and poster are present.
- Version and date are in the file name or README.
- A failed version is kept when it explains a decision.
- The archive has a short README: composition id, duration, resolution, palette, tested items and remaining demo parts.
- A clean install can run `npm run still` and a short `render`; Studio preview alone is not delivery evidence.
- Record the Node version, browser mode, font assumption and free-disk requirement used for the test.
