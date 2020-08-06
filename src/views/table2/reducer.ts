import React, { useReducer } from "react"

export enum OperationTypeEnum {
  REFRESH = 'refresh',
  CREATE = 'create',
  DELETE = 'delete',
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

function initTableData (tableData: TDataSource1[]) {
  return tableData
}

function tableReducer (state: TDataSource1[], action: TAction) {
  switch (action.type) {

    case OperationTypeEnum.REFRESH:
      return refresh(action.payload)

    case OperationTypeEnum.DELETE:
      return deleteItem(state, action.payload)

    default:
      throw new Error();
  }
}

function refresh (payload: TDataSource1[]) {
  console.log('refresh', payload)
  return payload
}

function deleteItem (state: TDataSource1[], item: TDataSource1) {
  // const idx = state.findIndex(x => x.age === item.age)
  // state.splice(idx, 1)
  state = state.filter(s => s.age !== item.age)
  return [...state]
}

export default function useTableData(initData = []): [TDataSource1[], React.Dispatch<TAction>] {
  const [tableData, dispatch] = useReducer(tableReducer, initData, initTableData)
  return [tableData, dispatch]
}
