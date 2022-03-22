<script setup>
import { BaseField, BaseButton } from "@/components/Ui";
import { ref } from "vue";

const name = ref("");
const limit = ref("");
const submitForm = () => {
  console.log('re');
};
</script>

<template>
  <div class="categories">
    <div>
      <BaseField class="mb-1" name="test" v-model="name" />
      <BaseButton >
        button
      </BaseButton>
    </div>
    <!-- <div class="categories__create">
      <form
        @click.prevent="submitForm"
        class="mr-1 mb-desktop-mb-1 categories__create-form"
      >
        <h2 class="mb-1 categories__create-title">Create</h2>
        <span class="mb-1 p-float-label">
          <InputText id="inputtext" type="text" v-model="name" />
          <label for="inputtext">name</label>
        </span>
        <span class="mb-1 p-float-label">
          <InputText id="inputtext" type="text" v-model="limit" />
          <label for="inputtext">limit</label>
        </span>
        <Button label="Create" class="p-button-outlined p-button-help" />
      </form>
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
$b: ".categories";

#{$b} {
  display: flex;
  @include md-desktop {
    flex-direction: column;
  }
  &__create {
    flex: 1;
  }
  &__edit {
    flex: 1;
  }
}
</style>
