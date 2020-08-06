
import React, { useState, useEffect, useRef } from 'react'
import { Form, Input, Button, Radio, TimePicker, Row, Col } from 'antd'
import { ISearchObj } from './table'

const QueryForm: React.FC<{
  loading: boolean,
  onSearch: (search: ISearchObj) => void
}> = (props) => {
  const { loading, onSearch } = props
  const [form] = Form.useForm()

  const asyncValid = async () => {
    try {
      const values = await form.validateFields()
      console.log('Success:', values)
      return {values: values, isValid: true}
    } catch (errorInfo) {
      console.log('Failed:', errorInfo)
      return {values: errorInfo, isValid: false}
    }
  }
  const checkSubmit = async () => {
    const {values, isValid} = await asyncValid()
    if (!isValid) { return }
    console.log('go query')
    const searchObj = {
      ...values
    }
    await onSearch(searchObj)
  }

  return (<div>
    <Form
        form={form}
      >
        <Row>
          <Col span={24}>
            <Form.Item label="Form Layout" name="layout">
              <Radio.Group>
                <Radio.Button value="horizontal">Horizontal</Radio.Button>
                <Radio.Button value="vertical">Vertical</Radio.Button>
                <Radio.Button value="inline">Inline</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={6}>
            <Form.Item name="name" label="name">
              <Input placeholder="name"  />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="age" name="age"
                rules={[
                  {
                    required: true,
                    message: 'Input something!',
                  },
                ]}
              >
              <Input placeholder="age" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={24} style={{ textAlign: 'left' }}>
            <Form.Item>
              <Button type="primary"
                loading={loading}
                onClick={() => checkSubmit()}>查询</Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
  </div>)
}

export default QueryForm
