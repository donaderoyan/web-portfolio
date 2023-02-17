import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '@/views/pages/home/HomeView.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '@/views/pages/about/AboutView.vue')
  // }
  {
    path: '/',
    component: () => import('@/views/layout/parent.vue'),
    children: [
      {
        path: "",
        name: "home",
        component: () => import('@/views/pages/page1'),
        meta: { 
          requiresAuth: false,
        }
      },
      {
        path: "about",
        name: "about",
        component: () => import('@/views/pages/about'),
        meta: { 
          requiresAuth: false,
        }
      },
      {
        path: "work/:slug",
        name: "work",
        component: () => import('@/views/pages/workdetail'),
        meta: { 
          requiresAuth: false,
        }
      },
      
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
