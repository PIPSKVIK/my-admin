import { auth } from "@/firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";

const state = () => ({
  user: null,
  isLoggedIn: false
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
  }
};

const actions = {
  async signup(context, { email, password, name }) {
    const res = await createUserWithEmailAndPassword(auth, email, password)
    console.log('res', res);
    res.user.updateProfile({ displayName: 'eqweqweqw' })
    if (res) {
      context.commit("setUser", res.user);
    } else {
      throw new Error("not compleat signup");
    }
  },

  async signin(context, { email, password }) {
    const res = await signInWithEmailAndPassword(auth, email, password);
    if (res) {
      context.commit("setUser", res.user);
    } else {
      throw new Error("not compleat login");
    }
  },

  async logout(context) {
    await signOut(auth);
    context.commit("setUser", null);
  },

  async fetchUser({ commit }) {
    await auth.onAuthStateChanged(user => {
      if (user === null) {
        commit("clearUser");
        commit("changeLogStatus", false);
      } else {
        commit("setUser", user);
        commit("changeLogStatus", true);
        console.log(user);
      }
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
