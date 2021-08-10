import Vue from "vue";
import VueRouter from "vue-router";
import PreLogin from "../pages/PreLogin";
import ParticipantLogin from "../pages/ParticipantLogin";
import AppraiserLogin from "../pages/AppraiserLogin";
import AppraiserRegister from "../pages/AppraiserRegister";
import TestRegister from "../pages/TestRegister";
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
    component: TestRegister,
  },
  {
    path: "/usability-test/list",
    name: "TestList",
    component: TestList,
  },
  {
    path: "/usability-test/init",
    name: "TestInit",
    component: TestInit,
  },
  {
    path: "/usability-test/results",
    name: "TestResults",
    component: TestResults,
  },
  {
    path: "/usability-test/task/register",
    name: "TaskRegister",
    component: TaskRegister,
  },
  {
    path: "/usability-test/task/list",
    name: "TaskList",
    component: TaskList,
  },
  {
    path: "/usability-test/task/init",
    name: "TaskInit",
    component: TaskInit,
  },
  {
    path: "/usability-test/task/sus",
    name: "TaskForm",
    component: TaskForm,
  },
  {
    path: "/usability-test/task/affect-grid",
    name: "TaskAffectGrid",
    component: TaskAffectGrid,
  },
  {
    path: "/usability-test/task/:order",
    name: "Task",
    component: Task,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
