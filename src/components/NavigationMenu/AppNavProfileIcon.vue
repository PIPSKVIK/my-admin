<template>
  <button class="nav-profile-icon btn-reset">
    <div class="nav-profile-icon__item">
      <img
        class="nav-profile-icon__item-img"
        src="https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-3/img/1.e2938115.png"
        alt="img"
      />
      <div
        :class="[
          'nav-profile-icon__item-online-status',
          { 'nav-profile-icon__item-online-status--offline': !isLoggedIn }
        ]"
      ></div>
    </div>
  </button>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const isLoggedIn = computed(() => store.state.auth.isLoggedIn);
defineProps({
  offlineStat: {
    type: Boolean,
    default: false
  }
});
</script>

<style lang="scss" scoped>
$b: ".nav-profile-icon";

#{$b} {
  &__item {
    width: 40px;
    height: 40px;
    border-radius: var(--radius-full);
    background-color: var(--color-profile-img);
    position: relative;
    @include anim-default;
    &:active {
      opacity: 0.8;
    }
  }
  &__item-img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: var(--radius-full);
  }
  &__item-online-status {
    position: absolute;
    right: 0;
    bottom: 4px;
    width: 10px;
    height: 10px;
    border-radius: var(--radius-full);
    background-color: var(--color-profile-online);
    &--offline {
      background-color: var(--color-profile-offline);
    }
  }
}
</style>
