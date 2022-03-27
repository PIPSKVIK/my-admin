<template>
  <section class="profile-page">
    <h2 class="mb-2">Progile</h2>
    <div class="profile-page__wrapper">
			<h3>User info</h3>
			<button class="mb-1" @click="getUserInfo">Get User Info</button>
			<div>{{store.state.auth.userInfo}}</div>
		</div>
  </section>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();
const getUserInfo = async () => {
	await store.dispatch("auth/getUserInfo");
}
</script>

<style lang="scss" scoped>
$b: ".profile-page";

#{$b} {
}
</style>
