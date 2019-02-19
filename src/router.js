import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Books from '@/components/Books';
import SignIn from '@/components/SignIn';
import SignUp from '@/components/SignUp';
import Profile from '@/components/Profile';
import Logout from '@/components/Logout';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/books',
      name: 'books',
      component: Books
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout
    }
  ]
})
