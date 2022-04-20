<template>
  <section class="loading">
    <header class="loading__header">
      <h1 class="loading__title">App loading ...</h1>
    </header>
  </section>
</template>

<script>
export default {
  name: 'AppLoading',
  computed: {
    notes() {
      return this.$store.state.notes;
    },
  },
  mounted() {
    if (this.notes.length && !this.$route.params.note) {
      this.$router.push(`/notes/${this.notes[0].id}`);
    }
  },
  watch: {
    notes(notes) {
      if (notes.length && !this.$route.params.note) {
        this.$router.push(`/notes/${notes[0].id}`);
      }
    },
  },
};
</script>

<style lang="scss">
@import '../assets/scss/colors.scss';

.loading {
  padding: 40px;

  &__header {
    margin: 0 0 40px;
  }

  &__title {
    font-weight: normal;
    color: $c-text;
    margin: 0 0 40px;
    font-size: 24px;
  }
}
</style>
