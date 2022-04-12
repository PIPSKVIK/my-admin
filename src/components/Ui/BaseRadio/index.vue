<template>
  <div class="base-radio" :class="[{ 'base-radio--disabled': disabled }]">
    <input
      class="visually-hidden base-radio__input"
      type="radio"
      :id="id"
      :value="value"
      :disabled="disabled"
      v-model="radioEmit"
    />

    <BaseLabel :name="id" align="left" checkbox-radio class="base-radio__label">
      <slot v-if="$slots.default" />
    </BaseLabel>

    <span class="base-radio__icon"></span>
  </div>
</template>

<script setup>
import { computed, defineEmits, defineProps } from "vue";
import { BaseLabel } from "@/components/Ui";

const emits = defineEmits(["update:modelValue"]);
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  modelValue: {
    type: [Boolean, String, Array],
    default: false,
  },
  value: {
    type: String,
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const radioEmit = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    return emits('update:modelValue', val);
  },
});
</script>

<style lang="scss" scoped>
.base-radio {
  position: relative;
  display: inline-flex;
  align-items: center;

  &--disabled {
    color: var(--input-disable);

    * {
      cursor: default;
    }
  }

  &__input {
    @include hoverFocusDisabled("& ~ .base-radio__icon");

    &:checked {
      & ~ .base-radio__icon {
        background-color: #cccccc;
      }
    }

    &:disabled {
      & ~ .base-radio__icon {
        background-color: currentColor;
        border-color: currentColor;
      }
    }
  }

  &__icon {
    border-radius: 50%;
    border: 2px solid #cccccc;
    outline: none;
    position: absolute;
    top: 50%;
    right: 0;
    margin-top: -0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.2rem;
    height: 1.2rem;
    padding: 0.2rem;
    pointer-events: none;
    background: transparent;
    background-clip: content-box;
  }
}
</style>
