import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "Home",
      component: HomePage,
    },
  ],
});

// import { RouterView } from "vue-router";
{
  /* <RouterView /> */
}

export default router;
