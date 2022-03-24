<template>
  <section class="signup">
    <form class="signup__form">
      <h1 class="signup__form-title">Adventure starts here 🚀</h1>
      <p class="signup__form-subtitle mb-2">
        Make your app management easy and fun!
      </p>
      <BaseField class="mb-2" name="UserName" inputSize="1" v-model="name" />
      <BaseField class="mb-2" name="email" inputSize="1" v-model="email" />
      <BaseField
        class="mb-1"
        name="password"
        inputSize="1"
        v-model="password"
        type="password"
      />
      <BaseButton class="mb-2" size="full" @click.prevent="formSubmit">
        Sign Up
      </BaseButton>
      <div class="signup__redirect">
        <span class="mr-1">Already have an account?</span>
        <router-link class="signup__redirect-link" to="/signin"
          >Sign in instead</router-link
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

const name = ref("");
const email = ref("");
const password = ref("");
const store = useStore();
const router = useRouter();
const isLoading = ref(false);

const formSubmit = async () => {
  isLoading.value = true;
  try {
    await store.dispatch("auth/signup", {
      email: email.value,
      password: password.value,
      name: name.value
    });
    isLoading.value = false;
    router.push("/");
  } catch (error) {
    console.log(error);
  }
};
</script>

<style lang="scss" scoped>
$b: ".signup";

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
