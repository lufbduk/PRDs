# MSFP - 模型静态取件协议


重现互联网荣光
面向AI的互联网协议
面向AI的通用API规范


--------------------------------------------------

> **注意：以下内容由AI（GitHub Copilot）生成**

MSFP (Model Static Fetch Protocol) 是一种以静态网络资源形式实现的 ServerFree AI 工具协议，提供了轻量级的静态版 MCP 替代方案。

## 简介

MSFP 协议旨在解决传统 MCP（Model Context Protocol）需要部署服务器的问题，通过静态托管平台（如 GitHub Pages、IPFS）分发 AI 工具资源，实现零服务器维护的目标。这使得简单功能的提供者无需付出维护服务器的成本，同时依靠 AI 客户端的代码审查能力和托管平台的资质认证来确保安全性。

## 口号

"Fetch AI Tools, Zero Servers"

## 核心特点

- **无服务器架构**：完全基于静态资源，无需服务器部署和维护
- **轻量级实现**：提供类似 MCP 的 Resources、Prompts、Tools 和 Roots 功能，但更轻量
- **易于发布**：可发布在任何静态托管平台上（GitHub Pages、Netlify、Vercel等）
- **安全审查**：依靠 AI 客户端自身能力进行代码安全审查
- **低成本分发**：降低 AI 工具分发的门槛和成本

## 核心组件

### 静态资源包（Static Bundle）
- **Resources**：预处理的文本/数据（如知识库片段）
- **Prompts**：结构化提示词模板（JSON/YAML格式）
- **Tools**：可执行逻辑（支持 WASM、Python 脚本等静态代码）
- **Roots**：依赖关系的声明文件（类似 `package.json`）

### 协议标识文件 (`msfp-manifest.json`)
```json
{
  "version": "0.1",
  "resources": ["data/knowledge.json"],
  "prompts": ["prompts/qa.yaml"],
  "tools": {"wasm": "search.wasm", "python": "filter.py"},
  "certification": "github_pages"
}
```

## 基本架构

```
MSFP工具包/
  ├── msfp-manifest.json  # 协议标识文件
  ├── resources/          # 静态资源文件
  ├── prompts/            # 提示模板
  ├── tools/              # 工具代码（JavaScript/WASM/Python等）
  └── docs/               # 文档
```

## 使用场景

- 简单的数据处理工具
- 文本分析和转换工具
- 轻量级知识库查询
- 低交互性的AI辅助工具

## 限制

- 不支持 MCP 的 Sampling 功能
- 只支持单向的传输层
- 不适合需要复杂交互的场景

## 与 MCP 的比较

| 特性 | MSFP | MCP |
| --- | --- | --- |
| 服务器依赖 | 无 | 有 |
| 资源分发 | 静态托管 | 动态服务 |
| 部署复杂度 | 低 | 中-高 |
| 适用场景 | 轻量级工具 | 复杂交互场景 |
| Sampling功能 | 不支持 | 支持 |
| 传输层 | 单向 | 双向 |

## 未来发展

- 建立中央化的工具目录
- 开发客户端插件生态
- 提升安全验证机制

## 工作流程

1. **发布阶段**
   - 开发者将工具包上传至静态托管平台，生成公开访问的URL

2. **发现阶段**
   - AI客户端通过人工输入、社区目录或搜索引擎获取工具包的URL

3. **获取阶段**
   - AI客户端解析 manifest 文件，获取所需的静态资源
   - 对代码进行安全性分析，确认安全后在沙盒环境中执行

4. **执行阶段**
   - AI客户端执行或解释工具代码，整合执行结果

## 快速开始

1. 创建你的工具包结构
2. 编写 msfp-manifest.json 文件
3. 将工具包部署到静态托管平台
4. 将URL分享给支持MSFP协议的AI客户端

## 贡献指南

我们欢迎社区贡献，包括：
- 协议规范改进
- 工具包示例
- 客户端SDK开发
- 文档完善与翻译

## 许可证

待定
