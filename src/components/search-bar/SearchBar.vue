<template>
  <label for="search-bar" class="search-bar">
    <i class="fa-solid fa-magnifying-glass"></i>
    <input
      id="search-bar"
      class="search-bar__input"
      type="text"
      v-model="value"
      placeholder="Search notes"
      @input="onInput"
    />
  </label>
</template>

<script>
import { ACTIONS } from '@/store/enums';

export default {
  name: 'TextInput',
  data() {
    return {
      value: '',
    };
  },
  methods: {
    onInput() {
      this.$store.dispatch(ACTIONS.SEARCH_NOTES, this.value);
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/colors.scss';

.search-bar {
  padding: 15px 20px;
  background: #fff;
  border: 0;
  border-radius: 10px;
  box-shadow: 0 2px 2px rgba(0,0,0,.05);
  box-sizing: border-box;
  width: 100%;
  color: $c-grey--dark;
  display: flex;
  align-items: center;

  i {
    margin-right: 10px;
  }

  &__input {
    border: 0;
    outline: 0;
    font-size: 16px;
    &::placeholder {
      color: $c-grey--dark;
    }
  }
}
</style>
