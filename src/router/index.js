import Vue from 'vue';
import store from '@/store';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [{
  path: '/',
  name: 'home',
  component: Home,
  redirect: { name: 'studentList' },
  children: [{
    path: 'studentList',
    name: 'studentList',
    component: () => import('@/views/Student.vue'),
  }, {
    path: 'addStudent',
    name: 'addStudent',
    component: () => import('@/views/AddStudent.vue'),
  }],
},
{
  path: '/login',
  name: 'login',
  component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
},
{
  path: '/logon',
  name: 'logon',
  component: () => import(/* webpackChunkName: "about" */ '../views/Logon.vue'),
},

];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && to.name !== 'logon') {
    if (!store.state.username) {
      next({ name: 'login' });
    } else {
      next();
    }
  }
  next();
});

export default router;
