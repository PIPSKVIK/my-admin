<template>
  <label
    :for="name"
    class="base-label"
    :class="[
      {
        'text-danger': state === false,
        'base-label--check': checkboxRadio,
      },
      `base-label--${align}`,
    ]"
  >
    <slot />
  </label>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  align: {
    type: String,
    default: "top",
    validator: (val) => ["top", "left"].includes(val),
  },
  state: {
    type: Boolean,
    default: null,
  },
  checkboxRadio: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.base-label {
  display: block;
  font-size: 1rem;
  cursor: pointer;

  &--top {
    display: block;
    margin-bottom: 0.4rem;
  }

  &--left {
    display: inline-block;
    vertical-align: middle;
    margin-right: 0.4rem;
  }

  &--check {
    margin-right: 0;
    padding-right: 2rem;
  }
}

</style>
