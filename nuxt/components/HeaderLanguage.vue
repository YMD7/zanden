<template lang="pug">
nav.l-header__language
  button.l-header__language-icon
    the-globe-americas
  .l-header__language-container--hidden
    ul
      li.c-header__language-item
        a
          | English
      li.c-header__language-item
        a
          | Japanese
</template>

<script>
import TheGlobeAmericas from '~/components/TheGlobeAmericas.vue'

export default {
  components: {
    'the-globe-americas': TheGlobeAmericas
  }
}
</script>

<style lang="stylus">
.l-header__language
  order 3
  display flex
  align-items center
  padding 0 16px 0 16px

.l-header__language-icon
  border none
  background-color transparent
  height 24px

.l-header__language-container--hidden
  display none
</style>
