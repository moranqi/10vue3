import Vue from 'vue'
import VueRouter from 'vue-router'
import Hobby1 from "../views/Hobby1";
import Success from "../views/Success";

Vue.use(VueRouter)

const routes = [
  {
    path: '/hobby1',
    name: 'hobby1',
    component: Hobby1
  },
  {
    path: '/success',
    name: 'success',
    component: Success
  },

]

const router = new VueRouter({
  routes
})

export default router
