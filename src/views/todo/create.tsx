import React, { useState } from 'react'
import { Button, message, Input } from "antd"
import { useDispatch } from 'react-redux'
import { removeTodo, ITodo } from '../../redux/reducers/todo'

  const HookComponent: FunctionComponent = ({ createTodo }: {
    createTodo: Function
  }) => {
    let [localDesc, setLocalDesc] = useState('')
    function innerCreate () {
      createTodo(localDesc).then((res: string) => {
        setLocalDesc(res)
      })
    }

    return (
      <div>
          <Input value={localDesc} onChange={e => setLocalDesc(e.target.value)} />
          <Button onClick={() => innerCreate()}>add todo</Button>
      </div>
    )
  }

  export default HookComponent
