import Vue from "vue";
import VueRouter from "vue-router";
import PreLogin from "../pages/PreLogin";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "PreLogin",
    component: PreLogin,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
