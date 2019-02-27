import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About'
import Nosotros from './views/Nosotros'
import IT from './views/It'
import Digital from './views/Digital'
import Rrhh from './views/Rrhh'

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
      path: '/nosotros',
      name: 'nosotros',
      component: Nosotros
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/rrhh',
      name: 'rrhh',
      component: Rrhh
    },
    {
      path: '/it',
      name: 'it',
      component: IT
    },
    {
      path: '/digital',
      name: 'digital',
      component: Digital
    }
  ]
})
