import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Books from './views/Books.vue';
import Words from './views/Words.vue';
import SignIn from './views/SignIn.vue';
import SignUp from './views/SignUp.vue';
import Profile from './views/Profile.vue';
import Logout from './views/Logout.vue';
import firebase from 'firebase';

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
      component: Books,
      beforeEnter: AuthGuard,
    },
    {
      path: '/words',
      name: 'words',
      component: Words,
      beforeEnter: AuthGuard,
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
      component: Profile,
      beforeEnter: AuthGuard,
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout
    }
  ]
})

function AuthGuard (from, to, next) {
  firebase.auth().onAuthStateChanged(user => {
    if (user) next()
    else next('/signin')
  })
}