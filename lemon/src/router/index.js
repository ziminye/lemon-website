import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import index from '../views/index/index'
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
  ],
  mode: 'history'
})
