<template>
  <button class="nav-profile-icon btn-reset" @click="$emit('toggleProfile')">
    <div class="nav-profile-icon__item">
			<img class="nav-profile-icon__item-img" src="https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-3/img/1.e2938115.png" alt="img">
      <div class="nav-profile-icon__item-online-status"></div>
    </div>
  </button>
</template>

<script setup></script>

<style lang="scss" scoped>
$b: ".nav-profile-icon";

#{$b} {
  &__item {
    width: 40px;
    height: 40px;
    border-radius: var(--radius-full);
    background-color: var(--color-profile-img);
    position: relative;
		// overflow: hidden;
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
  }
}
</style>
