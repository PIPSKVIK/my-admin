<script setup></script>

<template>
  <header class="app-header">
    <div class="app-header__wraper">
      <div class="p-inputgroup">
        <Button icon="pi pi-search" class="p-button-rounded p-button-text" />
        <InputText
          placeholder="Keyword"
          class="app-header__serch p-inputtext-sm"
        />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "@/styles/media";

$h: ".app-header";

#{$h} {
  margin-top: 0px;
  transform: translateY(0px);
  left: 260px;
  right: 0px;
  position: absolute;
  z-index: 99;

  @include lg-desktop {
    left: 80px;
  }

  &__wraper {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: inherit;
    padding: 10px;

    @include lg-desktop {
      margin: 0;
      max-width: 100%;
    }
  }

  &__serch {
    background-color: transparent;
  }
}
</style>
