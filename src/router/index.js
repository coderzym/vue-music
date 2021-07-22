import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../views/home/home.vue"),
    meta: {
      title: "首页",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
