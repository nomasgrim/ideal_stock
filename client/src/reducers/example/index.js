import { combineReducers } from 'redux'

import timer from './timer'
import users from './users'

export default combineReducers({
  timer,
  users
})
