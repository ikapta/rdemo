import React from 'react';
import ReactDOM from 'react-dom';
import BaseDialog, { IBaseDialog } from './BaseDialog'

class TodoDialog extends BaseDialog {


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
