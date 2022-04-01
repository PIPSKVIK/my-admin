<script setup>
import { BaseField, BaseButton } from "@/components/Ui";
import { ref } from "vue";

const name = ref("");
const limit = ref("");
const submitCreateForm = () => {
  console.log("Create");
};
const submitEditForm = () => {
  console.log("Edit");
};
</script>

<template>
  <div class="categories">
    <div class="categories__create">
      <form
        @click.prevent="submitCreateForm"
        class="mr-2 mr-res mb-desktop-mb-2 categories__create-form"
      >
        <BaseField class="mb-2" name="name" v-model="name" />
        <BaseField class="mb-1" name="limit" v-model="limit" />
        <BaseButton type="submit" size="full-mob">Create</BaseButton>
      </form>
    </div>
    <div class="categories__edit">
      <form
        @click.prevent="submitEditForm"
        class="mb-desktop-mb-1 categories__edit-form"
      >
        <BaseField class="mb-2" name="name" v-model="name" />
        <BaseField class="mb-1" name="limit" v-model="limit" />
        <BaseButton type="submit" size="full-mob">Edit</BaseButton>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$b: ".categories";

#{$b} {
  display: flex;
  padding: 3rem;
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
