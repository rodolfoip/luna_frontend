export const result = {
  namespaced: true,

  state: () => ({
    resultSelected: null,
  }),

  mutations: {
    setResult(state, payload) {
      state.resultSelected = payload;
    },
  },

  actions: {
    setResult({ commit }, payload) {
      commit("setResult", payload.value);
    },
  },

  getters: {
    resultSelected(state) {
      return state.resultSelected;
    },
  },
};
