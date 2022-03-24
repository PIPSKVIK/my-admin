<template>
  <header class="app-header">
    <div class="app-header__wraper">
      <AppHeaderSearch />
      <div class="app-header__right">
        <AppColorMode />
        <AppNotification />
        <span class="app-header__user-info">{{ userEmail }}</span>
        <BaseButton class="ml-1" color="yellow" @click="logOut">
          Log out
        </BaseButton>
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
import { BaseButton } from "@/components/Ui";
import { useStore } from "vuex";

const store = useStore();
const userEmail = computed(() => store.state.auth.user?.email)
const logOut = async () => {
  await store.dispatch("auth/logout");
};
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
}
</style>
