import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import tasksView from "../views/tasks/View.vue";
import taskCreate from "../views/tasks/Create.vue";
import taskedit from "../views/tasks/edit.vue";

import LoginView from "../views/Auth/LoginView.vue";
import RegisterView from "../views/Auth/RegisterView.vue";

function islogin() {
  if (!localStorage.getItem("token")) {
    return true;
  } else {
    return "/tasks";
  }

}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/tasks",
      name: "tasks",
      component: tasksView,
    },
    {
      path: "/tasks/Create",
      name: "taskCreate",
      component: taskCreate,
    },
    {
      path: "/tasks/:id/edit",
      name: "taskedit",
      component: taskedit,
    },

    {
      path: "/login",
      name: "login",
      component: LoginView,
      beforeEnter: [islogin],
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
      beforeEnter: [islogin],
    },
  ],
});

export default router;
