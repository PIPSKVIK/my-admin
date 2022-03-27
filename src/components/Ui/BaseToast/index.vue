<template>
  <div :class="['bane-toast', `bane-toast--${type}`]">
    <p class="bane-toast__text">
      <slot />
    </p>
    <BaseButtonIcon @click="$emit('remove')">
      <BaseIcon svgName="close" />
    </BaseButtonIcon>
  </div>
</template>

<script setup>
import { BaseButtonIcon, BaseIcon } from "@/components/Ui";

defineProps({
  type: {
    type: String,
    default: "success"
  }
});
</script>

<style lang="scss" scoped>
$b: ".bane-toast";

#{$b} {
  background-color: var(--success);
  color: var(--color-text);
  padding: 1rem;
  border-radius: var(--radius-big);
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  margin-bottom: 1rem;
  position: relative;
  font-size: 1rem;

  @include sm-tablets {
    padding: 0.5rem;
    font-size: 0.9rem;
  }

  &--success {
    background: var(--success);
  }
  &--warning {
    background: var(--warning);
    color: var(--color-text-black);
  }
  &--danger {
    background: var(--danger);
  }
}
</style>
