import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";
import classroom from './modules/classroom'
import quiz from './modules/quiz'
import user from './modules/user'


export default createStore({
    modules: {
        classroom,
        quiz,
        user
    },
    plugins: [createPersistedState({
        key: 'APP_STATE_DATA'
    })],
    strict: process.env.NODE_ENV !== 'production'
})