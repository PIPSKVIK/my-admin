<template>
  <div class="categories__create">
    <form class="categories__create-form">
      <BaseField class="mb-2" name="name" v-model="name" placeholder="name" />
      <BaseField class="mb-2" name="limit" v-model="limit" placeholder="limit" />
      <BaseField class="mb-1" name="priority" v-model="priority" placeholder="priority" />
      <BaseButton type="submit" size="full-mob" @click.prevent="formSubmit">
        Create category
      </BaseButton>
    </form>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";
import { BaseField, BaseButton } from "@/components/Ui";

const emits = defineEmits(['createCategory']);

const name = ref("");
const limit = ref("");
const priority = ref("");

const formSubmit = () => {
  const formData = {
    name: name.value,
    limit: limit.value,
    priority: priority.value,
  };
  emits('createCategory', formData);
  name.value = '';
  limit.value = '';
  priority.value = '';
};
</script>

<style lang="scss" scoped>
$b: ".categories__create";

#{$b} {
  border-radius: var(--radius-default);
  padding: 2rem 1rem 1rem;
  box-shadow: var(--box-shadow-drop-menu);
  box-shadow: var(--box-shadow-wrapper);
  color: var(--color-white-soft);
}
</style>
