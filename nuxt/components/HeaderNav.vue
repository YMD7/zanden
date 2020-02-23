<template lang="pug">
nav.l-header__nav
  button.l-header__nav-menu
    the-hamburger-menu
  .l-header__nav-container--hidden
    ol
      li.l-header__nav-item
        a(href='/')
          | Home
      li.l-header__nav-item
        a(href='/')
          | Products
      li.l-header__nav-item
        a(href='/')
          | Our Brand
      li.l-header__nav-item
        a(href='/')
          | Distributors
      li.l-header__nav-item
        a(href='/')
          | Contact
    header-nav-close-cross
</template>

<script>
import TheHamburgerMenu from '~/components/TheHamburgerMenu.vue'
import HeaderNavCloseCross from '~/components/HeaderNavCloseCross.vue'

export default {
  components: {
    'the-hamburger-menu': TheHamburgerMenu,
    'header-nav-close-cross': HeaderNavCloseCross
  }
}
</script>

<style lang="stylus">
.l-header__nav
  order 1
  display flex

.l-header__nav-menu
  display flex
  position relative
  z-index 11
  border none
  background-color transparent
  padding 0 18px 0 18px

.l-header__nav-contaier
  display flex
  align-items center
  justify-content center
  flex-direction column
  position fixed
  z-index 10
  top 0
  left 0
  background-color $gray-white
  width 100vw
  height 100vh

.l-header__nav-container--hidden
  display none
</style>
