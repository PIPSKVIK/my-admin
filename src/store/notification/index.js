import { generatedRandomId } from "@/helpers/randomId";

const state = () => ({
  notifications: []
});

const mutations = {
  ADD_NOTIFICATION: (state, value) => state.notifications.push(value),
  REMOVE_NOTIFICATION: (state, removeId) =>
    (state.notifications = state.notifications.filter(
      ({ id }) => id !== removeId
    ))
};

const actions = {
  addNotification(
    { commit },
    { message, type, autoDelete = true, timeout = 3000 }
  ) {
    const id = generatedRandomId();

    commit("ADD_NOTIFICATION", {
      id,
      message,
      type,
      autoDelete
    });

    if (autoDelete) {
      setTimeout(() => commit("REMOVE_NOTIFICATION", id), timeout);
    }
  },

	addSuccessNotification({ dispatch }, message) {
    dispatch('addNotification', {
      type: 'success',
      message,
    });
  },

	addWarningNotification({ dispatch }, message) {
    dispatch('addNotification', {
      type: 'warning',
      message,
    });
  },

  addDangerNotification({ dispatch }, message) {
    dispatch('addNotification', {
      type: 'danger',
      message,
    });
  },

	removeNotification({ commit }, id) {
    commit('REMOVE_NOTIFICATION', id);
  },
};


export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
