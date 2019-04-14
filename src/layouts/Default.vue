<template>
  <transition name="fade" appear>
    <div class="layout">
      <Nav v-if="footer !== false"/>
      <slot/>
      <Footer v-if="footer !== false"/>
    </div>
  </transition>
</template>

<script>
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'

export default {
  props: ['nav', 'footer'],
  components: {
    Nav,
    Footer,
  },
  metaInfo: {
    titleTemplate: '%s ∙ -',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  }
}
</script>
