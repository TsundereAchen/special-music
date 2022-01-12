import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/newsong',
  },
  {
    path: '/index',
    name: '登录页',
    component: () => import('@/views/Index'),
    children: [
      { path: '/artists', component: () => import('@/views/pages/Artists') },
      { path: '/listenbook', component: () => import('@/views/pages/ListenBook') },
      { path: '/newsong', component: () => import('@/views/pages/Newsong') },
      { path: '/rank', component: () => import('@/views/pages/Rank') },
      { path: '/songlist', component: () => import('@/views/pages/SongList') }
    ]
  },
]

const router = new VueRouter({
  routes,
})

export default router
