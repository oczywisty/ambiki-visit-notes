<template>
  <section class="settings-general">
    <header class="settings-general__header">
      <h1 class="settings-general__title">Profile Settings</h1>
      <h2 class="settings-general__lead">
        Here you can set up the basic settings for user</h2>
    </header>
  </section>
</template>

<style lang="scss">
@import '../../assets/scss/colors.scss';

.settings-general {
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

  &__lead {
    font-weight: normal;
    color: $c-grey--dark;
    margin: 0 0 40px;
    font-size: 16px;
    width: 60%;
  }
}
</style>
