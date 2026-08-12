import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import { useData, withBase } from 'vitepress'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout() {
    const { page } = useData()

    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => {
        if (page.value.relativePath === 'index.md') return null

        return h('div', { class: 'page-mascots', 'aria-hidden': 'true' }, [
          h('img', {
            class: 'page-mascot page-mascot-left',
            src: withBase('/image/mascot-left.gif'),
            alt: ''
          }),
          h('img', {
            class: 'page-mascot page-mascot-right',
            src: withBase('/image/mascot-right.gif'),
            alt: ''
          })
        ])
      }
    })
  }
}
