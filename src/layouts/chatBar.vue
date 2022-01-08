<template>
	<div class="axn-chat-bar-container">
		<div class="axn-item-container">
			<ChatItem
				v-for="item in ChatList"
				:key="item.id"
				:chatData="item"
				@click.native="goToSingle(item.id)"
			/>
		</div>
	</div>
</template>
<script>
import ChatItem from '../components/ChatItem/index.vue';
export default {
	props: {
		ChatList: Array,
	},
	components: {
		ChatItem,
	},
	methods: {
		goToSingle(id) {
			this.$router.push({
				name: 'chat',
				params: {
					id: id,
				},
			});
		},
	},
};
</script>
<style lang="scss" scoped>
@import '../assets/scss/variables.scss';
.axn-chat-bar-container {
	width: 800px;
	height: 100vh;
	background-color: $color-primary;
	.axn-item-container {
		width: 100%;
	}
}
</style>
