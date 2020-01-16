<template lang="pug">
img(src='~/assets/images/arrow-o.svg' :class='"c-icon__arrow-o--" + arrowTo')
</template>

<script>
export default {
  props: {
    arrowTo: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="stylus">
.c-icon__arrow-o--top
  transform rotate(-90deg)
</style>
