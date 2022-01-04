<template>
	<div id="app">
		<router-view />
		<NotifyContainer />
	</div>
</template>

<script>
import NotifyContainer from '@/components/Notify/NotifyContainer';

export default {
	name: 'App',
	components: {
		NotifyContainer,
	},
};
</script>

<style>
#app {
	height: 100vh;
	width: 100%;
}
</style>
