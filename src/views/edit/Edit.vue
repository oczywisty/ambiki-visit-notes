<template>
  <div class="edit-note">
    <div class="edit-note__header">
      <p class="edit-note__date">{{ note.date }} - {{ note.time }}</p>
      <p class="edit-note__patient">{{ note.patient }}</p>
    </div>
    <table class="edit-note__meta">
      <tr>
        <td class="edit-note__param">Created on:</td>
        <td>{{ note.date }} - {{ note.time }}</td>
      </tr>
      <tr>
        <td class="edit-note__param">Last modified on:</td>
        <td>{{ note.date }} - {{ note.time }}</td>
      </tr>
      <tr>
        <td class="edit-note__param">Tags:</td>
        <td>
          <simple-tag v-for="tag in note.tags" :key="tag">{{ tag }}</simple-tag>
          <simple-button class="small">Add tag</simple-button>
        </td>
      </tr>
    </table>
    <div class="edit-note__content" v-if="note.id">
       <div class="edit-note__block" v-for="(block, index) in note.template.blocks" :key="index">
        <label
          for="block-text"
          v-if="block.type === 'text'"
        >
          <span class="edit-note__label">{{ block.placeholder }}</span>
          <textarea
            :id="`block-${index}`"
            v-model="block.value"
            rows="5"
            class="edit-note__block-text">
          </textarea>
        </label>
        <table class="edit-note__block-words" v-else-if="block.type === 'words_exercise'">
          <tr>
            <th class="edit-note__label">Word exercise</th>
            <th class="edit-note__label">Result</th>
            <th class="edit-note__label">Comment</th>
            <th></th>
          </tr>
          <tr v-for="(item, i) in block.value" :key="i">
            <td class="edit-note__word-exercise">
              <text-input :id="`word-${i}`" v-model="item.word"/>
            </td>
            <td class="edit-note__buttons">
              <simple-button
                class="big"
                :class="{'secondary': item.result !== '++'}"
                @click.native="item.result = '++'"
                >++</simple-button>
              <simple-button
                class="big"
                :class="{'secondary': item.result !== '+'}"
                @click.native="item.result = '+'"
                >+</simple-button>
              <simple-button
                class="big"
                :class="{'secondary': item.result !== '-'}"
                @click.native="item.result = '-'"
                >-</simple-button>
              <simple-button
                class="big"
                :class="{'secondary': item.result !== '--'}"
                @click.native="item.result = '--'"
                >--</simple-button>
            </td>
            <td class="edit-note__comment">
              <text-input placeholder="enter comment" v-model="item.comment"/>
            </td>
            <td>
              <button class="button-blank" @click="removeWord(index, item.word)">
                <i class="fa-solid fa-trash"></i>
              </button>
            </td>
          </tr>
          <tr @click="addWord(index)">
            <td class="edit-note__word-exercise"><text-input/></td>
            <td class="edit-note__buttons">
              <simple-button class="big secondary">++</simple-button>
              <simple-button class="big secondary">+</simple-button>
              <simple-button class="big secondary">-</simple-button>
              <simple-button class="big secondary">--</simple-button>
            </td>
            <td class="edit-note__comment">
              <text-input placeholder="enter comment"/>
            </td>
            <td></td>
          </tr>
        </table>
      </div>
      <div class="edit-note__actions">
        <simple-button class="secondary" @click.native="$router.go(-1)">Cancel</simple-button>
        <simple-button @click.native="saveNote()">Save note</simple-button>
      </div>
    </div>
  </div>
</template>

<script>
import { cloneDeep } from 'lodash';
import SimpleTag from '@/components/simple-tag/SimpleTag.vue';
import SimpleButton from '@/components/simple-button/SimpleButton.vue';
import TextInput from '@/components/text-input/TextInput.vue';
import { ACTIONS } from '@/store/enums';

export default {
  components: { SimpleTag, SimpleButton, TextInput },
  name: 'NoteEdit',
  data() {
    return {
      note: {},
    };
  },
  computed: {
    routeNote() {
      return this.$store.state.notes.find((note) => `${note.id}` === this.$route.params.note) || {};
    },
  },
  methods: {
    removeWord(blockIndex, word) {
      const i = this.note.template.blocks[blockIndex].value.findIndex((item) => item.word === word);
      this.note.template.blocks[blockIndex].value.splice(i, 1);
    },
    addWord(blockIndex) {
      const wordId = `word-${this.note.template.blocks[blockIndex].value.length}`;
      this.note.template.blocks[blockIndex].value.push({
        word: '',
        result: '',
        comment: '',
      });

      this.$nextTick(() => {
        document.getElementById(wordId).focus();
      });
    },
    saveNote() {
      this.$store.dispatch(ACTIONS.SAVE_NOTE, this.note);
      this.$router.go(-1);
    },
  },
  mounted() {
    this.note = cloneDeep(this.routeNote);
  },
  watch: {
    routeNote(val, prev) {
      if (!prev.id) {
        this.note = cloneDeep(val);
      }
    },
  },
};
</script>

<style lang="scss">
@import '../../assets/scss/colors.scss';

.edit-note {
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

  &__meta {
    font-size: 12px;
    margin: 0 0 20px;
  }

  &__param {
    color: $c-grey--dark;
    padding-right: 20px;
    font-size: 12px;;
  }

  &__block-text {
    padding: 20px;
    background: #fff;
    border: 1px solid $c-grey--light;
    border-radius: 5px;
    box-sizing: border-box;
    width: 100%;
    font-size: 16px;
    font-family: sans-serif;
  }

   &__label {
    font-weight: normal;
    font-size: 12px;
    margin: 0 0 5px;
    text-align: left;
  }

  &__block-words {
    width: 100%;

    td {
      padding-bottom: 3px;
    }

    td:not(:last-child) {
      padding-right: 20px;
    }
  }

  &__word-exercise {
    width: 150px;
  }

  &__buttons {
    width: 200px;
  }

  .button-blank {
    margin: 15px 0 0 0;
  }

  &__actions {
    text-align: right;
  }
}
</style>
