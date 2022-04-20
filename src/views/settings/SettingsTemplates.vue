<template>
  <div class="settings-templates">
    <aside class="settings-templates__list">
      <header class="settings-templates__list-header">
        <h1 class="settings-templates__list-title">All visit templates</h1>
        <p class="settings-templates__list-meta">{{ templates.length }} templates</p>
      </header>
      <list-item
        v-for="template in templates"
        :key="template.slug"
        :meta="`${template.date} - ${template.time}`"
        :title="template.name"
        :url="`/settings/templates/${template.slug}`"
      />
    </aside>
    <section class="settings-templates__template">
      <header class="settings-templates__header">
      <h1 class="settings-templates__title">Visit templates</h1>
      <h2 class="settings-templates__lead">
        Here you can set up the visit notes templates.
        Which will help you create notes even faster.
        You can set up as many templates as you want</h2>
      </header>
      <article>
        <visit-template />
      </article>
    </section>
  </div>
</template>

<script>
import ListItem from '@/components/list-item/ListItem.vue';
import VisitTemplate from '@/components/visit-template/VisitTemplate.vue';
// import TextInput from '@/components/text-input/TextInput.vue';

export default {
  components: { ListItem, VisitTemplate },
  // components: { TextInput },
  data() {
    return {
      templates: [
        {
          date: '10 APRIL 2022', time: '10:30 - 11:30', name: 'LTG - SH excercises', slug: 'ltg-sh-excercises',
        },
        {
          date: '10 APRIL 2022', time: '10:30 - 11:30', name: 'STG 1 - SH excercises', slug: 'stg-1-sh-exercises',
        },
        {
          date: '10 APRIL 2022', time: '10:30 - 11:30', name: 'Simple template intro / test', slug: 'simple-template-intro-test',
        },
      ],
    };
  },
  methods: {
    removeItem(value) {
      this.templates = this.templates.filter(
        (abbr) => abbr.value !== value,
      );
    },
    addItem() {
      const abbrId = `abbr-${this.templates.length}`;
      this.templates.push({ value: '', expansion: '' });

      this.$nextTick(() => {
        document.getElementById(abbrId).focus();
      });
    },
  },
};
</script>

<style lang="scss">
@import '../../assets/scss/colors.scss';

.settings-templates {
  display: flex;

  &__list {
    width: 340px;
    overflow-y: auto;
    height: 100vh;
    padding: 40px;
    box-sizing: border-box;
    border-right: 1px solid $c-grey--light;
    flex-shrink: 0;

    &-header {
      padding: 0 20px;
      margin: 0 0 40px;
    }

    &-title {
      font-size: 16px;
      font-weight: normal;
      margin: 0;
    }

    &-meta {
      font-size: 12px;
      color: $c-grey--dark;
      margin: 0;
      text-transform: uppercase;
    }
  }

  &__template {
    padding: 40px;
  }

  &__header {
    margin: 0 0 40px;
  }

  &__title {
    font-weight: normal;
    color: $c-text;
    margin: 0 0 40px;
    font-size: 24px;
  }

  &__lead {
    font-weight: normal;
    color: $c-grey--dark;
    margin: 0 0 40px;
    font-size: 16px;
    width: 60%;
  }

  &__table {
    color: $c-grey--dark;
    width: 100%;
    text-align: center;

    th {
      font-size: 12px;
      color: $c-text;
      font-weight: normal;
      text-align: left;
    }

    td {
      padding-bottom: 3px;
    }
  }

  &__table-abbr {
    width: 150px;
  }

  &__new-row {
    cursor: pointer;

    >* {
      pointer-events: none;
    }
  }

  .btn {
    color: $c-primary;
    cursor: pointer;
  }
}
</style>
