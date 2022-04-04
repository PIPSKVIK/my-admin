import { auth, db } from "@/firebase/config";
import { ref, set, onValue, get, child } from "firebase/database";

const state = () => ({
  userInfo: null,
  userTimeline: null
});

const mutations = {
  UPDATE_INFO(state, payload) {
    state.userInfo = payload;
  },

  CLEAR_USER_INFO(state) {
    state.userInfo = null;
  },

  GET_USR_TIMELINE(state, payload) {
    state.userTimeline = payload;
  }
};

const actions = {
  async fetchCurrency() {
    const key = "fe5393080dfb3ab3a85106b497f4b44c";
    const res = await fetch(
      `http://api.currencylayer.com/live?access_key=fe5393080dfb3ab3a85106b497f4b44c&currencies=USD,EUR,RUB&format=1`
    );
    return await res.json();
  },

  getUserTimeline(context) {
    auth.onAuthStateChanged(user => {
      const dbRef = ref(db);
      get(child(dbRef, `users/${user.uid}/activity-tymeline`))
        .then(snapshot => {
          if (snapshot.exists()) {
            const arr = Object.keys(snapshot.val()).map(key => ({
              ...snapshot.val()[key],
              id: key
            }));
            context.commit("GET_USR_TIMELINE", arr.reverse());
          } else {
            console.log("No data available");
          }
        })
        .catch(error => {
          console.error(error);
        });
    });
  },

  async setUserData(
    context,
    {
      LastName,
      phone,
      language,
      country,
      gender,
      description,
      website,
      avatar,
      bill
    }
  ) {
    const uid = await context.dispatch("getUid");
    await set(ref(db, `users/${uid}/info`), {
      LastName,
      phone,
      language,
      country,
      gender,
      description,
      website,
      avatar,
      bill,
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
  },

  getUserTimeline(state) {
    return state.userTimeline;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
