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
        path: '/classrooms/:id',
        name: 'Classroom',
        component: () => import('@/views/classrooms/Classroom.vue')
    },

    {
        path: '/quizzes/:id/questions',
        name: 'QuizQuestions',
        component: () => import('@/views/quizzes/Questions.vue')
    },
    {
        path: '/quizzes/:id/records',
        name: 'QuizRecords',
        component: () => import('@/views/quizzes/Records.vue')
    },

    {
        path: '/scan',
        name: 'Scan',
        component: () => import('@/views/scan/Scan.vue')
    },

    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/login/Login.vue')
    },
    {
        path: '/login/password',
        name: 'LoginWithPassword',
        component: () => import('@/views/login/LoginWithPassword.vue')
    },

    /**
     * 设置
     */
    {
        path: '/about',
        name: 'About',
        component: () => import('@/views/settings/About.vue')
    }


]

export default routes;