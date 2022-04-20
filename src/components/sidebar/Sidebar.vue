<template>
  <div class="sidebar">
    <router-link to="/settings" class="sidebar__user">
      <img src="https://i.pravatar.cc/150?img=26" class="sidebar__user-avatar" alt="MD Elena Santos"/>
      <div class="sidebar__user-conent">
        <h2 class="sidebar__user-name">MD Elena Santos</h2>
        <p class="sidebar__user-title">Child therapist</p>
      </div>
    </router-link>
    <router-view name="sidebar"></router-view>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  data() {
    return {
      msg: '',
    };
  },
};
</script>

<style lang="scss">
@import '../../assets/scss/colors.scss';

.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 330px;
  background: $c-grey--light;
  border-right: 1px solid #eee;
  padding: 40px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  &__user {
    display: flex;
    flex-grow: 0;
    align-items: center;
    margin: 0 0 40px;
    text-decoration: none;

    &-avatar {
      width: 62px;
      height: 62px;
      border-radius: 50%;
      margin-right: 10px;
      background-color: $c-grey--dark;
      display: block;
      overflow: hidden;
    }

    &-name {
      font-size: 16px;
      font-weight: normal;
      color: $c-text;
      margin: 0;
    }

    &-title {
      font-size: 12px;
      color: #999;
      margin: 0;
      text-transform: uppercase;
    }
  }
}
</style>
