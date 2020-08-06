import React, { useState } from 'react'
import { Table, Popconfirm, Button, Tooltip } from 'antd'
import { TDataSource1 } from './reducer'
import { TPage } from './table'
import { TablePaginationConfig } from 'antd/lib/table'

const StaticTable: React.FC<{
  loading: boolean,
  tableData: TDataSource1[],
  tablePage: TPage,
  onPageChange: (page: number, pageSize: number) => void
  deleteItem: (item: TDataSource1) => void
}> = (props) => {

  const {
    loading,
    tableData,
      tablePage,
    onPageChange,
    deleteItem
  } = props

  const pagination = {
    defaultCurrent: tablePage.current,
    defaultPageSize: tablePage.size,
    total: tablePage.total,
    showTotal: (total: number) => `Total ${total} items`,
    showSizeChanger: true,
    showQuickJumper: true,
    onChange: (page: number, pageSize: number) => onPageChange(page, pageSize)
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

  return (<div>

    <Table
      loading={loading}
      dataSource={tableData}
      pagination={pagination}
      columns={columns} />

  </div>)
}

export default StaticTable
