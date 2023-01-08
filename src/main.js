import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './styles/main.scss';
import VueCookie from 'vue-cookie';
import catalog from '@/assets/catalog.json'
import VueResource from 'vue-resource';
import Notifications from 'vue-notification';
Vue.use(VueResource)
Vue.use(VueCookie);
Vue.use(Notifications);


new Vue({
  data() {
    return {
      cards: catalog
    };
  },
  methods: {
    showNotify(type, text, duration) {
      let title =  'Успешно';

      if (type === 'error') {
        title = 'Ошибка';
      } else if (type === 'warn') {
        title = 'Предупреждение';
      } else if (type === 'info') {
        title = 'Информация';
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
