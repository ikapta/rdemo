
/* eslint-disable */
import React,  { ReactInstance } from 'react'
import ReactDOM from 'react-dom'

import AddDialog2 from './AddDialog2'
import AddDialog3 from './AddDialog3'
import Generate from './generate'

export function openAddDialog2 (callbackFunction: Function) {
  const addDialog: any = Generate.getDialog(AddDialog2)
  addDialog.showModal()
  addDialog.callbackFunction = callbackFunction
}

export function openAddDialog3 (callbackFunction: Function) {
  const addDialog: any = Generate.getDialog(AddDialog3)
  addDialog.showModal()
  addDialog.callbackFunction = callbackFunction
}
