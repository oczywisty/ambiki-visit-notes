<template>
  <span class="simple-tag">
    <slot></slot>
  </span>
</template>

<style lang="scss">
@import '../../assets/scss/colors.scss';

.simple-tag {
  display: inline-block;
  padding: 0.25em .75em;
  background: $c-grey--light;
  color: $c-grey--dark;
  text-decoration: none;
  transition: all 0.2s;
  border: 0;
  border-radius: 3px;
  margin: 0 10px 0 0;
}
</style>
