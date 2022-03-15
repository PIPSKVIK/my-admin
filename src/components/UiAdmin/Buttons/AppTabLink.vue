<script setup>
defineProps({
  to: {
    type: [String, Object],
    default: "" || {},
  },
});
</script>

<template>
  <router-link :to="to" class="router-link" exact>
    Test
  </router-link>
</template>

<style lang="scss" scoped>
.router-link-active {
  color: red;
}
</style>
