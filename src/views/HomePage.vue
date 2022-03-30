<template>
  <section class="home-page">
    <h1 class="home-page__title">Home Page</h1>

    <BaseDropdown />
  </section>
</template>

<script setup>
import BaseDropdown from '@/components/Ui/BaseDropdown/index.vue'
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
