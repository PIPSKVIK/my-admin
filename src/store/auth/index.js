import { auth, db } from "@/firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from "firebase/auth";
import { ref, set, onValue } from "firebase/database";

const state = () => ({
  user: null,
  isLoggedIn: false,
  userInfo: null,
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
  setUserInfo(state, payload) {
    state.userInfo = payload;
  },
};

const actions = {
  async getUserInfo(context) {
    const uid = await context.dispatch("getUid");
    const info = ref(db, `users/${uid}/info`);
    onValue(info, (snapshot) => {
      const data = snapshot.val();
      context.commit('setUserInfo', data)
    })
  },

  async signup(context, { email, password }) {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const uid = await context.dispatch("getUid");
    set(ref(db, `users/${uid}/info`), {
      profile_picture: "imageUrl",
      bill: "150000"
    });
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
      } else {
        commit("setUser", user);
        commit("changeLogStatus", true);
      }
    });
  },

  getUid() {
    const user = auth.currentUser;
    return user ? user.uid : null;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
