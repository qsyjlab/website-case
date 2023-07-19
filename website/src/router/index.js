import { createWebHashHistory, createRouter } from 'vue-router'


const routes = [
  { path: '/', component: ()=> import('@/views/home/home.vue') },
  { path: '/view', name:'View', component: ()=> import('@/views/detail/detail.vue') },
]

const router = createRouter({
  history: createWebHashHistory('/dist'),
  routes, 
})

export default router