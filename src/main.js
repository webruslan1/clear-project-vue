import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './styles/main.scss';
import VueAxios from 'vue-axios';
import axios from 'axios';
import VueCookie from 'vue-cookie';
// import i18n from './plugins/i18n';
// import { current_language } from './plugins/i18n';
import Notifications from 'vue-notification';
// import VueSocketIOExt from 'vue-socket.io-extended';
// import io from 'socket.io-client';
// const socket = io('https://bananarust.com:2096');
// Vue.use(VueSocketIOExt, socket);
Vue.use(VueAxios, axios);
Vue.use(VueCookie);
Vue.use(Notifications);

if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'http://' + window.location.hostname + ':8080';
} else {
  axios.defaults.baseURL = 'https://' + window.location.hostname;
}
axios.defaults.withCredentials = true;
axios.defaults.params = {};

Vue.config.productionTip = false;

new Vue({
  data() {
    return {
      authUrl: 'https://' + window.location.hostname,
    };
  },
  created() {
    if (process.env.NODE_ENV === 'development') {
      this.authUrl = 'http://' + window.location.hostname + ':8080';
    }
  },
  el: '#app',
  router,
  store,
  render: (h) => h(App),
});
