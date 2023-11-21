import 'font-awesome/css/font-awesome.css'
import Vue from 'vue';

import App from './App.vue';

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router';

Vue.config.productionTip = false

// TEMPORARIO !
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwibmFtZSI6IlBlZHJvIE4gdGVzdGUiLCJlbWFpbCI6InBlZHJvQHRlc3RlMi5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNzAwNTg3NTg3LCJleHAiOjE3MDA4NDY3ODd9.vHPj-pUrM4a6e00gJiRYRWMAa7wMCnSXIlLQOTSqeoQ'

const app = new Vue({
  store,
  router,
  render: h => h(App)
});

app.$mount('#app');
