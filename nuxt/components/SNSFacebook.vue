<template lang="pug">
.c-sns__facebook
  .c-sns__facebook-container
    h4.c-sns__facebook-header
      | Get our updates on Facebook.
    div
      .fb-page(
        data-href="https://www.facebook.com/zandenaudio/"
        data-tabs="timeline"
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      )
        blockquote.fb-xfbml-parse-ignore(
          cite="https://www.facebook.com/zandenaudio/"
        )
          a(href="https://www.facebook.com/zandenaudio/")
            | Zanden
</template>

<style lang="stylus">
.c-sns__facebook
  display flex
  flex-direction column
  justify-content center
  align-items center
  margin 30px 0 0 0

.c-sns__facebook-container
  border 1px solid #4990E2
  width 100%
  max-width 330px
  padding 0 24px 24px 24px

.c-sns__facebook-header
  margin: 24px 0;
  color: gray;
  font-size: 20px;
  text-align: center;
</style>
