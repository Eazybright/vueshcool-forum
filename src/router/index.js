import sourceData from '@/data.json'
import Home from '@/pages/Home'
import NotFound from '@/pages/NotFound'
import ThreadShow from '@/pages/ThreadShow'
import Profile from '@/pages/Profile'
import Forum from '@/pages/Forum'
import Category from '@/pages/Category'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: Home, name: 'Home' },
  {
    path: '/profile',
    component: Profile,
    name: 'Profile',
    meta: {
      toTop: true,
      smoothScroll: true
    }
  },
  {
    path: '/categories/:id',
    component: Category,
    name: 'Category',
    props: true
  },
  {
    path: '/forums/:id',
    component: Forum,
    name: 'Forum',
    props: true
  },
  {
    path: '/thread/:id',
    component: ThreadShow,
    name: 'ThreadShow',
    props: true,
    beforeEnter (to, from, next) {
      // check if thread exists
      const threadExists = sourceData.threads.find(thread => thread.id === to.params.id)
      if (threadExists) {
        return next()
      } else {
        next({
          name: 'NotFound',
          params: { pathMatch: to.path.substring(1).split('/') },
          query: to.query
        })
      }
    }
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
  scrollBehaviuor (to) {
    const scroll = {}
    if (to.meta.toTop) scroll.top = 0

    if (to.meta.smoothScroll) scroll.behavior = 'smooth'

    return scroll
  }
})

export default router
