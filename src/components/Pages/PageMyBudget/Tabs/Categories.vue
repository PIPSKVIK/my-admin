<template>
  <div>
    <BaseLoader full :visible="isLoading" />
    <div class="categories">
      <CategoriesCreate
        class="categories__create"
        @createCategory="createCategory"
      />
      <CategoriesList
        class="categories__list"
        :categories="categories"
        @deleteCategory="deleteCategory"
        @editCategory="editCategoryShowModal"
      />
    </div>
    <BaseModal
      :modalShow="isVisible"
      @closeModal="closeModalEditCategory"
      modalSize="sm"
      class="categories__edit-modal"
    >
      <template #header>
        <span>Edit Category {{ currentCategory.name }}</span>
      </template>
      <template #body>
        <form>
          <BaseField
            name="name"
            placeholder="name"
            class="mb-2"
            v-model="currentCategory.name"
          />
          <BaseField
            name="limit"
            placeholder="limit"
            class="mb-1"
            v-model="currentCategory.limit"
            type="number"
          />
          <BaseDropdown
            class="mb-1"
            :options="options"
            :selectItem="currentCategory.priority.name"
            @selectOption="selectOption"
          />
          <BaseButton
            type="submit"
            size="full"
            @click.prevent="editCategoryForm"
          >
            Edit category
          </BaseButton>
        </form>
      </template>
    </BaseModal>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from "vue";
import { useStore } from "vuex";
import {
  CategoriesCreate,
  CategoriesList,
} from "@/components/Pages/PageMyBudget/Elements";
import {
  BaseLoader,
  BaseModal,
  BaseField,
  BaseButton,
  BaseDropdown,
} from "@/components/Ui";
import { close } from "@/helpers";

const { isVisible, trigger } = close(".categories__edit-modal");
const store = useStore();
const isLoading = ref(false);
const categories = computed(() => store.getters["categoryes/getCategories"]);
const showEditModal = ref(false);
const currentCategory = ref("");

const options = ref([
  { name: "important", value: "danger" },
  { name: "middle", value: "info" },
  { name: "low", value: "success" },
  { name: "minor", value: "warning" },
]);

watch(isVisible, (count) => {
  if (!count) {
    getCategory();
  }
});

function selectOption(value) {
  currentCategory.value.priority.name = value.name;
  currentCategory.value.priority.value = value.value;
}

const getCategory = async () => {
  await store.dispatch("categoryes/getCategory");
};

const createCategory = async (formData) => {
  isLoading.value = true;
  try {
    await store.dispatch("categoryes/createCategory", formData);
    store.dispatch(
      "notification/addSuccessNotification",
      "Category has been created"
    );
  } catch (error) {
    store.dispatch(
      "notification/addDangerNotification",
      "Failed to create category"
    );
  } finally {
    isLoading.value = false;
  }
};

const deleteCategory = async (id) => {
  try {
    await store.dispatch("categoryes/removeCategory", id);
    isLoading.value = false;
    store.dispatch(
      "notification/addSuccessNotification",
      "Category has been deleted"
    );
  } catch (error) {
    store.dispatch(
      "notification/addDangerNotification",
      "Failed to delete category"
    );
  } finally {
    isLoading.value = false;
  }
};

const editCategoryShowModal = (category) => {
  currentCategory.value = category;
  isVisible.value = true;
};

const editCategoryForm = async () => {
  isLoading.value = true;
  try {
    await store.dispatch("categoryes/updateCategory", currentCategory.value);
    isVisible.value = false;
    store.dispatch("notification/addSuccessNotification", "Category updated");
  } catch (error) {
    store.dispatch(
      "notification/addDangerNotification",
      "Failed to update category"
    );
  } finally {
    isLoading.value = false;
  }
};

const closeModalEditCategory = () => {
  isVisible.value = false;
};

onMounted(() => {
  getCategory();
});
</script>

<style lang="scss" scoped>
$b: ".categories";

#{$b} {
  display: flex;
  @include md-desktop {
    flex-direction: column;
  }

  &__create {
    margin-right: 1rem;
    width: 40%;
    @include md-desktop {
      margin-right: 0;
      margin-bottom: 1rem;
      width: 100%;
    }
  }

  &__list {
    width: 60%;
    @include md-desktop {
      width: 100%;
    }
  }
}
</style>
