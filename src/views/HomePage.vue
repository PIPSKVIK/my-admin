<template>
  <section class="home-page">
    <h1 class="home-page__title">Home Page</h1>

    <span>{{ store.state.auth.user }}</span>
  </section>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();

console.log(store.state.auth.user);
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
