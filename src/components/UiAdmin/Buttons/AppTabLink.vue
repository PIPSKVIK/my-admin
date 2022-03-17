<script setup>
import { computed } from "vue";

const props = defineProps({
  to: {
    type: [String, Object],
    default: "" || {}
  },
  active: {
    type: Boolean,
    default: false
  }
});

const classStyle = computed(() => {
  return {
    "tab-link--active": props.active
  };
});
</script>

<template>
  <router-link :to="to" class="tab-link" :class="classStyle">
    <slot />
  </router-link>
</template>

<style lang="scss" scoped>
$b: ".tab-link";

#{$b} {
  color: var(--color-text-soft);
  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;
  @include anim-default;
  &:hover {
    color: var(--btn-color);
  }

  &--active {
    color: var(--btn-color);
    position: relative;
    &::before {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: var(--btn-color);
    }
  }
}
</style>
