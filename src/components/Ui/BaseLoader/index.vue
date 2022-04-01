<template>
  <transition name="fade">
    <div
      v-if="visible"
      class="loader-wrapper"
      :class="{ 'loader-wrapper--full': full }"
    >
      <loadingIcon :width="size" :height="size" />
    </div>
  </transition>
</template>

<script setup>
import loadingIcon from "@/components/icons/loadingIcon.vue";
import { defineProps } from "vue";

const props = defineProps({
  visible: {
    type: Boolean,
    default: true
  },
  size: {
    type: [Number, String],
    default: 80
  },
  full: {
    type: Boolean,
    default: false
  }
});
</script>

<style lang="scss" scoped>
.loader-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  &--full {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 999999;
    // background-color: rgb(2 2 2 / 10%);
  }
}
</style>
