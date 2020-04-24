import React from 'react';
import ReactDOM from 'react-dom';
import BaseDialog, { IBaseDialog } from './BaseDialog'
import { Modal } from 'antd'

class otherDialog extends BaseDialog {
  showModal () {
    super.showModal()
    console.log('this is top showModal function')
  }

  slot () {
    return (
      <div>todo</div>
    )
  }

  render () {
    return (
      <Modal
        title="Basic Modal"
        visible={this.state.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
      >
        12312
      </Modal>
    )
  }

}

export default otherDialog
