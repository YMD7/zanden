<template lang="pug">
.app
  app-header
  nuxt
  app-footer
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'

export default {
  components: {
    'app-header': AppHeader,
    'app-footer': AppFooter
  }
}
</script>

<style lang="stylus">
body
  display flex
  flex-direction column
</style>
