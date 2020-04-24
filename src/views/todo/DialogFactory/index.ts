
/* eslint-disable */
import DialogFactory from './DialogFactory'
import TodoDialog from './todoDialog'
import OtherDialog from './otherDialog'

export function openAddDialog (callbackFunction: Function) {
  const addDialog = <TodoDialog>DialogFactory.getDialog(TodoDialog)
  addDialog.showModal()
  addDialog.callbackFunction = callbackFunction

  return function() {
    DialogFactory.destroy(TodoDialog.name)
  }
}

export function openOtherDialog (callbackFunction: Function) {
  const otherDialog = <OtherDialog>DialogFactory.getDialog(OtherDialog)
  otherDialog.showModal()
  otherDialog.callbackFunction = callbackFunction

  return function() {
    DialogFactory.destroy(TodoDialog.name)
  }
}

