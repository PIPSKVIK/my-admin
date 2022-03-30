<template>
  <section class="home-page">
    <h1 class="home-page__title">Home Page</h1>

    <BaseDropdown :options="options" />
  </section>
</template>

<script setup>
import { BaseDropdown } from "@/components/Ui";

const options = [
  { name: "logo1", value: 1 },
  { name: "logo2", value: 2 },
  { name: "logo3", value: 3 }
];
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
