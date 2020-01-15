<template lang="pug">
.c-news__container
  ol
    li
      article.c-news__list-article
        a.c-news__list-anchor
          h2
            img.c-news__list-image(src='~/assets/images/topics__image.png', alt='Product Catalogue 2017 SS')
          .c-news__thumb-arrow-o
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
.c-news__list-article
  border-bottom 2px solid gray-white
  padding 0 18px 0 18px

.c-news__list-anchor
  flex 1
  display flex
  flex-direction column
  align-items center
  padding 12px 0 24px 0

.c-news__list-image
  max-height 240px
</style>
