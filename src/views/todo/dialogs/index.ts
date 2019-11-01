
/* eslint-disable */
import React from 'react'
import ReactDOM from 'react-dom'

import AddDialog from './AddDialog'

export function openAddDialog (callbackFunction: Function) {
  const addDialog: any = dialogFactory(AddDialog, 'addDialog')
  addDialog.showModal()
  addDialog.callbackFunction = callbackFunction
}


const singletons: IKV<FunctionComponent> = {}
function dialogFactory (Component: FunctionComponent | any, aliasName: string) {
  // each aliasName cant same
  if (!singletons[aliasName]) {
    const div = document.createElement('div');
    const constructor = React.createElement(Component, null)
    const instance: any = ReactDOM.render(constructor, div)
    // tsx file can do this
    // const instance: any = ReactDOM.render(<Component />, div)
    document.body.appendChild(div)
    singletons[aliasName] = instance
  }
  return singletons[aliasName]
}
