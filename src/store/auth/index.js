import { auth, db } from "@/firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from "firebase/auth";
import {
  ref,
  set,
  push,
  onValue,
  child,
  get,
  getDatabase
} from "firebase/database";

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
      // add activity timeline list
      const timelineList = ref(db, `users/${user.uid}/activity-tymeline`);
      const newTimeLineItem = push(timelineList);
      set(newTimeLineItem, {
        timeline: new Date().toString(),
      });
      // add emailV-verified status
      await set(ref(db, `users/${user.uid}/emailV-verified`), {
        emailVerified: user.reloadUserInfo.emailVerified
      });
    } else {
      throw new Error("not compleat login");
    }
  },

  async updateName(context, { name }) {
    await updateProfile(auth.currentUser, {
      displayName: name
    })
      .then(res => {
        // console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
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
        localStorage.setItem("login", JSON.stringify(false));
      } else {
        commit("setUser", user);
        commit("changeLogStatus", true);
        localStorage.setItem("login", JSON.stringify(true));
      }
    });
  },

  getUid() {
    const user = auth.currentUser;
    return user ? user.uid : null;
  }
};

const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
