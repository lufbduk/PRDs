# MSFP - 模型静态取件协议

> **注意：此文件由AI（GitHub Copilot）生成**

MSFP (Model Static Fetch Protocol) 是一种以静态网络资源形式实现的 ServerFree AI 工具协议，提供了轻量级的静态版 MCP 替代方案。

## 简介

MSFP 协议解决了传统 MCP 协议需要部署服务器的问题，通过静态托管平台（如 GitHub Pages、IPFS）分发 AI 工具资源，实现零服务器维护的目标。对于简单的工具功能，开发者无需付出维护服务器的成本，同时依赖 AI 客户端的代码审查能力和托管平台的资质认证来确保安全性。

## 口号

"Fetch AI Tools, Zero Servers"

## 核心特点

- **无服务器架构**：完全基于静态资源，无需服务器部署和维护
- **轻量级实现**：提供类似 MCP 的 Resources、Prompts、Tools 和 Roots 功能，但更轻量
- **易于发布**：可发布在任何静态托管平台上（GitHub Pages、Netlify、Vercel等）
- **安全审查**：依靠 AI 客户端自身能力进行代码安全审查
- **低成本分发**：降低 AI 工具分发的门槛和成本

## 基本架构

```
MSFP工具包/
  ├── msfp-manifest.json  # 协议标识文件
  ├── resources/          # 静态资源文件
  ├── prompts/            # 提示模板
  ├── tools/              # 工具代码（JavaScript/WASM/Python等）
  └── docs/               # 文档
```

## 快速开始

1. 创建你的工具包结构
2. 编写 msfp-manifest.json 文件
3. 将工具包部署到静态托管平台
4. 将URL分享给支持MSFP协议的AI客户端

## 限制

- 不支持 MCP 的 Sampling 功能
- 只支持单向的传输层
- 不适合需要复杂交互的场景

## 贡献指南

我们欢迎社区贡献，包括：
- 协议规范改进
- 工具包示例
- 客户端SDK开发
- 文档完善与翻译

## 许可证

待定
