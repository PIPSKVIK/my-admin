<template>
  <section class="signin">
    <form class="signin__form" @click.prevent="formSubmit">
      <h2 class="signin__form-title mb-2">SignIn</h2>
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
      <Button
        type="submit"
        label="Login"
        class="w-full p-button-outlined p-button-help"
      />
    </form>
		<Toast />
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useToast } from "primevue/usetoast";

const toast = useToast();
const email = ref("");
const password = ref("");

const formSubmit = () => {
  if (email.value && password.value) {
		console.log({
			email: email.value,
			password: password.value
		});
		toast.add({
			severity: "success",
			summary: "Logged in",
			detail: "You are logged in",
			life: 10000,
		})
	} else {
		toast.add({
			severity: "error",
			summary: "Warn",
			detail: "Something went wrong",
			life: 10000,
		})
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
