<template>
  <section class="toast-list">
    <transition-group name="listRight" tag="div">
      <BaseToast
        v-for="{ id, type, message } in notifications"
        :key="id"
        :type="type"
        @remove="removeNotification(id)"
      >
        {{ message }}
      </BaseToast>
    </transition-group>
  </section>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';
import { BaseToast } from "@/components/Ui";

const store = useStore();
const notifications = computed(() => store.state.notification.notifications);
const removeNotification = (id) => store.dispatch('notification/removeNotification', id);
</script>

<style lang="scss" scoped>
$b: ".toast-list";

#{$b} {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  min-width: 320px;
  max-height: calc(100vh - 2rem);
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
