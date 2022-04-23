import { createApp } from 'vue'
import App from './App.vue'
import PageHome from './components/PageHome'
import PageThreadShow from './components/PageThreadShow'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', component: PageHome, name: 'Home' },
  { path: '/thread/:id', component: PageThreadShow, name: 'ThreadShow' }
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes // short for `routes: routes`
})

const app = createApp(App)

app.use(router)
app.mount('#app')
