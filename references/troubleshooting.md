# Troubleshooting and machine requirements

Use this when a clean machine cannot install, preview or render the starter. A Studio preview is not proof that the render path works; `npm run still` and a short `render` are the real checks.

## First-run checklist

- Node 18/20/22 LTS and npm. Node 22.23.0 and npm 10 were used for verification. No global Remotion install is required.
- At least 2 GB free disk, 5 GB comfortable. A full starter install with both browser caches measured about 1.3 GB in `node_modules`; the browser caches alone were about 839 MB.
- Network access for the first install: about 240 npm packages, plus Chrome for Testing (about 190 MB) or the headless shell (about 140 MB).
- Expect several minutes on a normal connection; the browser download dominates the first run. Slow or proxied networks can take much longer.
- 8 GB RAM practical minimum for 1080p; 16 GB comfortable. No GPU required.
- Chinese fonts: PingFang SC on macOS, or Noto Sans CJK SC on Windows/Linux.
- A free local port for Remotion Studio.

Run these in order on a fresh copy:

~~~bash
npm install
npm run still
npm start
~~~

`npm run still` must produce `out/poster.jpg` before you promise a render.

## Common failures

| Symptom | Likely cause | Fix |
| --- | --- | --- |
| `ProtocolError: Protocol error (Runtime.callFunctionOn): Target closed` | The default old headless shell failed to stay alive, often on current Chrome/macOS | Use `--chrome-mode=chrome-for-testing` (already in the starter scripts). If that fails, use a local Chrome with `--browser-executable`. |
| `Failed to launch the browser process` or a browser timeout | Missing browser, incomplete download, disk full, or blocked network | Check disk, remove `node_modules/.remotion`, run `npm install` again, or point to a local Chrome. |
| `icudtl.dat not found in bundle` | Incomplete browser bundle | Use `--browser-executable` with system Chrome, or `--chrome-mode=chrome-for-testing`; try `--concurrency=1`. |
| `No available ports found` | A stale Studio/render process is holding the port | Close the old Studio, stop stale Node/Chrome processes, then restart. |
| `spawn ... ENOENT` or `npm: command not found` | Node/npm is not installed or not on PATH | Install Node LTS from nodejs.org or with nvm, reopen the terminal, run `node -v` and `npm -v`. |
| `npm ERR! engine` or an old Node syntax error | Node is older than the project expects | Use Node 18/20/22 LTS. |
| npm install hangs or returns 403/ETIMEDOUT | Corporate proxy, firewall, or registry access | Configure the npm registry/proxy; use `npm ci` with the lockfile when possible; use a cached install offline. |
| Chrome download is blocked | Remotion cannot reach its browser host | Use a local Chrome with `--browser-executable`, or install Chrome for Testing separately and point to it. Rendering itself needs no network. |
| Chinese text becomes boxes or a wrong typeface | Missing CJK font | Install Noto Sans CJK SC / Source Han Sans SC, or change `FONT`; verify a still at full size. |
| Render is very slow or runs out of memory | Too much concurrency or a long 1080p/4K render | Use `--concurrency=1` or `2`; close other Chrome tabs/apps; render in frame ranges while iterating. |
| Disk fills during install | Both browser caches and `node_modules` are large | Keep 5 GB free; remove unused projects or the `.remotion` browser caches if they can be re-downloaded. |
| GIF is over 5 MB | Too many frames, colors or pixels | Use 960×540, 12fps, 128 colors; if needed, 720×405 and 10fps. |
| Colors look washed out or a platform rejects full-range video | Remotion may output `yuvj420p` (full range) | Transcode to `yuv420p` / BT.709 before delivery (command below). |
| Windows commands fail | The recipes use macOS/Linux shell syntax | Use PowerShell equivalents, e.g. `Copy-Item -Recurse`, and pass a Windows path to `chrome.exe`. |

## Browser fallback

The starter scripts use Chrome for Testing. If that download is unavailable, use an installed Chrome:

~~~bash
npx remotion still src/index.ts GinkgoStarter out/poster.jpg --frame=300 \
  --browser-executable="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
~~~

On Windows, replace the path with the full path to `chrome.exe`. On Linux, use the output of `which google-chrome` or `which chromium`.

## Normalize delivery video

Remotion can output full-range `yuvj420p`. If the destination expects standard H.264 `yuv420p` / BT.709, transcode once after rendering:

~~~bash
ffmpeg -i out/film.mp4 -c:v libx264 -preset slow -crf 18 \
  -pix_fmt yuv420p -color_range tv -colorspace bt709 \
  -color_primaries bt709 -color_trc bt709 \
  -movflags +faststart -an out/film-web.mp4
~~~

Check it with `ffprobe -show_streams out/film-web.mp4` and confirm `pix_fmt=yuv420p`, `color_range=tv`, `color_space=bt709`.

## What to send

- Send the whole skill folder when the recipient needs the method, references and starter.
- Send only `templates/remotion-starter` when the recipient needs a runnable example.
- Do not send `node_modules`; the recipient should run `npm install` on their own machine.
- The 12 library clips and the three reference repos are not bundled. If the recipient needs those exact clips, grant access or package the specific clip with its assets and license.
- If the recipient has no Node, the first step is installing Node LTS, not Remotion. If they have no Chrome, Remotion can download one; if that is blocked, use a local Chrome.
- If the recipient only needs to watch or review, send the MP4, GIF and poster. No Node, npm, Chrome or Remotion install is needed for playback.
- If the recipient needs to edit the source, Node is required. There is no Remotion render path without Node on that machine; use a cloud/CI machine or install Node LTS.

## Verification before claiming success

- `npm run still` succeeds on a clean install.
- A short `render` (for example 30–60 frames) produces a playable MP4.
- The poster and one frame from the MP4 match.
- Chinese text is readable at actual size.
- The final archive contains source, poster/JPG, GIF and MP4, with the tested limits written down.
