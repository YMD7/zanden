<template lang="pug">
nav.c-nav__back-to-top
  a
    the-arrow-o
    span.c-nav__back-to-top-text
      | BACK TO TOP
</template>

<script>
import TheArrowO from '~/components/TheArrowO.vue'

export default {
  components: {
    'the-arrow-o': TheArrowO
  }
}
</script>
