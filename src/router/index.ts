import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/private' },
  {
    path: '/about',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/private',
    name: 'private',
    redirect: { name: 'users' },
    component: () =>
      import(/* webpackChunkName: "private" */ '../views/Private.vue'),
    children: [
      {
        path: 'users',
        name: 'users',
        component: () =>
          import(/* webpackChunkName: "users" */ '../views/Users.vue'),
      },
      {
        path: 'filter',
        name: 'filter',
        component: () =>
          import(/* webpackChunkName: "filter" */ '../views/Filter.vue'),
      },
      {
        path: 'employees',
        name: 'employees',
        component: () =>
          import(/* webpackChunkName: "employees" */ '../views/Users.vue'),
      },
      {
        path: 'company-profile',
        name: 'companyProfile',
        component: () =>
          import(
            /* webpackChunkName: "company-profile" */ '../views/Users.vue'
          ),
      },
      {
        path: 'orders',
        name: 'orders',
        redirect: { name: 'all' },
        component: () =>
          import(/* webpackChunkName: "orders" */ '../views/OrdersPage.vue'),
        children: [
          {
            path: 'all',
            name: 'all',
            component: () =>
              import(
                /* webpackChunkName: "orders-all" */ '../views/OrdersAll.vue'
              ),
          },
          {
            path: 'details/:id',
            name: 'details',
            component: () =>
              import(
                /* webpackChunkName: "orders-details" */ '../views/OrdersDetails.vue'
              ),
          },
        ],
      },
      {
        path: 'statistics',
        name: 'statistics',
        component: () =>
          import(
            /* webpackChunkName: "statistics" */ '../views/Statistics.vue'
          ),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () =>
      import(/* webpackChunkName: "not-found" */ '../views/NotFound404.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from) => {
  console.log(to, from)
  // ...
  // explicitly return false to cancel the navigation
  return true
})

export default router
