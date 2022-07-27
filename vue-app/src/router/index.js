import { createRouter, createWebHistory } from 'vue-router'
import Body from './../components/Body.vue'
import Login from './../components/Login.vue'
import Books from './../components/Books.vue'
import Book from './../components/Book.vue'
import BooksAdmin from './../components/BooksAdmin.vue'
import BookEdit from './../components/BookEdit.vue'
import Users from './../components/Users.vue'
import User from '../components/UserEdit.vue'

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
  },
  {
      path: '/books',
      name: 'Books',
      component: Books,
  },
  {
      path: '/books/:bookName',
      name: 'Book',
      component: Book,
  },
  {
      path: '/admin/books',
      name: 'BooksAdmin',
      component: BooksAdmin,
  },
  {
      path: '/admin/books/:bookId',
      name: 'BookEdit',
      component: BookEdit,
  },
  {
      path: '/admin/users',
      name: 'Users',
      component: Users,
  },
  {
      path: '/admin/users/:userId',
      name: 'User',
      component: User,
  },

]

const router = createRouter({history: createWebHistory(), routes})
export default router
