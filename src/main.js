import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import loader from './components/loader.vue';

createApp(loader).mount('#load');


setTimeout(() => {
    createApp(App).mount('#app');
    AOS.init();
    Vue.component('font-awesome-icon', FontAwesomeIcon);
  }, 3000); // change the delay as neededs