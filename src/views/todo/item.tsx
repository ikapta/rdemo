import React, { useState, useEffect } from 'react'
import { Button, message, Modal } from "antd"
import { useDispatch } from 'react-redux'
import { removeTodo, ITodo } from '../../redux/reducers/todo'

const HookComponent: FunctionComponent = ({ todo, removeTodo }: {
  todo: ITodo,
  removeTodo: Function
}) => {

  return (
    <div>
        id：{todo.id}, desc: {todo.desc}
        <Button onClick={() => removeTodo(todo.id)}>删除</Button>
    </div>
  )
}

export default HookComponent
