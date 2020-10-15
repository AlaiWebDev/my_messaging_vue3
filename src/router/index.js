import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Connect from '@/views/Connect.vue'
import Account from '@/views/Account.vue'
import Inbox from '@/views/Inbox.vue'
const users = [
  {"ID":"1","nom":"MARTIN","prenom":"Jacques","pseudo":"Healy","email":"alain.orluk@free.fr","pwd":"Healy","types":"1","register_date":""},
  {"ID":"2","nom":"ORLUK","prenom":"Alain","pseudo":"AlainWebDev","email":"alainwebdev@free.fr","pwd":"AlainWebDev","types":"0","register_date":""},
  {"ID":"3","nom":"LAMINE","prenom":"ADDAR","pseudo":"Flexboy","email":"Flexboy@free.fr","pwd":"Flexboy","types":"1","register_date":"mardi 06 octobre 2020 11h36"},
  {"ID":"4","nom":"TITI","prenom":"Titi","pseudo":"titi","email":"titi@free.fr","pwd":"titi","types":"1","register_date":"mardi 06 octobre 2020 16h12"},
  {"ID":"5","nom":"TOTO","prenom":"Toto","pseudo":"toto","email":"toto@free.fr","pwd":"Toto","types":"1","register_date":"mardi 06 octobre 2020 16h12"},
  {"ID":"6","nom":"TETE","prenom":"Tete","pseudo":"tete","email":"tete@free.fr","pwd":"Tete","types":"1","register_date":"mardi 06 octobre 2020 16h13"}
  ]
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/connect',
    name: 'Connect',
    component: Connect,
  },
  {
    path: '/account',
    name: 'Account',
    component: Account,
  },
  {
    path: '/inbox',
    name: 'Inbox',
    component: Inbox,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
