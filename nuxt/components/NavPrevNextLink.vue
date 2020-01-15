<template lang="pug">
nav.l-nav__prev-next-link
  div
    a.c-nav__prev-next-link-anchor
      span.c-nav__prev-next-link-text
        | See more
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
.l-nav__prev-next-link
  display flex
  justify-content flex-end
  margin 6px 0 36px 0
  padding 0 18px 0 18px

.c-nav__prev-next-link-anchor
  display flex
  align-items center
  border-bottom 1px solid gray
  padding 6px 1px 1px 3px
  color gray-black
  font-size 14px
  letter-spacing 0.5px

.c-nav__prev-next-link-text
  padding 0 4px 0 0
</style>
