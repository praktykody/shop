import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import EditView from '@/views/EditView.vue'
import AboutView from '@/views/AboutView.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/edit/:id', component: EditView },
    { path: '/about', component: AboutView },
  ]
})
