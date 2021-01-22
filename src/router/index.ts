import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/classrooms'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/classrooms'
      },
      {
        path: 'classrooms',
        component: () => import('@/views/Classrooms.vue'),
        children: [
        ]
      },
      {
        path: 'quizzes',
        component: () => import('@/views/Quizzes.vue')
      },
      {
        path: 'me',
        component: () => import('@/views/Me.vue')
      }
    ]
  },

  {
    path: '/message/:id',
    component: () => import('@/views/classrooms/Classroom.vue')
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
