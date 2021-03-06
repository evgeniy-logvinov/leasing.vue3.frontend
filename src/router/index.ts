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
        path: 'preference-filter',
        name: 'preference-filter',
        redirect: { name: 'preference-filter-all' },
        component: () =>
          import(
            /* webpackChunkName: "preference-filter" */ '../views/PreferenceFilter.vue'
          ),
        children: [
          {
            path: 'all',
            name: 'preference-filter-all',
            component: () =>
              import(
                /* webpackChunkName: "preference-filter-all" */ '../views/PreferenceFilterAll.vue'
              ),
          },
          {
            path: 'details/:id',
            name: 'preference-filter-details',
            component: () =>
              import(
                /* webpackChunkName: "preference-filter-details" */ '../views/PreferenceFilterDetails.vue'
              ),
          },
        ],
      },
      {
        path: 'heads-of-departments',
        name: 'headsOfDepartments',
        component: () =>
          import(
            /* webpackChunkName: "headsOfDepartments" */ '../views/HeadsOfDepartments.vue'
          ),
      },
      {
        path: 'company-profile',
        name: 'companyProfile',
        component: () =>
          import(
            /* webpackChunkName: "company-profile" */ '../views/CompanyProfile.vue'
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
