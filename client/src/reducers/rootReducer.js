import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import exampleReducer from './example'
import snackbarReducer from './snackbarNotification'

/**
 * @namespace Reducers
 */

export default combineReducers({
  exampleState: exampleReducer,
  form: formReducer,
  snackbarNotification: snackbarReducer
})
