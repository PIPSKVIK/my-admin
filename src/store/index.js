import { createStore } from "vuex";
import auth from "./auth";
import notification from "./notification";
import userInfo from "./userInfo";
import budget from "./budget";
import categoryes from "./categoryes";
import budgetRecords from "./budgetRecords";

export default createStore({
  modules: {
    auth,
    notification,
    userInfo,
    budget,
    categoryes,
    budgetRecords,
  },
});
