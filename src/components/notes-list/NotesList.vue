<template>
  <div class="notes-list">
    <header class="notes-list__header">
      <h1 class="notes-list__header-title">
        {{ notes.length === allNotes.length ? 'All' : 'Filtered' }} visit notes
      </h1>
      <p class="notes-list__header-meta">{{ notes.length }} notes</p>
    </header>
    <list-item
      v-for="note in notes"
      :key="note.id"
      :meta="`${note.date} - ${note.time}`"
      :title="note.patient"
      :url="`/notes/${note.id}`"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { GETTERS } from '@/store/enums';

import ListItem from '../list-item/ListItem.vue';

export default {
  components: { ListItem },
  name: 'NotesList',
  data() {
    return {};
  },
  computed: {
    allNotes() {
      return this.$store.state.notes;
    },
    ...mapGetters({
      notes: `${GETTERS.FILTERED_NOTES}`,
    }),
  },
};
</script>

<style lang="scss">
@import '../../assets/scss/colors.scss';
.notes-list {
  width: 340px;
  overflow-y: auto;
  height: 100vh;
  padding: 40px;
  box-sizing: border-box;
  border-right: 1px solid $c-grey--light;

  &__header {
    padding: 0 20px;
    margin: 0 0 40px;
  }

  &__header-title {
    font-size: 16px;
    font-weight: normal;
    margin: 0;
  }

  &__header-meta {
    font-size: 12px;
    color: $c-grey--dark;
    margin: 0;
    text-transform: uppercase;
  }
}
</style>
