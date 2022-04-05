<template>
  <transition name="fade">
    <div class="base-modal" v-if="modalShow">
      <div class="base-modal__modal-mask">
        <div
          :class="[
            'base-modal__modal-container',
            `base-modal__modal-container--${modalSize}`,
          ]"
        >
          <BaseButtonIcon
            class="base-modal__modal-close"
            @click="$emit('closeModal')"
          >
            <BaseIcon svgName="close" />
          </BaseButtonIcon>
          <div class="base-modal__modal-header" v-if="$slots.header">
            <slot name="header" />
          </div>
          <div class="base-modal__modal-body" v-if="$slots.body">
            <slot name="body" />
          </div>
          <div class="base-modal__modal-footer">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { BaseIcon, BaseButtonIcon } from "@/components/Ui";

defineProps({
  modalShow: {
    type: Boolean,
    default: false,
  },
  modalSize: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped>
$b: ".base-modal";

#{$b} {
  &__modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--bag-overflow);
    transition: opacity 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__modal-container {
    z-index: 9999;
    position: relative;
    background-color: var(--color-background-soft);
    border-radius: var(--radius-big);
    padding: 3rem 2rem;

    &--full {
      width: 100%;
    }
    &--md {
      width: 50%;
    }
    &--sm {
      width: 33%;
    }
  }

  &__modal-close {
    position: absolute;
    right: 1rem;
    top: 1rem;
  }

  &__modal-header {
    margin-bottom: 2rem;
  }
  &__modal-body {
  }
}
</style>
