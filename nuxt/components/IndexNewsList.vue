<template lang="pug">
ol.l-index-news-list__container
  li
    article.c-index-news-list__article
      a.c-index-news-list__anchor
        h2.c-index-news-list__headline
          | Product Catalogue 2017 SS
        the-image-with-arrow-o(
          :image-src="require('~/assets/images/index__news-list-image.png')"
          image-alt="Product Catalogue 2017 SS"
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
.l-index-news-list__container

.c-index-news-list__article
  border-bottom 2px solid gray-white

.c-index-news-list__anchor
  flex 1
  display flex
  flex-direction column
  align-items center
  padding 24px 18px 24px 18px

.c-index-news-list__headline
  margin 12px 0 24px 0
  font-size 18px
  letter-spacing 0.8px
</style>
