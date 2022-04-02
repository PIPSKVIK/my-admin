<template>
  <div class="counter-view">
    <div class="counter-view__left">
      <h3 class="mb-1">Currency account</h3>
      <p class="pb-1 counter-view__left-bill">12.0 Rub</p>
    </div>
    <div class="counter-view__right">
      <h3 class="mb-1">Exchange rates</h3>
      <div class="counter-view__right-exchange exchange">
        <ul class="exchange__header">
          <li><span>currencies</span></li>
          <li><span>courses</span></li>
          <li><span>date</span></li>
        </ul>
        <ul class="exchange__row">
          <li><span>rub</span></li>
          <li><span>1212</span></li>
          <li><span>12.12.12</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
$b: ".counter-view";

#{$b} {
  display: flex;
  @include md-desktop {
    flex-direction: column;
  }

  &__left {
    border-radius: var(--radius-default);
    padding: 1rem;
    background-color: var(--color-interface-blue);
    flex: 1;
    margin-right: 1rem;
    color: var(--color-white-soft);
    @include md-desktop {
      margin-right: 0;
      margin-bottom: 1rem;
    }
  }
  &__left-bill {
    border-bottom: 1px solid var(--color-text);
  }

  &__right {
    border-radius: var(--radius-default);
    padding: 1rem;
    background-color: var(--color-interface-orange);
    flex: 3;
    color: var(--color-white-soft);
  }
  .exchange {
    &__header {
      display: flex;
      border-bottom: 1px solid var(--color-separator-dark);
      padding-bottom: 1rem;
      & li {
        width: 30%;
      }
    }
    &__row {
      display: flex;
      border-bottom: 1px solid var(--color-separator-dark);
      padding: 1rem 0;
      & li {
        width: 30%;
      }
    }
  }
}
</style>
