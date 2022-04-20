<template>
  <div class="notes">
    <notes-list/>
    <single-note/>
  </div>
</template>

<script>
import NotesList from '@/components/notes-list/NotesList.vue';
import SingleNote from '@/components/single-note/SingleNote.vue';

export default {
  name: 'NotesView',
  components: { NotesList, SingleNote },
};
</script>

<style lang="scss">
@import '@/assets/scss/colors.scss';
.notes {
  display: flex;
}
</style>
