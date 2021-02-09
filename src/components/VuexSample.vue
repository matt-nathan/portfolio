<template>
	<div class="container--message">
		<h1>{{ message }}</h1>
		<v-form @submit.prevent="handleUpdateMessage()">
			<v-text-field
				label="Input"
				v-model="inputText"
				placeholder="Change the message"
			/>
		</v-form>
	</div>
</template>

<script>
export default {
	name: 'VuexSample',
	data() {
		return {
			inputText: null,
		};
	},
	computed: {
		message: function() {
			return this.$store.getters['currentMessage'];
		},
	},
	methods: {
		handleUpdateMessage: function() {
			this.$store.dispatch('setMessage', this.inputText);
		},
	},
};
</script>

<style scoped></style>
