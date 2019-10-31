import React, { useState, useEffect } from 'react'
import { Button, message, Input } from "antd"
import { useDispatch } from 'react-redux'
import { removeTodo, ITodo } from '../../redux/reducers/todo'

  const HookComponent: FunctionComponent = ({ createTodo }: {
    createTodo: Function
  }) => {
    let [desc, setDesc] = useState('')
    return (
      <div>
          <Input value={desc} onChange={e => setDesc(e.target.value)} />
          <Button onClick={() => createTodo(desc)}>add todo</Button>
      </div>
    )
  }

  export default HookComponent
