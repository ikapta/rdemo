import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { ITodo, removeTodo, addTodo } from '../../redux/reducers/todo'
import Item from './item'
import Create from './create'


  const Cpt: React.FC = () => {

    const dispatch = useDispatch()
    const todos: ITodo[] = useSelector((state: any) => state.todo.todos)
    const test = useSelector((state: any) => state.todo.test)
    const [a, setA] = useState('xxx')

    function deleteTodo (id: number) {
      dispatch(removeTodo(id))
    }

    function createTodo (desc: string) {
      const todo: ITodo = {
        id: new Date().getTime(),
        desc: desc
      }
      setA(todo.id + '')
      dispatch(addTodo(todo))
    }

    useEffect ( () => {
      console.log('test', a)
    }, [a])

    return (
      <div>
        <Create createTodo={createTodo} />
        <hr />
        {test}
        <ul>
          {todos.map(todo =>
            (<li key={todo.id}><Item todo={todo} removeTodo={deleteTodo} /></li>)
          )}
        </ul>
      </div>
    )
  }


  export default Cpt
