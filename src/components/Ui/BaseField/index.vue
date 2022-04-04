<template>
  <div class="base-input">
    <label
      :class="[
        'base-input__label',
        { disabled: disabled },
        { error: error }
      ]"
      v-if="name"
      :for="name"
    >
      {{ name }}
    </label>
    <component
      :is="multiline ? 'textarea' : 'input'"
      :style="{ 'padding': `${inputSize}rem` }"
      :class="[
        'base-input__input',
        { disabled: disabled },
        { error: error },
        { 'base-input__input-multiline': multiline }
      ]"
      :id="name"
      :type="type"
      :disabled="disabled"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    default: ""
  },
  disabled: {
    type: Boolean,
    default: false
  },
  modelValue: {
    type: [String, Number],
    default: "",
    required: true
  },
  error: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: "text",
  },
  inputSize: {
    type: [Number, String,],
    default: ''
  },
  placeholder: {
    type: String,
    default: ""
  },
  multiline: {
    type: Boolean,
    default: false
  }
});
</script>
<script>
  export default {
    name: 'BaseField'
  }
</script>

<style lang="scss" scoped>
$b: ".base-input";

#{$b} {
  min-width: 100%;
  position: relative;

  &__label {
    top: -22px;
    position: absolute;
    font-size: 0.8rem;

    &.disabled {
      color: var(--input-disable);
    }
    &.error {
      color: var(--color-error);
    }
  }

  &__input {
    width: 100%;
    background-color: transparent;
    border: 1px solid var(--color-text-soft);
    padding: 0.5rem;
    border-radius: var(--radius-default);
    font-size: 1rem;
    color: var(--color-text);

    &::placeholder {
      color: var(--input-placeholder-color);
    }

    &:focus:not(:disabled) {
      outline: 2px solid var(--input-outline);
      outline-offset: 1px;
    }
    &.disabled {
      border-color: var(--input-disable);
    }
    &.error {
      border-color: var(--color-error);

      &:focus:not(:disabled) {
        outline-color: var(--color-error);
      }
    }
  }

  &__input-multiline {
    height: 100px;
  }
}
</style>
