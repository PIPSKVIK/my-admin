<template>
  <div class="activity-timeline">
    <h3 class="activity-timeline__title mb-1">User Activity Timeline</h3>
    <ul class="activity-timeline__list-wrapper">
      <BaseLoader v-if="!timelines" />
      <li
        v-for="item in timelines"
        :key="item.id"
        class="activity-timeline__item timeline"
        v-else
      >
        <div class="timeline__pseudo"></div>
        <div class="timeline__content">
          <span class="mr-1 s-1">{{ new Date(item.timeline).toLocaleDateString() }}</span>
          <span class="s-1">{{ new Date(item.timeline).toLocaleTimeString() }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useStore } from "vuex";
import { BaseLoader } from '@/components/Ui'
const store = useStore();
const timelines = computed(() => store.getters["userInfo/getUserTimeline"]);

const getUserTimeline = async () => {
  await store.dispatch("userInfo/getUserTimeline");
};

onMounted(() => {
  getUserTimeline();
});
</script>

<style lang="scss" scoped>
$b: ".activity-timeline";

#{$b} {
  width: 100%;
  padding: 1rem;
  margin-right: 1rem;
  background-color: var(--color-background-soft);
  box-shadow: var(--box-shadow-drop-menu);
  border-radius: var(--radius-default);

  &__title {
    color: var(--color-text-soft);
  }

  &__list-wrapper {
    position: relative;

    &::after {
      content: "";
      position: absolute;
      left: 4px;
      top: 0;
      width: 2px;
      height: 100%;
      background: rgba(231,227,252,.14);
      z-index: 90;
    }
  }

  .timeline {
    display: flex;
    position: relative;
    padding: 0.5rem 0;
    &__pseudo {
      position: absolute;
      left: -1px;
      top: 13px;
      width: 12px;
      height: 12px;
      background-color: var(--color-profile-online);
      border-radius: var(--radius-full);
      z-index: 100;
      &::after {
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        @include center-abs();
        border: 5px solid var(--color-background-soft);
        border-radius: var(--radius-full);
        // --color-background-soft
      }
    }
    &__content {
      margin-left: 2rem;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}
</style>