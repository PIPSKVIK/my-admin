<template>
  <div class="real-time">
    {{ timestamp }}
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const timestamp = ref('');

onMounted(() => {
  setInterval(getNow, 1000);
})

function getNow() {
  const today = new Date();
  const date = `${today.getDate()}/${(today.getMonth()+1)}/${today.getFullYear()}`;
  const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
  const dateTime = `${date} ${time}`;
  timestamp.value = dateTime;
}

</script>

<style lang="scss" scoped>
$b: ".real-time";

#{$b} {
  color: var(--color-timer);
  font-size: 1rem;
  font-weight: 600;
}
</style>
