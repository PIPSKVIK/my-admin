import { auth, db } from "@/firebase/config";
import { ref, set, push, get, child, remove, update } from "firebase/database";

const state = () => ({
  categories: [],
});

const mutations = {
  SET_CATEGORY(state, payload) {
    state.categories = payload;
  },
};

const actions = {
  async createCategory(context, { name, limit, priority }) {
    const uid = await context.dispatch("getUid");
    const category = ref(db, `users/${uid}/categories`);
    const newCategory = push(category);
    await set(newCategory, {
      name,
      limit,
      priority,
    });
    await context.dispatch("getCategory");
  },

  async getCategory(context) {
    await auth.onAuthStateChanged((user) => {
      const dbRef = ref(db);
      get(child(dbRef, `users/${user.uid}/categories`)).then((snapshot) => {
        if (snapshot.exists()) {
          const arr = Object.keys(snapshot.val()).map((key) => ({
            ...snapshot.val()[key],
            id: key,
          }));
          context.commit("SET_CATEGORY", arr.reverse());
        } else {
          context.commit("SET_CATEGORY", []);
        }
      });
    });
  },

  async removeCategory(context, id) {
    const uid = await context.dispatch("getUid");
    await remove(ref(db, `users/${uid}/categories/${id}`))
    await context.dispatch("getCategory");
  },

  async updateCategory(context, updateValue) {
    const uid = await context.dispatch("getUid");
    update(ref(db, `users/${uid}/categories/${updateValue.id}`), {
      name: updateValue.name,
      limit: updateValue.limit,
      priority: updateValue.priority
    });
    await context.dispatch("getCategory");
  },

  async getUid() {
    const user = auth.currentUser;
    return user ? user.uid : null;
  },
};

const getters = {
  getCategories(state) {
    return state.categories;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
