<template lang="pug">
.l-sns__facebook
  h4.c-sns__facebook-header
    | Get our updates on Facebook.
  .c-sns__facebook-container
    .c-sns__facebook-embed
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
.l-sns__facebook
  display flex
  justify-content center
  margin: 30px 0 0 0;

</style>
