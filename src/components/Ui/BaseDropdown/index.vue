<template>
  <div class="base-dropdown">
    <div class="base-dropdown__button" @click="trigger">
      <span>{{ selectItem ? selectItem : 'select item' }}</span>
      <div
        :class="['base-dropdown__button-icon', { 'base-dropdown__button-icon-rotate': isVisible }]"
      >
        <BaseIcon svgName="arrow" />
      </div>
    </div>
    <transition name="fade">
      <ul class="base-dropdown__menu" v-if="isVisible">
        <li
          v-for="(item, idx) in options"
          :key="idx"
          class="base-dropdown__menu-item"
          @click.stop="selectOptionHandler(item)"
        >
          <span class="s-1">{{ item.name }}</span>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
import { BaseIcon } from "@/components/Ui";
import { close } from "@/helpers";

const props = defineProps({
  options: {
    type: Array,
    default: () => [],
    required: true,
  }
})

const selectItem = ref('');
const { isVisible, trigger } = close(".base-dropdown");
const selectOptionHandler = (value) => {
  selectItem.value = value.name;
  isVisible.value = false;
}
</script>

<style lang="scss" scoped>
$b: ".base-dropdown";

#{$b} {
  &__button {
    width: 100%;
    background-color: transparent;
    border: 1px solid var(--color-text-soft);
    padding: 0.5rem;
    border-radius: var(--radius-default);
    font-size: 1rem;
    color: var(--color-text);
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    position: relative;
  }
  &__button-icon {
    position: absolute;
    right: 1rem;
    top: 12px;
    width: 20px;
    height: 20px;
    @include anim-default;
  }
  &__button-icon-rotate {
    transform: rotate(180deg);
  }

  &__menu {
    background-color: var(--color-background-soft);
    margin-top: 0.1rem;
    border-radius: 0 0 var(--radius-default) var(--radius-default);
    box-shadow: var(--box-shadow-drop-menu);
  }
  &__menu-item {
    cursor: pointer;
    padding: 0.5rem;
    @include anim-default;
    &:hover {
      background-color: var(--base-link-color-hover);
    }
  }
}
</style>
