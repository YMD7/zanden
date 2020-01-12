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
