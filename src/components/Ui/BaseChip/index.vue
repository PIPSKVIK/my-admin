<template>
  <div :class="[
    'base-chip',
    `base-chip__type--${type}`
  ]">
    <span class="s-1">
      {{ name }}
    </span>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  name: {
    type: String,
    default: "chip"
  },
  type: {
    type: String,
    default: "success",
  }
})
</script>

<style lang="scss" scoped>
$b: ".base-chip";

#{$b} {
  display: inline-flex;
  padding: 0 0.5rem;
  border-radius: var(--radius-default);
  cursor: default;
  &__type {
    &--success {
      background-color: var(--success);
    }
    &--warning {
      background-color: var(--warning);
      color: var(--color-text-black);
    }
    &--info {
      background-color: var(--info);
    }
    &--danger {
      background-color: var(--danger);
    }
  }
}
</style>