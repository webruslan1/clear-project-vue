import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './styles/main.scss';
// import VueAxios from 'vue-axios';
import axios from 'axios';
import VueCookie from 'vue-cookie';
import catalog from '@/assets/catalog.json'
import VueResource from 'vue-resource';
// import i18n from './plugins/i18n';
// import { current_language } from './plugins/i18n';
import Notifications from 'vue-notification';
// import VueSocketIOExt from 'vue-socket.io-extended';
// import io from 'socket.io-client';
// const socket = io('https://bananarust.com:2096');
// Vue.use(VueSocketIOExt, socket);
Vue.use(VueResource)
// Vue.use(VueAxios, axios);
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
      cards: catalog
    };
  },
  created() {
    if (process.env.NODE_ENV === 'development') {
      this.authUrl = 'http://' + window.location.hostname + ':8080';
    }
  },
  methods: {
    showNotify(type, text, duration) {
      let title = this.current_language === 'en' ? 'Success' : 'Успешно';

      if (type === 'error') {
        title = this.current_language === 'en' ? 'Error' : 'Ошибка';
      } else if (type === 'warn') {
        title = this.current_language === 'en' ? 'Warning' : 'Предупреждение';
      } else if (type === 'info') {
        title = this.current_language === 'en' ? 'Information' : 'Информация';
      }

      if (this.$cookie.get('sound') == 1) {
        this.playSound('notification');
      }
      this.$notify({
        title: title,
        type,
        text: `<p class="notif-text">${text}</p>`,
        ignoreDuplicates: false,
        duration,
        speed: 1000,
        width: 300,
      });
    },
    playSound(sound) {
      const a = new Audio(''.concat('/sounds/').concat(sound, '.mp3'));
      try {
        (a.volume = 0.2), a.play();
      } catch (n) {
        console.log(n);
      }
    },
  },
  el: '#app',
  router,
  store,
  render: (h) => h(App),
});
