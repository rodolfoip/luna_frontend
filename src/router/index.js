import Vue from "vue";
import VueRouter from "vue-router";
import PreLogin from "../pages/PreLogin";
import ParticipantLogin from "../pages/ParticipantLogin";
import AppraiserLogin from "../pages/AppraiserLogin";
import AppraiserRegister from "../pages/AppraiserRegister";
import TestRegister from "../pages/TestRegister";
import TaskRegister from "../pages/TaskRegister";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "PreLogin",
    component: PreLogin,
  },
  {
    path: "/participant",
    name: "ParticipantLogin",
    component: ParticipantLogin,
  },
  {
    path: "/appraiser",
    name: "AppraiserLogin",
    component: AppraiserLogin,
  },
  {
    path: "/appraiser/register",
    name: "AppraiserRegister",
    component: AppraiserRegister,
  },
  {
    path: "/usability-test/register",
    name: "TestRegister",
    component: TestRegister,
  },
  {
    path: "/usability-test/task/register",
    name: "TaskRegister",
    component: TaskRegister,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
