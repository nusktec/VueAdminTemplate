/* eslint-disable */
import Vue from 'vue';
import ShardsVue from 'shards-vue';

import axios from 'axios';
import VueAxios from 'vue-axios';
import vueHeadful from 'vue-headful';
import vueTopProgress from 'vue-top-progress';
import Notifications from 'vue-notification';
import vueCountryRegionSelect from 'vue-country-region-select';

// Styles
import 'bootstrap/dist/css/bootstrap.css';
import '@/scss/shards-dashboards.scss';
import '@/assets/scss/date-range.scss';

// Core
import App from './App.vue';
import router from './router';
import store from './store';

ShardsVue.install(Vue);
Vue.use(VueAxios, axios); //use axios library here
Vue.use(vueHeadful, { component: true }); // use vue-head-full for meta
Vue.use(vueTopProgress); //use top progressbar
Vue.use(Notifications); //use notifications
Vue.use(vueCountryRegionSelect); //use region selection

//Begin configurations
Vue.config.productionTip = false;
Vue.prototype.$eventHub = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
