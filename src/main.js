import Vue from "vue";
import store from "./store";
import routers from "./router";
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueRouter from "vue-router";
import App from "./App.vue";
import "@/assets/styles.scss";

Vue.use(VueRouter);
Vue.use(VueMaterial);
const router = new VueRouter({
  routes: routers,
  mode: "history",
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
