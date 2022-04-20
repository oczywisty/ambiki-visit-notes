import { MUTATIONS } from './enums';

const mutations = {
  [MUTATIONS.GET_NOTES_SUCCESS](state, notes) {
    state.notes = notes;
  },
  [MUTATIONS.SEARCH_NOTES_SUCCESS](state, search) {
    state.filters.search = search;
  },
  [MUTATIONS.SAVE_NOTE_SUCCESS](state, note) {
    const index = state.notes.findIndex((n) => n.id === note.id);

    if (index > -1) {
      state.notes[index] = note;
    }
  },
};

export default mutations;
