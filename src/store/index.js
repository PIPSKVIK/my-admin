import { createStore } from "vuex";
import auth from "./auth";
import notification from "./notification";

export default createStore({
  modules: {
    auth,
    notification,
  },
});
