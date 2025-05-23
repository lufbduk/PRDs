
# PRDs 产品需求库

<p align="center"><img src="/press/public/logo.avif" alt="PRDs-logo" width="320px"/></p>

[[English](/README.md)]

这是一个开放的产品灵感记录库，主要存放各类产品需求文档（PRD）和原型构想。欢迎开发者、产品经理和爱好者共同参与完善，期待将这些文字描述转化为可落地的产品。

## 📑 可用项目

以下是本仓库中当前提供的项目：

- **[MSFP](https://lufbduk.github.io/PRDs/MSFP)** - 模型静态取件协议：以静态网络资源的形式实现的 ServerFree AI 工具协议。轻量的静态版 MCP 替代品。
- **[MDCP](https://lufbduk.github.io/PRDs/MDCP)** - Markdown代码块插件：在 Markdown 中以代码插件的形式实现的插件系统，如果没有安装相应插件，则渲染成代码块，因此可以在任何 Markdown 渲染器中使用（参考 Mermaid 的实现原理）。该方案是 MDX 的替代方案。
- **[TechAgent](https://lufbduk.github.io/PRDs/TechAgent)** - 技术方案数据源和收集器 Agent。
- **[KBSC](https://lufbduk.github.io/PRDs/KBSC)** - KnowledgeBase of Sufficient Conditions：关于【「完成某件事的充分条件」的 JSON-Schema 定义、TypeScript Interface 定义，以及 Zod 定义】的知识库。
- **[Proactive Assistant](https://lufbduk.github.io/PRDs/proactive-assistant)** - 主动型AI助理。

## 📂 目录结构

```
PRDs/
├── press/               # 原始文档目录（使用Obsidian编辑）
│   ├── .obsidian/       # Obsidian编辑器配置
│   └── ...              # 各分类文档
├── docs/                # Vitepress构建后的静态网站
└── package.json         # 项目依赖配置
```

## 🌐 在线访问

已通过 GitHub Pages 部署文档站点：
👉 [点击访问在线文档](https://lufbduk.github.io/PRDs)

## 🤝 参与贡献

### 内容改进
1. Fork 本仓库
2. 在 `press/` 目录修改/添加文档（请保持Obsidian配置不变）
3. 提交 Pull Request 并描述修改内容

### 提交建议
- 通过 Issues 提出产品建议
- 报告文档错误或技术问题
- 参与已有议题的讨论

## ⚠️ AI内容生成声明

本仓库中的部分内容是由人工智能工具生成或辅助完成的。尽管我们努力确保内容的准确性和质量，但某些部分可能需要进一步的人工审核和完善。如果您发现任何问题或有改进建议，请提交Issue或Pull Request。

## 🛠️ 本地开发

```bash
# 安装依赖
pnpm install

# 启动本地文档服务（默认端口5173）
pnpm run dev

# 构建静态网站到 docs/ 目录
pnpm run build
```

## 📜 开源协议

本仓库采用双协议制：
- **文档内容** (适用于 `/press` 和 `/docs` 目录之中的文件)：[CC BY-SA 4.0](https://creativecommons.org/licenses/by-nd/4.0/)
- **程序代码** (适用于 `/press` 和 `/docs` 目录以外的文件)：[MIT License](LICENSE-CODE)

## ⚠️ 注意事项
1. 提交内容请保持文档结构清晰
2. 涉及他人作品请注明来源
3. 技术实现讨论请移步 Issues 区
