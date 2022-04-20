<template>
  <menu class="notes-sidebar">
    <search-bar></search-bar>
  </menu>
</template>
<script>
import SearchBar from '@/components/search-bar/SearchBar.vue';

export default {
  components: { SearchBar },
};
</script>

<style lang="scss">
@import '../../assets/scss/colors.scss';

.notes-sidebar {
  padding: 0;
  margin: 0;

  &__header {
    font-size: 16px;
    font-weight: normal;
    color: $c-text;
    margin: 0 0 20px;
  }

  &__button {
    background: $c-white;
    color: $c-grey--dark;
    font-weight: bold;
    display: block;
    border-radius: 3px;
    padding: 6px 10px;
    margin: 0 0 5px;
    text-decoration: none;
    transition: all .25s;

    &:hover {
      background: $c-primary--light;
    }

    &.router-link-exact-active {
      color: $c-primary;
    }

    i {
      margin-right: 5px;
    }
  }
}
</style>
