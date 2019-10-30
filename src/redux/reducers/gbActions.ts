import * as AT from '../actionTypes'


export const setAuth = (auth: Boolean) => ({
  type: AT.AUTH_CHANGE,
  payload: {
    isAuth: auth
  }
})
