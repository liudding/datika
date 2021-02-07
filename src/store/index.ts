import Classroom from './classroom'
import Quiz from './quiz'

export function register(app: any) {
    app.provide(Classroom.stateSymbol, Classroom.createStore())
    app.provide(Quiz.stateSymbol, Quiz.createStore())
}