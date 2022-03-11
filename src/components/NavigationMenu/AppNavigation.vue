<script setup>
import { windowResize } from "@/helpers";
const { showDrowerIcon } = windowResize(1200);

const drowerIconHandler = () => {
  showDrowerIcon.value = !showDrowerIcon.value;
};
</script>

<template>
  <nav
    class="add-nav-drawer"
    :class="{ 'add-nav-drawer--hide': !showDrowerIcon }"
  >
    <div class="add-nav-drawer__content">
      <div class="add-nav-drawer__content-header">
        <Button
          @click="drowerIconHandler"
          v-if="showDrowerIcon"
          icon="pi pi-times"
          class="p-button-rounded p-button-danger p-button-text"
        />
        <Button
          v-else
          @click="drowerIconHandler"
          icon="pi pi-check"
          class="p-button-rounded p-button-text"
        />
      </div>
      <div class="add-nav-drawer__content-items">
        <Button
          label="my-budget"
          class="p-button-text p-button-plain add-nav-drawer__content-items-link"
          icon="pi pi-dollar"
          iconPos="right"
        />
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@import "@/styles/media";

$b: ".add-nav-drawer";

#{$b} {
  height: 100vh;
  top: 0px;
  transform: translateX(0%);
  width: 260px;
  max-height: calc(100% - 0px);
  background-color: var(--color-background-dark);

  transition-duration: 0.4s !important;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1), ease !important;
  will-change: box-shadow, transform !important;
  border-radius: 0 var(--radius-big) var(--radius-big) 0;

  &--hide {
    transform: translateX(-70%);
  }

  &__container {
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
  }

  &__content-header {
    display: flex;
    justify-content: flex-end;
    padding: 20px 20px 8px 24px;
  }

  &__content-items-link {
    width: 100%;
  }
}
</style>
