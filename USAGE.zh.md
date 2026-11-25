# Ginkgo Code Animation · 项目说明书（复制给 AI）

请先从这个仓库获取 `ginkgo-code-animation` Skill：
https://github.com/Karen0758/ginkgo-code-animation

如果你有终端和网络，先执行：

```bash
git clone https://github.com/Karen0758/ginkgo-code-animation.git ~/.codex/skills/ginkgo-code-animation
```

然后确认能读到 `SKILL.md`；如果读不到或不能下载，先停下来告诉我，不要假装已经加载。

读取后按 `SKILL.md` 和 `references/style.md` 工作，从 `templates/remotion-starter` 起项目，改 `copy.ts`、`timeline.ts`、`style.ts`；先确认静态帧，再 `npm install`、`npm run still` 验证，之后 `npm start` 预览、`npm run render` 导出。外部 12 个 library clip 不是随包资源，没有访问权限就按 `recipes.md` 的文字重建。本地渲染需要 Node 18/20/22 和 npm，Chrome 可由 Remotion 下载；如果用户只需要观看，直接交付 MP4/GIF，不要要求安装 Node。
