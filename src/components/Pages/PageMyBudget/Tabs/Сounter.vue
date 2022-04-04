<template>
  <div class="counter-view">
    <div class="counter-view__left">
      <h3>Currency account</h3>
      <div class="pb-1 pt-1 counter-view__left-bill" v-if="bill">
        <span>Balans: {{ bill.bill }} RUB = </span>
        <span>{{ USD }} / USD</span>
      </div>
      <div class="pb-1 pt-1 counter-view__left-bill">
        <span v-if="currency">
          Rate-1$ = {{ currency.quotes.USDRUB }}
        </span>
        <span v-else>Click Update info</span>
      </div>
      <div v-if="!currency" class="counter-view__left-arrow anim-move-right">
        <BaseIcon svgName="arrow-right" />
      </div>
      <BaseButtonIcon
        class="counter-view__left-refresh-btn"
        @click="updateCureency"
      >
        <BaseIcon svgName="refresh" />
      </BaseButtonIcon>
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
    <BaseLoader full :visible="isLoading" />
  </div>
</template>

<script setup>
import { BaseLoader, BaseButtonIcon, BaseIcon } from "@/components/Ui";
import { onMounted, ref, computed, onBeforeMount } from "vue";
import { useStore } from "vuex";

const store = useStore();
const currency = ref(null);
const isLoading = ref(false);
const bill = computed(() => store.state.userInfo.userInfo);
const USD = computed(() =>
  Math.floor(bill.value?.bill / currency.value?.quotes?.USDRUB)
);
const updateCureency = async () => {
  isLoading.value = true;
  try {
    currency.value = await store.dispatch("userInfo/fetchCurrency");
    store.dispatch(
      "notification/addSuccessNotification",
      "Data updated"
    );
  } catch (error) {
    store.dispatch("notification/addDangerNotification", "Invalid data");
  } finally {
    isLoading.value = false;
  }
}
</script>

<style lang="scss" scoped>
$b: ".counter-view";

#{$b} {
  display: flex;
  @include md-desktop {
    flex-direction: column;
  }

  &__left {
    position: relative;
    border-radius: var(--radius-default);
    padding: 1rem;
    box-shadow: var(--box-shadow-wrapper);
    flex: 1;
    margin-right: 1rem;
    color: var(--color-white-soft);
    @include md-desktop {
      margin-right: 0;
      margin-bottom: 1rem;
    }
  }
  &__left-arrow {
    position: absolute;
    top: 1rem;
    right: 3rem;
  }
  &__left-refresh-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
  &__left-bill {
    border-bottom: 1px solid var(--color-border);
    color: var(--info);
    font-weight: 600;
  }

  &__right {
    border-radius: var(--radius-default);
    padding: 1rem;
    box-shadow: var(--box-shadow-drop-menu);
    box-shadow: var(--box-shadow-wrapper);
    flex: 3;
    color: var(--color-white-soft);
  }
  .exchange {
    &__header {
      display: flex;
      border-bottom: 1px solid var(--color-border);
      padding-bottom: 1rem;
      & li {
        width: 30%;
      }
    }
    &__row {
      display: flex;
      border-bottom: 1px solid var(--color-border);
      padding: 1rem 0;
      & li {
        width: 30%;
      }
    }
  }
}
</style>
