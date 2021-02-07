import { reactive, inject, readonly } from 'vue';
import { Quiz } from '@/definitions';

export const stateSymbol = Symbol('classroom');

export function createStore() {

  const list: Quiz[] = reactive([]);

  const get = () => {
    if (list.length === 0) {
      // request
    }

    return list;
  }

  const find = (id: number) => list.find(i => i.id === id);

  const clear = () => {
    while (list.length) {
      list.pop()
    }
  }

  const set = (quizzes: Quiz[]): void => {
    clear()
    quizzes.forEach(item => {
      list.push(item)
    })
  }

  const unshift = (quiz: Quiz) => list.unshift(quiz)
  const remove = (id: number) => {
    const idx = list.findIndex(i => i.id === id)
    list.splice(idx, 1)
  }

  return { quizzes: readonly(list), find, set, unshift, remove };
}



export const useState = () => inject(stateSymbol);

export default {
  stateSymbol,
  createStore
}

// export const provideState = () => provide(
//     stateSymbol,
//     createState()
// );
