import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1b93ff0e = () => interopDefault(import('../pages/afterCourse/index.vue' /* webpackChunkName: "pages/afterCourse/index" */))
const _708a97a2 = () => interopDefault(import('../pages/afterDropdown/index.vue' /* webpackChunkName: "pages/afterDropdown/index" */))
const _82bec83e = () => interopDefault(import('../pages/afterLogin/index.vue' /* webpackChunkName: "pages/afterLogin/index" */))
const _bf6791d8 = () => interopDefault(import('../pages/cart/index.vue' /* webpackChunkName: "pages/cart/index" */))
const _f780a54c = () => interopDefault(import('../pages/courses/index.vue' /* webpackChunkName: "pages/courses/index" */))
const _33d281f1 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/afterCourse",
    component: _1b93ff0e,
    name: "afterCourse"
  }, {
    path: "/afterDropdown",
    component: _708a97a2,
    name: "afterDropdown"
  }, {
    path: "/afterLogin",
    component: _82bec83e,
    name: "afterLogin"
  }, {
    path: "/cart",
    component: _bf6791d8,
    name: "cart"
  }, {
    path: "/courses",
    component: _f780a54c,
    name: "courses"
  }, {
    path: "/",
    component: _33d281f1,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
