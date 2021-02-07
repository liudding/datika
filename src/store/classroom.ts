import { reactive, inject, readonly } from 'vue';
import { Classroom } from '@/definitions';

export const stateSymbol = Symbol('classroom');

export function createStore() {

  const list: Classroom[] = reactive([]);

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

  const set = (classrooms: Classroom[]): void => {
    clear()
    classrooms.forEach(item => {
      list.push(item)
    })
  }

  const unshift = (classroom: Classroom) => list.unshift(classroom)
  const remove = (id: number) => {
    const idx = list.findIndex(i => i.id === id)
    list.splice(idx, 1)
  }


  return { classrooms: readonly(list), find, set, unshift, remove };
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
