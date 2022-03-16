<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { AppTabLink } from "@/components/UiAdmin/Buttons";
import {
  counter,
  categories,
  history,
  newEntry,
  planning
} from "@/components/Pages/PageMyBudget/Tabs";

const route = useRoute();
const activeTab = ref("categories");
const tabs = ref([
  { value: "categories", label: "Categories", invalid: true },
  { value: "counter", label: "Сounter", invalid: true },
  { value: "history", label: "History", invalid: true },
  { value: "planning", label: "Planning", invalid: true },
  { value: "new-entry", label: "NewEntry", invalid: true }
]);

watch(
  () => route.query.tab,
  newValue => {
    if (!newValue || !tabs.value.map(t => t.value).includes(newValue))
      return (activeTab.value = tabs.value[0].value);
    activeTab.value = newValue;
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
          v-for="tab in tabs"
          :key="tab.value"
          :to="{ path: '/my-budget', query: { tab: tab.value } }"
          :active="tab.value === activeTab"
        >
          {{ tab.label }}
        </AppTabLink>
      </div>
      <div class="my-budget__body">
        <component
          :is="route.query.tab"
        ></component>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
$b: ".my-budget";

#{$b} {
  &__title {
    margin-bottom: 1rem;
  }
  &__wrap {
    width: 100%;
    padding: 1rem;
    border-radius: var(--radius-big);
    background-color: var(--color-background-soft);
    box-shadow: var(--box-shadow-drop-menu);
  }
}
</style>
