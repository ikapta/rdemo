import React from 'react'
import ReactDOM from 'react-dom'
import { Modal } from 'antd'

export interface IBaseDialog {
  dialogName: string
  callbackFunction: Function
  slot: Function // dialog content
  showModal: Function
  handleOk: Function
  handleCancel: Function
  render: Function
}

abstract class BaseDialog extends React.Component {
  public state = { visible: false };

  protected abstract slot(): FunctionComponent | any

  public callbackFunction: Function = () => {
    console.log('inner callbackFunction');
  };

  public showModal () {
    this.setState({
      visible: true,
    });
  };

  public handleOk = (e: React.MouseEvent<HTMLElement>) => {
    this.setState({
      visible: false,
    });
    this.callbackFunction && this.callbackFunction()
  };

  public handleCancel = (e: React.MouseEvent<HTMLElement>) => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const Slot = this.slot
    return (
      <div className="addDialog">
        {/* <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button> */}
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Slot></Slot>
        </Modal>
      </div>
    );
  }

}

export default BaseDialog
