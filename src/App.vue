<template>
  <v-app>
    <div class="layout">
      <div class="layout__navigation">
        <session-navigation :isNavigationOpen="isNavigationOpen"></session-navigation>
        <button @click="toggleNavigation" :class="{ active: !isNavigationOpen }"
          class="layout__navigation-toggler-button">
          <img src="./icons/arrow-left.svg" alt="filter" />
        </button>
      </div>
      <session-table></session-table>
    </div>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex';
import SessionTable from './components/session-table.vue';
import SessionNavigation from './components/session-navigation.vue';

export default {
  name: 'App',
  data: () => ({
    isNavigationOpen: true,
  }),
  components: {
    SessionTable,
    SessionNavigation,
  },
  methods: {
    ...mapActions(['getAllSessions']),
    toggleNavigation() {
      this.isNavigationOpen = !this.isNavigationOpen;
    },
  },
  created() {
    this.getAllSessions('');
  },
};
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  height: 100%;
  background-color: #F4F4F8;

  &__navigation {
    position: relative;

    &-toggler-button {
      position: absolute;
      top: 30px;
      right: 0;
      transform: translateX(50%);
      z-index: 9999;
      width: 24px;
      height: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 48px;
      background-color: #2F3144;
    }

    &-toggler-button.active {
      transform: rotate(-180deg) translateX(-50%);
    }
  }
}
</style>
