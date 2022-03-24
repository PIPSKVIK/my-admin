import { auth } from "@/firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const state = () => ({
  user: null,
});

const mutations = {
  setUser(state, payload) {
    state.user = payload;
  },
  clearUser(state) {
    state.user = null;
  }
};

const actions = {
  async signup(context, { email, password }) {
    const res = await createUserWithEmailAndPassword(auth, email, password);
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

  async fetchUser ({ commit }) {
    await auth.onAuthStateChanged(user => {
      if (user === null) {
        commit('clearUser')
      } else {
        commit('setUser', user)
        console.log(user);
      }
    })
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
