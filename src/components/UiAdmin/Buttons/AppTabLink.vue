<script setup>
import { computed } from "vue";

const props = defineProps({
  to: {
    type: [String, Object],
    default: "" || {},
  },
  active: {
    type: String,
    default: "",
  },
});

const classStyle = computed(() => {
  return {
    "router-link-active": props.active,
  };
});
</script>

<template>
  <router-link :to="to" :class="['router-link', classStyle]" exact>
    <slot />
  </router-link>
</template>

<style lang="scss" scoped>
.router-link-active {
  color: red;
}
</style>
