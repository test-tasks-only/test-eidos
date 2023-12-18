<template>
  <v-navigation-drawer
    class="navigation"
    :width="274"
    :mini-variant="!isNavigationOpen"
    :mini-variant-width="'60px'"
  >
    <v-list-item class="navigation__logo">
      <img src="../icons/logo.svg" alt="logo" />
      <span class="navigation__logo-name">Сим Центр</span>
    </v-list-item>

    <v-divider></v-divider>

    <v-list>
      <v-list-item class="navigation__menu-item" v-for="menuItem in menu" :key="menuItem.id">
        <img :src="menuItem.icon" :alt="menuItem.icon" />
        <span class="navigation__menu-item-text">{{ menuItem.title }}</span>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import Schedule from '../icons/schedule.svg';
import Sessions from '../icons/sessions.svg';
import Rooms from '../icons/rooms.svg';

export default {
  name: 'session-navigation',
  data() {
    return {
      menu: [
        { id: 'qqq', title: 'Расписание', icon: Schedule },
        { id: 'www', title: 'Учебные сессии', icon: Sessions },
        { id: 'eee', title: 'Список комнат', icon: Rooms },
      ],
    };
  },
  props: {
    isNavigationOpen: {
      type: Boolean,
    },
  },
};
</script>

<style scoped lang="scss">
.navigation {
  position: relative;

  &__logo {
    height: 84px;
    display: flex;
    align-items: center;

    &-name {
      font-size: 24px;
      font-weight: 800;
      line-height: 28px;
      margin-left: 14px;
    }
  }

  &__menu-item {
    height: 48px;
    display: flex;
    align-items: center;
    border-radius: 16px;

    &-text {
      margin-left: 12px;
      font-size: 15px;
      font-weight: 800;
      line-height: 24px;
    }
  }
}
</style>
