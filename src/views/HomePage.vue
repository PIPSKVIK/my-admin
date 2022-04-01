<template>
  <section class="home-page">
    <h1 class="home-page__title">Home Page</h1>

    <BaseCheckbox
      class="mr-4"
      id="checkbox-1"
      v-model="checkbox"
    >
      Checkbox1
    </BaseCheckbox>
    <div>{{ checkbox }}</div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { BaseCheckbox } from '@/components/Ui';

const checkbox = ref(false);
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
