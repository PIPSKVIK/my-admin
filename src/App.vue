<template>
  <div id="app" class="app">
    <AppDrowerMenu />
    <AppHeaderMenu />
    <main class="app-main" :class="{ 'app-main--hide': !showDrowerIcon }">
      <div class="app-main__wrap">
        <div class="app-main__wrap-container">
          <RouterView v-slot="{ Component }">
            <transition name="route" mode="out-in">
              <component :is="Component"></component>
            </transition>
          </RouterView>
        </div>
      </div>
    </main>
    <BaseToastList />
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import { onMounted, onBeforeMount } from "vue";
import { AppDrowerMenu } from "@/components/NavigationMenu";
import { AppHeaderMenu } from "@/components/HeaderMenu";
import { BaseToastList } from "@/components/Ui";
import { windowResize } from "@/helpers";
import { useStore } from "vuex";

const triggerSize = 1200;
const { showDrowerIcon } = windowResize(triggerSize);

onMounted(() => {
  window.innerWidth <= triggerSize
    ? (showDrowerIcon.value = false)
    : (showDrowerIcon.value = true);
});

const store = useStore();
onBeforeMount(() => {
  store.dispatch("auth/fetchUser");
});
</script>

<style lang="scss" scoped>
$b: ".app";
$m: ".app-main";

#{$b} {
  flex: 1 1 auto;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100%;
  position: relative;
  overflow: hidden;
}

#{$m} {
  padding: 64px 0px 56px 260px;
  display: flex;
  flex: 1 0 auto;
  max-width: 100%;
  transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  position: absolute;
  width: 100%;
  &--hide {
    padding-left: 78px;
    @include sm-mobile {
      padding-left: 0;
    }
  }

  &__wrap {
    flex: 1 1 auto;
    max-width: 100%;
    position: relative;
  }
  &__wrap-container {
    padding: 1.5rem;
    max-width: 1400px;
    margin-right: auto !important;
    margin-left: auto !important;
    height: 100%;
  }
}
// route - transition
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>
