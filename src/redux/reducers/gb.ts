
import { AUTH_CHANGE } from "../actionTypes"
import * as Actions from './gbActions'

const state = {
  isAuth: false
}

export default function(state: any, action: any) {
  console.log(action)
  switch (action.type) {
    case AUTH_CHANGE:
      return { ...state, isAuth: action.payload }
      break

    default:
      break
  }
}

