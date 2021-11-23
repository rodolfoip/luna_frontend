export const user = {
  namespaced: true,

  state: () => ({
    accessToken: null,
    userId: null,
  }),

  mutations: {
    setAccessToken(state, payload) {
      state.accessToken = payload;
    },
    setUserId(state, payload) {
      state.userId = payload;
    },
  },

  actions: {
    setAccessToken({ commit }, payload) {
      commit("setAccessToken", payload.value);
    },
    setUserId({ commit }, payload) {
      commit("setUserId", payload.value);
    },
  },

  getters: {
    accessToken(state) {
      return state.accessToken;
    },
    userId(state) {
      return state.userId;
    },
  },
};
