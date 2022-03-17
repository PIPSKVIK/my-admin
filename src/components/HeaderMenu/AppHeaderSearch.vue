<script setup>
import { ref } from "vue";

const showSearch = ref(false);
</script>
<template>
  <div class="app-search">
    <Button
      @click="showSearch = !showSearch"
      icon="pi pi-search"
      class="app-search__btn p-button-rounded p-button-text"
    />
    <transition name="slide-fade">
      <InputText
        v-if="showSearch"
        placeholder="Keyword"
        class="app-search__field p-inputtext-sm"
      />
    </transition>
  </div>
</template>

<style lang="scss" scoped>
$b: ".app-search";

#{$b} {
  display: flex;
  align-items: center;
  min-height: 45px;
  width: 50%;

  @include md-desktop {
    width: 100%;
  }

  &__btn {
    margin-right: 10px;
    color: var(--color-text) !important;
  }

  &__field {
    background-color: transparent;
    border-color: var(--color-text) !important;
    &::placeholder {
      color: var(--color-text) !important;
    }
  }
}
</style>
