import vuePersianFilters from 'vue-persian-filters';
import velocity from 'velocity-animate';
import Notifications from 'vue-notification';
// import Badge from '@/elements/Badge/Badge.vue';

const GlobalComponents = {
	// use packages
	install(Vue) {
		Vue.use(Notifications, {
			velocity,
		});
		Vue.use(vuePersianFilters);
		// Vue.component('bmn-badge', Badge);
	},
};

export default GlobalComponents;
