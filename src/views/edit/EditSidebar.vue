<template>
  <menu class="edit-sidebar">
    <h1 class="edit-sidebar__header">
      {{ note.id ? 'Edit' : 'New' }} note</h1>
    <div class="edit-sidebar__block">
      <span class="edit-sidebar__label">Select patient</span>
      <text-input v-model="note.patient" />
    </div>
    <div class="edit-sidebar__block">
      <span class="edit-sidebar__label">Select appointment</span>
      <text-input v-model="note.appointment" />
    </div>
    <div class="edit-sidebar__block">
      <span class="edit-sidebar__label">Select template</span>
      <text-input v-model="note.template.id" />
    </div>
  </menu>
</template>

<script>
import TextInput from '@/components/text-input/TextInput.vue';

export default {
  components: { TextInput },
  computed: {
    note() {
      return this.$store.state.notes.find((note) => `${note.id}` === this.$route.params.note)
      || {
        id: null,
        patient: '',
        appointment: '',
        template: {
          id: null,
          blocks: [],
        },
      };
    },
  },
};
</script>

<style lang="scss">
@import '../../assets/scss/colors.scss';

.edit-sidebar {
  padding: 0;
  margin: 0;

  &__header {
    font-size: 24px;
    font-weight: normal;
    color: $c-text;
    margin: 0 0 40px;
  }

  &__block {
    margin: 0 0 10px
  }

  &__label {
    display: block;
    font-size: 12px;
    color: $c-text;
    margin: 0 0 7px;
  }
}
</style>
