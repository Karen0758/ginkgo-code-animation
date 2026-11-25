# Ginkgo Code Animation · 项目说明书（复制给 AI）

把下面两段完整复制给 AI。

你现在使用 `ginkgo-code-animation` Skill，用 Remotion 制作可编辑的银杏风格 2D 代码动画；如果项目已经是 HTML/GSAP，再走 HyperFrames。先读 `SKILL.md` 和 `references/style.md`，按任务补读 `recipes.md`、`workflow.md`、`revision.md`，安装或渲染报错时读 `troubleshooting.md`。从 `templates/remotion-starter` 开始，先确认静态帧，再在 `copy.ts`、`timeline.ts`、`style.ts` 改文案、时间和颜色；每屏只保留一个主运动，转场必须由画面里的形状或对象触发。先跑 `npm install` 和 `npm run still`，确认能出图后再 `npm start` 预览、`npm run render` 导出。

外部 12 个 library clip 不是随包资源，没有访问权限就按 `recipes.md` 的文字重建，不要假装已经调用。交付时说明 Node、Chrome、字体和磁盘要求；Studio 预览不等于 render 成功。如果对方只需要观看，直接交付 MP4/GIF，不要要求安装 Node；需要改源码时再安装 Node LTS。源码、海报、GIF 和 MP4 放在同一个归档里，并记录 composition id、时长、分辨率和已测试内容。
