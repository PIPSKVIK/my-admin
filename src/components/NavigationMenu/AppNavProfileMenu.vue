<template>
  <div class="profile-menu">
    <div class="profile-menu__header header-item pb-1 pr-1">
			<AppNavProfileIcon class="mr-1 ml-1" />
      <span class="header-item__user-name">{{ displayName }}</span>
    </div>
    <div class="profile-menu__body"></div>
    <div class="profile-menu__footer footer-item">
      <BaseButton color="yellow" size="full" @click="logOut">Log out</BaseButton>
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeMount } from "vue";
import { BaseButton } from "@/components/Ui";
import { useStore } from "vuex";
import { AppNavProfileIcon } from '@/components/NavigationMenu'

const store = useStore();
const displayName = computed(() => store.state.auth.user?.displayName);
const logOut = async () => await store.dispatch("auth/logout");
onBeforeMount(() => {
  store.dispatch("auth/fetchUser");
});
</script>

<style lang="scss" scoped>
$b: ".profile-menu";

#{$b} {
  min-width: 230px;
	padding: 10px 0;
  background-color: var(--color-background-soft);
  border-radius: var(--radius-default);
  box-shadow: var(--box-shadow-drop-menu);

	.header-item {
		display: flex;
		align-items: center;
		border-bottom: 1px solid var(--color-border);
		&__user-name {
			font-size: 0.8rem;
			color: var(--color-text);
		}
	}
	.footer-item {
		padding: 1rem 1rem 0 1rem;
	}
}
</style>
