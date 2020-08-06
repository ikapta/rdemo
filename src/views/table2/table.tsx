import React, { useEffect, useState } from 'react'
import { Table, Button, Space, Divider, Tooltip, Popconfirm } from 'antd'
import { RouteComponentProps } from 'react-router-dom'
import { TablePaginationConfig } from 'antd/lib/table'
import useTableData, { OperationTypeEnum, TDataSource1 } from './reducer'

interface IProps extends RouteComponentProps {}

type TPage = {
  current: number
  size: number
  total: number
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

const HookComponent: React.FC<IProps> = (props) => {

    console.count('entry')
    // const [dataSource, setDataSource] = useState<TDataSource1[]>([])
    const [dataSource, dispatchDataSource] = useTableData([])
    const [loading, setLoading] = useState(false)
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
        dispatchDataSource({type: OperationTypeEnum.REFRESH, payload: data})
      }, 100)
    }

    function deleteItem (item: TDataSource1) {
      setLoading(true)
      dispatchDataSource({type: OperationTypeEnum.DELETE, payload: item})
      setLoading(false)
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

    const pagination = {
      defaultCurrent: tablePage.current,
      defaultPageSize: tablePage.size,
      total: tablePage.total,
      showTotal: (total: number) => `Total ${total} items`,
      showSizeChanger: true,
      showQuickJumper: true,
      onChange: (page: number, pageSize: number) => onPageChange(page, pageSize as number)
    } as TablePaginationConfig

    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        width: '100px',
        render: (name: string) => (
          <Tooltip title={name}>
            <div style={{
              width: '90px',
              margin: 0,
              boxSizing: 'border-box',
              wordBreak: 'keep-all',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}
            >
              {name} - tooltip
            </div>
          </Tooltip>
        )
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
      {
        title: '操作',
        width: '100px',
        dataIndex: 'key',
        render: (key: string, item: TDataSource1) => (
          <>
          {/* <Button type="link"
                  style={{ padding: 0 }}
                  onClick={() => deleteItem(item)}
            >
            删除
          </Button> */}
          <Popconfirm title="确认删除?"
            onConfirm={() => deleteItem(item)}>
            <a>删除</a>
          </Popconfirm>
          <Button type="link"
                    style={{ padding: 0 }}
            >
            查看
          </Button>
          </>
        )
      },
    ]

    return (
      <>
        <Divider></Divider>
        <Space style={{ marginBottom: 16 }}>
          <Button onClick={() => getList(tablePage)} loading={loading}>查询</Button>
        </Space>
        <Table
          loading={loading}
          dataSource={dataSource}
          pagination={pagination}
          columns={columns} />
      </>
    )
  }

  export default HookComponent
