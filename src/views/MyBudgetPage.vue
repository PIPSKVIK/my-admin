<script setup>
import { ref, watch } from "vue";
import { useRoute } from 'vue-router'
import { AppTabLink } from "@/components/UiAdmin/Buttons";
import {
  counter,
  categories,
  history,
  newEntry,
  planning
} from "@/components/Pages/PageMyBudget/Tabs";

const route = useRoute();
const currentTab = ref('categories')
const tabs = {
  categories,
  counter,
  history,
  planning,
  newEntry
}
watch(
  () => route.query.tab,
  newValue => {
    if (newValue === undefined) {
      currentTab.value = 'categories'
    } else {
      currentTab.value = newValue;
    }
  },
  { immediate: true }
);
</script>

<template>
  <section class="my-budget">
    <h1 class="my-budget__title">My budget</h1>
    <div class="my-budget__wrap">
      <div class="my-budget__nav">
        <AppTabLink
          v-for="(_, tab) in tabs"
          :key="tab"
          :to="{
            path: '/my-budget',
            query: { tab: tab }
          }"
          :class="['my-budget__nav-tab', { active: currentTab === tab }]"
          :active="tab === currentTab"
        >
        {{ tab }}
      </AppTabLink>
      </div>
      <div class="my-budget__body">
        <component :is="tabs[currentTab]" class="tab"></component>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
$b: ".my-budget";

#{$b} {
  &__title {
    margin-bottom: 1rem;
    text-align: center;
  }
  &__wrap {
    width: 100%;
    padding: 1rem;
    border-radius: var(--radius-big);
    background-color: var(--color-background-soft);
    box-shadow: var(--box-shadow-drop-menu);
  }
  &__nav {
    margin-bottom: 2rem;
    @include md-desktop {
      display: flex;
      flex-direction: column;
    }
  }
  &__nav-tab {
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
}
</style>
