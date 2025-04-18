# MDCP - Markdown代码块插件

> **注意：此文件由AI（GitHub Copilot）生成**

MDCP (Markdown Code-block Plugin) 是在 Markdown 中以代码插件的形式实现的插件系统，如果没有安装相应插件，则渲染成代码块，因此可以在任何 Markdown 渲染器中使用（参考 Mermaid 的实现原理）。该方案是 MDX 的替代方案。

## 简介

MDCP 提供了一种在保持 Markdown 兼容性的同时，增强文档交互性和丰富性的解决方案。受到 Mermaid 的启发，MDCP 允许作者在标准 Markdown 中嵌入交互式组件，同时确保在不支持这些组件的环境中内容仍然可访问。

## 核心特点

- **通用兼容性**：在所有标准 Markdown 渲染器中都能正常工作
- **优雅降级**：在不支持的环境中自动转为可读的代码块
- **简单语法**：基于标准 Markdown 代码块，学习成本低
- **插件生态**：支持社区开发和共享各类功能插件
- **无缝集成**：可与现有文档系统和工作流程轻松整合

## 基本使用

MDCP 插件使用标准的 Markdown 代码块语法，通过特定的语言标识符来调用不同的插件：

````markdown
```mdcp-[插件名]
[插件配置和内容]
```
````

例如，创建一个简单的图表：

````markdown
```mdcp-chart
type: bar
data: [12, 19, 3, 5, 2, 3]
labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"]
title: "示例图表"
```
````

## 支持的插件类型

- **mdcp-chart**: 各类数据可视化图表
- **mdcp-diagram**: 流程图、UML图等
- **mdcp-math**: 数学公式和方程
- **mdcp-map**: 交互式地图
- **mdcp-form**: 表单和用户输入组件
- **mdcp-media**: 多媒体内容嵌入
- **mdcp-code**: 可执行代码示例

## 快速开始

1. 在您的 Markdown 渲染环境中安装 MDCP 支持
2. 在 Markdown 文档中使用 MDCP 代码块语法
3. 添加所需插件的配置

## 与其他解决方案的比较

| 方案 | 兼容性 | 降级行为 | 复杂度 | 功能丰富度 |
|------|---------|----------|--------|------------|
| MDCP | 高 | 优雅降级为代码块 | 低 | 中-高 |
| MDX | 低 | 不降级 | 中-高 | 高 |
| 纯 Markdown | 最高 | 不适用 | 最低 | 最低 |
| 自定义 HTML | 中 | 显示为HTML | 高 | 高 |

## 插件开发

MDCP 提供简单的插件开发API，开发者可以创建自定义插件来扩展功能。一个基本的MDCP插件结构：

```javascript
// 示例插件框架
mdcp.register('my-plugin', {
  render(content, options) {
    // 解析内容
    // 创建和返回组件
  },
  defaultOptions: {
    // 默认配置
  }
});
```

## 贡献指南

我们欢迎社区贡献，包括：
- 新插件开发
- 文档改进
- 核心功能增强
- 错误报告和修复

## 许可证

待定
