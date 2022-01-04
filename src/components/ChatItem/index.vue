<template>
	<div class="chat-item-container">
		<div class="axn-item">
			<div class="img-container">
				<img :src="require(`@/assets/images/profiles/${chatData.imgUrl}.jpeg`)" alt="" />
			</div>
			<div class="info-container">
				<div class="name">{{ chatData.name }}</div>
				<div class="date">{{ chatData.date }}</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		chatData: Object,
	},
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
.axn-item {
	display: flex;
	height: 100px;
	padding: 16px;
	transition: 0.3s all;
	&:hover {
		background-color: rgba($color: rgb(126, 125, 125), $alpha: 0.2);
		border-radius: 10px;
        cursor: pointer;
	}
	.img-container {
		width: 70px;
		height: 70px;
		border-radius: 50%;

		img {
			width: 100%;
			height: 100%;
			object-fit: contain;
			border-radius: inherit;
		}
	}
	.info-container {
		margin: 0 8px;
		height: 100%;
		display: flex;
		justify-content: space-between;
		width: 100%;
		align-items: center;
        flex: 1;
		.name,
		.date {
			color: $color-text;
		}
	}
}
</style>
