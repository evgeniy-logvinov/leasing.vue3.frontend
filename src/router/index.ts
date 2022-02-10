import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: 'private' },
  { path: '/about', component: () => import(/* webpackChunkName: "about" */ "../views/About.vue") },
  { path: "/private", name: "Private", component: () => import(/* webpackChunkName: "private" */ "../views/Private.vue") },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import(/* webpackChunkName: "not-found" */ "../views/NotFound404.vue") },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
