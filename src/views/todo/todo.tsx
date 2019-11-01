import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { ITodo, removeTodo, addTodo, IKV } from '../../redux/reducers/todo'
import Item from './item'
import Create from './create'


const Themes: IKV<{ foreground: string; background: string }> = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
}

export const ThemeContext = React.createContext(Themes.light)
export const ThemeConsumer = ThemeContext.Consumer
export const ThemeProvider = ThemeContext.Provider

const Cpt: React.FC = () => {

  const dispatch = useDispatch()
  const todos: ITodo[] = useSelector((state: any) => state.todo.todos)
  const test = useSelector((state: any) => state.todo.test)
  const [a, setA] = useState('xxx')
  const [theme, setTheme] = useState('dark')

  const ChangeTheme = () => {
    const t = theme === 'dark' ? 'light' : 'dark'
    setTheme(t)
  }

  function deleteTodo (id: number) {
    dispatch(removeTodo(id))
  }

  function createTodo (desc: string) {
    const todo: ITodo = {
      id: new Date().getTime(),
      desc: desc
    }
    setA(todo.id + '')
    ChangeTheme()
    dispatch(addTodo(todo))
    return Promise.resolve('xxx')
  }

  useEffect ( () => {
    console.log('test', a)
  }, [a])

  return (
    <ThemeProvider value={Themes[theme]}>
    <div>
      <Create createTodo={createTodo}  />
      <hr />
      {test}
      <ul>
        {todos.map(todo =>
          (<li key={todo.id}><Item todo={todo} removeTodo={deleteTodo} /></li>)
        )}
      </ul>
    </div>
    </ThemeProvider>
  )
}

export default React.memo(Cpt)
