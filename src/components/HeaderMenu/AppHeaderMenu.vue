<script setup>
import { ref } from "vue";
import {
  AppColorMode,
  AppHeaderSearch,
  AppNotification,
} from "@/components/HeaderMenu";
</script>

<template>
  <header class="app-header">
    <div class="app-header__wraper">
      <AppHeaderSearch />
      <div class="app-header__right">
        <AppColorMode />
        <AppNotification />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
$b: ".app-header";

#{$b} {
  margin-top: 0px;
  transform: translateY(0px);
  left: 260px;
  right: 0px;
  position: absolute;
  z-index: 99;

  @include lg-desktop {
    left: 80px;
  }

  &__wraper {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: inherit;
    padding: 10px;

    @include lg-desktop {
      margin: 0;
      max-width: 100%;
    }
  }

  &__right {
    display: flex;
  }
}
</style>
