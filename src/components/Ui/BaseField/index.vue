<template>
  <div class="base-input">
    <label
      :class="[
        'base-input__label',
        { 'disabled': disabled }
      ]"
      v-if="name"
      :for="name"
    >
      {{ name }}
    </label>
    <input
      :class="[
        'base-input__input',
        { 'disabled': disabled }
      ]"
      :id="name" type="text"
      :disabled="disabled"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup>
// defineEmits({
//   emits: ['update:modelValue']
// })
defineProps({
  name: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: String,
    default: '',
    required: true
  }
});
</script>

<style lang="scss" scoped>
$b: ".base-input";

#{$b} {
  min-width: 100%;
  position: relative;

  &__label {
    top: -25px;
    position: absolute;
    font-size: 0.8rem;

    &.disabled {
      color: var(--input-disable);
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

    &:focus:not(:disabled) {
      outline: 2px solid var(--input-outline);
      outline-offset: 1px;
    }
    &.disabled {
      border-color: var(--input-disable);
    }
  }
}
</style>
