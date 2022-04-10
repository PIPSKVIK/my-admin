<template>
  <section class="home-page">
    <h1 class="home-page__title mb-2">Home Page</h1>

    <BaseDataTableApp :header="header" />
  </section>
</template>

<script setup>
import { ref } from "vue";
import { BaseDataTableApp } from "@/components/Ui";

const header = ref([
  { value: "category", name: "Category" },
  { value: "date", name: "Date" },
  { value: "sum", name: "Sum" },
  { value: "type", name: "Type" }
]);
</script>

<style lang="scss" scoped>
$b: ".home-page";

#{$b} {
  &__title {
    margin-bottom: 1rem;
    text-align: center;
  }
}
</style>
