import React, { useState } from 'react'
import { Button, Input } from "antd"
import { ThemeContext } from './todo'
import $Style from './style.module.sass'

  const HookComponent: FunctionComponent = ({ createTodo }: {
    createTodo: Function
  }) => {
    let [localDesc, setLocalDesc] = useState('')
    const theme = React.useContext(ThemeContext)

    function innerCreate () {
      createTodo(localDesc).then((res: string) => {
        setLocalDesc(res)
      })
    }

    return (
      <div style={{ color: theme.foreground, background: theme.background }}
        className={$Style.create}
        >
          <span>KKKKK</span>
          <Input value={localDesc} onChange={e => setLocalDesc(e.target.value)} />
          <Button onClick={() => innerCreate()}>add todo</Button>
      </div>
    )
  }

  export default HookComponent
