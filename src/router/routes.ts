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

    /**
     * Quiz
     */
    {
        path: '/quizzes/:id',
        name: 'Quiz',
        component: () => import(/* webpackChunkName: "quiz" */ '@/views/quizzes/Quiz.vue'),
        props: true,
    },

    {
        path: '/quizzes/type/:archived',
        component: () => import(/* webpackChunkName: "quiz" */  '@/views/quizzes/Quizzes.vue'),
        props: true,
    },
    {
        path: '/quizzes/:id/questions',
        name: 'QuizQuestions',
        component: () => import(/* webpackChunkName: "quiz_questions" */  '@/views/quizzes/Questions.vue'),
        props: true,
    },
    {
        path: '/quizzes/:id/report',
        name: 'QuizReport',
        component: () => import(/* webpackChunkName: "quiz_records" */ '@/views/quizzes/report/Report.vue'),
        props: true,
    },
    {
        path: '/quizzes/:id/records',
        name: 'QuizRecords',
        component: () => import(/* webpackChunkName: "quiz_records" */ '@/views/quizzes/Records.vue'),
        props: true,
    },
    {
        path: '/quizzes/:quizId/records/:recordId',
        name: 'QuizRecord',
        component: () => import(/* webpackChunkName: "quiz_records" */ '@/views/quizzes/Record.vue'),
        props: true,
    },



    {
        path: '/quizzes/:id/scan',
        name: 'Scan',
        component: () => import(/* webpackChunkName: "scan" */ '@/views/scan/Scan.vue')
    },

    /**
     * Classroom
     */

    {
        path: '/classrooms/type/:archived',
        component: () => import(/* webpackChunkName: "classroom" */ '@/views/classrooms/Classrooms.vue'),
        props: true,
    },
    {
        path: '/classrooms/:id',
        name: 'Classroom',
        component: () => import(/* webpackChunkName: "classroom" */ '@/views/classrooms/Classroom.vue'),
        props: true,
    },


    /**
     * Login
     */
    {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "login" */ '@/views/login/Login.vue')
    },
    {
        path: '/login/password',
        name: 'LoginWithPassword',
        component: () => import(/* webpackChunkName: "login" */  '@/views/login/LoginWithPassword.vue')
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import(/* webpackChunkName: "login" */  '@/views/login/Register.vue')
    },

    /**
     * 我的
     */
    {
        path: '/my/profile',
        name: 'Profile',
        component: () => import('@/views/my/Profile.vue')
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
        path: '/settings',
        name: 'Settings',
        component: () => import( /* webpackChunkName: "settings" */  '@/views/settings/Settings.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "settings" */  '@/views/settings/About.vue')
    },
]

export default routes;