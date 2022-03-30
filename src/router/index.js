import { createRouter, createWebHistory } from "vue-router";
import {
  MyBudgetPage,
  HomePage,
  MyNotifications,
  SignIn,
  SignUp,
  Profile,
  SettingPage
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
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile,
      beforeEnter: (to, from) => {
        if (!localStorage.getItem("login") && to.name !== 'SignIn') {
          return { name: 'SignIn' }
        }
      }
    },
    {
      path: "/setting",
      name: "Setting",
      component: SettingPage
    }
  ]
});

export default router;
