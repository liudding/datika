import Classroom from './classroom'
import Quiz from './quiz'
import { createStore } from 'vuex'
import classroom from './modules/classroom'
import quiz from './modules/quiz'
import user from './modules/user'

export function register(app: any) {
    app.provide(Classroom.stateSymbol, Classroom.createStore())
    app.provide(Quiz.stateSymbol, Quiz.createStore())
}

export default createStore({
    modules: {
        classroom,
        quiz,
        user
    },
    strict: process.env.NODE_ENV !== 'production'
})