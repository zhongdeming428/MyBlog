import Vue from 'vue'
import Router from 'vue-router'
import index from './../components/displayblogs.vue'
import writeblog from './../components/write.vue'
import blog from './../components/blog.vue'
Vue.use(Router)
const  router = new Router({
  mode:'history',
  routes:[
    {
      path:'/',
      redirect:'/index'
    },
    {
      path:'/index',
      component: index
    },
    {
      path:'/tags/:tag',
      component:index
    },
    {
      path:'/time/:time',
      component:index
    },
    {
      path:'/readtimes/:title',
      component:index
    },
    {
      path:'/writeblog',
      component:writeblog
    },
    {
      path:'/blog/:title',
      component:blog
    }
  ]
});
export default router
