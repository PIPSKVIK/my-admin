<template>
  <div class="new-entry">
    <div class="new-entry__left">
      <form>
        <BaseDropdown
          :options="categories"
          @selectOption="selectOption"
          :selectItem="state.category"
          class="mb-1"
          :error="selectItemValid"
        />
        <div class="mb-2">
          <BaseRadio
            class="mr-1"
            id="radio-1"
            value="income"
            v-model="state.type"
          >
            income
          </BaseRadio>
          <BaseRadio
            class="mr-1"
            id="radio-2"
            value="outcome"
            v-model="state.type"
          >
            outcome
          </BaseRadio>
        </div>
        <BaseField
          :error="v$.sum.$errors.length"
          v-model="v$.sum.$model"
          name="sum"
          placeholder="sum"
          type="number"
          class="mb-2"
        >
          <template #error>
            <div v-for="error of v$.sum.$errors" :key="error.$uid">
              {{ error.$message }}
            </div>
          </template>
        </BaseField>
        <BaseField
          :error="v$.description.$errors.length"
          v-model="v$.description.$model"
          name="description"
          placeholder="description"
          class="mb-1"
          multiline
        >
          <template #error>
            <div v-for="error of v$.description.$errors" :key="error.$uid">
              {{ `${error.$message} - ${state.description.length}` }}
            </div>
          </template>
        </BaseField>
        <BaseButton
          type="submit"
          size="full"
          @click.prevent="createNewEntry"
        >
          Create
        </BaseButton>
      </form>
    </div>

    <div class="new-entry__right"></div>

    <BaseLoader full :visible="isLoading" />
  </div>
</template>

<script setup>
import useVuelidate from "@vuelidate/core";
import { required, maxLength } from "@vuelidate/validators";
import {
  BaseDropdown,
  BaseRadio,
  BaseField,
  BaseButton,
  BaseLoader,
} from "@/components/Ui";
import { ref, reactive, onMounted, computed, watch } from "vue";
import { useStore } from "vuex";

const store = useStore();
const isLoading = ref(false);
const state = reactive({
  category: "",
  type: "income",
  sum: 1,
  description: ""
});
const rules = {
  sum: { required },
  description: {
    required,
    maxLength: maxLength(40)
  }
};
function selectOption(value) {
  state.category = value.name;
}
const categories = computed(() => store.getters["categoryes/getCategories"]);
const userBill = computed(() => store.getters["userInfo/getUserInfo"]?.bill);
const userInfo = computed(() => store.getters["userInfo/getUserInfo"]);

const v$ = useVuelidate(rules, state);
const selectItemValid = ref(false);
// Pay check
const canCreateRecord = computed(() => {
  if (state.type === "income") {
    return true;
  }
  return +userBill.value >= state.sum;
});

async function createNewEntry() {
  // form validation
  v$.value.$validate();
  state.selectItem === ""
    ? (selectItemValid.value = true)
    : (selectItemValid.value = false);
  if (v$.value.$invalid) return;

  if (canCreateRecord.value) {
    isLoading.value = true;
    try {
      await store.dispatch("budgetRecords/createNewRecord", {
        ...state,
        date: new Date().toJSON()
      });
      const bill =
        state.type === "income"
          ? +userBill.value + +state.sum
          : +userBill.value - +state.sum;

      await store.dispatch("userInfo/setUserData", {
        ...userInfo.value,
        bill
      });
      store.dispatch(
        "notification/addSuccessNotification",
        "New record created! ☺️"
      );
    } catch (error) {
      store.dispatch(
        "notification/addDangerNotification",
        "New record not created!"
      );
    } finally {
      v$.value.$reset();
      isLoading.value = false;
      state.category = '';
      state.type = "income";
      state.sum = 1;
      state.description = "";
    }


  } else {
    store.dispatch(
      "notification/addDangerNotification",
      `Not enough money ${state.sum - +userBill.value}`
    );
  }
}

onMounted(() => {
  store.dispatch("categoryes/getCategory");
});
</script>

<style lang="scss" scoped>
$b: ".new-entry";

#{$b} {
  display: flex;
  width: 100%;
  @include md-desktop {
    flex-direction: column;
  }

  &__left {
    width: 40%;
    margin-right: 1rem;
    border-radius: var(--radius-default);
    padding: 1rem;
    box-shadow: var(--box-shadow-wrapper);
    color: var(--color-white-soft);
    background-color: var(--color-background-soft);

    @include md-desktop {
      margin-right: 0;
      margin-bottom: 1rem;
      width: 100%;
    }
  }

  &__right {
    width: 60%;
    border-radius: var(--radius-default);
    padding: 1rem;
    box-shadow: var(--box-shadow-wrapper);
    color: var(--color-white-soft);
    background-color: var(--color-background-soft);

    @include md-desktop {
      width: 100%;
    }
  }
}
</style>
