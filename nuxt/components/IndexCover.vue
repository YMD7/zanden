<template lang="pug">
article.c-cover
  a.c-cover__anchor
    h1
      img.c-cover__image(src='~/assets/images/topics__image.png', alt='model 3000 | the new line amplifier')
    the-arrow-o
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
.c-cover
  height 450px

.c-cover__anchor
  flex 1
  display flex
  flex-direction column
  justify-content center
  align-items center
  padding 0 0 48px 0

.c-cover__image
  box-sizing content-box
  height 306px
  padding 0 0 48px 0
</style>
