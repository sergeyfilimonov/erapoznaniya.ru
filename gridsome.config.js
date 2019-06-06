class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
  }
}

module.exports = {
  siteName: 'erapoznaniya.ru',
  siteUrl: 'https://erapoznaniya.ru',
  siteDescription: 'Серия форумов «Эра познания» — это история, философия и популяризация науки. Наша задача не просто рассказать о тех или иных событиях и процессах в прошлом, но и осмыслить их, причём, с непосредственным участием публики.',
  titleTemplate: '%s - TITLE',
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      autolinkHeadings: {
        content: {
          type: 'text',
          value: '#'
        }
      }
    }
  },
  plugins: [
    {
      use: 'gridsome-plugin-modal'
    },
    {
      use: 'gridsome-plugin-gtm',
      options: {
        id: 'GTM-WH2RFDV',
        enabled: false,
        debug: false
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000,
        exclude: ['/exclude-me']
      }
    }
  ],
  chainWebpack: config => {
    config.module
      .rule('css')
      .oneOf('normal')
      .use('postcss-loader')
      .tap(options => {
        options.plugins.unshift(...[
          require('postcss-import'),
          require('postcss-nested'),
          require('tailwindcss'),
        ])

        if (process.env.NODE_ENV === 'production') {
          options.plugins.push(...[
            require('@fullhuman/postcss-purgecss')({
              content: [
                'src/assets/**/*.css',
                'src/**/*.vue',
                'src/**/*.js'
              ],
              extractors: [
                {
                  extractor: TailwindExtractor,
                  extensions: ['css', 'vue', 'js']
                }
              ],
              whitelistPatterns: [/shiki/]
            }),
          ])
        }
        return options
      })
  }
}
