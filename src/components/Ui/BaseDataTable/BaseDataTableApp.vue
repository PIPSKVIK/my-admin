<template>
  <div class="data-table-app">
		<BaseDataTableHeader :header="header" />
	</div>
</template>

<script setup>
import { defineProps } from "vue";
import { BaseDataTableHeader } from "@/components/Ui";

const props = defineProps({
  header: {
    type: Array,
    default: () => []
  },
  items: {
    type: Array,
    default: () => []
  }
});
</script>

<style lang="scss" scoped>
$b: ".data-table-app";

#{$b} {
  border-radius: var(--radius-default);
  padding: 1rem;
  box-shadow: var(--box-shadow-wrapper);
  color: var(--color-white-soft);
  background-color: var(--color-background-soft);
}
</style>
