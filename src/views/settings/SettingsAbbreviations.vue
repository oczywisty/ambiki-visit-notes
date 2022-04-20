<template>
  <section class="settings-abbreviations">
    <header class="settings-abbreviations__header">
      <h1 class="settings-abbreviations__title">Abbreviations Dictionary</h1>
      <h2 class="settings-abbreviations__lead">
        Here you can set up the shorthands dictionary,
        which will help you share your quick notes with
        peers or with the insurance company.</h2>
    </header>
    <article>
      <table class="settings-abbreviations__table">
        <tr>
          <th class="settings-abbreviations__table-abbr">Abbreviation</th>
          <th></th>
          <th>Expansions</th>
          <th></th>
        </tr>
        <tr v-for="(abbr, index) in abbreviations" :key="index">
          <td><text-input v-model="abbr.value" :id="`abbr-${index}`"/></td>
          <td><i class="fa-solid fa-circle-right"></i></td>
          <td><text-input v-model="abbr.expansion" /></td>
          <td>
            <button class="button-blank" @click="removeItem(abbr.value)">
              <i class="fa-solid fa-trash"></i>
            </button>
          </td>
        </tr>
        <tr class="settigs-abbreviations__new-row" @click="addItem()">
          <td class="settings-abbreviations__table-abbr"><text-input /></td>
          <td><i class="fa-solid fa-circle-right"></i></td>
          <td><text-input /></td>
          <td></td>
        </tr>
      </table>
    </article>
  </section>
</template>

<script>
import TextInput from '@/components/text-input/TextInput.vue';

export default {
  components: { TextInput },
  data() {
    return {
      abbreviations: [
        { value: 'IWP', expansion: 'initial word position' },
        { value: 'POC', expansion: 'plan of care' },
      ],
    };
  },
  methods: {
    removeItem(value) {
      this.abbreviations = this.abbreviations.filter(
        (abbr) => abbr.value !== value,
      );
    },
    addItem() {
      const abbrId = `abbr-${this.abbreviations.length}`;
      this.abbreviations.push({ value: '', expansion: '' });

      this.$nextTick(() => {
        document.getElementById(abbrId).focus();
      });
    },
  },
};
</script>

<style lang="scss">
@import '../../assets/scss/colors.scss';

.settings-abbreviations {
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

  &__table {
    color: $c-grey--dark;
    width: 100%;
    text-align: center;

    th {
      font-size: 12px;
      color: $c-text;
      font-weight: normal;
      text-align: left;
    }

    td {
      padding-bottom: 3px;
    }
  }

  &__table-abbr {
    width: 150px;
  }

  &__new-row {
    cursor: pointer;

    >* {
      pointer-events: none;
    }
  }

  .btn {
    color: $c-primary;
    cursor: pointer;
  }
}
</style>
