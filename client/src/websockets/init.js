import io from 'socket.io-client'

import listenerTypes from './listenerTypes'

let uri
let host
if (process.env.NODE_ENV === 'production') {
  host = 'cryptic-mesa-74014.herokuapp.com'
  uri = `https://${host}`
} else {
  host = 'localhost'
  const port = process.env.PORT || 9000
  uri = `http://${host}:${port}`
}

console.log('process env', process.env)

const socket = io(uri)

/**
 * @function initWebsockets
 * @memberof Actions
 * @description creates socket listener with corresponding thunk for each messageType
 * @param {object} store - redux store
 */
const init = (store) => {
  // add listeners to socket messages so we can re-dispatch them as actions
  Object.keys(listenerTypes)
    .forEach(type =>
      socket.on(type, (payload) =>
        store.dispatch({ type, payload })
      )
    )
}

/**
 * @function emit
 * @memberof Actions
 * @description create emit function that we can inject into redux middleware
 * @param {string} type - message type of emitter
 * @param {*} payload - body of request
 */
const emit = (type, payload) => socket.emit(type, payload)

export {
  init,
  emit
}
