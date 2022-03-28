<template>
  <section class="profile-page">
    <h2 class="mb-2">Progile</h2>
    <div class="profile-page__wrapper">
      <div class="profile-page__left profile-info">
        <div class="profile-info__header">
          <AppNavProfileIcon class="mb-1" profile />
          <p>{{ displayName }}</p>
        </div>
        <div class="profile-info__body">
          <h3>Details:</h3>
          <ul class="profile-info__body-list">
            <li
              v-for="(item, key) in userInfo"
              :key="key"
              class="profile-info__body-item"
            >
              <span class="profile-info__body-item-title s-1">{{ key }}: </span>
              <span class="profile-info__body-item-value s-1">
                {{ item || "..." }}
              </span>
            </li>
          </ul>
        </div>
        <div class="profile-info__footer"></div>
      </div>
      <div class="profile-page__right profile-form">
        <form>
          <BaseField
            class="mb-2"
            name="last name"
            v-model="LastName"
            inputSize="0.5"
            :placeholder="userInfo?.LastName || '...'"
          />
          <BaseField
            class="mb-2"
            name="phone"
            v-model="phone"
            inputSize="0.5"
            :placeholder="userInfo?.phone || '...'"
          />
          <BaseField
            class="mb-2"
            name="language"
            v-model="language"
            inputSize="0.5"
            :placeholder="userInfo?.language || '...'"
          />
          <BaseField
            class="mb-2"
            name="country"
            v-model="country"
            inputSize="0.5"
            :placeholder="userInfo?.country || '...'"
          />
          <BaseField
            class="mb-2"
            name="gender"
            v-model="gender"
            inputSize="0.5"
            :placeholder="userInfo?.gender || '...'"
          />
          <BaseField
            class="mb-2"
            name="description"
            v-model="description"
            inputSize="0.5"
            :placeholder="userInfo?.description || '...'"
          />
          <BaseField
            class="mb-2"
            name="website"
            v-model="website"
            inputSize="0.5"
            :placeholder="userInfo?.website || '...'"
          />
          <BaseButton size="full" @click.prevent="formSubmit">
            update info
          </BaseButton>
        </form>
      </div>
    </div>
    <BaseLoader full :visible="isLoading" />
  </section>
</template>

<script setup>
import { BaseField, BaseButton, BaseLoader } from "@/components/Ui";
import { AppNavProfileIcon } from "@/components/NavigationMenu";
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
const store = useStore();

const displayName = computed(() => store.state.auth.user?.displayName);
const userInfo = computed(() => store.getters["userInfo/getUserInfo"]);

const isLoading = ref(false);

const LastName = ref(userInfo.value?.LastName);
const phone = ref(userInfo.value?.phone || "");
const language = ref(userInfo.value?.language || "");
const country = ref(userInfo.value?.country || "");
const gender = ref(userInfo.value?.gender || "");
const description = ref(userInfo.value?.description || "");
const website = ref(userInfo.value?.website || "");

const formSubmit = async () => {
  const formData = {
    LastName: LastName.value,
    phone: phone.value,
    language: language.value,
    country: country.value,
    gender: gender.value,
    description: description.value,
    website: website.value,
  };
  isLoading.value = true;
  store.dispatch("notification/addSuccessNotification", "add info");
  try {
    await store.dispatch("userInfo/setUserData", formData);
  } catch (error) {
    store.dispatch(
      "notification/addDangerNotification",
      "Something went wrong"
    );
  } finally {
    isLoading.value = false;
  }
};

const getUserIngo = async () => {
  await store.dispatch("userInfo/getUserData");
};
onMounted(() => {
  getUserIngo();
});
</script>

<style lang="scss" scoped>
$b: ".profile-page";

#{$b} {
  &__wrapper {
    display: flex;
  }
  .profile-info {
    min-width: 472px;
    padding: 1rem;
    margin-right: 1rem;
    background-color: var(--color-background-soft);
    box-shadow: var(--box-shadow-drop-menu);
    border-radius: var(--radius-default);

    &__header {
      border-bottom: 1px solid var(--color-border);
      padding-bottom: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &__header-title {
      margin-bottom: 1rem;
    }

    &__body {
      padding-top: 1rem;
      border-bottom: 1px solid var(--color-border);
      padding-bottom: 1rem;
    }
    &__body-item-value {
      color: var(--color-text-soft);
    }

    &__footer {
      padding-top: 2rem;
    }
  }

  .profile-form {
    min-width: 472px;
    padding: 2rem;
    background-color: var(--color-background-soft);
    box-shadow: var(--box-shadow-drop-menu);
    border-radius: var(--radius-default);
  }
}
</style>
