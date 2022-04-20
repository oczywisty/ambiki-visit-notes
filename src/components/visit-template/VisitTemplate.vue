<template>
  <div class="visit-template">
    <h1 class="visit-template__name">STG 1 - SH - exercises</h1>
    <div class="block">
      <label for="block-1" class="visit-template__block">
        <span class="visit-template__label">Long text block</span>
        <textarea
          id="block-1"
          placeholder="Introduction"
          class="visit-template__text-block"
          rows="5"
        ></textarea>
      </label>
      <div class="visit-template__block">
        <span class="visit-template__label">Word exercises block</span>
        <div class="visit-template__words-block">
          <simple-button label="block-2">+</simple-button>
        </div>
      </div>
      <label for="block-3" class="visit-template__block">
        <span class="visit-template__label">Long text block</span>
        <textarea
          id="block-3"
          placeholder="Summary"
          class="visit-template__text-block"
          rows="5">
        </textarea>
      </label>
    </div>
  </div>
</template>

<script>
import SimpleButton from '../simple-button/SimpleButton.vue';

export default {
  components: { SimpleButton },
};
</script>

<style lang="scss">
@import '../../assets/scss/colors.scss';

.visit-template {
  display: block;
  padding: 20px;
  border: 1px solid $c-grey--light;
  border-radius: 10px;

  &__name {
    font-weight: normal;
    font-size: 24px;
    margin: 0 0 20px;
  }

  &__label {
    font-weight: normal;
    font-size: 12px;
    margin: 0 0 5px;
    display: block;
  }

  &__block {
    display: block;
    margin: 0 0 10px;
  }

  &__text-block {
    padding: 10px 10px;
    background: #fff;
    border: 1px solid $c-grey--light;
    border-radius: 5px;
    box-sizing: border-box;
    width: 100%;
    font-size: 16px;
    font-family: sans-serif;
  }

  &__words-block {
    display: block;
    padding: 8px;
    border-radius: 5px;
    background: $c-white;
    border: 1px solid $c-grey--light;
    font-size: 14px;
    font-weight: normal;
    text-transform: uppercase;
  }
}
</style>
