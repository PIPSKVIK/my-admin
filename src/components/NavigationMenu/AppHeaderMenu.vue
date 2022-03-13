<script setup>
import { ref } from "vue";

const showSearch = ref(false);
const lightMode = ref(true);

const changeLightMode = () => {
  lightMode.value = !lightMode.value;
};
</script>

<template>
  <header class="app-header">
    <div class="app-header__wraper">
      <div class="app-header__left">
        <Button
          @click="showSearch = !showSearch"
          icon="pi pi-search"
          class="p-button-rounded p-button-text"
        />
        <transition name="slide-fade">
          <InputText
            v-if="showSearch"
            placeholder="Keyword"
            class="app-header__serch p-inputtext-sm"
          />
        </transition>
      </div>
      <div class="app-header__right">
        <Button
          v-if="lightMode"
          @click="changeLightMode"
          icon="pi pi-sun"
          class="p-button-rounded p-button-text"
        />
        <Button
          v-else
          @click="changeLightMode"
          icon="pi pi-moon"
          class="p-button-rounded p-button-text"
        />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
$h: ".app-header";

#{$h} {
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

  &__serch {
    background-color: transparent;
  }

  &__left {
    display: flex;
    align-items: center;
    min-height: 45px;
  }
}
</style>
