import Vue from "vue";
import VueRouter from "vue-router";
import PreLogin from "../pages/PreLogin";
import ParticipantLogin from "../pages/ParticipantLogin";
import AppraiserLogin from "../pages/AppraiserLogin";
import AppraiserRegister from "../pages/AppraiserRegister";
import TestForm from "../pages/TestForm";
import TaskRegister from "../pages/TaskRegister";
import TestList from "../pages/TestList";
import TaskList from "../pages/TaskList";
import TestResults from "../pages/TestResults";
import TestInit from "../pages/TestInit";
import TaskInit from "../pages/TaskInit";
import TaskForm from "../pages/TaskForm";
import TaskAffectGrid from "../pages/TaskAffectGrid";
import Task from "../pages/Task";

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
    component: TestForm,
  },
  {
    path: "/usability-test/:id/edit",
    name: "TestEdit",
    component: TestForm,
  },
  {
    path: "/usability-test/list",
    name: "TestList",
    component: TestList,
  },
  {
    path: "/participant/test/:id/init",
    name: "TestInit",
    component: TestInit,
  },
  {
    path: "/usability-test/:id/results",
    name: "TestResults",
    component: TestResults,
  },
  {
    path: "/usability-test/:id/task/register",
    name: "TaskRegister",
    component: TaskRegister,
  },
  {
    path: "/usability-test/:id/task/edit/:order",
    name: "TaskEdit",
    component: TaskRegister,
  },
  {
    path: "/usability-test/:id/task/list",
    name: "TaskList",
    component: TaskList,
  },
  {
    path: "/participant/test/:id/task/init/:order",
    name: "TaskInit",
    component: TaskInit,
  },
  {
    path: "/participant/test/:id/task/sus",
    name: "TaskForm",
    component: TaskForm,
  },
  {
    path: "/participant/test/:id/task/affect-grid",
    name: "TaskAffectGrid",
    component: TaskAffectGrid,
  },
  {
    path: "/participant/test/:id/task/:order",
    name: "Task",
    component: Task,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
