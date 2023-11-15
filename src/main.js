import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import axios from 'axios';


library.add(faPlusCircle);
library.add(faTimes);


const app = createApp(App);

app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);

app.config.globalProperties.axios = axios;
app.mount('#app');

