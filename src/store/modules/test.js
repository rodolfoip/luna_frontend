export const test = {
  namespaced: true,

  state: () => ({
    testSelected: null,
  }),

  mutations: {
    setTest(state, payload) {
      state.testSelected = payload;
    },
  },

  actions: {
    setTest({ commit }, payload) {
      commit("setTest", payload.value);
    },
  },

  getters: {
    testSelected(state) {
      return state.testSelected;
    },
  },
};
