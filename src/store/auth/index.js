import { auth, db } from "@/firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { ref, set, onValue, child, get, getDatabase } from "firebase/database";

const state = () => ({
  user: null,
  isLoggedIn: false,
});

const mutations = {
  setUser(state, payload) {
    state.user = payload;
  },
  clearUser(state) {
    state.user = null;
  },
  changeLogStatus(state, payload) {
    state.isLoggedIn = payload;
  },
};

const actions = {
  async getUserInfo(context) {
    const uid = await context.dispatch("getUid");
    const dbRef = ref(getDatabase());
    await get(child(dbRef, `users/${uid}/info`)).then((snapshot) => {
      if (snapshot.exists()) {
        context.commit('setUserInfo', snapshot.val())
      } else {
        console.log("No data available")
      }
    }).catch((err) => {
      console.log(err);
    })
  },

  async signup(context, { email, password }) {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    if (res) {
      context.commit("setUser", res.user);
    } else {
      throw new Error("not compleat signup");
    }
  },

  async signin(context, { email, password }) {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    if (user) {
      context.commit("setUser", user.user);
    } else {
      throw new Error("not compleat login");
    }
  },

  async updateName(context, { name }) {
    await updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then((res) => {
        // console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  async logout(context) {
    await signOut(auth);
    context.commit("setUser", null);
  },

  async fetchUser({ commit }) {
    await auth.onAuthStateChanged((user) => {
      if (user === null) {
        commit("clearUser");
        commit("changeLogStatus", false);
        localStorage.setItem('login', JSON.stringify(false))
      } else {
        commit("setUser", user);
        commit("changeLogStatus", true);
        localStorage.setItem('login', JSON.stringify(true))
      }
    });
  },

  getUid() {
    const user = auth.currentUser;
    return user ? user.uid : null;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
