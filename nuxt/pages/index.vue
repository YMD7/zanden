<template lang="pug">
main.l-main
  section
    article.p-cover
      a
        h1
          img.p-topics__image(src='~/assets/images/topics__image.png', alt='model 3000 | the new line amplifier')
        .c-nav__link-arrow
          img.c-icon__arrow-o(src='~/assets/images/arrow-o.svg')
    ol.p-news
      li
        article.p-news__article
          a
            h2
              img.p-topics__image(src='~/assets/images/topics__image.png', alt='Product Catalogue 2017 SS')
          .c-nav__link-arrow
            img.c-icon__arrow-o(src='~/assets/images/arrow-o.svg')
    nav.c-nav__see-more
      a
        .c-nav__see-more-wrapper
          span
            | See more
          img.c-icon__arrow(src='~/assets/images/arrow.svg')
  nav.c-nav__menu
    ul
      li.c-nav__menu-item
        a.c-nav__menu-anchor
          span
            | Products
          img.c-icon__arrow(src='~/assets/images/arrow.svg')
      li.c-nav__menu-item
        a.c-nav__menu-anchor
          span
            | Our Brand
          img.c-icon__arrow(src='~/assets/images/arrow.svg')
      li.c-nav__menu-item
        a.c-nav__menu-anchor
          span
            | Where to buy
          img.c-icon__arrow(src='~/assets/images/arrow.svg')
      li.c-nav__menu-item
        a.c-nav__menu-anchor
          span
            | Contact
          img.c-icon__arrow(src='~/assets/images/arrow.svg')
  section
    .c-sns__facebook
      h4.c-sns__facebook-header
        | Get our updates on Facebook.
      .c-sns__facebook-wrapper
        .c-sns__facebook-embed
          .fb-page data-href="https://www.facebook.com/zandenaudio/" data-tabs="timeline" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"
            blockquote cite="https://www.facebook.com/zandenaudio/" class="fb-xfbml-parse-ignore"
              a href="https://www.facebook.com/zandenaudio/"
                | Zanden
  nav.c-nav__back-to-top
    a
      img.c-icon__arrow-o--right(src='~/assets/images/arrow-o.svg')
      span.c-nav__back-to-top-text
        | BACK TO TOP
</template>

<style lang="stylus">
.l-main
  flex 1
  width 100%
</style>
