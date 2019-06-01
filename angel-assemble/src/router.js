import Vue from 'vue'
import Router from 'vue-router'

// import Home from './views/Home.vue'
// import Profile from './views/Profile.vue'
// import Auth from './views/Auth.vue'
// import Protected from './views/Protected.vue'

import Home from './components/Home'
import Profile from './components/Profile'
import Auth from './components/Auth'
import Protected from './components/Protected'
import Disaster from './components/Disaster'
Vue.use(Router)

// export default new Router({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: Home
//     },
//     {
//       path: '/auth',
//       name: 'about',
//       component: Auth
//     },
//     {
//       path: '/protected',
//       name: 'Protected',
//       component: Protected,
//       meta: { requiresAuth: true}
//     },
//     {
//       path: '/profile',
//       name: 'profile',
//       component: Profile,
//       meta: { requiresAuth: true}
//     }
//   ]
// })

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/auth',
    name: 'about',
    component: Auth
  },
  {
    path: '/protected',
    name: 'Protected',
    component: Protected,
    meta: { requiresAuth: true}
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta: { requiresAuth: true}
  },
  {
    path: '/disaster',
    name: 'disaster',
    component: Disaster
  }
]

const router = new Router({
  routes
})

router.beforeResolve((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    let user;
    Vue.prototype.$Amplify.Auth.currentAuthenticatedUser().then(data => {
      if (data && data.signInUserSession) {
        user = data;
      }
      next()
    }).catch((e) => {
      next({
        path: '/auth'
      });
    });
  }
  next()
})

export default router