
# PRDs Product Requirements Repository

<p align="center"><img src="/press/public/logo.avif" alt="PRDs-logo" width="320px"/></p>

[[中文](/README-CN.md)]

An open repository for product inspiration, storing various product requirement documents (PRDs) and prototype concepts. Developers, product managers, and enthusiasts are welcome to collaborate in transforming these textual descriptions into implementable products.

## 📑 Available Projects

Here are the current projects available in this repository:

- **[MSFP](https://lufbduk.github.io/PRDs/MSFP)** - Model Static Fetch Protocol: A ServerFree AI tool protocol implemented as static network resources. A lightweight static alternative to MCP.
- **[MDCP](https://lufbduk.github.io/PRDs/MDCP)** - Markdown Code Block Plugin: A plugin system implemented as code plugins in Markdown. Renders as code blocks if no plugin is installed, usable in any Markdown renderer (similar to Mermaid). An alternative to MDX.
- **[TechAgent](https://lufbduk.github.io/PRDs/TechAgent)** - Technical solution data source and collector agent.
- **[KBSC](https://lufbduk.github.io/PRDs/KBSC)** - KnowledgeBase of Sufficient Conditions: Knowledge base for JSON-Schema definitions, TypeScript interfaces, and Zod definitions of "sufficient conditions for completing tasks".
- **[Proactive Assistant](https://lufbduk.github.io/PRDs/proactive-assistant)** - Proactive AI assistant.

## 📂 Directory Structure

```
PRDs/
├── press/               # Source document directory (editable with Obsidian)
│   ├── .obsidian/       # Obsidian editor configuration
│   └── ...              # Category documents
├── docs/                # Vitepress-built static site
└── package.json         # Project dependencies configuration
```

## 🌐 Online Access

Deployed via GitHub Pages:  
👉 [Visit Documentation Site](https://lufbduk.github.io/PRDs)

## 🤝 Contributions

### Content Improvements
1. Fork this repository
2. Modify/add documents in `press/` directory (keep Obsidian configuration intact)
3. Submit Pull Request with description of changes

### Suggestions
- Propose product ideas through Issues
- Report documentation errors or technical issues
- Participate in existing discussions

## ⚠️ AI-Generated Content Disclaimer

Some content in this repository has been generated or assisted by artificial intelligence tools. While we strive to ensure accuracy and quality, certain sections may require further human review and refinement. If you identify any issues or have suggestions for improvements, please submit an Issue or Pull Request.

## 🛠️ Local Development

```bash
# Install dependencies
pnpm install

# Start local documentation service (default port 5173)
pnpm run dev

# Build static site to docs/ directory
pnpm run build
```

## 📜 License

This repository adopts a dual-license system:
- **Documentation Content** (under the `/press` and `/docs` dir): [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh)
- **Source Code** (out of the `/press` and `/docs` dir): [MIT License](LICENSE-CODE)

## ⚠️ Guidelines
1. Maintain clear document structure in submissions
2. Attribute sources for third-party content
3. Technical discussions should be conducted in Issues section

