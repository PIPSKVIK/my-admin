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
          <BaseLoader class="profile-info__body-loader" :visible="!userInfo" />
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
        <div class="profile-info__footer">
          <BaseButton @click.stop="trigger"> Edit Profile </BaseButton>
        </div>
      </div>
      <div class="profile-page__right">
        <UserProfileActivityTimeline />
      </div>
    </div>
    <BaseLoader full :visible="isLoading" />
    <BaseModal
      :modalShow="isVisible"
      @closeModal="trigger"
      modalSize="md"
      class="profile-page__profile-modal"
    >
      <template #header>
        <h2 class="profile-page__form-title">Edit User Information</h2>
      </template>
      <template #body>
        <form class="profile-page__form">
          <div class="profile-page__form-fields">
            <div class="profile-page__form-fields-left">
              <BaseField
                class="mb-2"
                name="last name"
                v-model="LastName"
                inputSize="0.5"
                placeholder="last name"
              />
              <BaseField
                class="mb-2"
                name="phone"
                v-model="phone"
                inputSize="0.5"
                placeholder="phone"
              />
              <BaseField
                class="mb-2"
                name="description"
                v-model="description"
                inputSize="0.5"
                placeholder="description"
                multiline
              />
            </div>
            <div class="profile-page__form-fields-right">
              <BaseField
                class="mb-2"
                name="country"
                v-model="country"
                inputSize="0.5"
                placeholder="country"
              />
              <BaseField
                class="mb-2"
                name="language"
                v-model="language"
                inputSize="0.5"
                placeholder="language"
              />
              <BaseField
                class="mb-2"
                name="gender"
                v-model="gender"
                inputSize="0.5"
                placeholder="gender"
              />
              <BaseField
                class="mb-1"
                name="website"
                v-model="website"
                inputSize="0.5"
                placeholder="website"
              />
              <BaseDropdown :options="options" @selectedItem="selectedItem" />
            </div>
          </div>
          <BaseButton size="sm" @click.prevent="formSubmit">
            update info
          </BaseButton>
        </form>
      </template>
    </BaseModal>
  </section>
</template>

<script setup>
import { close } from "@/helpers";
import { BaseField, BaseButton, BaseLoader, BaseModal, BaseDropdown } from "@/components/Ui";
import { UserProfileActivityTimeline } from "@/components/UserProfile";
import { AppNavProfileIcon } from "@/components/NavigationMenu";
import { computed, onMounted, ref, watch } from "vue";
import { useStore } from "vuex";
const store = useStore();
const { isVisible, trigger } = close(".profile-page__profile-modal");

const displayName = computed(() => store.state.auth.user?.displayName);
const userInfo = computed(() => store.getters["userInfo/getUserInfo"]);

const isLoading = ref(false);

const editProfileModal = ref(false);
const LastName = ref("");
const phone = ref("");
const language = ref("");
const country = ref("");
const gender = ref("");
const description = ref("");
const website = ref("");
const avatar = ref("");

const options = [
  { url: "https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-3/img/6.60bb3fc7.png", value: 1, name: 'Lol' },
  { url: "https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-3/img/2.80504cd9.png", value: 2, name: 'Kek' },
  { url: "https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-3/img/1.e2938115.png", value: 3, name: 'foo' }
];

function selectedItem(item) {
  avatar.value = item.value
}

watch(userInfo, (value) => {
  LastName.value = value?.LastName;
  phone.value = value?.phone;
  language.value = value?.language;
  country.value = value?.country;
  gender.value = value?.gender;
  description.value = value?.description;
  (website.value = value?.website), (avatar.value = value?.avatar);
});

const formSubmit = async () => {
  const formData = {
    LastName: LastName.value,
    phone: phone.value,
    language: language.value,
    country: country.value,
    gender: gender.value,
    description: description.value,
    website: website.value,
    avatar: avatar.value,
  };
  isLoading.value = true;
  store.dispatch("notification/addSuccessNotification", "Update info");
  try {
    await store.dispatch("userInfo/setUserData", formData);
  } catch (error) {
    store.dispatch(
      "notification/addDangerNotification",
      "Something went wrong"
    );
  } finally {
    isLoading.value = false;
    isVisible.value = false;
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
      position: relative;
      min-height: 262px;
      &-loader {
        position: absolute;
        @include center-abs();
      }
    }
    &__body-item-value {
      color: var(--color-text-soft);
    }

    &__footer {
      padding-top: 2rem;
    }
  }

  &__form {
  }
  &__form-title {
    text-align: center;
    color: var(--color-text-soft);
  }
  &__form-fields {
    display: flex;
  }
  &__form-fields-left {
    flex: 1;
    margin-right: 1rem;
  }
  &__form-fields-right {
    flex: 1;
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
