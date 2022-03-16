<script setup>
import { computed } from "vue";

const props = defineProps({
  to: {
    type: [String, Object],
    default: "" || {},
  },
  active: {
    type: Boolean,
    default: false,
  },
});

const classStyle = computed(() => {
  return {
    "tab-link--active": props.active,
  };
});
</script>

<template>
  <router-link
    :to="to"
    class="tab-link"
    :class="classStyle"
  >
    <slot />
  </router-link>
</template>

<style lang="scss" scoped>
$b: ".tab-link";

#{$b} {
  color: var(--color-text);
  font-weight: 600;
  margin-right: 10px;
  text-decoration: none;

  &--active {
    color: red;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: red;
    }
  }
}
</style>
