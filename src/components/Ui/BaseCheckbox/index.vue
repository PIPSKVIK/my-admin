<template>
  <div class="base-checkbox" :class="[{ 'base-checkbox--disabled': disabled }]">
    <input
      class="visually-hidden base-checkbox__input"
      type="checkbox"
      :id="id"
      :value="value"
      :true-value="checkedValue"
      :false-value="uncheckedValue"
      :disabled="disabled"
      v-model="checkboxEmit"
    />

    <BaseLabel
      :name="id"
      align="left"
      checkbox-radio
      class="base-checkbox__label"
    >
      <slot v-if="$slots.default" />
    </BaseLabel>

    <span class="base-checkbox__icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 18 18"
        width="10"
        height="10"
        role="presentation"
        fill="currentColor"
      >
        <path
          d="M16.145,2.571c-0.272-0.273-0.718-0.273-0.99,0L6.92,10.804l-4.241-4.27
          c-0.272-0.274-0.715-0.274-0.989,0L0.204,8.019c-0.272,0.271-0.272,0.717,0,0.99l6.217,6.258c0.272,0.271,0.715,0.271,0.99,0
          L17.63,5.047c0.276-0.273,0.276-0.72,0-0.994L16.145,2.571z"
        />
      </svg>
    </span>
  </div>
</template>

<script setup>
import { computed, defineEmits, defineProps } from "vue";
import { BaseIcon, BaseLabel } from "@/components/Ui";

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
    default: null,
  },
  uncheckedValue: {
    type: [String, Number, Boolean],
    default: false,
  },
  checkedValue: {
    type: [String, Number, Boolean],
    default: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const checkboxEmit = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    return emits("update:modelValue", val);
  },
});
</script>

<style lang="scss" scoped>
.base-checkbox {
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
    @include hoverFocusDisabled("& ~ .base-checkbox__icon");

    &:checked {
      & ~ .base-checkbox__icon {
        svg {
          display: block;
        }
      }
    }

    &:disabled {
      & ~ .base-radio__icon {
        border-color: currentColor;

        svg {
          fill: currentColor;
        }
      }
    }
  }

  &__icon {
    border-radius: var(--radius-default);
    border: 1px solid var(--input-outline);
    outline: none;
    position: absolute;
    top: 50%;
    right: 0;
    margin-top: -0.9rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;
    padding: 0.2rem;
    pointer-events: none;

    svg {
      display: none;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
