<template>
  <div class="new-entry">
    <div class="new-entry__left">
      <form>
        <BaseDropdown
          :options="categories"
          @selectOption="selectOption"
          :selectItem="state.selectItem"
          class="mb-1"
          :error="selectItemValid"
        />
        <div class="mb-2">
          <BaseRadio
            class="mr-1"
            id="radio-1"
            value="income"
            v-model="state.facilities"
          >
            income
          </BaseRadio>
          <BaseRadio
            class="mr-1"
            id="radio-2"
            value="outcome"
            v-model="state.facilities"
          >
            outcome
          </BaseRadio>
        </div>
        <BaseField
          v-model="state.sum"
          name="sum"
          placeholder="sum"
          type="number"
          class="mb-2"
        >
        </BaseField>
        <BaseField
          v-model="state.description"
          name="description"
          placeholder="description"
          class="mb-1"
          multiline
        ></BaseField>
				<BaseButton type="submit" size="full" @click.prevent="createNewEntry">
					Create
				</BaseButton>
      </form>
    </div>
		<!-- RIGHT -->
		<div class="new-entry__right">
			<code>
				<!-- {{ userInfo }} -->
			</code>
		</div>
  </div>
</template>

<script setup>
import { BaseDropdown, BaseRadio, BaseField, BaseButton } from "@/components/Ui";
import { ref, reactive, onMounted, computed, watch } from "vue";
import { useStore } from "vuex";

const state = reactive({
  selectItem: "",
  facilities: "income",
  sum: 1,
  description: "",
});
const selectItemValid = ref(false);
const store = useStore();
// const selectItem = ref("");
const categories = computed(() => store.getters["categoryes/getCategories"]);
const userBill = computed(() => store.getters["userInfo/getUserInfo"]?.bill);

function selectOption(value) {
  state.selectItem = value.name;
}
function createNewEntry() {
  state.selectItem === '' ? selectItemValid.value = true : selectItemValid.value = false;

  if (userBill.value > 0) {
    console.log('go');
  } else {
    console.log('no');
  }
}

onMounted(() => {
	store.dispatch("categoryes/getCategory");
})
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
