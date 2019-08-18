import listenerTypes from '../../websockets/listenerTypes'

/**
 * @function
 * @memberof Reducers
 * @param {object} state - array with users
 * @param {object} action - action to request users
 * @description users reducer
 * @return {array} array of users
 */
const users = (state = [], action) => {
  if (action.type === listenerTypes.SERVER_USERS) {
    return action.payload
  }
  return state
}

export default users
