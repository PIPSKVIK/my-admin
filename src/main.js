import { createApp } from "vue";
import { createPinia } from "pinia";

import PrimeVue from "primevue/config";
import App from "./App.vue";
import router from "./router";
const app = createApp(App);

// __________Import Global SCSS files__________
import "./styles/index.scss";

import "primevue/resources/themes/md-dark-indigo/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
// import "primeicons/primeicons.css"; //icons

app.use(createPinia());
app.use(router);
app.use(PrimeVue);

// __________Prime__________
import v_button from "primevue/button";
import PInputText from "primevue/inputtext";

app.component("v_button", v_button);
app.component("PInputText", PInputText);
// __________Prime__________

app.mount("#app");
