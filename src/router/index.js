import { createRouter, createWebHistory } from "vue-router";
import { MyBudgetPage, HomePage, MyNotifications } from "../views";

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
    {
      path: "/my-notifications",
      name: "MyNotifications",
      component: MyNotifications,
    },
  ],
});

export default router;
