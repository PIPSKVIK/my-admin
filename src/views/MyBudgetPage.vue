<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { AppTabLink } from "@/components/UiAdmin/Buttons";

const route = useRoute();
const activeTab = ref("categories");
const tabs = ref([
  { value: "categories", label: "Categories", invalid: true },
  { value: "counter", label: "Сounter", invalid: true },
  { value: "history", label: "Рistory", invalid: true },
  { value: "planning", label: "Planning", invalid: true },
  { value: "new-entry", label: "NewEntry", invalid: true },
]);

const testHeandler = () => {
  console.log(activeTab.value);
};
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
          :class="{
            'router-link-active': tab.value === activeTab,
          }"
          @click="testHeandler"
        >
          {{ tab.label }}
        </AppTabLink>
      </div>
      <div class="my-budget__body"></div>
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
