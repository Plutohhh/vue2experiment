import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about:id',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/topo',
    name: 'topo',
    component: () => import('../views/Topology.vue')
  },
  {
    path: '/father',
    name: 'father',
    component: () => import('../views/slot/Father')
  },
  {
    path: '/countTime',
    name: 'countTime',
    component: () => import('../views/CountTime')
  },
  {
    path: '/textarea',
    name: 'textarea',
    component: () => import('../views/TextArea')
  },
  {
    path: '/readme',
    name: 'readme',
    component: () => import('../views/Readme')
  },
  {
    path: '/readme2',
    name: 'readme2',
    component: () => import('../views/Readme2')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('../views/NotFound')
  }
]

const router = new VueRouter({
  routes
})

export default router
