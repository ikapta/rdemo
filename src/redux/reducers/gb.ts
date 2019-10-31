
// import { AUTH_CHANGE } from "../actionTypes"
import * as AT from '../actionTypes'

const initialState = {
  isAuth: false
}

export default function(state = initialState, action: any) {
  switch (action.type) {
    case AT.AUTH_CHANGE:
      return { ...state, isAuth: action.payload.isAuth }
      break

    default:
      return state
      break
  }
}


export const setAuthAction = (auth: Boolean) => {
  // xxx
  return {
    type: AT.AUTH_CHANGE,
    payload: { isAuth: auth }
  }
}
