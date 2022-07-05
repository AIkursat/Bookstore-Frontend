import { createRouter, createWebHistory } from 'vue-router'
import Body from './../components/Body.vue'
import Login from './../components/Login.vue'

const routes = [
   {
    path: '/', // That's what you'd see in the browser location bar
    name: 'Home', // Because it's home page
    component: Body,    
   },
   {
    path: '/login',
    name: 'Login',
    component: Login,
   }
]

const router = createRouter({history: createWebHistory(), routes})
export default router
