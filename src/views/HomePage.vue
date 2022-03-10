<script setup></script>

<template>
  <section class="main-layout">
    <div class="nav-menu">
      <div class="nav-menu__list">Home page</div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
$b: ".nav-menu";

#{$b} {
  height: calc(100% - 57px);
  background-color: var(--color-background-dark);

  &__list {
    padding: 8px 20px 8px;
  }
}
</style>
