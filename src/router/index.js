import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import tasksView from "../views/tasks/View.vue";

// Import the login and register components
import LoginView from "../views/Auth/LoginView.vue";
import RegisterView from "../views/Auth/RegisterView.vue";

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
    // Add routes for login and register
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
  ],
});

export default router;
