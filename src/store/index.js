import Vue from "vue";
import Vuex from "vuex";

import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";
import state from "./state.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
	state,
	getters,
	mutations,
	actions,
});
