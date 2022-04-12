<template>
  <div class="categories-list">
    <div class="categories-list__header">
      <span class="categories-list__item">Name</span>
      <span class="categories-list__item">Limit</span>
      <span class="categories-list__item">Priority</span>
    </div>
    <div class="categories-list__body-wrapper">
      <transition-group name="list" tag="ul">
        <li
          v-for="c in categories"
          :key="c.id"
          class="categories-list__body"
        >
          <span class="categories-list__item s-1">{{ c.name }}</span>
          <span class="categories-list__item s-1">
            {{ new Intl.NumberFormat().format(c.limit) }}
          </span>
          <BaseChip :name="c.priority.name" :type="c.priority.value" />
          <div class="categories-list__body-actions" v-if="!disableBtn">
            <BaseButtonIcon class="mr-1" @click.stop="editCategory(c)">
              <BaseTolltip text="edit">
                <BaseIcon svgName="edit" />
              </BaseTolltip>
            </BaseButtonIcon>
            <BaseButtonIcon @click.stop="deleteCategory(c)">
              <BaseTolltip text="delete">
                <BaseIcon svgName="delete" />
              </BaseTolltip>
            </BaseButtonIcon>
          </div>
        </li>
      </transition-group>
    </div>
    <BaseModal
      :modalShow="isVisible"
      @closeModal="isVisible = false"
      class="create-category-delete-modal"
    >
      <template #header>
        <h3 class="mb-1 categories-list__modal-header">
          {{ currentDeletecategory.name }}
        </h3>
        <p class="mb-1">Are you sure you want to delete a category?</p>
      </template>
      <template #body>
        <div class="categories-list__modal-btn">
          <BaseButton color="red" @click="deleteCategoryModal">Delete</BaseButton>
          <BaseButton color="green" @click="isVisible = false">Close</BaseButton>
        </div>
      </template>
    </BaseModal>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from "vue";
import {
  BaseIcon,
  BaseButtonIcon,
  BaseTolltip,
  BaseLoader,
  BaseChip,
  BaseModal,
  BaseButton
} from "@/components/Ui";
import { close } from "@/helpers";

const { isVisible, trigger } = close(".create-category-delete-modal");
const emits = defineEmits(["deleteCategory", "editCategory"]);
const currentDeletecategory = ref("");

const props = defineProps({
  categories: {
    type: Array,
    required: true
  },
  disableBtn: {
    type: Boolean,
    default: false
  }
});

const deleteCategoryModal = () => {
  emits("deleteCategory", currentDeletecategory.value.id);
  isVisible.value = false;
}
const editCategory = id => {
  emits("editCategory", id);
};
const deleteCategory = category => {
  isVisible.value = true;
  currentDeletecategory.value = category;
};
</script>

<style lang="scss" scoped>
$b: ".categories-list";

#{$b} {
  border-radius: var(--radius-default);
  padding: 1rem;
  box-shadow: var(--box-shadow-wrapper);
  color: var(--color-white-soft);
  background-color: var(--color-background-soft);

  &__item {
    display: inline-block;
    width: 30%;
  }

  &__header {
    padding-bottom: 0.5rem;
  }

  &__body {
    padding: 0.5rem 0;
    border-bottom: 1px solid var(--color-border);
    position: relative;
  }
  &__body-wrapper {
    padding-top: 1rem;
  }
  &__body-actions {
    display: flex;
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
  }

  &__modal-btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__modal-header {
    color: var(--btn-color-blue);
    text-transform: uppercase;
    font-weight: 600;
  }
}
</style>
