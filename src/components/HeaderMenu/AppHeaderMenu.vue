<template>
  <header class="app-header">
    <div class="app-header__wraper">
      <AppHeaderSearch />
      <div class="app-header__right">
        <AppColorMode class="mr-1" />
        <AppNotification class="mr-1" />
        <div class="app-header__profile-elem">
          <AppNavProfileIcon @click.stop="trigger" />
          <transition name="fade">
            <AppNavProfileMenu
              class="app-header__profile-elem-menu"
              v-if="isVisible"
              @closeProfileMenu="trigger"
            />
          </transition>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from "vue";
import {
  AppColorMode,
  AppHeaderSearch,
  AppNotification,
} from "@/components/HeaderMenu";
import {
  AppNavProfileIcon,
  AppNavProfileMenu,
} from "@/components/NavigationMenu";
import { close } from "@/helpers";

const { isVisible, trigger } = close(".app-header__profile-elem-menu");
</script>

<style lang="scss" scoped>
$b: ".app-header";

#{$b} {
  position: relative;
  margin-top: 0px;
  transform: translateY(0px);
  left: 260px;
  right: 0px;
  position: absolute;
  z-index: 99;

  @include lg-desktop {
    left: 80px;
  }
  @include sm-mobile {
    left: 0;
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
    align-items: center;
  }
  &__user-info {
    font-size: 0.9rem;
  }
  &__profile-elem {
    position: relative;
  }
  &__profile-elem-menu {
    position: absolute;
    right: 0;
    top: 60px;
  }
}
</style>
