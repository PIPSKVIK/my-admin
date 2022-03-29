<template>
  <div class="activity-timeline">
    <h3 class="activity-timeline__title mb-1">User Activity Timeline</h3>
    <ul class="activity-timeline__list-wrapper">
      <li class="activity-timeline__item timeline">
        <div class="timeline__pseudo"></div>
        <div class="timeline__content">text</div>
      </li>
      <li class="activity-timeline__item timeline">
        <div class="timeline__pseudo"></div>
        <div class="timeline__content">text</div>
      </li>
      <li class="activity-timeline__item timeline">
        <div class="timeline__pseudo"></div>
        <div class="timeline__content">text</div>
      </li>
      <li class="activity-timeline__item timeline">
        <div class="timeline__pseudo"></div>
        <div class="timeline__content">text</div>
      </li>
    </ul>

    {{ displayName }}
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useStore } from "vuex";
const store = useStore();

const displayName = computed(() => store.state.userInfo.userTimeline);
// const timelines = computed(() => store.getters["userInfo/getUserTimeline"]);

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
  min-width: 472px;
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
      top: 18px;
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
    }
  }
}
</style>