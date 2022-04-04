<template>
  <div class="base-tolltip" @mouseover="show = true" @mouseleave="show = false">
    <slot />
    <transition name="fade">
      <span class="base-tolltip__item" v-show="show">{{ text }}</span>
    </transition>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";

const props = defineProps({
  text: {
    type: String,
    default: "default",
  },
});

const show = ref(false);
</script>

<style lang="scss" scoped>
$b: ".base-tolltip";

#{$b} {
  display: inline-block;
  position: relative;
  &__item {
    position: absolute;
    top: -1.3rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.7rem;
    font-weight: 600;
    background-color: var(--info);
    padding: 0.2rem 0.3rem;
    border-radius: var(--radius-default);
    white-space: nowrap;
  }
}
</style>
