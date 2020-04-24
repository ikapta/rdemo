import React from 'react'
import ReactDOM from 'react-dom'
import { Modal } from 'antd'

abstract class BaseDialog extends React.Component {
  public state = {
    visible: false,
    title: ''
  };

  protected abstract slot(): FunctionComponent | any

  public callbackFunction = () => {
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
