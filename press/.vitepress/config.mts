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
    ['meta', { property: 'og:image', content: 'https://github.com/lufbduk/PRDs/blob/main/logo.png' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'PRDs - 开源产品需求文档集合' }],
    ['meta', { name: 'twitter:description', content: '提供开源PRD文档，包括MSFP、MDCP、TechAgent、KBSC和Proactive Assistant等创新技术方案' }],
  ],

  base: '/PRDs/',
  outDir: '../docs',

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/about' },
    ],
    sidebar: [
      { text: '小工具合集', items: [
        { text: '清单', link: '/list' },
      ]},
      { text: 'MDCP', items: [
        { text: 'MDCP 首页', link: '/MDCP/' },
        { text: 'MDCP 说明', link: '/MDCP/readme' },
      ]},
      { text: 'MSFP', items: [
        { text: 'MSFP 首页', link: '/MSFP/' },
        { text: 'MSFP 说明', link: '/MSFP/readme' },
        { text: '静态获取协议(DeepSeek)', link: '/MSFP/Model-Static-Fetch-Protocol--by-deepseek' },
      ]},
      // 以下为AI生成的导航项 - TechAgent
      { text: 'TechAgent', items: [
        { text: 'TechAgent 首页', link: '/TechAgent/' },
        { text: 'TechAgent 说明', link: '/TechAgent/readme' },
      ]},
      // 以下为AI生成的导航项 - KBSC
      { text: 'KBSC', items: [
        { text: 'KBSC 首页', link: '/KBSC/' },
        { text: 'KBSC 说明', link: '/KBSC/readme' },
      ]},
      // 以下为AI生成的导航项 - Proactive Assistant
      { text: 'Proactive Assistant', items: [
        { text: 'Proactive Assistant 首页', link: '/proactive-assistant/' },
        { text: 'Proactive Assistant 说明', link: '/proactive-assistant/readme' },
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
