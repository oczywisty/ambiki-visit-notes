import { GETTERS } from './enums';

const getters = {
  [GETTERS.FILTERED_NOTES](state) {
    return state.notes.filter(
      (note) => note.patient.toLowerCase().indexOf(state.filters.search.toLowerCase()) > -1,
    );
  },
};

export default getters;
