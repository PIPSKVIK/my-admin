import { auth } from "@/firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

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
      displayName: name
    }).then(() => {
      // console.log('update');
    }).catch((error) => {
      console.log(error);
    })
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
      } else {
        commit("setUser", user);
        commit("changeLogStatus", true);
      }
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
