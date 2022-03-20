<template>
  <section class="signup">
    <form class="signup__form" @click.prevent="formSubmit">
      <h2 class="signup__form-title mb-2">Signup</h2>
      <span class="mb-1 p-float-label">
        <InputText id="inputtext" type="text" v-model="email" @click.stop />
        <label for="inputtext">email</label>
      </span>
      <span class="mb-1 p-float-label">
        <InputText
          id="inputtext"
          type="text"
          v-model="password"
          @click.stop
        />
        <label for="inputtext">password</label>
      </span>
      <span class="mb-1 p-float-label">
        <InputText
          id="inputtext"
          type="text"
          v-model="name"
          @click.stop
        />
        <label for="inputtext">name</label>
      </span>
      <Button
        type="submit"
        label="Login"
        class="w-full p-button-outlined p-button-help"
      />
    </form>
  </section>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");
const password = ref("");
const name = ref("");
const formSubmit = () => {
  console.log({
    email: email.value,
    password: password.value,
    name: name.value
  });
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
    min-width: 600px;
    padding: 1rem;
    background-color: var(--color-background-soft);
    border-radius: var(--radius-default);

    @include md-desktop {
      min-width: 100%;
    }
  }
  &__form-title {
    text-align: center;
  }
}
</style>
