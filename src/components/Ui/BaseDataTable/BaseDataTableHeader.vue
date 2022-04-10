<template>
  <div class="data-table-header">
    <p
			v-for="(i, idx) in header"
			:key="idx"
			class="data-table-header__name"
		>
			{{ i.name }}
		</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  header: {
    type: Array,
    default: () => []
  }
});
</script>

<style lang="scss" scoped>
$b: ".data-table-header";

#{$b} {
  &__name {
    font-size: 1rem;
  }
}
</style>
