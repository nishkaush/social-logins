import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./../Components/Home.vue";
import AppPage from "./../App.vue";
import Success from "./../Components/Success.vue";
import Logout from "./../Components/Logout.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/success", component: Success },
    { path: "/logout", component: Logout }
  ]
});
