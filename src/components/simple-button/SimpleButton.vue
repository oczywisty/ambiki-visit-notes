<template>
  <button class="simple-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
};
</script>

<style lang="scss">
@import '../../assets/scss/colors.scss';

.simple-button {
  display: inline-block;
  padding: 0.5em .75em;
  background: $c-primary;
  color: $c-white;
  text-decoration: none;
  transition: all 0.2s;
  border: 0;
  border-radius: 3px;

  &~.simple-button {
    margin: 0 0 0 5px;
  }

  &.secondary {
    background: $c-grey--light;
    color: $c-text;
  }

  &.small {
    padding: 0.3em .75em;
    outline: 0;
  }

  &.big {
    font-size: 14px;
    width: 46px;
    height: 44px;
  }
}
</style>
