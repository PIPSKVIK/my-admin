<template>
  <section class="home-page">
    <h1 class="home-page__title">Home Page</h1>


    <BaseTolltip text="Этоп росто текст">
      <span>test</span>
    </BaseTolltip>
  </section>
</template>

<script setup>
import { BaseTolltip } from '@/components/Ui'
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
