import React, { useEffect, useState } from 'react'
import { Table, Button, Space, Divider, Tooltip, Popconfirm } from 'antd'
import { RouteComponentProps } from 'react-router-dom'
import useTableData, { OperationTypeEnum, TDataSource1, ISearchObj } from './reducer'
import QueryForm from './queryForm'
import StaticTable from './staticTable'

// export const TableContext = React.createContext<ITableContext | null>(null)
export const TableContext = React.createContext({} as ITableContext)

interface IProps extends RouteComponentProps {}

export type TPage = {
  current: number
  size: number
  total: number
}

interface ITableContext {
  tableData: TDataSource1[]
  searchObj: ISearchObj
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

const CustomTable: React.FC<IProps> = (props) => {

    console.count('entry')
    const [loading, setLoading] = useState(false)
    const [{ tableData, searchObj }, dispatchDataSource] = useTableData()
    const [tablePage, setTablePage] = useState<TPage>({
      current: 1, size: 5, total: 0
    })

    function getList(tPage: TPage, search: ISearchObj) {
      setLoading(true)
      setTimeout(x => {
        const { current, size } = tPage
        const searchAge = search.age ? search.age : 0
        const dataPool = dataSource1.filter(x => x.age > searchAge)
        let data = dataPool.slice((current - 1) * size, current* size)
        setTablePage({ ...tPage, total: dataPool.length })
        setLoading(false)
        dispatchDataSource({type: OperationTypeEnum.REFRESH, payload: data})
      }, 100)
    }

    function deleteItem (item: TDataSource1) {
      dispatchDataSource({type: OperationTypeEnum.DELETE, payload: item})
      console.count('delete')
    }

    function onPageChange(page: number, pageSize: number) {
      const tPage = { ...tablePage, current: page, size: pageSize }
      setTablePage(tPage)
      getList(tPage, searchObj)
    }

    function onSearchChange(search: ISearchObj) {
      dispatchDataSource({type: OperationTypeEnum.SEARCH, payload: search})
      return getList(tablePage, search)
    }

    // 只执行一次
    useEffect(() => {
      console.count('useEffect')
      getList(tablePage, searchObj)
    }, [])

    // getList接口尽量纯的参数接收，不从useEffect发起请求
    // useEffect(() => {
    //   getList()
    // }, [tablePage.current, tablePage.size])

    return (
      <>
        <Divider></Divider>
        <TableContext.Provider value={{searchObj, tableData}} >
          <QueryForm loading={loading} onSearch={(search) => onSearchChange(search)}></QueryForm>
          <StaticTable
            loading={loading}
            // tableData={tableData}
            tablePage={tablePage}
            onPageChange={onPageChange}
            deleteItem={deleteItem}
            />
        </TableContext.Provider>
      </>
    )
  }

  export default CustomTable
