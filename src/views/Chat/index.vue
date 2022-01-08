<template>
	<div class="chat-page-container">
		<p>{{ this.$route.params.id }}</p>
	</div>
</template>

<script>
import ChatData from '../../utils/chatData.json';

export default {
	name: 'chatPage',
	data() {
		return {
			chatData: null,
		};
	},
	created() {
		this.getData();
	},
	watch: {
		'$route.params.id': {
			handler: function() {
				this.getData();
			},
		},
	},
	methods: {
		getData() {
			this.chatData = ChatData.find((item) => (item.id = this.$route.params.id));
			console.log(this.chatData);
		},
	},
};
</script>
