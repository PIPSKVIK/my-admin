<template>
  <section class="signin">
    <div class="signin__wrap">
      <form class="signin__form">
        <h1>Welcome to xFlow!👋🏻</h1>
        <p class="mb-2 signin__form-subtitle">Please sign-in to your account</p>
        <BaseField
          class="mb-2"
          name="email"
          inputSize="1"
          placeholder="email"
          v-model="email"
        >
        </BaseField>
        <BaseField
          class="mb-1"
          name="password"
          inputSize="1"
          type="password"
          placeholder="password"
          v-model="password"
        >
        </BaseField>
        <BaseButton class="mb-1" size="full" @click.prevent="formSubmit">
          Sign In
        </BaseButton>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { BaseField, BaseButton } from "@/components/Ui";

const email = ref("");
const password = ref("");

const formSubmit = () => {
  console.log("submit");
};
</script>

<style lang="scss" scoped>
$b: ".signin";

#{$b} {
  &__wrap {
    width: 100%;
    height: calc(100vh - 170px);
    display: flex;
    align-items: center;
    justify-content: center;
  }

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
}
</style>
