import { createWebHashHistory, createRouter } from 'vue-router'


const routes = [
  { path: '/', component: ()=> import('@/views/home/home.vue') },
  { path: '/view', name:'View', component: ()=> import('@/views/detail/detail.vue') },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_APP_BASE_URL),
  routes, 
})

export default router