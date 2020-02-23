<template lang="pug">
nav.l-nav__menu
  ul
    li.c-nav__menu-item
      a.c-nav__menu-anchor
        span.c-nav__menu-text
          | Products
        the-arrow
    li.c-nav__menu-item
      a.c-nav__menu-anchor
        span.c-nav__menu-text
          | Our Brand
        the-arrow
    li.c-nav__menu-item
      a.c-nav__menu-anchor
        span.c-nav__menu-text
          | Where to buy
        the-arrow
    li.c-nav__menu-item
      a.c-nav__menu-anchor
        span.c-nav__menu-text
          | Contact
        the-arrow
</template>

<script>
import TheArrow from '~/components/TheArrow.vue'

export default {
  components: {
    'the-arrow': TheArrow
  }
}
</script>

<style lang="stylus">
.l-nav__menu
  padding 36px 0 36px 0

.c-nav__menu-item
  display flex
  justify-content center
  margin 0 0 6px 0

.c-nav__menu-anchor
  display block
  background-color #F0EBDC
  width 100%
  max-width 330px
  padding 18px 0 18px 0
  color gray-black
  text-align center

.c-nav__menu-text
  margin 0 6px 0 15px
  font-size 20px
  line-height 0
  letter-spacing 0.5px
</style>
