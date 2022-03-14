<script setup>
import { AppHeaderDropMenu } from "@/components/HeaderMenu";
import { close } from "@/helpers";

const { isVisible, trigger } = close(".app-notification__drop");
</script>

<template>
  <div class="app-notification">
    <Button
      @click.stop="trigger"
      icon="pi pi-bell"
      class="app-notification__icon p-button-rounded p-button-text"
    />

    <transition name="slide-fade">
      <AppHeaderDropMenu v-if="isVisible" class="app-notification__drop">
        <template #top></template>
      </AppHeaderDropMenu>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
$b: ".app-notification";

#{$b} {
  position: relative;

  &__icon {
    color: var(--color-text) !important;
  }
}
</style>
