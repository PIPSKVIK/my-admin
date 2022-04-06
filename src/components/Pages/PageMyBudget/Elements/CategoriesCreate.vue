<template>
  <div class="categories__create">
    <form class="categories__create-form">
      <BaseField
        class="mb-2"
        name="name"
        :error="v$.name.$errors.length"
        v-model="v$.name.$model"
        placeholder="name"
      >
        <template #error>
          <div v-for="error of v$.name.$errors" :key="error.$uid">
            {{ error.$message }}
          </div>
        </template>
      </BaseField>
      <BaseField
        class="mb-1"
        name="limit"
        :error="v$.limit.$errors.length"
        v-model="v$.limit.$model"
        placeholder="limit"
        type="number"
      >
        <template #error>
          <div v-for="error of v$.limit.$errors" :key="error.$uid">
            {{ error.$message }}
          </div>
        </template>
      </BaseField>
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
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { ref, defineEmits, reactive } from "vue";
import { BaseField, BaseButton, BaseDropdown } from "@/components/Ui";

const emits = defineEmits(["createCategory"]);

const state = reactive({
  name: '',
  limit: '',
  priority: '',
});

const rules = {
  name: { required },
  limit: { required },
};
const selectItem = ref("selectItem");

const v$ = useVuelidate(rules, state);

const options = ref([
  { name: "important", value: "danger" },
  { name: "middle", value: "info" },
  { name: "low", value: "success" },
  { name: "minor", value: "warning" }
]);

function selectOption(value) {
  state.priority = value;
  selectItem.value = value.name;
}

const formSubmit = () => {
  v$.value.$validate();
  if (v$.value.$invalid) return;

  const formData = {
    name: state.name,
    limit: state.limit,
    priority: state.priority
  };
  emits("createCategory", formData);
  v$.value.$reset();
  state.name = "";
  state.limit = "";
  state.priority = "";
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
