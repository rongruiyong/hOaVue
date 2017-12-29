import Vue from 'vue'
import Router from 'vue-router'
import SmallPage from '@/pages/SmallPage'
import LargePage from '@/pages/LargePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SmallPage',
      component: SmallPage
    },{
      path: '/large-page',
      name: 'LargePage',
      component: LargePage
    }
  ]
})
