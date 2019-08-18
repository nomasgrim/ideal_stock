import actionTypes from '../actions/actionTypes'

/**
 * @function
 * @memberof Actions
 */
const dismissSnackbar = () => (dispatch) => {
  dispatch({
    type: actionTypes.DISMISS_SNACKBAR
  })
}

export default dismissSnackbar
