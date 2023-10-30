import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: () => import("@/components/pages/HomePage.vue"),
    meta: {
      title: "Airsoft Project",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
