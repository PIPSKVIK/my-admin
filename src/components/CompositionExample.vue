<script setup>
// Примеры!
import { useToast } from "primevue/usetoast"; // Импортируем тоаст!
const toast = useToast(); // Присваиваем данную функцию к какой-то переменной!

const items = [
  {
    label: "Update",
    icon: "pi pi-refresh",
    command: () => {
      toast.add({
        severity: "success",
        summary: "Updated",
        detail: "Data Updated",
        life: 3000,
      });
    },
  },
  {
    label: "Delete",
    icon: "pi pi-times",
    command: () => {
      toast.add({
        severity: "warn",
        summary: "Delete",
        detail: "Data Deleted",
        life: 3000,
      });
    },
  },
  {
    label: "Vue Website",
    icon: "pi pi-external-link",
    command: () => {
      window.location.href = "https://vuejs.org/";
    },
  },
  {
    label: "Upload",
    icon: "pi pi-upload",
    to: "/fileupload",
  },
];
</script>

<template>
  <div class="example">
    <!-- элемент который будет звать тост -->
    <SplitButton label="Save" icon="pi pi-plus" :model="items" />
    <!-- Так же, нужно в шаблон подставить сам Toast -->
    <Toast />
  </div>
</template>

<style lang="scss" scoped>
// если хотим юзать media его нужно сперва заимпортить!
@import "@/styles/media";

.example {
  max-width: 500px;
  height: 100px;
  // padding: 100px;
  background-color: red;

  @include sm-mobile {
    background-color: blue;
  }
}
</style>
