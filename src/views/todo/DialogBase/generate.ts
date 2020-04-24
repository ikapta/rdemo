/* eslint-disable */
import React from 'react'
import ReactDOM from 'react-dom'
import BaseDialog from './BaseDialog'

class dialogGenerate {

  private singletons: IKV<FunctionComponent> = {}

  constructor() {
    this.singletons = {}
  }

  checkUnique(name: string) {
    console.log(this.singletons)
    if (this.singletons[name]) {
      throw 'duplicate name'
    }
    return name
  }

  getDialog(Component: FunctionComponent | any) {
    if (!this.singletons[Component.dialogName]) {
      const div = document.createElement('div');
      const constructor = React.createElement(Component, null)
      const instance: any = ReactDOM.render(constructor, div)
      // tsx file can do this
      // const instance: any = ReactDOM.render(<Component />, div)
      document.body.appendChild(div)
      this.singletons[Component.dialogName] = instance
    }
    return this.singletons[Component.dialogName]
  }
}

export default new dialogGenerate()
