import { createRouter, createWebHistory } from "vue-router";
import Team from "../components/Team.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "team",
      component: Team,
    },
    {
      path: "/champions",
      name: "champions",
      component: () => import("../views/ChampionsView.vue"),
    },
    {
      path: "/origins",
      name: "origins",
      component: () => import("../views/OriginsView.vue"),
    },
    {
      path: "/classes",
      name: "classes",
      component: () => import("../views/ClassesView.vue"),
    },
  ],
});

export default router;
