<template>
  <button class="button-icon btn-reset">
    <slot />
  </button>
</template>

<script setup>
import { BaseIcon } from "@/components/Ui";
</script>

<style lang="scss" scoped>
$b: ".button-icon";

#{$b} {
	width: 24px;
	height: 24px;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	border-radius: var(--radius-default);
	cursor: pointer;
  color: inherit;

	&:focus {
    outline: 2px solid var(--btn-color);
    outline-offset: 1px;
  }
}
</style>
