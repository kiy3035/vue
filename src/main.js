import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

import * as CommonFunctions from '@/js/common.js'; // common.js 파일 import

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import axios from 'axios';


library.add(faPlus, faTimes, faVideo, faCheck, faPlay, faComment, faThumbsUp, faCalendar, faUser, faFileLines, faPen, faXmark, faTrashCan, faExclamationTriangle);

const app = createApp(App);

app.use(router);

// common.js에 정의된 모든 함수를 Vue prototype에 추가
for (const key in CommonFunctions) {
  if (Object.prototype.hasOwnProperty.call(CommonFunctions, key)) {
    app.config.globalProperties[key] = CommonFunctions[key];
  }
}

app.component('font-awesome-icon', FontAwesomeIcon);

app.config.globalProperties.axios = axios;
app.mount('#app');

