<template>
  <button
    :class="['base-button', colorElement, sizeElement, disabled]"
    v-bind="$attrs"
  >
    <slot />
    <BaseLoader
      size="20"
      class="base-button__loader ml-1"
      :visible="isLoading"
    />
  </button>
</template>

<script setup>
import { computed } from "vue";
import { BaseLoader } from "@/components/Ui";

const props = defineProps({
  color: {
    type: String,
    default: ""
  },
  size: {
    type: String,
    default: ""
  },
  isLoading: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

const colorElement = computed(() => `base-button__${props.color}`);
const sizeElement = computed(() => `base-button__${props.size}`);
const disabled = computed(() => {
  return {
    "base-button__disabled": props.disabled
  }
});
</script>

<style lang="scss" scoped>
$b: ".base-button";

#{$b} {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--btn-color);
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: var(--radius-default);
  color: var(--color-text);
  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--btn-color-hover);
  }
  &:focus {
    outline: 2px solid var(--btn-color);
    outline-offset: 2px;
  }

  &__disabled {
    background-color: var(--btn-color-disabled)!important;
    cursor: default;
    &:focus {
      outline-color: var(--btn-color-disabled)!important;
    }
  }

  &__green {
    background-color: var(--btn-color-green);
    &:hover {
      background-color: var(--btn-color-green-hover);
    }
    &:focus {
      outline-color: var(--btn-color-green);
    }
  }

  &__red {
    background-color: var(--btn-color-red);
    &:hover {
      background-color: var(--btn-color-red-hover);
    }
    &:focus {
      outline-color: var(--btn-color-red);
    }
  }

  &__yellow {
    background-color: var(--btn-color-yellow);
    color: var(--color-text-black);
    &:hover {
      background-color: var(--btn-color-yellow-hover);
    }
    &:focus {
      outline-color: var(--btn-color-yellow);
    }
  }

  &__full {
    width: 100%;
  }
  &__md {
    width: 50%;
  }
  &__sm {
    width: 33%;
  }

  &__full-mob {
    @include sm-tablets {
      width: 100%;
    }
  }
}
</style>
