<template>
  <section class="home-page">
    <h1 class="home-page__title mb-2">Home Page</h1>

    <div>
      <BaseChip type="danger" name="lolkek" />
    </div>
  </section>
</template>

<script setup>
import { BaseChip } from '@/components/Ui';
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
