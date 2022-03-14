<script setup></script>

<template>
  <div class="app-header-drop">
    <slot name="top" />
    <slot name="center" />
    <slot name="bottom" />
  </div>
</template>

<style lang="scss" scoped>
$b: ".app-header-drop";

#{$b} {
  position: absolute;
  min-width: 380px;
  background-color: var(--color-background-soft);
  box-shadow: var(--box-shadow-drop-menu);
  border-radius: var(--radius-default);
  right: 10px;
  top: 40px;

  @include sm-tablets {
    position: fixed;
    top: 55px;
    min-width: calc(100% - 1rem);
    transition: min-width 0.3s linear;
  }
}
</style>
