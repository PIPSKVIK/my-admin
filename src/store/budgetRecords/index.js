const state = () => ({
  records: [],
});

const mutations = {};

const actions = {
  async createNewRecord() {},

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
