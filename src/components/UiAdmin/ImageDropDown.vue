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
      <span class="s-1">---------</span>
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
            <img :src="item.url" alt="" />
          </div>
          <div class="drop-options__select">
            <span class="s-1">---------</span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { BaseIcon } from "@/components/Ui";
import { ref, computed, defineProps, defineEmits } from "vue";
const emit = defineEmits(["selectedItem"]);
const props = defineProps({
  options: {
    type: Array,
    default: () => []
  },
  currentSelect: {
    type: [Number, String],
    required: true,
  }
});
const open = ref(false);
const selected = ref(props.currentSelect);

function selectOption(option) {
  selected.value = option.value;
  emit("selectedItem", option);
}

const userImage = computed(() => {
  if (selected.value == 1) {
    return "https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-3/img/6.60bb3fc7.png";
  } else if (selected.value == 2) {
    return "https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-3/img/2.80504cd9.png";
  } else if (selected.value == 3) {
    return "https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-3/img/1.e2938115.png";
  } else if (selected.value == 4) {
    return "https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-3/img/8.527b8f8b.png";
  } else if (selected.value == 5) {
    return "https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-3/img/5.449c175c.png";
  } else if (selected.value == 6) {
    return "https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-3/img/7.40de7798.png";
  } else if (selected.value == 7) {
    return "https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-3/img/3.4b40af12.png";
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
