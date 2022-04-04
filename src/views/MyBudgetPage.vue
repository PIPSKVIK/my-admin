<template>
  <section class="my-budget">
    <h1 class="my-budget__title">My budget</h1>
    <div class="my-budget__header">
      <div class="my-budget__header-info mr-2">
        <h2 class="mb-1">
          Hello {{ sexDetermination }} -
          <span class="my-budget__hedaer-user-name">{{ displayName }}</span
          >!
        </h2>
        <p class="p-1">This page is designed to organize your budget</p>
        <p class="p-1 mb-1">Here you can:</p>
        <ul>
          <li class="s-1">Keep track of your account and exchange rates</li>
          <li class="s-1">Track your purchase and payment history</li>
          <li class="s-1">Organize budget planning</li>
          <li class="s-1">Create new budget entries</li>
          <li class="s-1">
            And of course choose categories and create your own
          </li>
        </ul>
      </div>
      <div class="my-budget__header-img-man">
        <img
          v-if="userGender?.gender === 'male'"
          src="@/assets/images/budget/badget-man.png"
          alt="no-image"
        />
        <img
          v-if="userGender?.gender === 'female'"
          src="@/assets/images/budget/badget-female.png"
          alt="no-image"
        />
      </div>
    </div>
    <div class="my-budget__wrap">
      <div class="my-budget__nav">
        <AppTabLink
          v-for="(_, tab) in tabs"
          :key="tab"
          :to="{
            path: '/my-budget',
            query: { tab: tab }
          }"
          :class="['my-budget__nav-tab', { active: currentTab === tab }]"
          :active="tab === currentTab"
        >
          {{ tab }}
        </AppTabLink>
      </div>
      <div class="my-budget__body">
        <transition name="routeY" mode="out-in">
          <component :is="tabs[currentTab]"></component>
        </transition>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, watch, computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { AppTabLink } from "@/components/UiAdmin/Buttons";
import {
  counter,
  categories,
  history,
  newEntry,
  planning
} from "@/components/Pages/PageMyBudget/Tabs";

const userGender = computed(() => store.state.userInfo.userInfo);
const displayName = computed(() => store.state.auth.user?.displayName);
const sexDetermination = computed(() => {
  if (userGender.value?.gender === "male") {
    return "Mr";
  } else if (userGender.value?.gender === "female") {
    return "Mrs";
  } else {
    return "...";
  }
});
const store = useStore();
const route = useRoute();
const currentTab = ref("counter");
const tabs = {
  counter,
  history,
  planning,
  newEntry,
  categories
};
watch(
  () => route.query.tab,
  newValue => {
    if (newValue === undefined) {
      currentTab.value = "counter";
    } else {
      currentTab.value = newValue;
    }
  },
  { immediate: true }
);

onMounted(() => {
  store.dispatch("auth/fetchUser");
});
</script>

<style lang="scss" scoped>
$b: ".my-budget";

#{$b} {
  &__title {
    margin-bottom: 1rem;
    text-align: center;
  }
  &__wrap {
    width: 100%;
    padding: 1rem;
    border-radius: var(--radius-big);
    background-color: var(--color-background-soft);
    box-shadow: var(--box-shadow-drop-menu);
  }
  &__nav {
    margin-bottom: 2rem;
    @include md-desktop {
      display: flex;
      flex-direction: column;
    }
  }
  &__nav-tab {
    &:not(:last-child) {
      margin-right: 10px;
    }
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 3rem;
  }
  &__header-img-man {
    width: 172px;
    height: 350px;
    @include md-desktop {
      width: 100px;
      height: 250px;
    }
    & img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
  &__hedaer-user-name {
    color: var(--btn-color-blue);
  }
}
</style>
