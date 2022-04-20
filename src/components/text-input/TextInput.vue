<template>
  <input
    class="text-input"
    type="text"
    :value="value"
    :aria-label="aria"
    :placeholder="placeholder"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  name: 'TextInput',
  props: ['value', 'aria', 'placeholder'],
};
</script>

<style lang="scss">
@import '@/assets/scss/colors.scss';

.text-input {
  padding: 13px 20px;
  background: #fff;
  border: 1px solid $c-grey--light;
  border-radius: 5px;
  box-sizing: border-box;
  width: 100%;
  font-size: 16px;
}
</style>
