<template lang="pug">
.l-header__nav-close-cross
  button.c-icon__close-cross
    | Close
    the-cross
</template>

<script>
import TheCross from '~/components/TheCross.vue'

export default {
  components: {
    'the-cross': TheCross
  }
}
</script>
