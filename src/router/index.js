import { createRouter, createWebHistory } from "vue-router";
import { MyBudgetPage, HomePage } from "../views";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage,
    },
    {
      path: "/my-budget",
      name: "MyBudget",
      component: MyBudgetPage,
    },
  ],
});

export default router;
