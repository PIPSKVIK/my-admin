<template>
  <div class="app-color">
    <Button
      v-if="lightMode"
      @click="changeLightMode"
      icon="pi pi-sun"
      class="app-color__btn-sun p-button-rounded p-button-text"
    />
    <Button
      v-else
      @click="changeLightMode"
      icon="pi pi-moon"
      class="app-color__btn-moon p-button-rounded p-button-text"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const lightMode = ref(true);
const changeLightMode = () => {
  lightMode.value = !lightMode.value;
  if (lightMode.value === true) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
};

onMounted(() => {
  const currentTheme = localStorage.getItem("theme")
    ? localStorage.getItem("theme")
    : null;
  if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);
  }
  currentTheme === 'dark' ? lightMode.value = true : lightMode.value = false;
});
</script>

<style lang="scss" scoped>
$b: ".app-color";
#{$b} {
  &__btn-sun {
    color: var(--color-text) !important;
  }
  &__btn-moon {
    color: var(--color-text) !important;
  }
}
</style>
