import actionTypes from '../actions/actionTypes'

/**
 * @function
 * @memberof Actions
 * @param {number} query - quantity of users to query for
 * @description Makes API call to request users
 * @return {thunk} a thunk for the CLIENT_GET_USERS action
 */
const getUsers = (query) => (dispatch, getState, { emit }) => {
  emit(actionTypes.CLIENT_GET_USERS, query)

  dispatch({
    type: actionTypes.CLIENT_GET_USERS
  })
}

export default getUsers
