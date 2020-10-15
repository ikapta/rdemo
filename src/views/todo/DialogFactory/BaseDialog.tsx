import React from 'react'
import ReactDOM from 'react-dom'
import { Modal, Spin } from 'antd'

export interface IBaseDialog {
  dialogName: string
  callbackFunction: Function
  slot: Function // dialog content
  showModal: Function
  handleOk: Function
  handleCancel: Function
  render: Function
  destroy: Function
  toggleTableLoading: Function
}

export interface IState {
  visible: boolean
  loading: boolean
  dialogConfig: any
}

abstract class BaseDialog extends React.Component {
  public state = {
    visible: false,
    loading: false,
    dialogConfig: {
      title: '标题',
      width: '700px',
      okText: '确认',
      confirmLoading: false,
      maskClosable: false,
    }
  };

  public toggleTableLoading () {
    this.setState({ loading: !this.state.loading })
  }

  protected abstract slot(): FunctionComponent | any

  public destroy() {}

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
    this.destroy()
  };

  render() {
    return (
      <Modal
        {...this.state.dialogConfig}
        visible={this.state.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
      >
        <Spin spinning={this.state.loading}>
          {this.slot()}
        </Spin>
      </Modal>
    );
  }

}

export default BaseDialog
