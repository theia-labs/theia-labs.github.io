const { description } = require('../../package')

module.exports = {
  locales: {
    '/': {
      lang: 'fr-FR',
      title: 'Theia labs'
    },
    '/en/': {
      lang: 'en-US',
      title: 'Theia labs'
    }
  },
  description: description,
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    locales: {
      '/': {
        nav: [
          {
            text: 'Theia CLI',
            link: '/cli/',
          },
          {
            text: 'Theia-labs',
            link: 'https://github.com/theia-labs'
          }
        ],
        sidebar: {
          '/cli/': [
            {
              title: 'Theia CLI',
              collapsable: false,
              children: [
                '',
                'guide',
                'modules'
              ]
            }
          ],
        }
      },
      '/en/': {
        nav: [
          {
            text: 'Theia CLI',
            link: '/en/cli/',
          },
          {
            text: 'Theia-labs',
            link: 'https://github.com/theia-labs'
          }
        ],
        sidebar: {
          '/en/cli/': [
            {
              title: 'Theia CLI',
              collapsable: false,
              children: [
                '',
                'guide',
                'modules'
              ]
            }
          ],
        }
      }
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
