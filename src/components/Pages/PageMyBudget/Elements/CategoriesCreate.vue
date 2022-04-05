<template>
  <div class="categories__create">
    <form class="categories__create-form">
      <BaseField
        class="mb-2"
        name="name"
        v-model="name"
        placeholder="name"
      />
      <BaseField
        class="mb-1"
        name="limit"
        v-model="limit"
        placeholder="limit"
      />
      <BaseDropdown
        class="mb-1"
        :options="options"
        @selectOption="selectOption"
        :selectItem="selectItem"
      />
      <BaseButton type="submit" size="full-mob" @click.prevent="formSubmit">
        Create category
      </BaseButton>
    </form>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";
import { BaseField, BaseButton, BaseDropdown } from "@/components/Ui";

const emits = defineEmits(["createCategory"]);

const name = ref("");
const limit = ref("");
const priority = ref("");
const selectItem = ref("selectItem");

const options = ref([
  { name: "important", value: "danger" },
  { name: "middle", value: "info" },
  { name: "low", value: "success" },
  { name: "minor", value: "warning" }
]);

function selectOption(value) {
  priority.value = value;
  selectItem.value = value.name;
}

const formSubmit = () => {
  const formData = {
    name: name.value,
    limit: limit.value,
    priority: priority.value
  };
  emits("createCategory", formData);
  name.value = "";
  limit.value = "";
  priority.value = "";
  selectItem.value = "selectItem";
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
