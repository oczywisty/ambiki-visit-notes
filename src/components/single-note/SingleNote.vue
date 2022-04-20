<template>
  <section class="visit-note" v-if="note.id">
    <header class="visit-note__header">
      <p class="visit-note__date">{{ note.date }} - {{ note.time }}</p>
      <h1 class="visit-note__patient">{{ note.patient }}</h1>
    </header>
    <table class="visit-note__meta">
      <tr>
        <td class="visit-note__param">Created on:</td>
        <td>{{ note.date }} - {{ note.time }}</td>
      </tr>
      <tr>
        <td class="visit-note__param">Last modified on:</td>
        <td>{{ note.date }} - {{ note.time }}</td>
      </tr>
      <tr>
        <td class="visit-note__param">Tags:</td>
        <td>
          <simple-tag v-for="tag in note.tags" :key="tag">{{ tag }}</simple-tag>
        </td>
      </tr>
    </table>
    <article class="visit-note__content">
      <div class="visit-note__block" v-for="block in note.template.blocks" :key="block.id">
        <p class="visit-note__block-text" v-if="block.type === 'text'">{{ block.value }}</p>
        <div class="visit-note__block-words" v-else-if="block.type === 'words_exercise'">
          <div class="visit-note__block-words-item" v-for="item in block.value" :key="item.word">
            <simple-button class="secondary">{{ item.word }}</simple-button>
            <simple-button>{{ item.result }}</simple-button>
            <span class="visit-note__block-words-comment">{{ item.comment }}</span>
          </div>
        </div>
      </div>
      <div class="visit-note__menu">
        <button class="button-blank" @click="edit()">
          <i class="fa-solid fa-pencil"></i>
        </button>
      </div>
    </article>
  </section>
</template>

<script>
import SimpleTag from '@/components/simple-tag/SimpleTag.vue';
import SimpleButton from '../simple-button/SimpleButton.vue';

export default {
  components: { SimpleTag, SimpleButton },
  computed: {
    note() {
      return this.$store.state.notes.find((note) => `${note.id}` === this.$route.params.note) || {};
    },
  },
  methods: {
    edit() {
      this.$router.push(`/edit/${this.note.id}`);
    },
  },
};
</script>

<style lang="scss">
@import '../../assets/scss/colors.scss';

.visit-note {
  flex-grow: 2;
  padding: 40px;
  box-sizing: border-box;

  &__header{
    margin: 0 0 40px;
  }

  &__date {
    font-size: 12px;
    color: $c-grey--dark;
    text-transform: uppercase;
    margin: 0;
  }

  &__patient {
    font-size: 16px;
    color: $c-primary;
    font-weight: normal;
    margin: 0;
  }

  &__content {
    border: 1px solid $c-grey--light;
    border-radius: 10px;
    padding: 15px 20px;
    box-sizing: border-box;
    width: 100%;
    position: relative;
  }

  &__meta {
    font-size: 12px;
    margin: 0 0 20px;
  }

  &__param {
    color: $c-grey--dark;
    padding-right: 20px;
    font-size: 12px;;
  }

  &__block-words-item {
    margin: 0 0 5px;

    button {
      width: 30px;
      padding-left: 0;
      padding-right: 0;
    }

    .secondary {
      width: 90px;
    }
  }

  &__block-text, &__block-words {
    margin: 0 0 15px;
  }

  &__block-words-comment {
    display: inline-block;
    margin-left: 10px;
  }

  &__block:last-child {
    > * {
      margin-bottom: 0;
    }
  }

  &__menu {
    position: absolute;
    top: 20px;
    right: 20px;
  }
}
</style>
