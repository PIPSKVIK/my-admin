<script setup>
defineProps({
  top: {
    type: Boolean,
    default: true,
  },
  center: {
    type: Boolean,
    default: false,
  },
  bottom: {
    type: Boolean,
    default: false,
  }
});
</script>

<template>
  <div class="app-header-drop">
    <div v-if="top" class="app-header-drop__block">
      <slot name="top" />
    </div>
    <div v-if="center" class="app-header-drop__block">
      <slot name="center" />
    </div>
    <div v-if="bottom" class="app-header-drop__block">
      <slot name="bottom" />
    </div>
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

  &__block {
    min-height: 40px;
    display: flex;
    align-items: center;
    padding: 0 16px;
  }
}
</style>
