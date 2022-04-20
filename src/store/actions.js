import axios from 'axios';
import { ACTIONS, MUTATIONS } from './enums';

const actions = {
  async [ACTIONS.GET_NOTES]({ commit }) {
    const notesResult = await axios.get('/data/notes-list.json');
    if (notesResult.status === 200) {
      commit(MUTATIONS.GET_NOTES_SUCCESS, notesResult.data);
    }
  },
  [ACTIONS.SEARCH_NOTES]({ commit }, search) {
    commit(MUTATIONS.SEARCH_NOTES_SUCCESS, search);
  },
  [ACTIONS.SAVE_NOTE]({ commit }, note) {
    commit(MUTATIONS.SAVE_NOTE_SUCCESS, note);
  },
};

export default actions;
