<template>
  <section class="home-page">
    <h1 class="home-page__title mb-2">Home Page</h1>

    <BaseDropdown :options="optionsList" />
  </section>
</template>

<script setup>
import { ref } from "vue";
import { BaseDropdown } from '@/components/Ui';

const optionsList = ref([
  { name: 'first', value: 1 },
  { name: 'second', value: 2 },
])
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
