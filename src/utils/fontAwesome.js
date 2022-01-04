import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUserSecret, faTimesCircle, faBell, faTimes } from '@fortawesome/free-solid-svg-icons';

library.add([faUserSecret, faTimesCircle, faBell, faTimes]);

Vue.component('font-awesome-icon', FontAwesomeIcon);
