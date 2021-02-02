import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'
import Quizzes from '@/views/quizzes/Quizzes.vue'
import Classrooms from '@/views/classrooms/Classrooms.vue'
import My from '@/views/my/My.vue'

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
                component: Quizzes
            },
            {
                path: 'classrooms',
                component: Classrooms,
                children: [
                ]
            },
            {
                path: 'my',
                component: My
            }
        ]
    },
    {
        path: '/quizzes/:id',
        name: 'Quiz',
        component: () => import('@/views/quizzes/Quiz.vue'),
        props: true,
    },

    {
        path: '/classrooms/type/:archived',
        component: () => import('@/views/classrooms/Classrooms.vue'),
        props: true,
    },

    {
        path: '/classrooms/edit',
        name: 'EditClassroom',
        component: () => import('@/views/classrooms/Edit.vue'),
    },
    {
        path: '/classrooms/:id',
        name: 'Classroom',
        component: () => import('@/views/classrooms/Classroom.vue'),
        props: true,
    },

    {
        path: '/quizzes/:id/questions',
        name: 'QuizQuestions',
        component: () => import('@/views/quizzes/Questions.vue'),
        props: true,
    },
    {
        path: '/quizzes/:id/records',
        name: 'QuizRecords',
        component: () => import('@/views/quizzes/Records.vue'),
        props: true,
    },

    {
        path: '/quizzes/:id/scan',
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


    {
        path: '/subscriptions',
        name: 'Subscription',
        component: () => import('@/views/subscription/Subscription.vue')
    },
    /**
     * 设置
     */
    {
        path: '/help',
        name: 'Help',
        component: () => import('@/views/settings/Help.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/views/settings/About.vue')
    }


]

export default routes;