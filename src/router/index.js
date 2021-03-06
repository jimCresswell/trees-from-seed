import Vue from 'vue'
import VueRouter from 'vue-router'

import _cloneDeep from 'lodash.clonedeep'

import TreesView from '../views/TreesView.vue'
import TreeDetails from '../views/TreeDetails.vue'
import FourOhFour from '../views/FourOhFour.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    alias: '/trees',
    name: 'Trees',
    component: TreesView,
    inMainNav: true,
    icon: {
      name: 'tree-outline',
      colour: 'green'
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    inMainNav: true,
    icon: {
      name: 'information-outline',
      colour: 'orange'
    }
  },
  {
    path: '/trees/:species',
    name: 'TreeDetails',
    component: TreeDetails,
    inMainNav: false
  },
  {
    path: '*',
    name: '404',
    component: FourOhFour,
    inMainNav: false
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

// Export *a copy* of the `routes` object so it can be used to dynamically construct navigation UI.
const routesCopy = _cloneDeep(routes)
export { routesCopy as routes }
