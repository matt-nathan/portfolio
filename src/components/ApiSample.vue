<template>
	<div class="container">
		<div v-for="message in messages" v-bind:key="message.subject">
			{{ message.subject }}
		</div>
	</div>
</template>

<script>
import VuexSample from '@/components/VuexSample';
export default {
	name: 'ApiSample',
	components: {
		VuexSample,
	},
	computed: {
		messages: function() {
			return this.$store.getters['currentMessages'];
		},
	},
	mounted() {
		this.$store.dispatch('getAllMessages');
	},
};
</script>

<style scoped></style>
