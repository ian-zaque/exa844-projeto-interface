import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import axios from "axios";

window.Vue = require("vue");

window.axios = require('axios');

// https://exa844-lkaguollhq-rj.a.run.app/hello_http/artist?name=Gojira&option=

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
// Vue.use(axios)

// COMPONENTS
// Vue.component("app-user", require("./components/AppUser.vue").default);
Vue.component("sidebar", require("./components/Sidebar.vue").default);
Vue.component("empty-space", require("./components/EmptySpace.vue").default);
Vue.component("artist-section", require("./components/ArtistSection.vue").default);

Vue.prototype.$eventBus = new Vue();

const app = new Vue({
  router,
  store,
  // axios,
  render: h => h(App)
}).$mount('#app')