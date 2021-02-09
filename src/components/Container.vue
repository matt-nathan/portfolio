<template>
	<div class="container">
		<VuexSample />
		<ApiSample />
	</div>
</template>

<script>
import VuexSample from '@/components/VuexSample';
import ApiSample from '@/components/ApiSample';
export default {
	name: 'Container',
	components: {
		VuexSample,
		ApiSample,
	},
};
</script>

<style scoped></style>
