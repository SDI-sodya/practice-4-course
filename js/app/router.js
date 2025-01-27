import { login } from './pages/login.js';


export const router = VueRouter.createRouter({
  history: VuewRoter.createWebHashHistory(),
  routers:[
    { path:'/', name: 'Sign in', component: login }
  ]
})