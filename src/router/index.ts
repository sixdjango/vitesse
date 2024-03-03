import { type RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import { globSetting } from '~/config/setting'
export const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/' },

]

export const router = createRouter({
  history: createWebHistory(globSetting.routeBasePath),
  routes,
})
