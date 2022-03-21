<template>
  <button :class="['base-button', classElement]">
    <slot />
  </button>
  <!-- <component
		:is="tag"
		v-bind="$attrs"
	>
		<slot />
	</component> -->

  <!-- пока что будет просто button -->
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  green: {
    type: Boolean,
    default: false
  },
	red: {
		type: Boolean,
		default: false
	},
	yellow: {
		type: Boolean,
		default: false
	}
  // tag: {
  // 	type: String,
  // 	default: "button",
  // 	validator: (value) => ['button', 'a', 'router-link'].includes(value),
  // }
});

const classElement = computed(() => {
	return {
		'base-button__green': props.green,
		'base-button__red': props.red,
		'base-button__yellow': props.yellow,
	}
})
</script>

<style lang="scss" scoped>
$b: ".base-button";

#{$b} {
  background-color: var(--btn-color);
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: var(--radius-default);
  color: var(--color-text);
  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: var(--btn-color-hover);
  }
  &:focus {
    outline: 2px solid var(--btn-color);
    outline-offset: 2px;
  }

	&__green {
		background-color: var(--btn-color-green);
		&:hover {
			background-color: var(--btn-color-green-hover);
		}
		&:focus {
			outline-color: var(--btn-color-green);
		}
	}

	&__red {
		background-color: var(--btn-color-red);
		&:hover {
			background-color: var(--btn-color-red-hover);
		}
		&:focus {
			outline-color: var(--btn-color-red);
		}
	}

	&__yellow {
		background-color: var(--btn-color-yellow);
		color: var(--color-text-black);
		&:hover {
			background-color: var(--btn-color-yellow-hover);
		}
		&:focus {
			outline-color: var(--btn-color-yellow);
		}
	}
}
</style>
