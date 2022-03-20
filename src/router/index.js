import { createRouter, createWebHistory } from "vue-router";
import {
  MyBudgetPage,
  HomePage,
  MyNotifications,
  SignIn,
  SignUp
} from "../views";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage
    },
    {
      path: "/my-budget",
      name: "MyBudget",
      component: MyBudgetPage
    },
    {
      path: "/my-notifications",
      name: "MyNotifications",
      component: MyNotifications
    },
    {
      path: "/signin",
      name: "SignIn",
      component: SignIn
    },
    {
      path: "/signup",
      name: "SignUp",
      component: SignUp
    }
  ]
});

export default router;
