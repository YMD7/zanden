<template lang="pug">
.l-header__logo
  a.l-header__logo-anchor
    the-logo
</template>

<script>
import TheLogo from '~/components/TheLogo.vue'

export default {
  components: {
    'the-logo': TheLogo
  }
}
</script>

<style lang="stylus">
.l-header__logo
  order 2
  flex 1
  display flex
  align-items center
  justify-content center

.l-header__logo-anchor
  padding 9px 2px 2px
</style>
