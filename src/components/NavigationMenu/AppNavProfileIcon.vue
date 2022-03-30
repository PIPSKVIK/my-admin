<template>
  <button class="nav-profile-icon btn-reset">
    <div
      :class="[
        'nav-profile-icon__item',
        { 'nav-profile-icon__item--profile': profile },
      ]"
    >
      <img
        ref="img"
        :class="[
          'nav-profile-icon__item-img',
          { 'nav-profile-icon__item-img--profile': profile },
        ]"
        :src="selectImage ? selectImage : loaderImg"
        alt="img"
      />
      <div
        v-if="!profile"
        :class="[
          'nav-profile-icon__item-online-status',
          { 'nav-profile-icon__item-online-status--offline': !isLoggedIn },
        ]"
      ></div>
    </div>
  </button>
</template>

<script setup>
import { computed, watch, ref, onMounted } from "vue";
import { useStore } from "vuex";
import { logo1, logo2, logo3 } from "@/assets/images/profileLogos";
import loaderImg from "@/assets/images/svg/loading.svg";

const store = useStore();
const isLoggedIn = computed(() => store.state.auth.isLoggedIn);

const props = defineProps({
  offlineStat: {
    type: Boolean,
    default: false,
  },
  profile: {
    type: Boolean,
    default: false,
  },
  profileImg: {
    type: [Number, String],
  },
});

const userInfo = computed(() => store.getters["userInfo/getUserInfo"]);

const selectImage = computed(() => {
  if (userInfo.value?.avatar == 1) {
    return logo1;
  } else if (userInfo.value?.avatar == 2) {
    return logo2;
  } else if (userInfo.value?.avatar == 3) {
    return logo3;
  }
});

const getUserIngo = async () => {
  await store.dispatch("userInfo/getUserData");
};

onMounted(() => {
  getUserIngo();
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

    &--profile {
      width: 120px;
      height: 120px;
      border-radius: var(--radius-default);
      cursor: default;
    }
  }
  &__item-img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: var(--radius-full);

    &--profile {
      border-radius: var(--radius-default);
    }
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
