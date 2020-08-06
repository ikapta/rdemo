import React, { useReducer } from "react"

export enum OperationTypeEnum {
  REFRESH = 'refresh',
  CREATE = 'create',
  DELETE = 'delete',
  SEARCH = 'search',
  RESET = 'reset'
}

export type TDataSource1 = {
  key: string,
  name: string,
  age: number,
  address: string
}

type TAction = {
  type: OperationTypeEnum
  payload: any
}
export interface ISearchObj {
  name: string | null,
  age: number | null
}

export interface ITableReducer {
  tableData: TDataSource1[]
  searchObj: ISearchObj
}

function initTableData (initial: ITableReducer | null): ITableReducer {
  // console.log(initial)
  return {
    tableData: initial?.tableData || [],
    searchObj: initial?.searchObj || {
      name: null,
      age: null
    },
  }
}

function tableReducer (state: ITableReducer, action: TAction) {
  switch (action.type) {

    case OperationTypeEnum.REFRESH:
      return refresh(state, action.payload)

    case OperationTypeEnum.DELETE:
      return deleteItem(state, action.payload)

    case OperationTypeEnum.SEARCH:
      return searchChange(state, action.payload)

    default:
      console.error('未实现的action type')
      throw new Error('未实现的action type')
  }
}

function refresh (state: ITableReducer, payload: TDataSource1[]) {
  console.log('refresh', payload)
  state.tableData  = payload
  return {...state}
}

function deleteItem (state: ITableReducer, item: TDataSource1) {
  // const idx = state.findIndex(x => x.age === item.age)
  // state.splice(idx, 1)
  state.tableData = state.tableData.filter(s => s.age !== item.age)
  return {...state}
}

function searchChange (state: ITableReducer, search: ISearchObj) {
  console.log('search', search)
  state.searchObj = search
  return {...state}
}

export default function useTableData(initial: ITableReducer | null = null): [ITableReducer, React.Dispatch<TAction>] {
  const [tableData, dispatch] = useReducer(tableReducer, initial, initTableData)
  return [tableData, dispatch]
}
