import listenerTypes from '../websockets/listenerTypes'
import actionTypes from '../actions/actionTypes'

/**
 * @function
 * @memberof Reducers
 */
const snackbarNotification = (state = '', action) => {
  switch (action.type) {
    case listenerTypes.SERVER_USERS:
      return `${action.type} was successful!`
    case listenerTypes.SERVER_ERROR:
      const {
        errorCode,
        description,
        requestedActionType
      } = action.payload
      return `${requestedActionType} failed. ${errorCode}: ${description}`
    case actionTypes.DISMISS_SNACKBAR:
      return ''
    default:
      return state
  }
}

export default snackbarNotification
