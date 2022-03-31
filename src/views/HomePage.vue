<template>
  <section class="home-page">
    <h1 class="home-page__title">Home Page</h1>
  </section>
</template>

<script setup>
const imgUrl = new URL('./img.png', import.meta.url)
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
