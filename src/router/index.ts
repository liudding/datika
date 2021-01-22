import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/quizzes'
  },
  {
    path: '/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/classrooms'
      },
      {
        path: 'quizzes',
        component: () => import('@/views/quizzes/Quizzes.vue')
      },
      {
        path: 'classrooms',
        component: () => import('@/views/classrooms/Classrooms.vue'),
        children: [
        ]
      },
      {
        path: 'my',
        component: () => import('@/views/my/My.vue')
      }
    ]
  },

  {
    path: '/message/:id',
    component: () => import('@/views/classrooms/Classroom.vue')
  },

  {
    path: '/quizzes/:id',
    component: () => import('@/views/quizzes/Quiz.vue')
  },

  {
    path: '/classrooms/edit',
    name: 'EditClassroom',
    component: () => import('@/views/classrooms/Edit.vue')
  },

  {
    path: '/scan',
    name: 'EditClassroom',
    component: () => import('@/views/scan/Scan.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
