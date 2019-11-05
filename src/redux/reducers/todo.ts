import * as AT from '../actionTypes'

export interface IKV<T> {
  [key: string]: T // cant symbol
}

export interface ITodo {
  id: number
  desc: string
}
export interface IInitTodoState {
  todos: ITodo[],
  test: String
}
export interface IAction<T> {
  type: string
  payload: T
}

export interface ISAction<T> {
  type: symbol
  payload: T
}


const initialState: IInitTodoState = {
  todos: [{ id: 1, desc: 'ddd' }],
  test: 'xxxx'
}

const mutations: IKV<Function> = {
  [AT.TODO_ADD] (state: IInitTodoState, todo: ITodo) {

    state.todos = [...state.todos, todo]
    // state.test = JSON.stringify(state.todos) + (Math.random() * 100 + 1).toString()
    return state
  },
  [AT.TODO_REMOVE] (state: IInitTodoState, id: number) {
    const idx = state.todos.findIndex(todo => todo.id === id)
    if (idx < 0) throw new Error('todo not found')
    state.todos.splice(idx, 1)
    state.todos = [...state.todos]
    return state
  }
}

// default reducer
export default function (state: IInitTodoState = initialState, action: IAction<ITodo>) {

  const trigger: Function = mutations[action.type]
  if (!trigger) {
    return state
  }
  const genState: IInitTodoState = trigger.call(state, state, action.payload)
  return genState
}

// actions
function baseAction<T> (type: symbol, payload: T): ISAction<T> {
  return { type, payload }
}

export function addTodo(todo: ITodo)  {
  return baseAction(AT.TODO_ADD, todo)
}

export function removeTodo(todoId: number) {
  return baseAction(AT.TODO_REMOVE, todoId)
}

