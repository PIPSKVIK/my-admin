<script setup>
import { AppNavigation } from '@/components/NavigationMenu'
</script>

<template>
  <section class="main-layout">
    <AppNavigation />
  </section>
</template>

<style lang="scss" scoped>
$b: ".main-layout";

#{$b} {
  flex: 1 1 auto;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100%;
  position: relative;
}
</style>
