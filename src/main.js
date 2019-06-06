// Global styles
import '~/assets/css/main.css'

// Layouts
import DefaultLayout from '~/layouts/Default.vue'

// Global components
import VueMq from 'vue-mq'
import VueScrollTo from 'vue-scrollto'
import VueGtm from 'vue-gtm'

export default function (Vue, {router, head, isClient}) {
  Vue.component('Layout', DefaultLayout)

  Vue.use(VueScrollTo, {
    duration: 500,
    easing: "ease",
  })

  Vue.use(VueMq, {
    breakpoints: {
      mobile: 450,
      tablet: 900,
      laptop: 1250,
      desktop: Infinity,
    }
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://use.fontawesome.com/releases/v5.7.2/css/all.css'
  })
}
