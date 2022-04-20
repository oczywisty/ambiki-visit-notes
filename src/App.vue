<template>
  <div id="app">
    <sidebar />
    <router-view/>
  </div>
</template>

<script>
import Sidebar from '@/components/sidebar/Sidebar.vue';
import { ACTIONS } from './store/enums';

export default {
  components: { Sidebar },
  mounted() {
    this.$store.dispatch(ACTIONS.GET_NOTES);
  },
};
</script>

<style lang="scss">
@import './assets/scss/colors.scss';

body {
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  line-height: 1.5;
  color: #333;
  background: #fff;
  margin: 0;
  padding: 0 0 0 330px;
}

.button-blank {
  border: 0;
  padding: 0;
  background: none;
  cursor: pointer;
  color: $c-primary;
}
</style>
