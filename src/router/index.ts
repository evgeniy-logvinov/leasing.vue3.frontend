import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { authService } from '~/services'

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
    path: '/public',
    name: 'public',
    redirect: { name: 'signIn' },
    component: () =>
      import(/* webpackChunkName: "public" */ '../views/Public.vue'),
    children: [
      {
        path: 'signin',
        name: 'signIn',
        component: () =>
          import(/* webpackChunkName: "signIn" */ '../views/SignIn.vue'),
      },
      {
        path: 'signup',
        name: 'signUp',
        component: () =>
          import(/* webpackChunkName: "signUp" */ '../views/SignUp.vue'),
      },
      {
        path: 'reset-required',
        name: 'resetPequired',
        component: () =>
          import(
            /* webpackChunkName: "resetPequired" */ '../views/ResetRequired.vue'
          ),
      },
      {
        path: 'reset-password/:id',
        name: 'resetPassword',
        component: () =>
          import(
            /* webpackChunkName: "resetPassword" */ '../views/ResetPassword.vue'
          ),
      },
      {
        path: 'confirm-email/:id',
        name: 'confirmEmail',
        component: () =>
          import(
            /* webpackChunkName: "confirmEmail" */ '../views/ConfirmEmail.vue'
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

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = [
    '/public/signin',
    '/public/signup',
    '/public/reset-required',
    '/public/reset-password',
    '/public/confirm-email',
  ]
  const authRequired = !publicPages.some((path) => to.path.includes(path))
  const loggedIn = authService.getUser()

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    return next('/public/signin')
  }

  next()
})

export default router
