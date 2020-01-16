<template lang="pug">
nav.c-nav__back-to-top
  a.c-nav__back-to-top-anchor
    the-arrow-o(arrow-to="top")
    span.c-nav__back-to-top-text
      | BACK TO TOP
</template>

<script>
import TheArrowO from '~/components/TheArrowO.vue'

export default {
  components: {
    'the-arrow-o': TheArrowO
  }
}
</script>

<style lang="stylus">
.c-nav__back-to-top
  display flex
  align-items center
  justify-content center
  border-top 2px solid $gray-white
  margin 48px 0 42px
  padding-top 12px

.c-nav__back-to-top-anchor
  display flex
  align-items center
  flex-direction column

.index-BackToTop_Icon
  width 30px
  height 30px

.c-nav__back-to-top-text
  margin-top 4px
  color $gray-black
  font-size 10px

</style>
