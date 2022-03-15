<script setup>
import { AppTabLink } from '@/components/UiAdmin/Buttons'
</script>

<template>
  <section class="my-budget">
    <h1 class="my-budget__title">My budget</h1>
    <div class="my-budget__wrap">
      <AppTabLink to="/my-budget" />
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
