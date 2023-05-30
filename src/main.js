import VueRouter from 'vue-router';
import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';
import router from './router';
import registerComponents from './componentRegisterer';
import './assets/styles/main.scss';

document.title = 'NUCAL | UI as a Service';
Vue.use(VueRouter);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBDI6E75juiAQSmTbPiO2jaNURJcZ74nxs',
  },
  installComponents: true,
});

Vue.config.productionTip = false;
Vue.config.devtools = true;
registerComponents(Vue);

const vue = new Vue({
  router,
  render: (h) => h('router-view'),
});

vue.$mount('#app');
