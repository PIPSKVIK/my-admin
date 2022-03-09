<script setup>
import { RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import { ref } from "vue";

const text = ref("");

function myClick() {
  console.log(text.value);
}
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
    <PInputText v-model="text" />
    <PButton @click="myClick" label="Greet"></PButton>
  </header>

  <RouterView />
</template>

<style>
@import "@/assets/base.css";
</style>
