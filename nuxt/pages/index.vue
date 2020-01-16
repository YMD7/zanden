<template lang="pug">
main.l-content
  section.l-cover
    index-cover
  section.l-news__list
    news-list
    nav-prev-next-link
  .l-nav__menu
    nav-menu
  section.l-sns__facebook
    sns-facebook
  .l-nav__back-top-top
    nav-back-to-top
</template>

<script>
import IndexCover from '~/components/IndexCover.vue'
import NewsList from '~/components/NewsList.vue'
import NavPrevNextLink from '~/components/NavPrevNextLink.vue'
import NavMenu from '~/components/NavMenu.vue'
import SNSFacebook from '~/components/SNSFacebook.vue'
import NavBackToTop from '~/components/NavBackToTop.vue'

export default {
  components: {
    'index-cover': IndexCover,
    'news-list': NewsList,
    'nav-prev-next-link': NavPrevNextLink,
    'nav-menu': NavMenu,
    'sns-facebook': SNSFacebook,
    'nav-back-to-top': NavBackToTop
  }
}
</script>

<style lang="stylus">
.l-content
  flex 1
  width 100%
  margin 12px 0 0 0
  padding 42px 0 0 0

.l-cover
  border-bottom 2px solid gray-white
</style>
