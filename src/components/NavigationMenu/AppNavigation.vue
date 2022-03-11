<script setup>
import { windowResize } from "@/helpers";
const { showDrowerIcon } = windowResize(1200);

const drowerIconHandler = () => {
  showDrowerIcon.value = !showDrowerIcon.value;
};
</script>

<template>
  <nav
    class="app-nav-drawer"
    :class="{ 'app-nav-drawer--hide': !showDrowerIcon }"
  >
    <div class="app-nav-drawer__content">
      <div class="app-nav-drawer__content-header">
        <Button
          @click="drowerIconHandler"
          v-if="showDrowerIcon"
          icon="pi pi-angle-double-left"
          class="p-button-rounded p-button-text"
        />
        <Button
          v-else
          @click="drowerIconHandler"
          icon="pi pi-angle-double-right"
          class="p-button-rounded p-button-text"
        />
      </div>
      <div class="app-nav-drawer__content-items">
        <Button
          label="my-budget"
          class="p-button-text p-button-help p-button-plain app-nav-drawer__content-items-link"
          icon="pi pi-dollar"
          iconPos="right"
          :disabled="!showDrowerIcon"
        />
      </div>
    </div>
  </nav>
  <header class="app-header">
    <div class="app-header__wraper">
      <Button label="Submit" icon="pi pi-check" iconPos="right" />
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "@/styles/media";

$b: ".app-nav-drawer";
$h: ".app-header";

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
    padding-right: 30px;
  }
}

#{$h} {
  height: 64px;
  margin-top: 0px;
  transform: translateY(0px);
  left: 260px;
  right: 0px;
  position: absolute;

  @include lg-desktop {
    left: 100px;
  }

  &__wraper {
    max-width: 900px;
    margin: 0 auto;

    @include lg-desktop {
      margin: 0;
      max-width: 100%;
    }
  }
}
</style>
