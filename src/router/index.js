import Vue from 'vue';
import VueRouter from 'vue-router';

import Loading from '@/views/Loading.vue';

import Notes from '@/views/notes/Notes.vue';
import NotesSidebar from '@/views/notes/NotesSidebar.vue';

import Edit from '@/views/edit/Edit.vue';
import EditSidebar from '@/views/edit/EditSidebar.vue';

import SettingsSidebar from '@/views/settings/SettingsSidebar.vue';
import SettingsGeneral from '@/views/settings/SettingsGeneral.vue';
import SettingsAbbreviations from '@/views/settings/SettingsAbbreviations.vue';
import SettingsTemplates from '@/views/settings/SettingsTemplates.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'loading',
    components: {
      default: Loading,
    },
  },
  {
    path: '/notes/:note',
    name: 'notes',
    components: {
      default: Notes,
      sidebar: NotesSidebar,
    },
  },
  {
    path: '/edit/:note',
    name: 'edit',
    components: {
      default: Edit,
      sidebar: EditSidebar,
    },
  },
  {
    name: 'settings',
    path: '/settings',
    components: {
      default: SettingsGeneral,
      sidebar: SettingsSidebar,
    },
  },
  {
    name: 'settings-abbreviations',
    path: '/settings/abbreviations',
    components: {
      default: SettingsAbbreviations,
      sidebar: SettingsSidebar,
    },
  },
  {
    name: 'settings-templates',
    path: '/settings/templates',
    components: {
      default: SettingsTemplates,
      sidebar: SettingsSidebar,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
