<template lang="pug">
header#top.c-header
  header-logo
  header-nav
  header-language
</template>

<script>
import HeaderLogo from '~/components/HeaderLogo.vue'
import HeaderNav from '~/components/HeaderNav.vue'
import HeaderLanguage from '~/components/headerLanguage.vue'

export default {
  components: {
    'header-logo': HeaderLogo,
    'header-nav': HeaderNav,
    'header-language': HeaderLanguage
  }
}
</script>

<style lang="stylus">
.c-header
  display flex
  flex-direction row
  box-sizing border-box
  width 100%
  height 56px
  min-height 56px
  padding 4px 18px 0
</style>
