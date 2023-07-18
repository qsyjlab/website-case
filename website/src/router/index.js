import { createWebHashHistory, createRouter } from 'vue-router'


const routes = [
  { path: '/', component: ()=> import('@/views/home/home.vue') },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes, 
})

export default router