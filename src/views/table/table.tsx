import React, { useEffect, useState } from 'react'
import { Table, Button, Space } from 'antd';

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

const HookComponent: React.FC<{ history: any }> = (home) => {

    const [dataSource, setDataSource] = useState<TDataSource1[]>([])
    const [loading, setLoading] = useState(false)
    const [columns] = useState(columns1)
    const [tablePage, setTablePage] = useState<TPage>({
      current: 1, size: 5, total: 0
    })

    function getList() {
      setLoading(true)
      setTimeout(x => {
        const { current, size } = tablePage
        console.log('tablePage', tablePage)
        let data = dataSource1.slice((current - 1) * size, current* size)
        console.log(data)
        setTablePage({ ...tablePage, total: dataSource1.length })
        setLoading(false)
        setDataSource(data)
      }, 100)
    }

    function onPageChange(page: number, pageSize: number) {
      console.log(page)
      setTablePage({ ...tablePage, current: page, size: pageSize })
      // getList()
    }

    function onShowSizeChange(size: number) {
      console.log('size', size)
      setTablePage({ ...tablePage, size })
    }

    // getList接口尽量纯的参数接收，不从useEffect发起请求
    useEffect(() => {
      getList()
    }, [tablePage.current, tablePage.size])

    return (
      <>
        <Space style={{ marginBottom: 16 }}>
          <Button onClick={getList} loading={loading}>查询</Button>
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
