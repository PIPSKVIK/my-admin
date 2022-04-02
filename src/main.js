import { createApp } from "vue";
import { auth } from "@/firebase/config";

import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";
import App from "./App.vue";
import router from "./router";
import store from "@/store";

import VueTheMask from 'vue-the-mask'

const app = createApp(App);

// __________Import Global SCSS files__________
import "./assets/styles/index.scss";

import "primevue/resources/themes/mdc-dark-indigo/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons

// __________Prime__________
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import SplitButton from "primevue/splitbutton";
import Toast from "primevue/toast";
import Menu from "primevue/menu";
import Badge from "primevue/badge";
import Avatar from "primevue/avatar";

app.component("Button", Button);
app.component("InputText", InputText);
app.component("SplitButton", SplitButton);
app.component("Toast", Toast);
app.component("Menu", Menu);
app.component("Badge", Badge);
app.component("Avatar", Avatar);
// __________Prime__________

app.use(VueTheMask)
app.use(router);
app.use(PrimeVue);
app.use(ToastService);
app.use(store);
let initApp;

auth.onAuthStateChanged(() => {
  if (!initApp) {
    initApp = app.mount("#app");
  }
});
