import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/atoms_viewer_docs/',
  srcDir: 'site',
  head: [
    [
      'script',
      {},
      "(function(){var base='/atoms_viewer_docs/';var path=location.pathname;var isRoot=path===base||path===base+'index.html';if(!isRoot){return;}var lang=(navigator.language||'').toLowerCase();if(!lang.startsWith('zh')){location.replace(base+'en/');}})();",
    ],
  ],
  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      title: '兰朵儿原子查看器',
      description: 'Atoms Viewer 文档',
      themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: '使用指南', link: '/guide/intro' },
          { text: '运行时 URL', link: '/api' },
          { text: '在线演示', link: 'https://ldrfy.github.io/atoms_viewer/' },
        ],
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'LDR Atoms Viewer',
      description: 'Atoms Viewer documentation',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Guide', link: '/en/guide/intro' },
          { text: 'Runtime URL', link: '/en/api' },
          { text: 'Live Demo', link: 'https://ldrfy.github.io/atoms_viewer/' },
        ],
      },
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'https://ldrfy.github.io/atoms_viewer/lav.svg',
    sidebar: {
      '/guide/': [
        {
          text: '快速开始',
          items: [
            { text: '前言', link: '/guide/intro' },
            { text: '功能总览', link: '/guide/overview' },
            { text: '运行时 URL 指南', link: '/api' },
          ],
        },
        {
          text: '核心功能',
          items: [
            { text: '文件与数据', link: '/guide/io' },
            { text: '图层外观', link: '/guide/appearance' },
            { text: '视图交互', link: '/guide/view' },
            { text: '分析测量', link: '/guide/analysis' },
            { text: '多帧播放', link: '/guide/playback' },
            { text: '导出分享', link: '/guide/export' },
            { text: '系统设置', link: '/guide/settings' },
            { text: '性能优化', link: '/guide/performance' },
            { text: '常见问题', link: '/guide/faq' },
          ],
        },
      ],
      '/': [
        {
          text: '使用指南',
          items: [
            { text: '前言', link: '/guide/intro' },
            { text: '功能总览', link: '/guide/overview' },
            { text: '文件与数据', link: '/guide/io' },
            { text: '图层外观', link: '/guide/appearance' },
            { text: '视图交互', link: '/guide/view' },
            { text: '分析测量', link: '/guide/analysis' },
            { text: '多帧播放', link: '/guide/playback' },
            { text: '导出分享', link: '/guide/export' },
            { text: '系统设置', link: '/guide/settings' },
            { text: '性能优化', link: '/guide/performance' },
            { text: '常见问题', link: '/guide/faq' },
            { text: '运行时 URL 指南', link: '/api' },
          ],
        },
      ],
      '/en/guide/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Preface', link: '/en/guide/intro' },
            { text: 'Overview', link: '/en/guide/overview' },
            { text: 'Runtime URL Guide', link: '/en/api' },
          ],
        },
        {
          text: 'Core Features',
          items: [
            { text: 'File & Data', link: '/en/guide/io' },
            { text: 'Appearance', link: '/en/guide/appearance' },
            { text: 'View & Interaction', link: '/en/guide/view' },
            { text: 'Analysis', link: '/en/guide/analysis' },
            { text: 'Playback & Recording', link: '/en/guide/playback' },
            { text: 'Export & Sharing', link: '/en/guide/export' },
            { text: 'Settings', link: '/en/guide/settings' },
            { text: 'Performance', link: '/en/guide/performance' },
            { text: 'FAQ', link: '/en/guide/faq' },
          ],
        },
      ],
      '/en/': [
        {
          text: 'Guide',
          items: [
            { text: 'Preface', link: '/en/guide/intro' },
            { text: 'Overview', link: '/en/guide/overview' },
            { text: 'File & Data', link: '/en/guide/io' },
            { text: 'Appearance', link: '/en/guide/appearance' },
            { text: 'View & Interaction', link: '/en/guide/view' },
            { text: 'Analysis', link: '/en/guide/analysis' },
            { text: 'Playback & Recording', link: '/en/guide/playback' },
            { text: 'Export & Sharing', link: '/en/guide/export' },
            { text: 'Settings', link: '/en/guide/settings' },
            { text: 'Performance', link: '/en/guide/performance' },
            { text: 'FAQ', link: '/en/guide/faq' },
            { text: 'Runtime URL Guide', link: '/en/api' },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ldrfy/atoms_viewer' },
    ],
  },
})
