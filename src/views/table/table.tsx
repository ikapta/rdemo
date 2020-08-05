import React, { useEffect, useState } from 'react'
import { Table, Button, Space, Divider } from 'antd'
import { RouteComponentProps } from 'react-router-dom'
import TestMemo from './testMemoComp'
import TestCount, { AbCounter } from './testCount'


interface IProps extends RouteComponentProps {}

type TPage = {
  current: number
  size: number
  total: number
}

type TDataSource1 = {
  key: string,
  name: string,
  age: number,
  address: string
}
let dataSource1: TDataSource1[] = []
for (let i = 0; i < 40; i++) {
  let item: TDataSource1 = {
    key: 'key' + i ,
    name: '胡彦斌',
    age: i ,
    address: '西湖区湖底公园1号',
  }
  dataSource1.push(item)
}

let columns1 = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
]

const HookComponent: React.FC<IProps> = (props) => {

    console.count('entry')
    const [dataSource, setDataSource] = useState<TDataSource1[]>([])
    const [loading, setLoading] = useState(false)
    const [columns] = useState(columns1)
    const [tablePage, setTablePage] = useState<TPage>({
      current: 1, size: 5, total: 0
    })

    function getList(tPage: TPage) {
      setLoading(true)
      setTimeout(x => {
        const { current, size } = tPage
        let data = dataSource1.slice((current - 1) * size, current* size)
        setTablePage({ ...tPage, total: dataSource1.length })
        setLoading(false)
        setDataSource(data)
      }, 100)
    }

    function onPageChange(page: number, pageSize: number) {
      const tPage = { ...tablePage, current: page, size: pageSize }
      setTablePage(tPage)
      getList(tPage)
    }

    // 只执行一次
    useEffect(() => {
      console.count('useEffect')
      getList(tablePage)
    }, [])

    // getList接口尽量纯的参数接收，不从useEffect发起请求
    // useEffect(() => {
    //   getList()
    // }, [tablePage.current, tablePage.size])

    return (
      <>
        <Divider></Divider>
        <TestCount></TestCount>
        <Divider></Divider>
        <AbCounter></AbCounter>
        <TestMemo {...props} title={'你好'} desc={'good day'} />
        <Space style={{ marginBottom: 16 }}>
          <Button onClick={() => getList(tablePage)} loading={loading}>查询</Button>
        </Space>
        <Table
          loading={loading}
          dataSource={dataSource}
          pagination={{
            defaultCurrent: tablePage.current,
            defaultPageSize: tablePage.size,
            total: tablePage.total,
            showTotal: total => `Total ${total} items`,
            showSizeChanger: true,
            showQuickJumper: true,
            onChange: (page, pageSize) => onPageChange(page, pageSize as number)
          }}
          columns={columns} />
      </>
    )
  }

  export default HookComponent
