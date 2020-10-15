import React from 'react';
import ReactDOM from 'react-dom';
import BaseDialog, { IBaseDialog, IState } from './BaseDialog'

class TodoDialog extends BaseDialog {

  constructor(props: any) {
    super(props)
    this.state = {
      ...this.state,
      dialogConfig: {
        ...this.state.dialogConfig,
        title: 'todo dialog',
        okText: '确认修改',
        confirmLoading: false
      }
    }
  }

  componentDidMount () {
    this.toggleTableLoading()
    setTimeout(() => {

      this.toggleTableLoading()
    }, 2000)
  }

  showModal () {
    super.showModal()
    console.log('this is top showModal function')
  }

  slot () {
    return (
      <div>todo</div>
    )
  }

}

export default TodoDialog
