import { defineConfig } from 'vitepress'

const base = process.env.BASE_PATH || '/'

export default defineConfig({
  title: '集成电路面试题库',
  description: '数集、模集、半导体面试题与答案整理',
  lang: 'zh-CN',
  base,
  lastUpdated: true,
  markdown: {
    lineNumbers: false
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
      {
        text: '题库',
        items: [
          { text: '数集', link: '/questions/数集' },
          { text: '模集', link: '/questions/模集' },
          { text: '半导体', link: '/questions/半导体' }
        ]
      },
      {
        text: '答案',
        items: [
          { text: '数集答案', link: '/answers/数集_答案' },
          { text: '模集答案', link: '/answers/模集_答案' },
          { text: '半导体答案', link: '/answers/半导体_答案' }
        ]
      }
    ],
    sidebar: [
      {
        text: '题库',
        items: [
          { text: '数集', link: '/questions/数集' },
          { text: '模集', link: '/questions/模集' },
          { text: '半导体', link: '/questions/半导体' }
        ]
      },
      {
        text: '答案',
        items: [
          { text: '数集答案', link: '/answers/数集_答案' },
          { text: '模集答案', link: '/answers/模集_答案' },
          { text: '半导体答案', link: '/answers/半导体_答案' }
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
      message: '基于 Markdown 整理，可直接在 GitHub 中编辑。',
      copyright: 'Copyright © 2026'
    }
  }
})
