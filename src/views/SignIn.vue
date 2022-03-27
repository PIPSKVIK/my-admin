<template>
  <section class="signin">
    <form class="signin__form">
      <h1>Welcome to my-admin!👋🏻</h1>
      <p class="mb-2 signin__form-subtitle">
        Please sign-in to your account and start the adventure
      </p>
      <BaseField class="mb-2" name="email" v-model="email" inputSize="1" />
      <BaseField
        class="mb-1"
        name="password"
        v-model="password"
        inputSize="1"
        type="password"
      />
      <BaseButton class="mb-1" size="full" @click.prevent="formSubmit">
        Sign In
      </BaseButton>
      <div class="signin__redirect">
        <span class="mr-1">New on our platform?</span>
        <router-link class="signin__redirect-link" to="/signup"
          >Create an account</router-link
        >
      </div>
    </form>
    <BaseLoader full :visible="isLoading" />
  </section>
</template>

<script setup>
import { ref } from "vue";
import { BaseField, BaseButton, BaseLoader } from "@/components/Ui";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const router = useRouter();
const store = useStore();
const isLoading = ref(false);

const formSubmit = async () => {
  isLoading.value = true;
  try {
    await store.dispatch("auth/signin", {
      email: email.value,
      password: password.value
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
    isLoading.value = false;
    email.value = "";
    password.value = "";
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
