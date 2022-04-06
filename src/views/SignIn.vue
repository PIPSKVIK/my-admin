<template>
  <section class="signin">
    <form class="signin__form">
      <h1>Welcome to my-admin!👋🏻</h1>
      <p class="mb-2 signin__form-subtitle">
        Please sign-in to your account and start the adventure
      </p>
      <BaseField
        class="mb-2"
        name="email"
        :error="v$.email.$errors.length"
        v-model="v$.email.$model"
        inputSize="1"
        placeholder="email"
      >
        <template #error>
          <div v-for="error of v$.email.$errors" :key="error.$uid">
            {{ error.$message }}
          </div>
        </template>
      </BaseField>
      <BaseField
        class="mb-1"
        name="password"
        :error="v$.password.$errors.length"
        v-model.number="v$.password.$model"
        inputSize="1"
        type="password"
        placeholder="password"
      >
        <template #error>
          <div v-for="error of v$.password.$errors" :key="error.$uid">
            {{ error.$message }}
          </div>
        </template>
      </BaseField>
      <BaseButton class="mb-1" size="full" @click.prevent="formSubmit">
        Sign In
      </BaseButton>
      <div class="signin__redirect">
        <span class="mr-1">New on our platform?</span>
        <router-link class="signin__redirect-link" to="/signup">
          Create an account
        </router-link>
      </div>
    </form>
    <BaseLoader full :visible="isLoading" />
  </section>
</template>

<script setup>
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { ref, reactive } from "vue";
import { BaseField, BaseButton, BaseLoader } from "@/components/Ui";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const state = reactive({
  email: "",
  password: "",
});
const router = useRouter();
const store = useStore();
const isLoading = ref(false);

const rules = {
  email: { required, email },
  password: { required },
};

const v$ = useVuelidate(rules, state);

const formSubmit = async () => {
  v$.value.$validate();
  if (v$.value.$invalid) return;

  isLoading.value = true;
  try {
    await store.dispatch("auth/signin", {
      email: state.email,
      password: state.password,
    });
    isLoading.value = false;
    store.dispatch(
      "notification/addSuccessNotification",
      "You are logged in =)"
    );
    router.push("/");
  } catch (error) {
    store.dispatch("notification/addDangerNotification", "Invalid data");
  } finally {
    v$.value.$reset();
    isLoading.value = false;
    state.email = "";
    state.password = "";
  }
};
</script>

<style lang="scss" scoped>
$b: ".signin";

#{$b} {
  width: 100%;
  height: calc(100vh - 170px);
  display: flex;
  align-items: center;
  justify-content: center;

  &__form {
    min-width: 500px;
    padding: 3rem 2rem;
    background-color: var(--color-background-soft);
    border-radius: var(--radius-default);
    box-shadow: var(--box-shadow-drop-menu);

    @include md-desktop {
      min-width: 100%;
    }
  }
  &__form-subtitle {
    color: var(--color-text-soft);
    font-size: 0.8rem;
  }

  &__redirect {
    text-align: center;
  }
  &__redirect-link {
    text-decoration: none;
    color: var(--btn-color-yellow);
    @include anim-default;
    &:hover {
      color: var(--btn-color-yellow-hover);
      text-decoration: underline;
    }
  }
}
</style>
