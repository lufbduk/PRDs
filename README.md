# PRDs Product Requirements Repository

An open repository for product inspiration, storing various product requirement documents (PRDs) and prototype concepts. Developers, product managers, and enthusiasts are welcome to collaborate in transforming these textual descriptions into implementable products.

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
- **Documentation Content** (under the `/press` dir): [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh)
- **Source Code** (out of the `/press` dir): [MIT License](LICENSE-CODE)

## ⚠️ Guidelines
1. Maintain clear document structure in submissions
2. Attribute sources for third-party content
3. Technical discussions should be conducted in Issues section

