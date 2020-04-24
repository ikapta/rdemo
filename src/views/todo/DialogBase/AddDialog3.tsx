import React from 'react';
import ReactDOM from 'react-dom';
import BaseDialog from './BaseDialog'
import Generate from './generate'

class TodoDialog extends BaseDialog {

  dialogName = Generate.checkUnique('todoDialog')

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
