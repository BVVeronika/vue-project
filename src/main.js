import Vue from 'vue';
import './plugins/axios';
import App from './App.vue';
import router from './router';
import store from './store';
import SvgIcon from '@/components/SvgIcon';

Vue.config.productionTip = false;
Vue.component('svg-icon', SvgIcon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
