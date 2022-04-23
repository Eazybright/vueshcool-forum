import sourceData from '@/data.json'
import PageHome from '@/components/PageHome'
import PageNotFound from '@/components/PageNotFound'
import PageThreadShow from '@/components/PageThreadShow'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', component: PageHome, name: 'Home' },
  {
    path: '/thread/:id',
    component: PageThreadShow,
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
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: PageNotFound }
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes // short for `routes: routes`
})

export default router
