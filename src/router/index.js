import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../components/pages/MainPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage,
    props: { mainPage: true }
  },
  {
    path: '/catalog',
    name: 'Каталог товаров',
    component: () => import(/* webpackChunkName: "catalog" */ '@/components/pages/CatalogPage.vue')
  },
  {
    path: '/blog',
    name: 'Блог',
    component: () => import(/* webpackChunkName: "blog" */ '@/components/pages/BlogPage.vue')
  },
  {
    path: '/contacts',
    name: 'Контакты',
    component: () => import(/* webpackChunkName: "contacts" */ '@/components/pages/ContactsPage.vue')
  },
  {
    path: '/news/:url',
    name: 'Новости компании',
    component: () => import(/* webpackChunkName: "news" */ '@/components/pages/NewsPage.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { left: 0, top: 0}
  }
})

export default router
