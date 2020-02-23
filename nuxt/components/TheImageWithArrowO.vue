<template lang="pug">
.l-image-with-arrow-o__container
  img.c-cover__image(:src='imageSrc', :alt='imageAlt')
  the-arrow-o
</template>

<script>
import TheArrowO from '~/components/TheArrowO.vue'

export default {
  components: {
    'the-arrow-o': TheArrowO
  },
  props: {
    imageSrc: {
      type: String,
      default: ''
    },
    imageAlt: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="stylus">
.l-image-with-arrow-o__container
  flex 1
  display flex
  flex-direction column
  justify-content center
  align-items center

.c-cover__image
  box-sizing content-box
  max-width 300px
  padding 0 0 24px 0
</style>
