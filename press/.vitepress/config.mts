import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PRDs - 开源产品需求文档集合",
  description: "提供开源PRD文档，包括MSFP、MDCP、TechAgent、KBSC和Proactive Assistant等创新技术方案",
  appearance: "dark",
  
  // SEO优化设置 - 由AI（GitHub Copilot）添加
  lang: 'zh-CN',
  lastUpdated: true,
  head: [
    ['meta', { name: 'author', content: 'PRDs Team' }],
    ['meta', { name: 'keywords', content: 'PRD,开源,产品需求文档,MSFP,MDCP,TechAgent,KBSC,Proactive Assistant,技术方案' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'PRDs - 开源产品需求文档集合' }],
    ['meta', { property: 'og:description', content: '提供开源PRD文档，包括MSFP、MDCP、TechAgent、KBSC和Proactive Assistant等创新技术方案' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'PRDs - 开源产品需求文档集合' }],
    ['meta', { name: 'twitter:description', content: '提供开源PRD文档，包括MSFP、MDCP、TechAgent、KBSC和Proactive Assistant等创新技术方案' }],

    // ['meta', { property: 'og:image', content: 'https://github.com/lufbduk/PRDs/blob/main/logo.png' }],

    ['link', { rel: 'icon', href: '/PRDs/logo.webp' }],
    ['link', { rel: 'apple-touch-icon', href: '/PRDs/apple-touch-icon.png' }],
  ],

  base: '/PRDs/',
  outDir: '../docs',
  rewrites: {
    ':proj/readme.md': ':proj/index.md',
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.avif',
    nav: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/about' },
    ],
    sidebar: [
      { text: '小工具合集', items: [
        { text: '清单', link: '/list' },
      ]},
      { text: 'MDCP', items: [
        { text: 'MDCP 简介', link: '/MDCP' },
      ]},
      { text: 'MSFP', items: [
        { text: 'MSFP 简介', link: '/MSFP' },
        { text: '静态获取协议(DeepSeek)', link: '/MSFP/Model-Static-Fetch-Protocol--by-deepseek' },
      ]},
      // 以下为AI生成的导航项 - TechAgent
      { text: 'TechAgent', items: [
        { text: 'TechAgent 简介', link: '/TechAgent' },
      ]},
      // 以下为AI生成的导航项 - KBSC
      { text: 'KBSC', items: [
        { text: 'KBSC 简介', link: '/KBSC' },
      ]},
      // 以下为AI生成的导航项 - Proactive Assistant
      { text: 'Proactive Assistant', items: [
        { text: 'Proactive Assistant 简介', link: '/proactive-assistant' },
      ]},
      { text: '示例文档', items: [
        { text: 'Markdown Examples', link: '/markdown-examples' },
        { text: 'Runtime API Examples', link: '/api-examples' },
      ]},
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lufbduk/PRDs' },
    ]
  }
})
