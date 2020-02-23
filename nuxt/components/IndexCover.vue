<template lang="pug">
article.c-cover
  a.c-cover__anchor
    h1.c-cover__headline
      | Model 3000mk2
      small.c-cover__subhead
        | the new line amplifier
    the-image-with-arrow-o(
      :image-src="require('~/assets/images/index__cover-image.png')"
      image-alt="Model 3000mk2"
    )
</template>

<script>
import TheImageWithArrowO from '~/components/TheImageWithArrowO.vue'

export default {
  components: {
    'the-image-with-arrow-o': TheImageWithArrowO
  }
}
</script>

<style lang="stylus">
.c-cover
  display flex
  flex-direction column
  min-height 450px

.c-cover__headline
  display flex
  flex-direction column
  justify-content center
  align-items center
  font-size 36px
  letter-spacing 1.2px

.c-cover__subhead
  margin 4px 0 0 0
  color gray-black
  font-size 12px
  letter-spacing 0.8px

.c-cover__anchor
  flex 1
  display flex
  flex-direction column
  justify-content center
  align-items center
</style>
