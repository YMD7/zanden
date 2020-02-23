<template lang="pug">
.app
  the-facebook-script
  app-header
  nuxt
  app-footer
</template>

<script>
import TheFacebookScript from '~/components/TheFacebookScript.vue'
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'

export default {
  components: {
    'the-facebook-script': TheFacebookScript,
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
