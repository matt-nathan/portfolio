import requestWrapper from '@/utils/requestWrapper';
import { messagesUrl } from '@/utils/constants';
export const actions = {
	setMessage({ commit }, payload) {
		commit('SET_MESSAGE', payload);
	},
	async getAllMessages({ commit }) {
		const options = {
			url: messagesUrl,
			method: 'get',
		};
		const res = await requestWrapper(options);
		commit('SET_MESSAGES', res.data);
	},
};
