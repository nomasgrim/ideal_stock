import actionTypes from '../../actions/actionTypes'
import listenerTypes from '../../websockets/listenerTypes'

/**
 * @function
 * @memberof Reducers
 * @param {object} state - timer string
 * @param {object} action - action to start the timer on server
 * @description timer reducer
 * @return {string} string with time
 */
const timer = (state = 'Timer not started', action) => {
  if (
    action.type === listenerTypes.SERVER_TIMER ||
    action.type === actionTypes.CLIENT_SUBSCRIBE_TO_TIMER
  ) {
    return action.payload
  }
  return state
}

export default timer
