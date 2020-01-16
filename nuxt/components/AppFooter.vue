<template lang="pug">
footer.l-footer
  small.l-footer__copyright
    | Zanden Audio Systems Ltd. &copy; {{ thisYear }}
</template>

<script>
export default {
  computed: {
    thisYear () {
      return new Date().getFullYear()
    }
  }
}
</script>

<style lang="stylus">
.l-footer
  display flex
  align-items center
  justify-content center
  width 100%
  height 60px
  min-height 60px

.l-footer__copyright
  color gray
  font-size 10px
  text-align center
</style>
