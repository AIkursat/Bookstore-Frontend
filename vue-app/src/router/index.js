import { createRouter, createWebHistory } from 'vue-router'
import BodyPart from './../components/BodyPart'

const routes = [
   {
    path: '/', // That's what you'd see in the browser location bar
    name: 'Home', // Because it's home page
    component: BodyPart,    
   }
]

const router = createRouter({history: createWebHistory(), routes})
export default router
