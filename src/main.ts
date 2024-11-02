import "./assets/main.css";

import { createApp } from "vue";
import PrimeVue from "primevue/config";
import Lara from "@primevue/themes/lara";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: Lara,
  },
  ripple: true,
  // unstyled: true,
});
app.mount("#app");
