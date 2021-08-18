export const user = {
  namespaced: true,

  state: () => ({
    accessToken: null,
  }),

  mutations: {
    setAccessToken(state, payload) {
      state.accessToken = payload;
    },
  },

  actions: {
    setAccessToken({ commit }, payload) {
      commit("setAccessToken", payload.value);
    },
  },

  getters: {
    accessToken(state) {
      return state.accessToken;
    },
  },
};
