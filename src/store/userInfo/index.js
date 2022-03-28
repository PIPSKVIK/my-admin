import { auth, db } from "@/firebase/config";
import { ref, set, onValue } from "firebase/database";

const state = () => ({
  userInfo: null
});

const mutations = {
  UPDATE_INFO(state, payload) {
    state.userInfo = payload;
  },

  CLEAR_USER_INFO(state) {
    state.userInfo = null;
  }
};

const actions = {
  async setUserData(
    context,
    { LastName, phone, language, country, gender, description, website }
  ) {
    const uid = await context.dispatch("getUid");
    await set(ref(db, `users/${uid}/info`), {
      LastName,
      phone,
      language,
      country,
      gender,
      description,
      website
    });
  },

  async getUserData(context) {
    await auth.onAuthStateChanged(user => {
      if (user) {
        const info = ref(db, `users/${user.uid}/info`);
        onValue(info, snapshot => {
          const data = snapshot.val();
          context.commit("UPDATE_INFO", data);
        });
      } else {
        context.commit("CLEAR_USER_INFO");
      }
    });
  },

  async getUid() {
    const user = auth.currentUser;
    return user ? user.uid : null;
  }
};

const getters = {
  getUserInfo(state) {
    if (localStorage.getItem("login")) {
      return state.userInfo;
    }
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
