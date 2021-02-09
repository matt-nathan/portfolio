import Vue from 'vue';
import Vuex from 'vuex';
import { mutations } from '@/store/mutations';
import { getters } from '@/store/getters';
import { actions } from '@/store/actions';

Vue.use(Vuex);

const state = {
	message: 'Initial State Message',
	messages: [],
};

const store = new Vuex.Store({
	namespaced: true,
	state,
	mutations,
	getters,
	actions,
});

export default store;
