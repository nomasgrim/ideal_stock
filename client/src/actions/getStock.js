import actionTypes from '../actions/actionTypes'

/**
 * @function
 * @memberof Actions
 * @param {string} query - symbol of stock to query for
 * @description Makes API call to request stock
 * @return {thunk} a thunk for the CLIENT_GET_STOCK action
 */
const getStock = (query) => (dispatch, getState, { emit }) => {
  emit(actionTypes.CLIENT_GET_STOCK, query)

  dispatch({
    type: actionTypes.CLIENT_GET_STOCK
  })
}

export default getStock
