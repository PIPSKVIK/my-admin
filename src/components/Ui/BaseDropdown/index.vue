<template>
  <div class="base-dropdown" @click="open = !open">
    <div
      :class="[
        'base-dropdown__icon',
        { 'base-dropdown__icon--rotate': open }
      ]"
    >
      <BaseIcon svgName="arrow" />
    </div>
    <div class="base-dropdown__image-wrap mr-1">
      <img :src="userImage" alt="" />
    </div>
    <div class="base-dropdown__select">
      <span class="s-1">{{ selected }}</span>
    </div>

    <transition name="fade">
      <div class="base-dropdown__drop-options drop-options" v-if="open">
        <div
          v-for="item in options"
          :key="item.value"
          class="drop-options__item"
          @click="selectOption(item)"
        >
          <div class="drop-options__image-wrap mr-1">
            <img :src="userImage" alt="" />
          </div>
          <div class="drop-options__select">
            <span class="s-1">{{ item.name }}</span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { BaseIcon } from "@/components/Ui";
import { logo1, logo2, logo3 } from "@/assets/images/profileLogos";
import { ref, computed, defineProps, defineEmits } from "vue";

const props = defineProps({
  options: {
    type: Array,
    default: () => []
  }
});

const emit = defineEmits(["selectedItem"]);

function selectOption(option) {
  selected.value = option.name;
  emit("selectedItem", option);
}

const open = ref(false);
const selected = ref("logo1");

const userImage = computed(() => {
  if (selected.value === "logo1") {
    return logo1;
  } else if (selected.value === "logo2") {
    return logo2;
  } else if (selected.value === "logo3") {
    return logo3;
  }
});
</script>

<style lang="scss" scoped>
$b: ".base-dropdown";

#{$b} {
  width: 100%;
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

  .drop-options {
    width: 100%;
    border: 1px solid var(--color-text-soft);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 55px;
    background-color: var(--color-background-soft);

    &__item {
      display: flex;
      align-items: center;
      padding: 0.5rem;
      @include anim-default;
      &:hover {
        background-color: var(--color-background-soft-hover);
      }
      &--active {
        background-color: var(--color-background-soft-hover);
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
}
</style>
