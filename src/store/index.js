import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import { user } from "./modules/user";
import { test } from "./modules/test";
import { result } from "./modules/result";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  modules: { user, test, result },
});
