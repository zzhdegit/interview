import { defineConfig } from 'vitepress'

const base = process.env.BASE_PATH || '/'

export default defineConfig({
  title: 'AI 电子电路题库',
  description: '数集、模集、半导体方向的电子电路课程练习整理',
  lang: 'zh-CN',
  base,
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: `${base}favicon.png` }]
  ],
  lastUpdated: true,
  markdown: {
    lineNumbers: false,
    math: true
  },
  themeConfig: {
    outline: {
      level: [2, 3],
      label: '本页目录'
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索'
          },
          modal: {
            displayDetails: '显示详情',
            resetButtonTitle: '重置搜索',
            backButtonTitle: '关闭搜索',
            noResultsText: '没有找到结果',
            footer: {
              selectText: '选择',
              selectKeyAriaLabel: 'Enter',
              navigateText: '切换',
              navigateUpKeyAriaLabel: '向上',
              navigateDownKeyAriaLabel: '向下',
              closeText: '关闭',
              closeKeyAriaLabel: 'Esc'
            }
          }
        }
      }
    },
    nav: [
      { text: '主页', link: '/' },
      { text: '数集', link: '/数集' },
      { text: '模集', link: '/模集' },
      { text: '半导体', link: '/半导体' }
    ],
    sidebar: [
      {
        text: '分类',
        items: [
          { text: '数集', link: '/数集' },
          { text: '模集', link: '/模集' },
          { text: '半导体', link: '/半导体' }
        ]
      }
    ],
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    },
    footer: {
      message: '基于 Markdown 整理，可直接编辑和扩展。',
      copyright: 'Copyright © 2026'
    }
  }
})
