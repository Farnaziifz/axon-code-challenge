import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/login',
		name: 'login',
		meta: {
			title: 'Login',
		},
		component: () => import('@/views/Login/index.vue'),
	},

	{
		path: '/',
		name: '/layout',
		redirect: '/chat',
		component: () => import('@/layouts/index.vue'),
		children: [
			{
				path: '/chat/:id?',
				name: 'chat',
				meta: {
					title: 'Chat',
				},
				component: () => import('@/views/Chat/index.vue'),
			},
		],
	},
];

const router = new VueRouter({
	mode: 'history',
	routes,
});

export default router;
