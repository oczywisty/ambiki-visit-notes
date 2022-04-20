<template>
  <menu class="settings-sidebar">
    <header class="settings-sidebar__header">Settings:</header>

    <router-link
      class="settings-sidebar__button"
      to="/settings"
    ><i class="fa-solid fa-user"></i> Profile</router-link>

    <router-link
      class="settings-sidebar__button"
      to="/settings/abbreviations"
    ><i class="fa-solid fa-book"></i> Abbreviations</router-link>

    <router-link
      class="settings-sidebar__button"
      to="/settings/templates"
    ><i class="fa-solid fa-book-atlas"></i> Templates</router-link>

    <router-link
      class="settings-sidebar__button"
      to="/"
    ><i class="fa-solid fa-house"></i> Back</router-link>
  </menu>
</template>

<style lang="scss">
@import '../../assets/scss/colors.scss';

.settings-sidebar {
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
