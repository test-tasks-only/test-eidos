<template>
  <div class="table-layout">
    <div class="table-layout__control">
      <p class="table-layout__control-title">Учебные сессий</p>
      <div class="table-layout__control-elements">
        <label for="search">
          <input type="text" id="search" v-model="search" placeholder="Поиск"
            class="table-layout__control-elements-input" />
        </label>
        <button class="table-layout__control-elements-filter">
          <img src="../icons/filter.svg" alt="filter" />
        </button>
        <button class="table-layout__control-elements-sort">
          <img src="../icons/sort.svg" alt="sort" />
        </button>
        <button class="table-layout__control-elements-create">
          Создать
        </button>
      </div>
    </div>
    <v-data-table
      :headers="headers"
      :items="tableRows"
      :items-per-page="15"
      :height="'80vh'"
    ></v-data-table>
  </div>
</template>

<style scoped lang="scss">
.table-layout {
  background-color: #fff;
  margin: 8px;
  border-radius: 12px;
  padding: 16px 25px;

  &__control {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;

    &-title {
      font-size: 25px;
      font-weight: 800;
      line-height: 28px;
      color: #2F3144;
      margin: 0;
    }

    &-elements {
      display: flex;

      &-input {
        width: 260px;
        height: 44px;
        border-radius: 12px;
        border: 1px solid #E0E0E0;
        background: url(../icons/search.svg) no-repeat 16px 50%;
        padding-left: 48px;
        margin-right: 14px;
      }

      &-filter,
      &-sort {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 44px;
        height: 44px;
        border-radius: 12px;
        background-color: #F4F4F4;
        margin-right: 14px;
      }

      &-create {
        width: 112px;
        height: 44px;
        border-radius: 12px;
        background-color: #3761F3;
        color: #fff;
      }
    }
  }
}
</style>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'session-table',
  data() {
    return {
      search: '',
      headers: [
        { text: 'Дата и время', value: 'times', width: "'calc(206 / 1452 * 100%)'" },
        {
          text: 'Статус', value: 'status', width: "'calc(155 / 1452 * 100%)'", sortable: false,
        },
        {
          text: 'Название учебного модуля', value: 'module', width: "'calc(517 / 1452 * 100%)'", sortable: false,
        },
        {
          text: 'Тип сессии', value: 'type', width: "'calc(146 / 1452 * 100%)'", sortable: false,
        },
        {
          text: 'Комната', value: 'rooms', width: "'calc(296 / 1452 * 100%)'", sortable: false,
        },
        {
          text: 'Группа', value: 'groups', width: "'calc(132 / 1452 * 100%)'", sortable: false,
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      sessions: 'sessions',
    }),
    tableRows() {
      return this.sessions.map((session) => ({
        times: this.getSessionDateAndTime(session.start, session.end),
        module: session.module,
        type: session.type.name,
        groups: this.exractObjectNamesIntoString(session.groups),
        rooms: this.exractObjectNamesIntoString(session.rooms),
        status: session.status.name,
      }));
    },
  },
  methods: {
    getSessionDateAndTime(start, end) {
      const startDate = new Date(start);
      const endDate = new Date(end);

      const year = startDate.getFullYear();
      const month = startDate.getMonth();
      const day = startDate.getDate();

      const startTime = `${startDate.getHours()}:${startDate.getMinutes() || '00'}`;
      const endTime = `${endDate.getHours()}:${endDate.getMinutes() || '00'}`;

      console.log(endTime);
      return `${day}.${month}.${year}, ${startTime} - ${endTime}`;
    },
    exractObjectNamesIntoString(incomingArray) {
      return incomingArray.map((innerObject) => innerObject.name).join(', ');
    },
  },
};
</script>
