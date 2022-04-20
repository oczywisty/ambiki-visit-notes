<template>
  <router-link class="notes-list-item" :to="url">
    <p class="notes-list-item__date">{{ meta }}</p>
    <p class="notes-list-item__title">{{ title }}</p>
  </router-link>
</template>

<script>
export default {
  name: 'NotesListItem',
  props: {
    meta: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import '../../assets/scss/colors.scss';

.notes-list-item {
  display: block;
  background: $c-white;
  width: 100%;
  border: 1px solid $c-grey--light;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
  margin: 0 0 20px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, .05);
  cursor: pointer;
  transition: all .25s;
  text-decoration: none;

  &:hover {
    box-shadow: 0 4px 4px rgba(0, 0, 0, .05);
    background: $c-primary--light;
  }

  &.router-link-exact-active {
    background: $c-primary;
  }

  &__date {
    margin: 0;
    color: $c-grey--dark;
    font-size: 12px;

    .router-link-exact-active &{
      color: $c-white;
    }
  }

  &__title {
    margin: 0;
    font-size: 16px;
    color: $c-text;

    .router-link-exact-active &{
      color: $c-white;
    }
  }
}

</style>
