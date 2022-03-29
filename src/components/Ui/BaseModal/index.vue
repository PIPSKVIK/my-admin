<template>
  <div class="base-modal">
    <div class="base-modal__overflow"></div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
$b: ".base-modal";

#{$b} {
  &__overflow {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: inherit;
    width: 100%;
    height: 100%;
    will-change: opacity;
    background-color: var(--bag-overflow);
  }
}
</style>
