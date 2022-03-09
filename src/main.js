import { createApp } from "vue";
import { createPinia } from "pinia";

import PrimeVue from "primevue/config";
import App from "./App.vue";
import router from "./router";
const app = createApp(App);

import "primevue/resources/themes/bootstrap4-dark-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
// import "primeicons/primeicons.css"; //icons

// import PrimeVue components
import PButton from "primevue/button";
import PInputText from "primevue/inputtext";

app.use(createPinia());
app.use(router);
app.use(PrimeVue);

// init PrimeVue components
app.component("PInputText", PInputText);
app.component("PButton", PButton);

app.mount("#app");
