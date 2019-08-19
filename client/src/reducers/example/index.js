import { combineReducers } from 'redux'

import timer from './timer'
import users from './users'
import stock from './stock'

export default combineReducers({
  timer,
  users,
  stock
})
