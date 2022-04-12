<template>
  <button class="nav-profile-icon btn-reset">
    <div class="nav-profile-icon__item"></div>
  </button>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({});
</script>

<style lang="scss" scoped>
$b: ".nav-profile-icon";

#{$b} {
  &__item {
    width: 40px;
    height: 40px;
    border-radius: var(--radius-full);
    background-color: var(--color-profile-img);
    position: relative;
    @include anim-default;
  }
}
</style>
