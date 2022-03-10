<script setup>
// import { useToast } from "primevue/usetoast";
import { RouterView } from "vue-router";
// const $toast = useToast();

// const items = [
//   {
//     label: "Update",
//     icon: "pi pi-refresh",
//     command: () => {
//       $toast.add({
//         severity: "success",
//         summary: "Updated",
//         detail: "Data Updated",
//         life: 3000,
//       });
//     },
//   },
//   {
//     label: "Delete",
//     icon: "pi pi-times",
//     command: () => {
//       $toast.add({
//         severity: "warn",
//         summary: "Delete",
//         detail: "Data Deleted",
//         life: 3000,
//       });
//     },
//   },
//   {
//     label: "Vue Website",
//     icon: "pi pi-external-link",
//     command: () => {
//       window.location.href = "https://vuejs.org/";
//     },
//   },
//   {
//     label: "Upload",
//     icon: "pi pi-upload",
//     to: "/fileupload",
//   },
// ];
</script>

<template>
  <div id="app">
    <!-- <div class="test-container">
      <Button
        label="text"
        class="p-button p-component p-button-raised p-button-text p-button-plain"
      />
    </div>
    <SplitButton label="Save" icon="pi pi-plus" :model="items" />
    <Toast /> -->
    <RouterView />
  </div>
</template>

<style lang="scss">
// .test-container {
//   display: flex;
//   justify-content: center;

//   margin: 0 auto;
//   max-width: 500px;
//   padding: 100px;
//   background-color: var(--color-background-soft);
//   border-radius: var(--radius-default);
// }
</style>
