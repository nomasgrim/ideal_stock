import listenerTypes from '../../websockets/listenerTypes'

/**
 * @function
 * @memberof Reducers
 * @param {object} state - array with stock
 * @param {object} action - action to request stock
 * @description stock reducer
 * @return {array} array of stock
 */
const stock = (state = {}, action) => {
  if (action.type === listenerTypes.SERVER_STOCK) {
    return action.payload
  }
  return state
}

export default stock
