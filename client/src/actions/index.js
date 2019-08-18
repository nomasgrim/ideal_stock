import dismissSnackbar from './dismissSnackbar'
import getUsers from './getUsers'
import startTimer from './startTimer'

/**
 * @namespace Actions
 */

/**
 * A thunk is a function that is processed as an action but can also dispatch actions and access the store
 * to handle async processes.
 * @typedef {function} thunk
 * @param {function} dispatch - The dispatch function from the store to dispatch additional actions
 * @param {function} getState - A function to get the current state from the app store
 */

export {
  dismissSnackbar,
  getUsers,
  startTimer
}
