import actionTypes from '../actions/actionTypes'

/**
 * @function
 * @memberof Actions
 * @description emits to the server to start the timer
 * @return {thunk} a thunk for the CLIENT_SUBSCRIBE_TO_TIMER action
 */
const startTimer = () => (dispatch, getState, { emit }) => {
  emit(actionTypes.CLIENT_SUBSCRIBE_TO_TIMER, 5000)

  dispatch({
    type: actionTypes.CLIENT_SUBSCRIBE_TO_TIMER,
    payload: 'Timer has been started'
  })
}

export default startTimer
