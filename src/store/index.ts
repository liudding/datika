import { createStore } from 'vuex'
import classroom from './modules/classroom'
import quiz from './modules/quiz'
import user from './modules/user'


export default createStore({
    modules: {
        classroom,
        quiz,
        user
    },
    strict: process.env.NODE_ENV !== 'production'
})