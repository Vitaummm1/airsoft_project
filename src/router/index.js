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
  {
    path: "/operator",
    name: "OperatorPage",
    component: () => import("@/components/pages/OperatorPage.vue"),
  },
  {
    path: "/group",
    name: "GroupPage",
    component: () => import("@/components/pages/GroupPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
