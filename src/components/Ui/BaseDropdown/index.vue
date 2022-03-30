<template>
  <div class="base-dropdown" @click="open = !open">
    <div :class="[
      'base-dropdown__icon',
      { 'base-dropdown__icon--rotate': open }
    ]">
      <BaseIcon svgName="arrow" />
    </div>
    <div class="base-dropdown__image-wrap mr-1">
      <img :src="userImage" alt="">
    </div>
    <div class="base-dropdown__select">
      <span class="s-1">{{ selected }}</span>
    </div>
  </div>
</template>

<script setup>
import { BaseIcon } from '@/components/Ui';
import { logo1, logo2, logo3 } from "@/assets/images/profileLogos"
import { ref, computed } from "vue";

const open = ref(false);
const selected = ref('logo1');
const userImage = computed(() => logo1)
</script>

<style lang="scss" scoped>
$b: ".base-dropdown";

#{$b} {
  width: 300px;
  background-color: transparent;
  border: 1px solid var(--color-text-soft);
  padding: 0.5rem;
  border-radius: var(--radius-default);
  font-size: 1rem;
  color: var(--color-text);
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    outline: 2px solid var(--input-outline);
    outline-offset: 1px;
  }

  &__icon {
    position: absolute;
    top: 15px;
    right: 5px;
    display: flex;
    @include anim-default;
    &--rotate {
      transform: rotate(180deg);
    }
  }

  &__image-wrap {
    width: 35px;
    height: 35px;
    border-radius: var(--radius-full);

    & img {
      width: 100%;
      height: auto;
      object-fit: cover;
      border-radius: var(--radius-full);
    }
  }
}
</style>
