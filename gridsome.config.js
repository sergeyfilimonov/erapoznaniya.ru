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
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: ''
      }
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
  ]
}
