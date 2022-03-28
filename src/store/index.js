import { createStore } from "vuex";
import auth from "./auth";
import notification from "./notification";
import userInfo from "./userInfo";

export default createStore({
  modules: {
    auth,
    notification,
    userInfo,
  },
});
