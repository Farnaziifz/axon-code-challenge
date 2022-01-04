<template>
	<div class="axn_layout_container">
		<ChatBar :ChatList="chatList" />
		<ChatPage />
	</div>
</template>

<script>
import ChatBar from '@/layouts/chatBar.vue';
import ChatPage from '@/layouts/chatPage.vue';
import Chats from '../utils/chatList.json';

export default {
	components: {
		ChatBar,
		ChatPage,
	},
	data() {
		return {
			chatList: Chats,
		};
	},
};
</script>

<style lang="scss" scoped>
.axn_layout_container {
	display: flex;
}
</style>
