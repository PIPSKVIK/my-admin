import { auth, db } from "@/firebase/config";
import { ref, set, push, get, child, remove, update } from "firebase/database";

const state = () => ({
  records: [],
});

const mutations = {};

const actions = {
  async createNewRecord(context, payload) {
    const uid = await context.dispatch("getUid");
    const record = ref(db, `users/${uid}/records`);
    const newRecord = push(record);
    await set(newRecord, payload)
  },

  async removeRecords() {},

  async getRecords() {},

  async getUid() {
    const user = auth.currentUser;
    return user ? user.uid : null;
  },
};

const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
