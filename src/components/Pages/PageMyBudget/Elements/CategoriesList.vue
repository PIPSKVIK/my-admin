<template>
  <div class="categories-list">
    <div class="categories-list__header">
      <span class="categories-list__item">Name</span>
      <span class="categories-list__item">Limit</span>
      <span class="categories-list__item">Priority</span>
    </div>
    <div class="categories-list__body-wrapper">
      <transition-group  name="list" tag="ul">
        <li v-for="c in categories" :key="c.id" class="categories-list__body">
          <span class="categories-list__item s-1">{{ c.name }}</span>
          <span class="categories-list__item s-1">{{ c.limit }}</span>
          <BaseChip :name="c.priority.name" :type="c.priority.value" />
          <div class="categories-list__body-actions" v-if="!disableBtn">
            <BaseButtonIcon class="mr-1" @click.stop="editCategory(c)">
              <BaseTolltip text="edit">
                <BaseIcon svgName="edit" />
              </BaseTolltip>
            </BaseButtonIcon>
            <BaseButtonIcon @click.stop="deleteCategory(c.id)">
              <BaseTolltip text="delete">
                <BaseIcon svgName="delete" />
              </BaseTolltip>
            </BaseButtonIcon>
          </div>
        </li>
      </transition-group>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import { BaseIcon, BaseButtonIcon, BaseTolltip, BaseLoader, BaseChip } from "@/components/Ui";

const emits = defineEmits(["deleteCategory", "editCategory"]);

const props = defineProps({
  categories: {
    type: Array,
    required: true,
  },
  disableBtn: {
    type: Boolean,
    default: false,
  }
});

const editCategory = (id) => {
  emits("editCategory", id)
};
const deleteCategory = (category) => {
  emits("deleteCategory", category)
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
    max-height: 200px;
    overflow: scroll;
  }
  &__body-actions {
    display: flex;
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
