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
        <BaseLink
          v-for="(link, idx) in btnLinks"
          :key="idx"
          :to="link.path"
          drowerMenu
        >
          {{ link.label }}
        </BaseLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useRouter } from "vue-router";
import { onMounted, defineEmits } from "vue";
import { windowResize } from "@/helpers";
import { btnLinks } from "@/constants/drawerMenuLinks";
import { BaseLink } from "@/components/Ui";
import { HomeIcon } from "@/components/icons";

const emits = defineEmits(["showDrowerIconTriger"]);

const router = useRouter();
const triggerSize = 1200;
const { showDrowerIcon } = windowResize(triggerSize);

const drowerIconHandler = () => {
  showDrowerIcon.value = !showDrowerIcon.value;
  emits("showDrowerIconTriger", showDrowerIcon.value)
};
onMounted(() => {
  window.innerWidth <= triggerSize
    ? (showDrowerIcon.value = false)
    : (showDrowerIcon.value = true);
});
</script>

<style lang="scss" scoped>
$b: ".app-nav-drawer";
$h: ".app-header";

#{$b} {
  height: 100vh;
  top: 0px;
  transform: translateX(0%);
  width: 260px;
  max-height: calc(100% - 0px);
  background-color: var(--color-background-dark);
  overflow-y: auto;

  transition-duration: 0.4s !important;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1), ease !important;
  will-change: box-shadow, transform !important;
  border-radius: 0 var(--radius-big) var(--radius-big) 0;
  z-index: 100;
  position: fixed;

  &--hide {
    transform: translateX(-70%);
    @include sm-mobile {
      transform: translateX(-100%);
    }
  }

  &__container {
    height: 100%;
  }

  &__content-header {
    display: flex;
    justify-content: flex-end;
    padding: 20px 20px 8px 24px;
  }

  &__content-items {
    display: flex;
    flex-direction: column;
    & a:not(:last-child) {
      margin-bottom: 0.2rem;
    }
  }
}
</style>
