import { combineReducers } from "redux"

import gb from './gb'
import todo from './todo'

const cb = combineReducers({ gb, todo })
export default cb
