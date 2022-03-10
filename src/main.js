import { createApp } from "vue";
import { createPinia } from "pinia";

import PrimeVue from "primevue/config";
import ToastService from 'primevue/toastservice';
import App from "./App.vue";
import router from "./router";
const app = createApp(App);

// __________Import Global SCSS files__________
import "./styles/index.scss";

import "primevue/resources/themes/md-dark-indigo/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons


app.use(createPinia());
app.use(router);
app.use(PrimeVue);
app.use(ToastService);

// __________Prime__________
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import SplitButton from 'primevue/splitbutton';
import Toast from 'primevue/toast';

app.component("Button", Button);
app.component("InputText", InputText);
app.component("SplitButton", SplitButton);
app.component("Toast", Toast);
// __________Prime__________

app.mount("#app");
