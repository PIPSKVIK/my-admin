import { createRouter, createWebHistory } from "vue-router";
import {
  HomePage,
  MyNotifications,
  SignIn,
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
      path: "/profile",
      name: "Profile",
      component: Profile,
    },
    {
      path: "/setting",
      name: "Setting",
      component: SettingPage
    }
  ]
});

export default router;
